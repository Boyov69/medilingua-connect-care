import { Doctor } from "@/types/doctor";
import { Star, MapPin, Clock, Languages, HeartPulse, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const getLanguageNames = (languages: string[], currentLanguage: string) => {
  const langMap: Record<string, Record<string, string>> = {
    en: {
      en: "English",
      nl: "Dutch",
      fr: "French",
      it: "Italian",
      ru: "Russian",
      hy: "Armenian",
      bg: "Bulgarian",
      tr: "Turkish"
    },
    nl: {
      en: "Engels",
      nl: "Nederlands",
      fr: "Frans",
      it: "Italiaans",
      ru: "Russisch",
      hy: "Armeens",
      bg: "Bulgaars",
      tr: "Turks"
    },
  };

  const map = langMap[currentLanguage] || langMap.en;
  return languages.map(lang => map[lang] || lang).join(", ");
};

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const { language } = useLanguage();
  
  const urgent = doctor.rating < 3;
  const accentClass = urgent
    ? "border-red-400 animate-pulse-border"
    : "border-primary/10";

  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow duration-200 glass ${accentClass}`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 p-4 flex flex-col items-center justify-center">
          <div className="w-full aspect-square bg-primary/10 rounded-full overflow-hidden mb-3">
            <img
              src={doctor.photo || "/placeholder.svg"}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>
          {urgent && (
            <div className="flex items-center gap-1 text-xs text-red-500 mt-2">
              <HeartPulse className="h-4 w-4 animate-pulse" /><span>Urgent</span>
            </div>
          )}
        </div>
        <div className="md:w-3/4 p-4">
          <h3 className="text-lg font-bold">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          
          <div className="flex items-center mt-2 text-sm">
            <Star className="h-4 w-4 text-amber-500 mr-1" />
            <span>{doctor.rating}</span>
            <span className="text-muted-foreground ml-1">({doctor.reviewCount})</span>
          </div>
          
          <div className="flex flex-col gap-1 mt-3">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-primary mr-2" />
              <span>{doctor.location} - {doctor.address}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-primary mr-2" /> 
              <span>{getLanguageNames(doctor.languages, language)}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 text-primary mr-2" />
              <span>{doctor.availability}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full text-sm font-medium hover:from-primary/90 hover:to-indigo-600/90 transition-colors hover-scale">
              Book Appointment
            </button>
            <div className="flex items-center gap-1 mt-1 text-muted-foreground text-xs">
              <Info className="h-4 w-4" /> <span>Veilige en gecertificeerde zorgervaring</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
