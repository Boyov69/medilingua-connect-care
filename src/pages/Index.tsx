import { ArrowRight, Globe, MessageSquare, Search, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const languages = [
    { name: "English", code: "en" },
    { name: "Dutch", code: "nl" },
    { name: "French", code: "fr" },
    { name: "Italian", code: "it" },
    { name: "Russian", code: "ru" },
    { name: "Armenian", code: "hy" },
    { name: "Bulgarian", code: "bg" },
    { name: "Turkish", code: "tr" },
  ];

  const specialties = [
    "General Practitioner",
    "Pediatrician",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Psychiatrist",
  ];

  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Find Doctors by Language",
      description: "Search for healthcare providers who speak your native language.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Easy Appointment Booking",
      description: "Schedule appointments with preferred healthcare professionals online.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Secure Messaging",
      description: "Communicate directly with healthcare providers in your language.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-rose-50 to-sky-50">
      <header className="fixed w-full top-0 z-50">
        <div className="backdrop-blur-md bg-white/80 border-b shadow-sm">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                MediLingua
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Find Doctors</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">Login</Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mt-16">
        <section className="py-20 md:py-28 bg-gradient-to-br from-rose-50 via-sky-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                Find Healthcare in Your Language
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Connect with healthcare providers who speak your language, improving understanding and health outcomes.
              </p>
              
              <div className="w-full max-w-3xl mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Specialty or doctor name"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90">
                    Find Doctors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose MediLingua?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform offers multilingual support to connect patients with healthcare professionals.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {features.map((feature, index) => (
                  <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-gray-50/50">
                    <CardHeader className="pb-2">
                      <div className="mb-3 text-primary">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Available Languages
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Healthcare communication in your preferred language.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {languages.map((language) => (
                  <div 
                    key={language.code}
                    className="px-6 py-3 bg-white/80 backdrop-blur-sm border rounded-full hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Medical Specialties
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find specialists in various medical fields.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {specialties.map((specialty, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto py-6 px-4 flex flex-col items-center justify-center text-center hover:bg-primary/5"
                  >
                    {specialty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Join our platform today to find healthcare providers who speak your language.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button size="lg">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 md:py-12 bg-white">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="font-semibold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              MediLingua
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 MediLingua. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
