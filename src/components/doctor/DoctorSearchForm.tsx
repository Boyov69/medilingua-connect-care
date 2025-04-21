
import { User, MapPin, Search, Filter, Map } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { AvailabilityInfoModal } from "@/components/doctor/AvailabilityInfoModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Language } from "@/types/doctor";

interface LanguageOption {
  code: string;
  label: string;
}

interface SpecialtyOption {
  value: string;
}

interface AvailabilityOption {
  value: string;
  label: string;
  icon: any;
}

interface DoctorSearchFormProps {
  t: any;
  searchParams: any;
  setSearchParams: React.Dispatch<React.SetStateAction<any>>;
  handleSearch: () => void;
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  showMapView: boolean;
  setShowMapView: React.Dispatch<React.SetStateAction<boolean>>;
  LANGUAGES: LanguageOption[];
  SPECIALTIES: string[];
  AVAILABILITY_OPTIONS: AvailabilityOption[];
}

export const DoctorSearchForm = ({
  t,
  searchParams,
  setSearchParams,
  handleSearch,
  showFilters,
  setShowFilters,
  showMapView,
  setShowMapView,
  LANGUAGES,
  SPECIALTIES,
  AVAILABILITY_OPTIONS,
}: DoctorSearchFormProps) => {

  const toggleLanguage = (lang: Language) => {
    setSearchParams((prev: any) => ({
      ...prev,
      language: prev.language === lang ? '' : lang
    }));
  };

  const handleAvailabilityChange = (value: string) => {
    setSearchParams((prev: any) => ({
      ...prev,
      availabilityStatus: value
    }));
  };

  const handleOnlyAvailableToggle = (checked: boolean) => {
    setSearchParams((prev: any) => ({
      ...prev,
      onlyAvailable: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-4 mb-8 hover-scale animate-pulse-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.namePlaceholder}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow hover-scale"
            value={searchParams.name}
            onChange={(e) => setSearchParams((prev: any) => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.locationPlaceholder}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow hover-scale"
            value={searchParams.location}
            onChange={(e) => setSearchParams((prev: any) => ({ ...prev, location: e.target.value }))}
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.specialtyPlaceholder}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow hover-scale"
            list="specialties"
            value={searchParams.specialty}
            onChange={(e) => setSearchParams((prev: any) => ({ ...prev, specialty: e.target.value as any }))}
          />
          <datalist id="specialties">
            {SPECIALTIES.map((s) => <option key={s} value={s} />)}
          </datalist>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setShowFilters((prev: boolean) => !prev)}
            className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            <Filter className="h-4 w-4" /> 
            {showFilters ? "Hide filters" : "Show filters"}
          </button>
          <button
            type="button"
            onClick={() => setShowMapView((prev: boolean) => !prev)}
            className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            <Map className="h-4 w-4" /> 
            {showMapView ? "Hide map" : "Show map"}
          </button>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-colors hover-scale"
        >
          {t.search}
        </button>
      </div>
      
      {showFilters && (
        <div className={cn("transition-all duration-300", 
          showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="mt-4 pt-4 border-t border-b pb-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm font-medium">
                  <span>Toont alleen artsen die nieuwe patiënten accepteren</span>
                </label>
                <Switch 
                  checked={searchParams.onlyAvailable} 
                  onCheckedChange={handleOnlyAvailableToggle}
                />
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Beschikbaarheid:</span>
                    <AvailabilityInfoModal />
                  </div>
                  <Select 
                    value={searchParams.availabilityStatus || 'all'} 
                    onValueChange={handleAvailabilityChange}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Alle artsen" />
                    </SelectTrigger>
                    <SelectContent>
                      {AVAILABILITY_OPTIONS.map((option) => {
                        const Icon = option.icon;
                        return (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              <span>{option.label}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
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
        </div>
      )}
    </form>
  );
};

export default DoctorSearchForm;

