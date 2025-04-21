
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
}
