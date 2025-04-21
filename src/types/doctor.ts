
export type Specialty = 
  | "General Practitioner" 
  | "Pediatrician" 
  | "Cardiologist" 
  | "Dermatologist" 
  | "Neurologist" 
  | "Psychiatrist"
  | "Surgeon"
  | "Ophthalmologist";

export type Language = 
  | "en" // English
  | "nl" // Dutch
  | "fr" // French
  | "it" // Italian
  | "ru" // Russian
  | "hy" // Armenian
  | "bg" // Bulgarian
  | "tr"; // Turkish

export type AvailabilityStatus = 
  | "available" // Accepting new patients
  | "full" // Not accepting new patients
  | "limited"; // Limited availability

export interface Doctor {
  id: string;
  name: string;
  specialty: Specialty;
  languages: Language[];
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  availability: string;
  photo?: string;
  availabilityStatus: AvailabilityStatus;
  availableSlots?: number;
  tempUnavailableUntil?: string;
  availabilityNotes?: string;
}
