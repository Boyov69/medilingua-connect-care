
import { useLanguage } from "@/context/LanguageContext";

type LanguageTheme = {
  bgClass: string;
  fgClass: string;
  fontClass: string;
};

const langThemes: Record<string, LanguageTheme> = {
  en: {
    bgClass: "bg-gradient-to-br from-sky-50 to-indigo-50",
    fgClass: "text-primary",
    fontClass: "font-sans",
  },
  nl: {
    bgClass: "bg-gradient-to-br from-orange-100 to-yellow-50",
    fgClass: "text-orange-800",
    fontClass: "font-sans",
  },
  fr: {
    bgClass: "bg-gradient-to-br from-blue-50 to-rose-50",
    fgClass: "text-blue-900",
    fontClass: "font-serif",
  },
  it: {
    bgClass: "bg-gradient-to-br from-green-50 to-red-50",
    fgClass: "text-green-900",
    fontClass: "font-sans",
  },
  ru: {
    bgClass: "bg-gradient-to-br from-gray-100 to-blue-50",
    fgClass: "text-gray-900",
    fontClass: "font-cyrillic",
  },
  hy: {
    bgClass: "bg-gradient-to-br from-yellow-50 to-pink-50",
    fgClass: "text-pink-900",
    fontClass: "font-armenian",
  },
  bg: {
    bgClass: "bg-gradient-to-br from-green-50 to-yellow-100",
    fgClass: "text-green-900",
    fontClass: "font-cyrillic",
  },
  tr: {
    bgClass: "bg-gradient-to-br from-red-50 to-yellow-50",
    fgClass: "text-red-900",
    fontClass: "font-sans",
  },
};

export function useLanguageTheme() {
  const { language } = useLanguage();
  return langThemes[language] || langThemes.en;
}
