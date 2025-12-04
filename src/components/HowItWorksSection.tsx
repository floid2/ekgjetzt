import { Upload, Stethoscope, CheckCircle2, Phone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: <Upload className="w-7 h-7" />,
      title: "Unterlagen hochladen",
      description: "EKG oder Befunde sicher über unser Formular übermitteln.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      number: "2",
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Fachärztliche Auswertung",
      description: "Die Analyse erfolgt persönlich durch Dr. med. Rebekka Suwelack, Fachärztin für Innere Medizin und Kardiologie.",
      color: "bg-ekg-coral/10 text-ekg-coral border-ekg-coral/20",
    },
    {
      number: "3",
      icon: <CheckCircle2 className="w-7 h-7" />,
      title: "Befund & Empfehlung erhalten",
      description: "Innerhalb von 24–48h erhalten Sie eine klare, verständliche Einschätzung.",
      color: "bg-ekg-gold/10 text-ekg-gold border-ekg-gold/20",
    },
  ];

  return (
    <section className="py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-ekg-gold/10 text-ekg-gold text-sm font-medium mb-6">
            So funktioniert's
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            So funktioniert EKGJetzt
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-[20%] right-[20%] h-1 bg-gradient-to-r from-primary via-ekg-coral to-ekg-gold rounded-full" />
            
            <div className="grid grid-cols-3 gap-12">
              {steps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  {/* Step Circle */}
                  <div className={`relative z-10 w-40 h-40 mx-auto mb-8 rounded-full bg-card border-2 flex flex-col items-center justify-center shadow-xl ${step.color}`}>
                    <span className="text-2xl font-bold mb-2">{step.number}</span>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color}`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${step.color}`}>
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-ekg-gold mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <span className={`text-sm font-bold ${step.color.includes('primary') ? 'text-primary' : step.color.includes('coral') ? 'text-ekg-coral' : 'text-ekg-gold'}`}>Schritt {step.number}</span>
                  <h3 className="text-lg font-serif mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Notice - separate red box */}
          <div className="mt-16 max-w-lg mx-auto">
            <div className="p-5 bg-destructive/10 rounded-xl border-2 border-destructive/30 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-sm text-foreground">
                  Bei akuten Beschwerden wählen Sie bitte <strong className="text-destructive text-lg">112</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
