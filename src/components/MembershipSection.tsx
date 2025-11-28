import { Heart, Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const MembershipSection = () => {
  const tiers = [
    {
      name: "Basic",
      price: "19",
      description: "Für die regelmäßige Kontrolle",
      features: [
        "Quartals-EKG-Check",
        "Zugang zur Wissensbibliothek",
        "Antwort innerhalb 3 Tagen",
        "Monatlicher Newsletter",
      ],
      color: "teal",
    },
    {
      name: "Plus",
      price: "49",
      description: "Für aktive Vorsorge",
      features: [
        "Monatlicher EKG-Check",
        "Antwort innerhalb 24h",
        "Gruppen-Video-Sprechstunde",
        "Priorisierter Support",
        "Persönlicher Gesundheitsbericht",
      ],
      color: "coral",
      popular: true,
    },
    {
      name: "VIP",
      price: "99",
      description: "Premium-Betreuung",
      features: [
        "Wöchentlicher EKG-Check",
        "Quartals-Video-Konsultation",
        "Persönlicher Aktionsplan",
        "Telefon-Hotline",
        "Bevorzugte Terminvergabe",
        "Jährlicher Gesundheitsbericht",
      ],
      color: "gold",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekg-gold/10 text-ekg-gold text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            <span>Herzschlag-Club</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Kontinuierliche Betreuung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Werden Sie Mitglied im Herzschlag-Club für regelmäßige kardiologische Begleitung 
            und exklusive Vorteile
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={cn(
                "relative bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-xl",
                tier.popular 
                  ? "border-ekg-coral ring-2 ring-ekg-coral/20" 
                  : "border-border hover:border-primary/30"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ekg-coral text-white text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Empfohlen
                  </span>
                </div>
              )}

              <h3 className="text-xl font-serif mb-1 text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-serif text-foreground">{tier.price}</span>
                <span className="text-muted-foreground">€/Monat</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className={cn(
                      "w-4 h-4 flex-shrink-0 mt-0.5",
                      tier.color === "teal" ? "text-primary" : tier.color === "coral" ? "text-ekg-coral" : "text-ekg-gold"
                    )} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                Mitglied werden
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Monatlich kündbar • Keine Mindestlaufzeit • Jederzeit upgraden
        </p>
      </div>
    </section>
  );
};

export default MembershipSection;
