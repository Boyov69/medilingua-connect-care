
import { useEffect, useRef, useState } from "react";
import { Doctor } from "@/types/doctor";
import { MapPin } from "lucide-react";

interface DoctorMapProps {
  doctors: Doctor[];
  center?: { lat: number; lng: number };
  apiKey: string;
}

const DoctorMap = ({ doctors, center, apiKey }: DoctorMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Laad de Google Maps script
  useEffect(() => {
    if (!apiKey) return;
    
    // Voorkom meerdere laadoperaties
    if (window.google?.maps || document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup is optioneel, maar kan handig zijn in sommige gevallen
      const scriptElement = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (scriptElement) {
        // scriptElement.remove(); // Uncomment om script te verwijderen bij unmount
      }
    };
  }, [apiKey]);

  // Initialiseer de kaart wanneer de script geladen is
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || map) return;

    const defaultCenter = center || { lat: 52.370216, lng: 4.895168 }; // Default Amsterdam
    
    const newMap = new google.maps.Map(mapRef.current, {
      center: defaultCenter,
      zoom: 10,
      styles: [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ visibility: "simplified" }]
        },
        {
          featureType: "poi",
          stylers: [{ visibility: "simplified" }]
        }
      ]
    });

    setMap(newMap);
  }, [mapLoaded, center, map]);

  // Update markers wanneer artsen of kaart veranderen
  useEffect(() => {
    if (!map || !doctors.length) return;
    
    // Verwijder bestaande markers
    markers.forEach(marker => marker.setMap(null));
    
    // Maak nieuwe markers
    const newMarkers = doctors.map(doctor => {
      // Gebruik geocoding voor de locatie (in productie: bewaar coördinaten voor optimale prestaties)
      const geocoder = new google.maps.Geocoder();
      
      const marker = new google.maps.Marker({
        map,
        animation: google.maps.Animation.DROP,
        title: doctor.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: doctor.rating < 3 ? "#ea384c" : "#9b87f5",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#ffffff",
          scale: 8,
        }
      });
      
      // Info window met doktersinformatie
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="max-width: 200px;">
            <h3 style="font-weight: bold;">${doctor.name}</h3>
            <p>${doctor.specialty}</p>
            <p>⭐ ${doctor.rating} (${doctor.reviewCount})</p>
            <p>${doctor.address}</p>
          </div>
        `
      });
      
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
      
      // Gebruik geocoding om coördinaten te vinden op basis van adres
      geocoder.geocode({ address: `${doctor.address}, ${doctor.location}` }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results?.[0]?.geometry?.location) {
          marker.setPosition(results[0].geometry.location);
        } else {
          console.warn(`Geocoding mislukt voor: ${doctor.address}`, status);
          // Fallback: gebruik een willekeurige positie rond het centrum
          const lat = map.getCenter()?.lat() || 52.37 + (Math.random() - 0.5) * 0.05;
          const lng = map.getCenter()?.lng() || 4.89 + (Math.random() - 0.5) * 0.05;
          marker.setPosition(new google.maps.LatLng(lat, lng));
        }
      });
      
      return marker;
    });
    
    setMarkers(newMarkers);
    
    // Centreer de kaart zodat alle markers zichtbaar zijn
    if (newMarkers.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      setTimeout(() => {
        newMarkers.forEach(marker => {
          const position = marker.getPosition();
          if (position) bounds.extend(position);
        });
        map.fitBounds(bounds);
      }, 1000); // Vertraging om markers tijd te geven voor geocoding
    }
  }, [doctors, map]);

  if (!apiKey) {
    return (
      <div className="h-[400px] flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md border shadow-inner">
        <div className="flex flex-col items-center text-muted-foreground gap-2">
          <MapPin className="h-8 w-8 text-muted-foreground/50" />
          <p>Google Maps API sleutel vereist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100 shadow-inner">
      <div ref={mapRef} className="absolute inset-0" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};

export default DoctorMap;
