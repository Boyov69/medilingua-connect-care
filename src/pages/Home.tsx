
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const { language } = useLanguage();
  const homeTranslation = translations[language]?.home || {};
  
  // Safely access nested properties with fallbacks
  const availabilityFeature = homeTranslation?.availabilityFeature || {
    title: "Find a doctor accepting new patients",
    subtitle: "New feature on MediLingua",
    description: "In the area, it's often difficult to find a doctor who accepts new patients. MediLingua helps you not only find a doctor who speaks your language, but also shows you which doctors are available for new registrations.",
    cta: "Search available doctors"
  };
  
  const welcome = homeTranslation?.welcome || "Welcome to MediLingua";
  const tagline = homeTranslation?.tagline || "Connect with healthcare providers who speak your language.";
  const findDoctor = homeTranslation?.findDoctor || "Find your doctor";

  return (
    <main className="min-h-screen pt-32 bg-gradient-to-b from-rose-50 via-sky-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-3xl p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4 dark:from-blue-400 dark:to-purple-400">
          {welcome}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {tagline}
        </p>
        <img
          src="/placeholder.svg"
          alt="MediLingua Home"
          className="mx-auto w-48 md:w-64 mb-8"
        />
        <div className="mb-16">
          <Link
            to="/find-doctors"
            className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-7 py-3 rounded-full shadow-lg text-lg font-semibold transition-colors inline-block dark:from-blue-600 dark:to-purple-600"
          >
            {findDoctor}
          </Link>
        </div>
        
        {/* New section for availability feature */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-sky-50 to-teal-50 shadow-lg border-sky-100 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <CardHeader>
              <div className="mx-auto bg-sky-100 dark:bg-gray-600 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-2">
                <UserPlus className="w-6 h-6 text-sky-600 dark:text-sky-300" />
              </div>
              <CardTitle className="text-2xl font-bold text-sky-900 dark:text-sky-200">
                {availabilityFeature?.title}
              </CardTitle>
              <CardDescription className="text-sky-700 dark:text-sky-300">
                {availabilityFeature?.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-muted-foreground">
                {availabilityFeature?.description}
              </p>
              <Link 
                to="/find-doctors?availability=available" 
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-sky-500 to-teal-400 text-white rounded-full font-medium hover:from-sky-600 hover:to-teal-500 transition-all shadow-md dark:from-sky-600 dark:to-teal-500 dark:hover:from-sky-700 dark:hover:to-teal-600"
              >
                <Search className="mr-2 w-4 h-4" />
                {availabilityFeature?.cta}
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
