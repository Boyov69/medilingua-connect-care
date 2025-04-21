
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export const AvailabilityInfoModal = () => {
  const { language } = useLanguage();
  
  // Safely access nested properties with fallbacks
  const findDoctorsTranslation = translations[language]?.findDoctors || {};
  const availabilityTranslation = findDoctorsTranslation?.availability || {};
  const modalContent = availabilityTranslation?.modal || {};
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs flex items-center gap-1 px-0 py-0 h-auto">
          <Info className="h-3 w-3" /> 
          <span>{availabilityTranslation?.moreInfo || "More information"}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{modalContent?.title || "About Doctor Availability"}</DialogTitle>
          <DialogDescription>
            {modalContent?.subtitle || "Information about the availability system"}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            {modalContent?.description || "Many medical practices have a patient stop due to high workload. MediLingua works with medical associations to provide real-time information about which doctors still have room for new patients. This information is regularly updated by the doctors themselves."}
          </p>
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md">
            <h4 className="font-medium text-amber-800">{modalContent?.warning || "Note"}</h4>
            <p className="text-sm text-amber-700">
              {modalContent?.warningText || "Availability can change quickly. We recommend contacting the practice directly to confirm current status."}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvailabilityInfoModal;
