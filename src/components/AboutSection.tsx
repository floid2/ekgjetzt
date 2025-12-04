import { Heart, Award, BookOpen, Stethoscope } from "lucide-react";
import drSuwelackImg from "@/assets/dr-suwelack.png";

const AboutSection = () => {
  const credentials = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Fachärztin für Innere Medizin",
      description: "Umfassende internistische Ausbildung",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Schwerpunkt Kardiologie",
      description: "Spezialisierung auf Herzrhythmusstörungen",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Approbation & Kammer",
      description: "Vollständig approbierte Ärztin",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Kontinuierliche Fortbildung",
      description: "Stets auf dem neuesten Stand",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ekg-gold/10 rounded-full blur-xl" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden border border-border">
                <img 
                  src={drSuwelackImg} 
                  alt="Dr. med. Rebekka Suwelack - Fachärztin für Kardiologie"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Quote Card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-5 shadow-xl border border-border max-w-xs">
                <p className="text-sm italic text-muted-foreground mb-2">
                  "Mein Ziel ist es, jedem Patienten die kardiologische Expertise zugänglich zu machen, 
                  die er verdient — unabhängig von Wartezeiten."
                </p>
                <p className="text-sm font-medium text-primary">— Dr. med. Rebekka Suwelack</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Ihre Kardiologin
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
              Dr. med. Rebekka Suwelack
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Als Fachärztin für Innere Medizin und Kardiologie verbinde ich klassische 
              klinische Expertise mit den Vorteilen moderner Telemedizin. Mit über 10 Jahren 
              Berufserfahrung – unter anderem als Funktions-Oberärztin – greife ich auf ein 
              breites Fundament in der gesamten Herz-Kreislauf-Medizin zurück.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Mein Fokus liegt darauf, Ihnen schnell und kompetent Sicherheit zu geben. 
              Ob Analyse Ihres Smartwatch-EKGs, unabhängige Zweitmeinung oder persönliche 
              Video-Konsultation: Sie erhalten eine fundierte Einschätzung und klare 
              Handlungsempfehlungen direkt von einer erfahrenen Kardiologin.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{cred.title}</p>
                    <p className="text-xs text-muted-foreground">{cred.description}</p>
                  </div>
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
