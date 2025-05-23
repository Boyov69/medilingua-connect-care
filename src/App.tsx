
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FindDoctors from "./pages/FindDoctors";
import Contact from "./pages/Contact";
import DoctorAvailability from "./pages/DoctorAvailability";
import { LanguageProvider } from "@/context/LanguageContext";
import { ApiKeyProvider } from "@/context/ApiKeyContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ApiKeyProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/find-doctors" element={<FindDoctors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctor-availability" element={<DoctorAvailability />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </ApiKeyProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
