import { Video, Building2, Crown } from "lucide-react";
import RecommendationCard from "./RecommendationCard";

interface RecommendationsSectionProps {
  onSelectRecommendation: (id: number) => void;
}

const RecommendationsSection = ({ onSelectRecommendation }: RecommendationsSectionProps) => {
  const recommendations = [
    {
      number: 1,
      title: "Telemedizin B2C",
      subtitle: "Direkte Services für Patienten",
      description: "Smartwatch-EKG-Analyse (39€), Arztbrief-Zweitmeinung (69€) und Video-Sprechstunde. Skalierbare Umsatz-Engine mit hoher Marge und validiertem Geschäftsmodell.",
      icon: <Video className="w-7 h-7" />,
      color: "teal" as const,
    },
    {
      number: 2,
      title: "Versicherer-Kooperation",
      subtitle: "B2B2C Partnerschaft",
      description: "Strategische Einbindung der Telekardiologie in Versicherungsangebote. Multiplikator-Effekt mit tausenden potenziellen Fällen pro Partner.",
      icon: <Building2 className="w-7 h-7" />,
      color: "coral" as const,
    },
    {
      number: 3,
      title: "Premium-Mitgliedschaft",
      subtitle: "Digitales Abo-Programm",
      description: "\"Herzschlag-Club\" mit wiederkehrenden Erlösen. Basic (19€/M), Plus (49€/M), VIP (99€/M) für langfristige Patientenbindung.",
      icon: <Crown className="w-7 h-7" />,
      color: "gold" as const,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Strategische Empfehlungen
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            Top-3 Wachstumshebel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rechtlich fundiert, wirtschaftlich attraktiv, operativ umsetzbar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.number}
              {...rec}
              onClick={() => onSelectRecommendation(rec.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;