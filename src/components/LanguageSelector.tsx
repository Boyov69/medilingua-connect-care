
import { Languages } from "lucide-react";

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
  // UI only; Does not change actual language (placeholder for future i18n)
  return (
    <div className="flex items-center gap-2">
      <Languages className="h-5 w-5 text-primary" />
      <select className="bg-white/70 border rounded-full px-3 py-1 text-sm outline-none shadow focus:ring-2 focus:ring-primary">
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.label}</option>
        ))}
      </select>
    </div>
  );
}
