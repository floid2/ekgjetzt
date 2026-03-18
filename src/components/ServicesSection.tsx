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
  color: "blue" | "green" | "amber";
  recommended?: boolean;
  ctaText: string;
  onSelect: () => void;
}

const colorStyles = {
  blue: {
    badge: "text-primary",
    icon: "bg-primary/10 text-primary",
    button: "bg-primary hover:bg-primary-hover text-primary-foreground shadow-button hover:shadow-button-hover",
    border: "border-border hover:border-primary/40",
    check: "text-primary",
  },
  green: {
    badge: "text-success",
    icon: "bg-success/10 text-success",
    button: "bg-success hover:bg-success/90 text-success-foreground shadow-lg",
    border: "border-border hover:border-success/40",
    check: "text-success",
  },
  amber: {
    badge: "text-warning",
    icon: "bg-warning/10 text-warning",
    button: "bg-primary hover:bg-primary-hover text-primary-foreground shadow-button hover:shadow-button-hover",
    border: "border-border hover:border-warning/40",
    check: "text-warning",
  },
};

const ServiceCard = ({ tier, title, price, description, features, icon, color, recommended, ctaText, onSelect }: ServiceCardProps) => {
  const styles = colorStyles[color];
  
  return (
    <div className={cn(
      "relative bg-card rounded-card p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 shadow-card",
      styles.border,
      recommended && "ring-2 ring-success ring-offset-2 ring-offset-background md:scale-[1.02]"
    )}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="badge-recommended shadow-md">
            Empfohlen
          </span>
        </div>
      )}
      
      <div className={cn("w-20 h-20 rounded-card flex items-center justify-center mb-6", styles.icon)}>
        {icon}
      </div>
      
      <span className={cn("text-xs font-medium uppercase tracking-wider", styles.badge)}>{tier}</span>
      <h3 className="text-h3 font-serif mt-2 mb-4 text-foreground">{title}</h3>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold text-foreground">{price}</span>
        <span className="text-xl text-muted-foreground">€</span>
      </div>
      
      <p className="text-muted-foreground mb-8 text-body leading-relaxed">{description}</p>
      
      <ul className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-body">
            <Check className={cn("w-5 h-5 flex-shrink-0 mt-0.5", styles.check)} />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn("w-full group", styles.button)}
        size="lg"
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
        "Ersteinschätzung in 24–48h",
      ],
      icon: <Watch className="w-10 h-10" />,
      color: "blue" as const,
      ctaText: "EKG jetzt hochladen",
    },
    {
      tier: "Better",
      title: "Ärztliche Zweitmeinung",
      price: "69",
      description: "Optimal, wenn Sie einen Arztbrief, einen EKG-Bericht oder andere medizinische Unterlagen besser verstehen möchten – oder wenn Sie verschiedene, widersprüchliche Einschätzungen erhalten haben.",
      features: [
        "Upload Ihrer Unterlagen (Arztbrief, EKG, MRT/CT-Bericht, Entlassungsbrief)",
        "Strukturierte ärztliche Zweitmeinung",
        "Erklärung der Diagnose & der medizinischen Zusammenhänge",
        "Empfehlung der nächsten sinnvollen Schritte",
        "Möglichkeit für kurze Rückfragen per E-Mail",
      ],
      icon: <FileText className="w-10 h-10" />,
      color: "green" as const,
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
      icon: <Video className="w-10 h-10" />,
      color: "amber" as const,
      ctaText: "Video-Termin buchen",
    },
  ];

  const handleBooking = (service: string) => {
    if (service === "Video-Sprechstunde") {
      window.open("https://calendly.com/ekgjetzt-info/20min", "_blank");
    } else if (service === "Smartwatch-EKG Analyse") {
      window.location.href = "/ekg-analyse";
    } else if (service === "Ärztliche Zweitmeinung") {
      window.location.href = "/zweitmeinung";
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Leistungen
          </span>
          <h2 className="text-h2 font-serif mb-6 text-foreground">
            Unsere telekardiologischen Leistungen
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie die Leistung, die am besten zu Ihrer aktuellen Situation passt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              {...service}
              onSelect={() => handleBooking(service.title)}
            />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Es handelt sich um Selbstzahlerleistungen. Details zur möglichen Erstattung finden Sie in unseren FAQ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;