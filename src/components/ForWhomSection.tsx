import { Check } from "lucide-react";

const ForWhomSection = () => {
  const targetGroups = [
    "Smartwatch meldet Herzrhythmus- oder EKG-Auffälligkeiten",
    "Herzstolpern, Herzrasen, unruhiger Puls",
    "Unklare oder widersprüchliche Herzbefunde",
    "Wunsch nach unabhängiger Zweitmeinung",
    "Beruflich stark eingespannt, wenig Zeit für Arztbesuche",
    "Im Ausland / auf Reisen, aber Einschätzung aus Deutschland gewünscht",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Zielgruppe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
              Für wen ist EKGJetzt geeignet?
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              {targetGroups.map((group, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{group}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
