import { Heart, Clock, Stethoscope, MessageCircle } from "lucide-react";
import drSuwelackImg from "@/assets/dr-suwelack.png";

const AboutSection = () => {
  const credentials = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "10 Jahre klinische Erfahrung",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      text: "Spezialisierung: Rhythmologie, Telekardiologie, EKG-Interpretation",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Erfahren in der Bewertung von Smartwatch-EKGs",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "Einfühlsame und klare Kommunikation",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-warning/10 rounded-full blur-xl" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-card overflow-hidden border border-border">
                <img 
                  src={drSuwelackImg} 
                  alt="Dr. med. Rebekka Suwelack - Fachärztin für Kardiologie"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Ihre Kardiologin
            </span>
            
            <h2 className="text-h2 font-serif mb-6 text-foreground">
              Ihre Ärztin: Dr. med. Rebekka Suwelack
            </h2>
            
            <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
              Dr. Suwelack ist Fachärztin für Innere Medizin und Kardiologie und verfügt über mehr als zehn Jahre Erfahrung in Klinik und Praxis. Ihr Schwerpunkt liegt auf Herzrhythmusstörungen, EKG-Diagnostik, Telemedizin und der persönlichen, verständlichen Begleitung von Patient:innen mit Herzbeschwerden.
            </p>

            {/* Credentials List */}
            <div className="space-y-4">
              {credentials.map((cred, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-card bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-card bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {cred.icon}
                  </div>
                  <p className="text-body text-muted-foreground">{cred.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;