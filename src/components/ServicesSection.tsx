import { Watch, FileText, Video, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  tier: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: "teal" | "coral" | "gold";
  popular?: boolean;
  onSelect: () => void;
}

const colorStyles = {
  teal: {
    badge: "bg-primary/10 text-primary",
    icon: "bg-primary/10 text-primary",
    button: "bg-primary hover:bg-primary/90 text-primary-foreground",
    border: "border-primary/20 hover:border-primary/40",
    highlight: "ring-2 ring-primary ring-offset-2 ring-offset-background",
  },
  coral: {
    badge: "bg-ekg-coral/10 text-ekg-coral",
    icon: "bg-ekg-coral/10 text-ekg-coral",
    button: "bg-ekg-coral hover:bg-ekg-coral/90 text-white",
    border: "border-ekg-coral/20 hover:border-ekg-coral/40",
    highlight: "ring-2 ring-ekg-coral ring-offset-2 ring-offset-background",
  },
  gold: {
    badge: "bg-ekg-gold/10 text-ekg-gold",
    icon: "bg-ekg-gold/10 text-ekg-gold",
    button: "bg-ekg-gold hover:bg-ekg-gold/90 text-white",
    border: "border-ekg-gold/20 hover:border-ekg-gold/40",
    highlight: "ring-2 ring-ekg-gold ring-offset-2 ring-offset-background",
  },
};

const ServiceCard = ({ tier, title, price, description, features, icon, color, popular, onSelect }: ServiceCardProps) => {
  const styles = colorStyles[color];
  
  return (
    <div className={cn(
      "relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      styles.border,
      popular && styles.highlight
    )}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className={cn("px-4 py-1 rounded-full text-xs font-medium", styles.badge)}>
            Beliebteste Wahl
          </span>
        </div>
      )}
      
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", styles.icon)}>
        {icon}
      </div>
      
      <span className={cn("text-xs font-medium uppercase tracking-wider", styles.badge, "bg-transparent px-0")}>{tier}</span>
      <h3 className="text-2xl font-serif mt-2 mb-1 text-foreground">{title}</h3>
      
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-serif text-foreground">{price}</span>
        <span className="text-muted-foreground">€</span>
      </div>
      
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <Check className={cn("w-5 h-5 flex-shrink-0 mt-0.5", color === "teal" ? "text-primary" : color === "coral" ? "text-ekg-coral" : "text-ekg-gold")} />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn("w-full rounded-full group", styles.button)}
        onClick={onSelect}
      >
        Jetzt buchen
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      tier: "Good",
      title: "EKG-Analyse",
      price: "39",
      description: "Ihre Smartwatch-EKG professionell ausgewertet. Ideal für eine erste Einschätzung.",
      features: [
        "Smartwatch-EKG Upload",
        "Befund innerhalb 48 Stunden",
        "Schriftliche Einschätzung",
        "Handlungsempfehlung",
        "E-Mail-Support bei Rückfragen",
      ],
      icon: <Watch className="w-7 h-7" />,
      color: "teal" as const,
    },
    {
      tier: "Better",
      title: "Zweitmeinung",
      price: "69",
      description: "Ausführliche Analyse Ihrer Befunde mit detailliertem Bericht.",
      features: [
        "Arztbrief-Analyse",
        "Befund innerhalb 24 Stunden",
        "Ausführlicher Bericht",
        "E-Mail-Rückfragen inklusive",
        "Verständliche Erklärungen",
      ],
      icon: <FileText className="w-7 h-7" />,
      color: "coral" as const,
    },
    {
      tier: "Best",
      title: "Video-Sprechstunde",
      price: "99",
      description: "Persönliches Gespräch mit Dr. Suwelack per Video.",
      features: [
        "20 Min. Video-Konsultation",
        "Terminwahl nach Wunsch",
        "Befundbesprechung live",
        "Schriftliche Zusammenfassung",
        "Individuelle Empfehlungen",
      ],
      icon: <Video className="w-7 h-7" />,
      color: "gold" as const,
    },
  ];

  const handleBooking = (service: string) => {
    if (service === "Video-Sprechstunde") {
      window.open("https://calendly.com/ekgjetzt-info/20min", "_blank");
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Wählen Sie Ihren Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drei Wege zur kardiologischen Expertise — passend zu Ihrem Anliegen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              {...service}
              onSelect={() => handleBooking(service.title)}
            />
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Alle Preise inkl. MwSt. • Sichere Zahlung via Stripe • 
            <span className="text-primary"> 100% vertraulich & DSGVO-konform</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
