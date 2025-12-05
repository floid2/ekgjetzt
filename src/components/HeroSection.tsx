import { Heart, Shield, Clock, Award, Watch, MonitorSmartphone, Stethoscope } from "lucide-react";
import EKGLine from "./EKGLine";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[hsl(165,35%,93%)] via-[hsl(165,35%,96%)] to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>Fachärztin für Kardiologie</span>
          </div>

          {/* EKG Line Animation */}
          <div className="mb-6 text-primary/40 max-w-md mx-auto">
            <EKGLine />
          </div>

          {/* Main Headline */}
          <h1 className="text-h1 md:text-display font-serif mb-6 animate-slide-up text-foreground leading-tight">
            Ihr Herz schlägt –
            <span className="text-primary block">wir hören hin.</span>
          </h1>
          
          <p className="text-body-lg text-muted-foreground mb-8 animate-slide-up max-w-xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Smartwatch-EKG auffällig? Holen Sie sich jetzt eine fundierte ärztliche Einschätzung.
          </p>

          {/* Hero Icons - Smartwatch, Laptop, Doctor */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-10 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Watch className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Smartwatch</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MonitorSmartphone className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Upload</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Befund</span>
            </div>
          </div>

          <ul className="space-y-3 mb-10 animate-slide-up inline-block text-left" style={{ animationDelay: "0.2s" }}>
            <li className="flex items-start gap-3 text-muted-foreground text-body">
              <span className="text-primary font-bold text-lg">✓</span>
              <span>Befund in 48h von <strong className="text-foreground">Fachärztin für Kardiologie</strong></span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground text-body">
              <span className="text-primary font-bold text-lg">✓</span>
              <span>Bequem online – <strong className="text-foreground">ohne Wartezimmer</strong></span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground text-body">
              <span className="text-primary font-bold text-lg">✓</span>
              <span>Sicher, verständlich und <strong className="text-foreground">DSGVO-konform</strong></span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up justify-center" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={scrollToServices}
            >
              <Heart className="w-5 h-5 mr-2" />
              Jetzt EKG prüfen lassen
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Über Dr. Suwelack
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-slide-up justify-center" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Befund in 24-48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Approbierte Ärztin</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>DSGVO-konform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;