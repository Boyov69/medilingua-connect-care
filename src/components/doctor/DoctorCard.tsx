
import { Doctor } from "@/types/doctor";
import { Star, MapPin, Clock, Languages, HeartPulse, Info, Check, X, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [contactOpen, setContactOpen] = useState(false);
  
  const urgent = doctor.rating < 3;
  const accentClass = urgent
    ? "border-red-400 animate-pulse-border"
    : "border-primary/10";

  const getAvailabilityBadge = () => {
    switch (doctor.availabilityStatus) {
      case "available":
        return (
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 flex items-center gap-1">
              <Check className="h-3 w-3" />
              Accepteert nieuwe patiënten
            </Badge>
            <AvailabilityTooltip doctor={doctor} />
          </div>
        );
      case "limited":
        return (
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300 flex items-center gap-1">
              <HelpCircle className="h-3 w-3" />
              Beperkte beschikbaarheid
            </Badge>
            <AvailabilityTooltip doctor={doctor} />
          </div>
        );
      case "full":
        return (
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300 flex items-center gap-1">
              <X className="h-3 w-3" />
              Praktijk vol
            </Badge>
            <AvailabilityTooltip doctor={doctor} />
          </div>
        );
      default:
        return null;
    }
  };

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
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{doctor.name}</h3>
              <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
            </div>
            {getAvailabilityBadge()}
          </div>
          
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
              <Languages className="h-4 w-4 text-primary mr-2" /> 
              <span>{getLanguageNames(doctor.languages, language)}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 text-primary mr-2" />
              <span>{doctor.availability}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <Dialog open={contactOpen} onOpenChange={setContactOpen}>
              <DialogTrigger asChild>
                <Button className="px-4 py-2 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full text-sm font-medium hover:from-primary/90 hover:to-indigo-600/90 transition-colors hover-scale">
                  Contact opnemen
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact opnemen met {doctor.name}</DialogTitle>
                  <DialogDescription>
                    Vul onderstaande gegevens in om contact op te nemen met deze arts.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Naam</label>
                      <input id="name" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                      <input id="email" type="email" className="w-full p-2 border rounded" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Bericht</label>
                    <textarea id="message" className="w-full p-2 border rounded h-24" placeholder="Beschrijf kort waarom u contact wilt opnemen"></textarea>
                  </div>
                  <Button className="w-full">Versturen</Button>
                </div>
              </DialogContent>
            </Dialog>
            <div className="flex items-center gap-1 mt-1 text-muted-foreground text-xs">
              <Info className="h-4 w-4" /> <span>Veilige en gecertificeerde zorgervaring</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const AvailabilityTooltip = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2 p-1">
          {doctor.availabilityStatus === "available" && doctor.availableSlots && (
            <p className="text-sm font-medium">Nog {doctor.availableSlots} plekken beschikbaar</p>
          )}
          {doctor.availabilityStatus === "full" && doctor.tempUnavailableUntil && (
            <p className="text-sm font-medium">Patiëntenstop tot {new Date(doctor.tempUnavailableUntil).toLocaleDateString()}</p>
          )}
          {doctor.availabilityNotes && (
            <p className="text-xs">{doctor.availabilityNotes}</p>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default DoctorCard;
