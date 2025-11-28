import { Shield, Lock, Award, Clock, HeartPulse, BadgeCheck } from "lucide-react";

const TrustSection = () => {
  const trustFactors = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Approbierte Ärztin",
      description: "Dr. Suwelack ist vollständig approbierte Fachärztin mit deutscher Zulassung",
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Kardiologie-Expertise",
      description: "Spezialisiert auf Herzrhythmusstörungen und EKG-Interpretation",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "DSGVO-konform",
      description: "Ihre Gesundheitsdaten werden nach höchsten Standards geschützt",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Schnelle Befunde",
      description: "Erhalten Sie Ihre Einschätzung innerhalb von 24-48 Stunden",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sichere Übertragung",
      description: "Ende-zu-Ende verschlüsselte Kommunikation Ihrer Daten",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Transparente Preise",
      description: "Keine versteckten Kosten, faire Festpreise für alle Services",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Vertrauen & Sicherheit
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Ihre Herzgesundheit in sicheren Händen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Medizinische Qualität und Datenschutz stehen bei uns an erster Stelle
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustFactors.map((factor, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {factor.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{factor.title}</h3>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
            </div>
          ))}
        </div>

        {/* Legal Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            EKG Jetzt ist eine telemedizinische Beratungsleistung und ersetzt nicht den Besuch beim 
            Hausarzt oder Kardiologen vor Ort. Bei akuten Beschwerden wählen Sie bitte den Notruf 112.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
