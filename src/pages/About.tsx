
const About = () => (
  <main className="min-h-screen pt-32 bg-white">
    <div className="container mx-auto max-w-2xl px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
        About MediLingua
      </h2>
      <p className="mb-6 text-muted-foreground text-lg">
        MediLingua is the multilingual healthcare platform making it easy to connect patients with doctors who speak their language. 
        <br /><br />
        With support for Dutch, English, French, Italian, Russian, Armenian, Bulgarian, and Turkish, we’re breaking barriers in European healthcare.
      </p>
      <div className="flex justify-center">
        <img src="/placeholder.svg" alt="Multilingual Doctors" className="w-40" />
      </div>
    </div>
  </main>
);

export default About;
