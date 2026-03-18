import { Heart, Shield, Clock, Award, Watch, FileCheck, Video } from "lucide-react";
import { Link } from "react-router-dom";
import EKGLine from "./EKGLine";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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

            <ul className="space-y-3 mb-10 animate-slide-up inline-block text-left" style={{ animationDelay: "0.15s" }}>
              <li className="flex items-start gap-3 text-muted-foreground text-body">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Ärztliche Ersteinschätzung in 48h von <strong className="text-foreground">Fachärztin für Kardiologie</strong></span>
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
                <span>Ersteinschätzung in 24-48h</span>
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

      {/* Services Quick Access Section */}
      <section className="py-12 md:py-16 bg-[#F4FAF8]">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Smartwatch-EKG Analyse */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <Watch className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">Smartwatch-EKG Analyse</h3>
                <p className="text-[#4F4F4F] text-sm mb-4">Fundierte ärztliche Einschätzung Ihrer Uhr-EKGs.</p>
                <Link 
                  to="/leistungen/smartwatch-ekg"
                  className="text-primary border border-primary rounded-full px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>

            {/* Ärztliche Zweitmeinung */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <FileCheck className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">Ärztliche Zweitmeinung</h3>
                <p className="text-[#4F4F4F] text-sm mb-4">Unabhängige Beurteilung vorhandener Befunde.</p>
                <Link 
                  to="/leistungen/zweitmeinung"
                  className="text-primary border border-primary rounded-full px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>

            {/* Video-Sprechstunde */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <Video className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">Video-Sprechstunde</h3>
                <p className="text-[#4F4F4F] text-sm mb-4">Persönliche Beratung durch eine Kardiologin.</p>
                <Link 
                  to="/leistungen/videosprechstunde"
                  className="text-primary border border-primary rounded-full px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>

          {/* Explanatory text */}
          <p className="text-center text-muted-foreground text-lg md:text-xl mt-10 max-w-3xl mx-auto">
            Schnelle fachärztliche Orientierung – ob Smartwatch-EKG, unklare Beschwerden oder eine unabhängige ärztliche Zweitmeinung.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
