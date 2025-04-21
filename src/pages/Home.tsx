
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <main className="min-h-screen pt-32 bg-gradient-to-b from-rose-50 via-sky-50 to-indigo-50">
      <div className="container mx-auto max-w-3xl p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
          {t.welcome}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t.tagline}
          <br />
          {/* Kept the same language list, you can further translatable if you expand translations */}
        </p>
        <img
          src="/placeholder.svg"
          alt="MediLingua Home"
          className="mx-auto w-48 md:w-64 mb-8"
        />
        <div className="mb-16">
          <Link
            to="/find-doctors"
            className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-7 py-3 rounded-full shadow-lg text-lg font-semibold transition-colors inline-block"
          >
            {t.findDoctor}
          </Link>
        </div>
        
        {/* New section for availability feature */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-sky-50 to-teal-50 shadow-lg border-sky-100">
            <CardHeader>
              <div className="mx-auto bg-sky-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-2">
                <UserPlus className="w-6 h-6 text-sky-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-sky-900">
                Vind een huisarts die nieuwe patiënten accepteert
              </CardTitle>
              <CardDescription className="text-sky-700">
                Nieuwe functionaliteit op MediLingua
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-muted-foreground">
                In Hasselt en omgeving is het vaak moeilijk om een huisarts te vinden die nieuwe patiënten accepteert. 
                MediLingua helpt u niet alleen een arts te vinden die uw taal spreekt, maar toont u ook welke 
                artsen beschikbaar zijn voor nieuwe registraties.
              </p>
              <Link 
                to="/find-doctors?availability=available" 
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-sky-500 to-teal-400 text-white rounded-full font-medium hover:from-sky-600 hover:to-teal-500 transition-all shadow-md"
              >
                <Search className="mr-2 w-4 h-4" />
                Zoek beschikbare huisartsen
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
