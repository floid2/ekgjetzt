import { Heart, Check, Star, Crown, Shield, Clock, Phone, Calendar, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const MembershipSection = () => {
  const features = [
    { icon: Clock, text: "Regelmäßige EKG-Checks", basic: true, plus: true, vip: true },
    { icon: FileText, text: "Persönliche Gesundheitsberichte", basic: false, plus: true, vip: true },
    { icon: Calendar, text: "Video-Sprechstunden", basic: false, plus: "Gruppe", vip: "1:1" },
    { icon: Phone, text: "Telefon-Hotline", basic: false, plus: false, vip: true },
    { icon: Shield, text: "Priorisierter Support", basic: false, plus: true, vip: true },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ekg-navy via-ekg-navy/95 to-primary/80" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ekg-coral rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ekg-gold/30 rounded-full blur-3xl" />
      </div>
      
      {/* EKG Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="ekgPattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
            <path 
              d="M0,50 L40,50 L50,20 L60,80 L70,30 L80,70 L90,50 L200,50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-white"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ekgPattern)" />
        </svg>
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ekg-gold/20 backdrop-blur-sm border border-ekg-gold/30 mb-6">
            <Crown className="w-5 h-5 text-ekg-gold" />
            <span className="text-ekg-gold font-medium tracking-wide">Exklusiver Herzschlag-Club</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Kontinuierliche Betreuung<br />
            <span className="text-ekg-gold">für Ihr Herz</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Werden Sie Teil unserer exklusiven Herzgesundheits-Community und genießen Sie 
            regelmäßige kardiologische Begleitung durch Dr. Suwelack
          </p>
        </div>

        {/* Main Content - Horizontal Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Basic Tier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 h-full flex flex-col hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white">Basic</h3>
                    <p className="text-white/50 text-sm">Für die regelmäßige Kontrolle</p>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                  <span className="text-5xl font-serif text-white">19</span>
                  <span className="text-white/50">€/Monat</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Quartals-EKG-Check</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Wissensbibliothek-Zugang</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Antwort innerhalb 3 Tagen</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Monatlicher Newsletter</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Mitglied werden
                </Button>
              </div>
            </div>

            {/* Plus Tier - Featured */}
            <div className="group relative lg:-mt-4 lg:mb-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekg-coral text-white text-sm font-medium shadow-lg shadow-ekg-coral/30">
                  <Star className="w-4 h-4" />
                  Empfohlen
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-ekg-coral/30 to-ekg-coral/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-ekg-coral/50 h-full flex flex-col shadow-2xl shadow-ekg-coral/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-ekg-coral/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-ekg-coral" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white">Plus</h3>
                    <p className="text-white/50 text-sm">Für aktive Vorsorge</p>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                  <span className="text-5xl font-serif text-white">49</span>
                  <span className="text-white/50">€/Monat</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-coral flex-shrink-0" />
                    <span>Monatlicher EKG-Check</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-coral flex-shrink-0" />
                    <span>Antwort innerhalb 24h</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-coral flex-shrink-0" />
                    <span>Gruppen-Video-Sprechstunde</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-coral flex-shrink-0" />
                    <span>Priorisierter Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-coral flex-shrink-0" />
                    <span>Persönlicher Gesundheitsbericht</span>
                  </li>
                </ul>
                
                <Button className="w-full rounded-full bg-ekg-coral hover:bg-ekg-coral/90 text-white">
                  Mitglied werden
                </Button>
              </div>
            </div>

            {/* VIP Tier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-ekg-gold/20 to-ekg-gold/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-ekg-gold/30 h-full flex flex-col hover:border-ekg-gold/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-ekg-gold/20 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-ekg-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white">VIP</h3>
                    <p className="text-white/50 text-sm">Premium-Betreuung</p>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                  <span className="text-5xl font-serif text-white">99</span>
                  <span className="text-white/50">€/Monat</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-gold flex-shrink-0" />
                    <span>Wöchentlicher EKG-Check</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-gold flex-shrink-0" />
                    <span>Quartals-Video-Konsultation 1:1</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-gold flex-shrink-0" />
                    <span>Persönlicher Aktionsplan</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-gold flex-shrink-0" />
                    <span>Telefon-Hotline</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-gold flex-shrink-0" />
                    <span>Bevorzugte Terminvergabe</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-ekg-gold flex-shrink-0" />
                    <span>Jährlicher Gesundheitsbericht</span>
                  </li>
                </ul>
                
                <Button className="w-full rounded-full bg-ekg-gold hover:bg-ekg-gold/90 text-ekg-navy font-medium">
                  Mitglied werden
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center">
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-primary" />
              Monatlich kündbar
            </span>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-primary" />
              Keine Mindestlaufzeit
            </span>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-primary" />
              Jederzeit upgraden
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
