
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <main className="min-h-screen pt-32 bg-white">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
          {t.title}
        </h2>
        <p className="mb-6 text-muted-foreground text-lg" style={{ whiteSpace: "pre-line" }}>
          {t.body}
        </p>
        <div className="flex justify-center">
          <img src="/placeholder.svg" alt="Multilingual Doctors" className="w-40" />
        </div>
      </div>
    </main>
  );
};

export default About;
