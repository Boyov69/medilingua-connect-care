
import { useState } from "react";
import { Search, MapPin, User, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { useSearchDoctors } from "@/hooks/useSearchDoctors";
import DoctorCard from "@/components/doctor/DoctorCard";
import { Language } from "@/types/doctor";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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
  
  const [showFilters, setShowFilters] = useState(false);
  
  const {
    doctors,
    isLoading,
    isError,
    searchParams,
    setSearchParams,
    handleSearch
  } = useSearchDoctors();

  const toggleLanguage = (lang: Language) => {
    setSearchParams(prev => ({
      ...prev,
      language: prev.language === lang ? '' : lang
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <main className="min-h-screen pt-32 pb-12 bg-gradient-to-br from-sky-50 to-indigo-50">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent text-center">
          {t.title}
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t.subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.namePlaceholder}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={searchParams.name}
                onChange={(e) => setSearchParams(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.locationPlaceholder}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={searchParams.location}
                onChange={(e) => setSearchParams(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.specialtyPlaceholder}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                list="specialties"
                value={searchParams.specialty}
                onChange={(e) => setSearchParams(prev => ({ ...prev, specialty: e.target.value as any }))}
              />
              <datalist id="specialties">
                {SPECIALTIES.map((s) => <option key={s} value={s} />)}
              </datalist>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setShowFilters(prev => !prev)}
              className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              <Filter className="h-4 w-4" /> 
              {showFilters ? "Hide filters" : "Show filters"}
            </button>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-colors"
            >
              {t.search}
            </button>
          </div>
          
          {showFilters && (
            <div className={cn("transition-all duration-300", 
              showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            )}>
              <div className="mt-4 pt-4 border-t">
                <span className="font-medium text-sm text-muted-foreground mb-2 block">{t.language}:</span>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      type="button"
                      key={l.code}
                      className={cn(
                        "px-4 py-1.5 border rounded-full font-medium text-sm transition",
                        searchParams.language === l.code
                          ? "bg-primary text-white border-primary"
                          : "bg-gradient-to-r from-white to-primary/10 border-gray-200 text-primary hover:bg-primary/20"
                      )}
                      onClick={() => toggleLanguage(l.code as Language)}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </form>
        
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Searching for doctors...</p>
            </div>
          ) : doctors.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground">{doctors.length} doctors found</p>
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </>
          ) : (
            <div className="text-center py-12 bg-white/80 rounded-lg shadow">
              {isError ? (
                <p className="text-red-500">Error searching for doctors. Please try again.</p>
              ) : (
                <>
                  <p className="text-muted-foreground">
                    {searchParams.name || searchParams.location || searchParams.specialty || searchParams.language
                      ? "No doctors found matching your criteria. Try adjusting your filters."
                      : t.searchResults}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default FindDoctors;
