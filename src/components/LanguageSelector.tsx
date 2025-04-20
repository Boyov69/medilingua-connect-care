
import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
  return (
    <div className="flex items-center gap-2">
      <Languages className="h-5 w-5 text-primary" />
      <select
        className="bg-white/70 border rounded-full px-3 py-1 text-sm outline-none shadow focus:ring-2 focus:ring-primary"
        value={language}
        onChange={e => setLanguage(e.target.value as any)}
      >
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
