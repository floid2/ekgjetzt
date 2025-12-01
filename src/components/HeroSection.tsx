import { Heart, Shield, Clock, Award } from "lucide-react";
import EKGLine from "./EKGLine";
import { Button } from "./ui/button";
import drSuwelackImg from "@/assets/dr-suwelack.png";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Shield className="w-4 h-4" />
              <span>Fachärztin für Kardiologie</span>
            </div>

            {/* EKG Line Animation */}
            <div className="mb-6 text-primary/40 max-w-md">
              <EKGLine />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 animate-slide-up text-foreground leading-tight">
              Ihre Herzgesundheit in
              <span className="text-primary block">Experten-Händen</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <strong className="text-foreground">Herz-Kreislauf-Erkrankungen sind Todesursache Nr. 1 in Deutschland.</strong>
            </p>

            <p className="text-muted-foreground mb-8 animate-slide-up max-w-xl" style={{ animationDelay: "0.2s" }}>
              Mit telemedizinischer Kardiologie erhalten Sie schnelle, kompetente Einschätzung Ihrer Smartwatch-EKGs und Herzbefunde — ohne lange Wartezeiten, von zu Hause aus.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
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
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.4s" }}>
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

          {/* Right Content - Doctor Image Area */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-ekg-coral/10 rounded-full blur-2xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/10 shadow-2xl">
                <img 
                  src={drSuwelackImg} 
                  alt="Dr. med. Rebekka Suwelack - Fachärztin für Kardiologie"
                  className="w-full h-auto object-cover"
                />

                {/* Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border">
                  <p className="font-serif text-lg text-foreground">Dr. med. Rebekka Suwelack</p>
                  <p className="text-sm text-muted-foreground">Fachärztin für Innere Medizin</p>
                  <p className="text-sm text-primary font-medium">& Kardiologie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
