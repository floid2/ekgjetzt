import { Upload, FileSearch, FileCheck, AlertTriangle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-6 h-6" />,
      title: "Unterlagen hochladen",
      description: "Laden Sie Ihr Smartwatch-EKG oder Ihre Befunde sicher über unser Formular hoch.",
    },
    {
      number: "02",
      icon: <FileSearch className="w-6 h-6" />,
      title: "Fachärztliche Auswertung",
      description: "Dr. Suwelack analysiert Ihre Daten persönlich und erstellt eine fundierte Einschätzung.",
    },
    {
      number: "03",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Befund & Empfehlung erhalten",
      description: "Sie erhalten Ihren Befund per E-Mail — verständlich formuliert mit klaren Empfehlungen.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ekg-gold/10 text-ekg-gold text-sm font-medium mb-4">
            So funktioniert's
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Wie funktioniert EKGJetzt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In 3 einfachen Schritten zu Ihrem Befund
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-ekg-coral to-ekg-gold" />
            
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-full bg-card border-2 border-primary/20 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-xs text-primary font-medium mb-1">{step.number}</span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs text-primary font-medium">{step.number}</span>
                  <h3 className="text-lg font-serif mb-1 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Notice */}
          <div className="mt-12 p-4 bg-ekg-coral/10 rounded-xl border border-ekg-coral/20 text-center">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-5 h-5 text-ekg-coral flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Dieser Service ersetzt keine Notfallversorgung.</strong> Bei akuten Beschwerden bitte <strong className="text-ekg-coral">112</strong> wählen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
