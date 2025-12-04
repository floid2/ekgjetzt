import { Lock, Server, UserCheck, Shield, FileCheck } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      text: "Verschlüsselte Datenübertragung",
    },
    {
      icon: <Server className="w-6 h-6" />,
      text: "Speicherung ausschließlich in der EU",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      text: "Zugriff nur durch die Ärztin",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Vollständig DSGVO-konform",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      text: "Ärztliche Schweigepflicht garantiert",
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
              Ihre medizinischen Daten sind geschützt
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-muted-foreground">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;