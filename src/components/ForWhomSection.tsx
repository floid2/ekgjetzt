import { Check } from "lucide-react";

const ForWhomSection = () => {
  const targetGroups = [
    "Ihre Smartwatch zeigt Auffälligkeiten an",
    "Sie spüren Herzrasen, Herzstolpern oder einen unregelmäßigen Puls",
    "Sie möchten ein EKG sicher einordnen",
    "Sie möchten eine bestehende Diagnose besser verstehen",
    "Sie haben verschiedene Meinungen erhalten und wünschen sich Klarheit",
    "Sie möchten medizinische Orientierung ohne Wartezeit",
    "Sie sind beruflich oder privat stark eingespannt",
    "Sie benötigen im Ausland eine Einschätzung aus Deutschland",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Zielgruppe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
              Für wen ist EKGJetzt besonders geeignet?
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