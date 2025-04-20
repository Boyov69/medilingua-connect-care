
import { Search, MapPin, User } from "lucide-react";

const LANGUAGES = [
  "English", "Dutch", "French", "Italiano", "Russian", "Armenian", "Bulgarian", "Türkçe"
];
const SPECIALTIES = [
  "General Practitioner", "Pediatrician", "Cardiologist", "Dermatologist", "Neurologist", "Psychiatrist"
];

const FindDoctors = () => (
  <main className="min-h-screen pt-32 bg-gradient-to-br from-sky-50 to-indigo-50">
    <div className="container mx-auto max-w-3xl px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent text-center">
        Find a Doctor or Specialist
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Search for doctors by language, specialty, and your location.
      </p>
      <form className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col gap-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Doctor or clinic name"
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
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Specialty"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              list="specialties"
            />
            <datalist id="specialties">
              {SPECIALTIES.map((s) => <option key={s} value={s} />)}
            </datalist>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap items-center">
          <span className="font-medium text-sm text-muted-foreground">Language:</span>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((l) => (
              <button
                type="button"
                key={l}
                className="px-4 py-1.5 bg-gradient-to-r from-white to-primary/10 border rounded-full font-medium text-sm text-primary hover:bg-primary/20 transition"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-3 w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-colors"
          >
            Search for Doctors
          </button>
        </div>
      </form>
      <div className="text-center text-muted-foreground text-lg">
        {/* Placeholder - results would show here */}
        Search results will appear here.
      </div>
    </div>
  </main>
);

export default FindDoctors;
