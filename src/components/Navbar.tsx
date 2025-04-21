import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import DarkModeToggle from "./DarkModeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const navLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "findDoctors", path: "/find-doctors" },
  { name: "contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const { language } = useLanguage();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96vw] max-w-4xl">
      <div className="backdrop-blur-xl bg-white/80 rounded-full border shadow-lg flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            MediLingua
          </span>
        </div>
        <nav className="flex items-center gap-3">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-primary to-indigo-400 text-white shadow"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              {translations[language].navbar[link.name]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
