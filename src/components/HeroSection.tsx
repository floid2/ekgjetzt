import { Heart, ArrowDown } from "lucide-react";
import EKGLine from "./EKGLine";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-ekg-mint/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ekg-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-sm">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <span className="text-2xl font-semibold text-primary">EKG Jetzt</span>
          </div>

          {/* EKG Line Animation */}
          <div className="mb-8 text-primary/40">
            <EKGLine />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-slide-up text-foreground">
            Strategie-Playbook
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up font-light" style={{ animationDelay: "0.1s" }}>
            Telemedizinische Kardiologie für die Zukunft
          </p>

          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Top-3-Empfehlungen mit 90-Tage Go-to-Market Plan — rechtlich, wirtschaftlich und operativ fundiert
          </p>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-12">
            <ArrowDown className="w-6 h-6 mx-auto text-primary/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;