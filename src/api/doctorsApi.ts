
import { Doctor, Language, Specialty, AvailabilityStatus } from "@/types/doctor";

// Mock data voor artsen
const mockDoctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Anna Jansen",
    specialty: "General Practitioner",
    languages: ["nl", "en", "fr"],
    location: "Amsterdam",
    address: "Herengracht 100, 1017 BS Amsterdam",
    rating: 4.8,
    reviewCount: 243,
    availability: "Mon, Wed, Fri",
    photo: "/placeholder.svg",
    availabilityStatus: "available",
    availableSlots: 5,
    availabilityNotes: "Bij voorkeur patiënten uit Amsterdam-Centrum"
  },
  {
    id: "d2",
    name: "Dr. Pietro Rossi",
    specialty: "Cardiologist",
    languages: ["it", "en"],
    location: "Rotterdam",
    address: "Westersingel 70, 3015 LB Rotterdam",
    rating: 4.7,
    reviewCount: 187,
    availability: "Tue, Thu",
    photo: "/placeholder.svg",
    availabilityStatus: "full",
    tempUnavailableUntil: "2024-08-01",
    availabilityNotes: "Patiëntenstop tot augustus 2024"
  },
  {
    id: "d3",
    name: "Dr. Maria Petrov",
    specialty: "Pediatrician",
    languages: ["ru", "en", "nl"],
    location: "Utrecht",
    address: "Oudegracht 35, 3511 AC Utrecht",
    rating: 4.9,
    reviewCount: 312,
    availability: "Mon-Fri",
    photo: "/placeholder.svg",
    availabilityStatus: "limited",
    availableSlots: 2,
    availabilityNotes: "Beperkte beschikbaarheid voor nieuwe patiënten"
  },
  {
    id: "d4",
    name: "Dr. Luc Dubois",
    specialty: "Dermatologist",
    languages: ["fr", "en", "nl"],
    location: "Amsterdam",
    address: "Keizersgracht 209, 1016 DT Amsterdam",
    rating: 4.6,
    reviewCount: 168,
    availability: "Wed, Fri",
    photo: "/placeholder.svg",
    availabilityStatus: "full",
    availabilityNotes: "Momenteel geen nieuwe patiënten"
  },
  {
    id: "d5",
    name: "Dr. Ceylan Yılmaz",
    specialty: "Neurologist",
    languages: ["tr", "en"],
    location: "Rotterdam",
    address: "Coolsingel 120, 3011 AG Rotterdam",
    rating: 4.8,
    reviewCount: 205,
    availability: "Mon, Thu",
    photo: "/placeholder.svg",
    availabilityStatus: "available",
    availableSlots: 8,
    availabilityNotes: "Online consultaties ook beschikbaar"
  },
  {
    id: "d6",
    name: "Dr. Georgi Ivanov",
    specialty: "Psychiatrist",
    languages: ["bg", "en", "ru"],
    location: "The Hague",
    address: "Lange Voorhout 36, 2514 EE Den Haag",
    rating: 4.5,
    reviewCount: 142,
    availability: "Tue, Wed, Fri",
    photo: "/placeholder.svg",
    availabilityStatus: "available",
    availableSlots: 3,
    availabilityNotes: "Prioriteert dringende gevallen"
  },
  {
    id: "d7",
    name: "Dr. Hayk Sargsyan",
    specialty: "Ophthalmologist",
    languages: ["hy", "en", "ru"],
    location: "Eindhoven",
    address: "Stratumseind 83, 5611 ER Eindhoven",
    rating: 4.7,
    reviewCount: 159,
    availability: "Mon-Thu",
    photo: "/placeholder.svg",
    availabilityStatus: "limited",
    availableSlots: 1,
    availabilityNotes: "Bijna vol, nog beperkte plekken"
  },
  {
    id: "d8",
    name: "Dr. Emma van der Berg",
    specialty: "Surgeon",
    languages: ["nl", "en", "fr"],
    location: "Amsterdam",
    address: "Prinsengracht 165, 1015 DS Amsterdam",
    rating: 4.9,
    reviewCount: 276,
    availability: "Mon, Wed, Fri",
    photo: "/placeholder.svg",
    availabilityStatus: "full",
    tempUnavailableUntil: "2024-07-15",
    availabilityNotes: "Tijdelijke patiëntenstop"
  }
];

// Simuleer een API aanroep met een vertraging
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface SearchOptions {
  name?: string;
  location?: string;
  specialty?: Specialty | '';
  language?: Language | '';
  availabilityStatus?: AvailabilityStatus | 'all' | '';
  onlyAvailable?: boolean;
}

export const searchDoctors = async (options: SearchOptions): Promise<Doctor[]> => {
  // Simuleer netwerk vertraging
  await simulateDelay(800);
  
  let results = [...mockDoctors];
  
  // Filter op naam
  if (options.name) {
    const nameLower = options.name.toLowerCase();
    results = results.filter(doc => 
      doc.name.toLowerCase().includes(nameLower)
    );
  }
  
  // Filter op locatie
  if (options.location) {
    const locationLower = options.location.toLowerCase();
    results = results.filter(doc => 
      doc.location.toLowerCase().includes(locationLower) || 
      doc.address.toLowerCase().includes(locationLower)
    );
  }
  
  // Filter op specialisatie
  if (options.specialty) {
    results = results.filter(doc => doc.specialty === options.specialty);
  }
  
  // Filter op taal
  if (options.language) {
    results = results.filter(doc => doc.languages.includes(options.language as Language));
  }
  
  // Filter op beschikbaarheidsstatus
  if (options.availabilityStatus && options.availabilityStatus !== 'all') {
    results = results.filter(doc => doc.availabilityStatus === options.availabilityStatus);
  }
  
  // Filter alleen beschikbare artsen (toggle)
  if (options.onlyAvailable) {
    results = results.filter(doc => doc.availabilityStatus === 'available');
  }
  
  return results;
};
