import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Kontakt from "./pages/Kontakt";
import HerzschlagClub from "./pages/HerzschlagClub";
import Herzgesundheit from "./pages/Herzgesundheit";
import Anatomie from "./pages/herzgesundheit/Anatomie";
import Fakten from "./pages/herzgesundheit/Fakten";
import Risikofaktoren from "./pages/herzgesundheit/Risikofaktoren";
import Erkrankungen from "./pages/herzgesundheit/Erkrankungen";
import Rhythmusstoerungen from "./pages/herzgesundheit/Rhythmusstoerungen";
import Bluthochdruck from "./pages/herzgesundheit/Bluthochdruck";
import Sport from "./pages/herzgesundheit/Sport";
import Ernaehrung from "./pages/herzgesundheit/Ernaehrung";
import Frauenherzen from "./pages/herzgesundheit/Frauenherzen";
import Studien from "./pages/herzgesundheit/Studien";
import Mikrobiom from "./pages/herzgesundheit/Mikrobiom";
import Blog from "./pages/Blog";
import SmartwatchEKGBlog from "./pages/blog/SmartwatchEKG";
import Vorhofflimmern from "./pages/blog/Vorhofflimmern";
import EisenmangelFrauen from "./pages/blog/EisenmangelFrauen";
import SmartwatchEKGService from "./pages/leistungen/SmartwatchEKGService";
import Zweitmeinung from "./pages/leistungen/Zweitmeinung";
import Videosprechstunde from "./pages/leistungen/Videosprechstunde";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/herzschlagclub" element={<HerzschlagClub />} />
            {/* Leistungen */}
            <Route path="/leistungen/smartwatch-ekg" element={<SmartwatchEKGService />} />
            <Route path="/leistungen/zweitmeinung" element={<Zweitmeinung />} />
            <Route path="/leistungen/videosprechstunde" element={<Videosprechstunde />} />
            {/* Herzgesundheit Hub */}
            <Route path="/herzgesundheit" element={<Herzgesundheit />} />
            <Route path="/herzgesundheit/anatomie" element={<Anatomie />} />
            <Route path="/herzgesundheit/fakten" element={<Fakten />} />
            <Route path="/herzgesundheit/risikofaktoren" element={<Risikofaktoren />} />
            <Route path="/herzgesundheit/erkrankungen" element={<Erkrankungen />} />
            <Route path="/herzgesundheit/rhythmusstoerungen" element={<Rhythmusstoerungen />} />
            <Route path="/herzgesundheit/bluthochdruck" element={<Bluthochdruck />} />
            <Route path="/herzgesundheit/sport" element={<Sport />} />
            <Route path="/herzgesundheit/ernaehrung" element={<Ernaehrung />} />
            <Route path="/herzgesundheit/frauenherzen" element={<Frauenherzen />} />
            <Route path="/herzgesundheit/studien" element={<Studien />} />
            <Route path="/herzgesundheit/mikrobiom" element={<Mikrobiom />} />
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/smartwatch-ekg-was-zeigt-es" element={<SmartwatchEKGBlog />} />
            <Route path="/blog/vorhofflimmern-symptome-behandlung" element={<Vorhofflimmern />} />
            <Route path="/blog/eisenmangel-frauen-herz" element={<EisenmangelFrauen />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
