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
    <section className="section-padding-sm bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Zielgruppe
            </span>
            <h2 className="text-h2 font-serif mb-4 text-foreground">
              Für wen ist EKGJetzt besonders geeignet?
            </h2>
          </div>

          <div className="bg-card rounded-card p-6 md:p-8 border border-border shadow-card">
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {targetGroups.map((group, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-body text-muted-foreground">{group}</p>
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