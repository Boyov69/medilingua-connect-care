
import DoctorMap from "@/components/doctor/DoctorMap";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useApiKey } from "@/context/ApiKeyContext";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

interface DoctorMapSectionProps {
  doctors: any[];
  searchParams: any;
}

const DoctorMapSection = ({ doctors, searchParams }: DoctorMapSectionProps) => {
  const { googleMapsApiKey, setGoogleMapsApiKey } = useApiKey();
  const { toast } = useToast();
  const [apiKeyInput, setApiKeyInput] = useState("");
  const { language } = useLanguage();
  
  const t = translations[language]?.findDoctors || {};
  const mapTranslations = t?.map || {};
  
  const saveApiKey = () => {
    if (!apiKeyInput.trim()) {
      toast({
        title: language === "nl" ? "API Sleutel Ontbreekt" : "API Key Missing",
        description: language === "nl" ? "Voer een geldige Google Maps API sleutel in" : "Enter a valid Google Maps API key",
        variant: "destructive"
      });
      return;
    }
    setGoogleMapsApiKey(apiKeyInput);
    toast({
      title: language === "nl" ? "API Sleutel Opgeslagen" : "API Key Saved",
      description: language === "nl" ? "De Google Maps API sleutel is opgeslagen" : "The Google Maps API key has been saved"
    });
  };

  return (
    <div className="mb-8 relative">
      {!googleMapsApiKey && (
        <div className="mb-4 p-4 bg-white/80 backdrop-blur-lg rounded-lg shadow flex flex-col sm:flex-row gap-3 items-center">
          <Input
            type="text"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder={language === "nl" ? "Voer Google Maps API sleutel in" : "Enter Google Maps API key"}
            className="flex-grow"
          />
          <Button onClick={saveApiKey} className="whitespace-nowrap">
            {language === "nl" ? "API Sleutel Opslaan" : "Save API Key"}
          </Button>
          <a
            href="https://console.cloud.google.com/apis/credentials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            {language === "nl" ? "Geen sleutel? Maak er een aan" : "No key? Create one"}
          </a>
        </div>
      )}
      <DoctorMap
        doctors={doctors}
        apiKey={googleMapsApiKey}
        center={searchParams.location ? undefined : { lat: 52.370216, lng: 4.895168 }}
      />
    </div>
  );
};

export default DoctorMapSection;
