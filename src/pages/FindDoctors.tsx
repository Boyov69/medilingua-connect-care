
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { useSearchDoctors } from "@/hooks/useSearchDoctors";
import { Language, AvailabilityStatus } from "@/types/doctor";
import { useIsMobile } from "@/hooks/use-mobile";
import { Users, UserPlus, UserX } from "lucide-react";
import DoctorSearchForm from "@/components/doctor/DoctorSearchForm";
import DoctorMapSection from "@/components/doctor/DoctorMapSection";
import DoctorsList from "@/components/doctor/DoctorsList";
import { useToast } from "@/hooks/use-toast";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "nl", label: "Dutch" },
  { code: "fr", label: "French" },
  { code: "it", label: "Italian" },
  { code: "ru", label: "Russian" },
  { code: "hy", label: "Armenian" },
  { code: "bg", label: "Bulgarian" },
  { code: "tr", label: "Turkish" }
];

const SPECIALTIES = [
  "General Practitioner", "Pediatrician", "Cardiologist", "Dermatologist", 
  "Neurologist", "Psychiatrist", "Surgeon", "Ophthalmologist"
];

const FindDoctors = () => {
  const { language } = useLanguage();
  const t = translations[language].findDoctors;
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [showFilters, setShowFilters] = useState(false);
  const [showMapView, setShowMapView] = useState(false);

  const {
    doctors,
    isLoading,
    isError,
    searchParams,
    setSearchParams,
    handleSearch
  } = useSearchDoctors();

  const AVAILABILITY_OPTIONS = [
    { value: "all", label: t.availability?.all || "All doctors", icon: Users },
    { value: "available", label: t.availability?.available || "Accepting new patients", icon: UserPlus },
    { value: "full", label: t.availability?.full || "Currently full", icon: UserX }
  ];

  return (
    <main className="min-h-screen pt-32 pb-12 bg-gradient-to-br from-sky-50 to-indigo-50">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent text-center">
          {t.title}
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t.subtitle}
        </p>
        <DoctorSearchForm
          t={t}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleSearch={handleSearch}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          showMapView={showMapView}
          setShowMapView={setShowMapView}
          LANGUAGES={LANGUAGES}
          SPECIALTIES={SPECIALTIES}
          AVAILABILITY_OPTIONS={AVAILABILITY_OPTIONS}
        />
        {showMapView && (
          <DoctorMapSection
            doctors={doctors}
            searchParams={searchParams}
          />
        )}
        <DoctorsList
          isLoading={isLoading}
          doctors={doctors}
          isError={isError}
          searchParams={searchParams}
          t={t}
        />
      </div>
    </main>
  );
};

export default FindDoctors;
