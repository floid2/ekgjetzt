import { Lock, Globe, UserCheck, ShieldCheck, FileKey } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      text: "Verschlüsselte Datenübertragung",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Speicherung ausschließlich in der EU",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      text: "Zugriff nur durch die Ärztin",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "Vollständig DSGVO-konform",
    },
    {
      icon: <FileKey className="w-6 h-6" />,
      text: "Ärztliche Schweigepflicht garantiert",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Datenschutz
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
              Ihre medizinischen Daten sind geschützt
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-10 border border-border shadow-lg">
            <div className="grid sm:grid-cols-2 gap-8">
              {securityFeatures.slice(0, 4).map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-foreground font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
            {/* Fifth item centered below */}
            <div className="flex justify-center mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {securityFeatures[4].icon}
                </div>
                <p className="text-foreground font-medium">{securityFeatures[4].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
