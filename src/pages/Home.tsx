
const Home = () => (
  <main className="min-h-screen pt-32 bg-gradient-to-b from-rose-50 via-sky-50 to-indigo-50">
    <div className="container mx-auto max-w-3xl p-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
        Welcome to MediLingua
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Connect with healthcare providers who speak your language.<br />
        Explore specialists, book appointments, and communicate easily—available in English, Dutch, French, Italian, Russian, Armenian, Bulgarian, and Turkish.
      </p>
      <img
        src="/placeholder.svg"
        alt="MediLingua Home"
        className="mx-auto w-48 md:w-64 mb-8"
      />
      <div>
        <a
          href="/find-doctors"
          className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-7 py-3 rounded-full shadow-lg text-lg font-semibold transition-colors"
        >
          Find your doctor
        </a>
      </div>
    </div>
  </main>
);
export default Home;
