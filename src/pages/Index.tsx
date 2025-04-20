
import { ArrowRight, Globe, MessageSquare, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  // Languages supported by the platform
  const languages = [
    { name: "English", code: "en" },
    { name: "Dutch", code: "nl" },
    { name: "French", code: "fr" },
    { name: "Italian", code: "it" },
    { name: "Russian", code: "ru" },
    { name: "Armenian", code: "hy" },
    { name: "Bulgarian", code: "bg" },
  ];

  // Key features of the platform
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
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="border-b bg-background sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            <h1 className="text-xl font-bold">MediLingua</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:underline">Home</a>
            <a href="#" className="text-sm font-medium hover:underline">About</a>
            <a href="#" className="text-sm font-medium hover:underline">Find Doctors</a>
            <a href="#" className="text-sm font-medium hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Breaking Language Barriers in Healthcare</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Connect with healthcare providers who speak your language, improving understanding and health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button size="lg">
                  Find a Doctor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform offers multilingual support to connect patients with healthcare professionals.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {features.map((feature, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="mb-3">{feature.icon}</div>
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

        {/* Languages Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Supported Languages</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform currently supports these languages with more coming soon.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {languages.map((language) => (
                  <div 
                    key={language.code} 
                    className="px-4 py-2 border rounded-full bg-background hover:bg-secondary/30 transition-colors"
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
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

      {/* Footer */}
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span className="font-semibold">MediLingua</span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
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
