
// Deze declaratie zorgt dat TypeScript google.maps accepteert
declare namespace google.maps {
  class Map {
    constructor(mapDiv: Element, opts?: MapOptions);
    fitBounds(bounds: LatLngBounds): void;
    getCenter(): LatLng;
    setCenter(center: LatLng | LatLngLiteral): void;
  }

  class LatLngBounds {
    constructor();
    extend(latLng: LatLng): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
    lat(): number;
    lng(): number;
  }

  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    setPosition(latLng: LatLng | LatLngLiteral): void;
    addListener(event: string, handler: Function): void;
    getPosition(): LatLng | null;
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    open(map: Map, anchor?: Marker): void;
  }

  class Geocoder {
    constructor();
    geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
  }

  enum MapTypeId {
    ROADMAP,
    SATELLITE,
    HYBRID,
    TERRAIN
  }

  enum GeocoderStatus {
    ERROR,
    INVALID_REQUEST,
    OK,
    OVER_QUERY_LIMIT,
    REQUEST_DENIED,
    UNKNOWN_ERROR,
    ZERO_RESULTS
  }

  enum Animation {
    BOUNCE,
    DROP
  }

  enum SymbolPath {
    CIRCLE,
    FORWARD_CLOSED_ARROW,
    FORWARD_OPEN_ARROW,
    BACKWARD_CLOSED_ARROW,
    BACKWARD_OPEN_ARROW
  }

  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    styles?: any[];
    mapTypeId?: MapTypeId;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface MarkerOptions {
    position?: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    icon?: string | Icon | Symbol;
    animation?: Animation;
  }

  interface InfoWindowOptions {
    content?: string | Element;
    position?: LatLng | LatLngLiteral;
  }

  interface GeocoderRequest {
    address?: string;
    location?: LatLng | LatLngLiteral;
  }

  interface GeocoderResult {
    geometry: {
      location: LatLng;
    };
    formatted_address: string;
  }

  interface Icon {
    url?: string;
    scaledSize?: Size;
  }

  interface Size {
    width: number;
    height: number;
  }

  interface Symbol {
    path: SymbolPath | string;
    fillColor?: string;
    fillOpacity?: number;
    scale?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
  }
}

// Declaratie voor het window-object met google
interface Window {
  google?: {
    maps: typeof google.maps;
  };
}
