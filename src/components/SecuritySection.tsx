import { Lock, Server, UserCheck, FileCheck } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Verschlüsselte Übertragung",
      description: "Alle Daten werden über SSL/TLS verschlüsselt übertragen",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Server in der EU",
      description: "Ihre Daten werden ausschließlich auf europäischen Servern gespeichert",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Eingeschränkter Zugriff",
      description: "Nur die Ärztin und notwendige Praxis-Assistenz haben Zugriff",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Ärztliche Dokumentation",
      description: "Dokumentation nach geltenden medizinischen Vorgaben",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Datenschutz
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
              Sicherheit & Datenschutz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ihre Gesundheitsdaten verdienen höchsten Schutz. Wir nehmen Datenschutz sehr ernst.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
