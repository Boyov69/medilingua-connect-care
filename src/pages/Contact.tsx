
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { useLanguageTheme } from "@/hooks/useLanguageTheme";
import { HeartPulse, Info } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const { bgClass, fgClass, fontClass } = useLanguageTheme();

  return (
    <main className={`min-h-screen pt-32 ${bgClass} ${fontClass} transition-colors duration-500`}>
      <div className="container mx-auto max-w-xl px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <HeartPulse className="text-primary animate-pulse" />
          <span className="text-lg font-semibold text-primary">{t.title}</span>
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent text-center ${fgClass}`}>
          {t.title}
        </h2>
        <p className="mb-6 text-muted-foreground text-center">
          {t.body}
        </p>
        <form className="glass rounded-xl shadow-lg p-8 flex flex-col gap-4 hover-scale animate-pulse-border">
          <input
            type="text"
            placeholder={t.name}
            className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow hover-scale"
            required
          />
          <input
            type="email"
            placeholder={t.email}
            className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow hover-scale"
            required
          />
          <textarea
            placeholder={t.message}
            rows={4}
            className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow hover-scale"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-colors hover-scale"
          >
            {t.send}
          </button>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>{t.info || "Je gegevens zijn veilig bij ons."}</span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;

