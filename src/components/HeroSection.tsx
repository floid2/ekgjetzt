import { Heart, Shield, Clock, Award } from "lucide-react";
import EKGLine from "./EKGLine";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-ekg-mint/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ekg-coral/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20 pt-32">
        <div className="max-w-3xl mx-auto text-center">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 animate-slide-up text-foreground leading-tight">
            Ihr Herz schlägt –
            <span className="text-primary block">wir hören hin.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up max-w-xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Smartwatch-EKG auffällig? Holen Sie sich jetzt eine fundierte ärztliche Einschätzung.
          </p>

          <ul className="space-y-2 mb-8 animate-slide-up inline-block text-left" style={{ animationDelay: "0.2s" }}>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary font-bold">✓</span>
              <span>Befund in 48h von <strong className="text-foreground">Fachärztin für Kardiologie</strong></span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary font-bold">✓</span>
              <span>Bequem online – <strong className="text-foreground">ohne Wartezimmer</strong></span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary font-bold">✓</span>
              <span>Sicher, verständlich und <strong className="text-foreground">DSGVO-konform</strong></span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up justify-center" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToServices}
            >
              <Heart className="w-5 h-5 mr-2" />
              EKG analysieren lassen
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full"
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
