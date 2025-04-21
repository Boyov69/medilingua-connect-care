
import DoctorMap from "@/components/doctor/DoctorMap";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useApiKey } from "@/context/ApiKeyContext";
import { useState } from "react";

interface DoctorMapSectionProps {
  doctors: any[];
  searchParams: any;
}

const DoctorMapSection = ({ doctors, searchParams }: DoctorMapSectionProps) => {
  const { googleMapsApiKey, setGoogleMapsApiKey } = useApiKey();
  const { toast } = useToast();
  const [apiKeyInput, setApiKeyInput] = useState("");

  const saveApiKey = () => {
    if (!apiKeyInput.trim()) {
      toast({
        title: "API Sleutel Ontbreekt",
        description: "Voer een geldige Google Maps API sleutel in",
        variant: "destructive"
      });
      return;
    }
    setGoogleMapsApiKey(apiKeyInput);
    toast({
      title: "API Sleutel Opgeslagen",
      description: "De Google Maps API sleutel is opgeslagen"
    });
  };

  return (
    <div className="mb-8 relative">
      {!googleMapsApiKey && (
        <div className="mb-4 p-4 bg-white/80 backdrop-blur-lg rounded-lg shadow flex flex-col sm:flex-row gap-3 items-center">
          <Input
            type="text"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="Voer Google Maps API sleutel in"
            className="flex-grow"
          />
          <Button onClick={saveApiKey} className="whitespace-nowrap">
            API Sleutel Opslaan
          </Button>
          <a
            href="https://console.cloud.google.com/apis/credentials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            Geen sleutel? Maak er een aan
          </a>
        </div>
      )}
      <DoctorMap
        doctors={doctors}
        apiKey={googleMapsApiKey}
        center={searchParams.location ? undefined : { lat: 52.370216, lng: 4.895168 }}
      />
    </div>
  );
};

export default DoctorMapSection;
