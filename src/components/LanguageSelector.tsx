
import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { translations } from "@/i18n/translations";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "nl", label: "Dutch" },
  { code: "fr", label: "French" },
  { code: "it", label: "Italiano" },
  { code: "ru", label: "Russian" },
  { code: "hy", label: "Armenian" },
  { code: "bg", label: "Bulgarian" },
  { code: "tr", label: "Türkçe" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  
  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 animate-fade-in group cursor-pointer">
            <Languages className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-110" />
            <select
              className="bg-white/70 border rounded-full px-3 py-1 text-sm outline-none shadow focus:ring-2 focus:ring-primary transition-all duration-200"
              value={language}
              onChange={e => setLanguage(e.target.value as any)}
              aria-label={t.languageSelector?.ariaLabel || "Select language"}
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs text-center">
          {t.languageSelector?.tooltip || "Select your preferred language. This changes the website's language."}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
