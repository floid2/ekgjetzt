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
  recommended?: boolean;
  ctaText: string;
  onSelect: () => void;
}

const colorStyles = {
  teal: {
    badge: "bg-primary/10 text-primary",
    icon: "bg-primary/10 text-primary",
    button: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25",
    border: "border-border hover:border-primary/40",
    check: "text-primary",
  },
  coral: {
    badge: "bg-ekg-coral/10 text-ekg-coral",
    icon: "bg-ekg-coral/10 text-ekg-coral",
    button: "bg-ekg-coral hover:bg-ekg-coral/90 text-white shadow-lg shadow-ekg-coral/25",
    border: "border-border hover:border-ekg-coral/40",
    check: "text-ekg-coral",
  },
  gold: {
    badge: "bg-ekg-gold/10 text-ekg-gold",
    icon: "bg-ekg-gold/10 text-ekg-gold",
    button: "bg-ekg-gold hover:bg-ekg-gold/90 text-white shadow-lg shadow-ekg-gold/25",
    border: "border-border hover:border-ekg-gold/40",
    check: "text-ekg-gold",
  },
};

const ServiceCard = ({ tier, title, price, description, features, icon, color, recommended, ctaText, onSelect }: ServiceCardProps) => {
  const styles = colorStyles[color];
  
  return (
    <div className={cn(
      "relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg",
      styles.border,
      recommended && "ring-2 ring-ekg-coral ring-offset-2 ring-offset-background scale-[1.02]"
    )}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-5 py-1.5 rounded-full text-sm font-semibold bg-ekg-coral text-white shadow-md">
            Empfohlen
          </span>
        </div>
      )}
      
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", styles.icon)}>
        {icon}
      </div>
      
      <span className={cn("text-xs font-medium uppercase tracking-wider", styles.badge, "bg-transparent px-0")}>{tier}</span>
      <h3 className="text-2xl font-serif mt-2 mb-4 text-foreground">{title}</h3>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold text-foreground">{price}</span>
        <span className="text-xl text-muted-foreground">€</span>
      </div>
      
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{description}</p>
      
      <ul className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <Check className={cn("w-5 h-5 flex-shrink-0 mt-0.5", styles.check)} />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn("w-full rounded-full group text-base py-6", styles.button)}
        onClick={onSelect}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      tier: "Good",
      title: "Smartwatch-EKG Analyse",
      price: "39",
      description: "Perfekt, wenn Ihre Smartwatch (Apple, Samsung, Garmin oder andere EKG-fähige Geräte) Auffälligkeiten meldet oder Sie ein EKG zur Sicherheit bewerten lassen möchten.",
      features: [
        "Upload Ihres Smartwatch-EKGs",
        "Fachärztliche Interpretation der Kurven",
        "Einschätzung: unauffällig / kontrollbedürftig / abklärungsbedürftig",
        "Handlungsempfehlungen",
        "Befund in 24–48h",
      ],
      icon: <Watch className="w-7 h-7" />,
      color: "teal" as const,
      ctaText: "EKG jetzt hochladen",
    },
    {
      tier: "Better",
      title: "Ärztliche Zweitmeinung",
      price: "69",
      description: "Optimal, wenn Sie einen Arztbrief, einen EKG-Bericht oder andere medizinische Unterlagen besser verstehen möchten – oder wenn Sie verschiedene, widersprüchliche Einschätzungen erhalten haben.",
      features: [
        "Upload Ihrer Befunde (Arztbrief, EKG, MRT/CT-Bericht, Entlassungsbrief)",
        "Strukturierte ärztliche Zweitmeinung",
        "Erklärung der Diagnose & der medizinischen Zusammenhänge",
        "Empfehlung der nächsten sinnvollen Schritte",
        "Möglichkeit für kurze Rückfragen per E-Mail",
      ],
      icon: <FileText className="w-7 h-7" />,
      color: "coral" as const,
      ctaText: "Zweitmeinung anfordern",
      recommended: true,
    },
    {
      tier: "Best",
      title: "Video-Sprechstunde",
      price: "99",
      description: "Für alle, die ihre Beschwerden und Sorgen direkt und persönlich mit einer Fachärztin besprechen möchten – schnell, vertrauensvoll und digital.",
      features: [
        "Zertifizierte Videosprechstunde",
        "Besprechung Ihrer Beschwerden & Befunde",
        "Medizinische Orientierung & Handlungsempfehlungen",
        "Raum für Rückfragen",
        "Keine Wartezeiten",
      ],
      icon: <Video className="w-7 h-7" />,
      color: "gold" as const,
      ctaText: "Video-Termin buchen",
    },
  ];

  const handleBooking = (service: string) => {
    if (service === "Video-Sprechstunde") {
      window.open("https://calendly.com/ekgjetzt-info/20min", "_blank");
    } else if (service === "Smartwatch-EKG Analyse") {
      window.open("https://n8n.avantic.de/form/565070bc-9ed8-402a-bde9-8097a193774c", "_blank");
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
            Unsere telekardiologischen Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie die Leistung, die am besten zu Ihrer aktuellen Situation passt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              {...service}
              onSelect={() => handleBooking(service.title)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Es handelt sich um Selbstzahlerleistungen. Details zur möglichen Erstattung finden Sie in unseren FAQ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
