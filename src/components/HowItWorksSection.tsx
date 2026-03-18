import { Upload, Stethoscope, CheckCircle2, Phone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: <Upload className="w-7 h-7" />,
      title: "Unterlagen hochladen",
      description: "EKG oder Unterlagen sicher über unser Formular übermitteln.",
      color: "bg-primary/10 text-primary border-primary/20",
      numberColor: "text-primary",
    },
    {
      number: "2",
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Fachärztliche Auswertung",
      description: "Die Analyse erfolgt persönlich durch Dr. med. Rebekka Suwelack, Fachärztin für Innere Medizin und Kardiologie.",
      color: "bg-success/10 text-success border-success/20",
      numberColor: "text-success",
    },
    {
      number: "3",
      icon: <CheckCircle2 className="w-7 h-7" />,
      title: "Ersteinschätzung & Empfehlung erhalten",
      description: "Innerhalb von 24–48h erhalten Sie eine klare, verständliche Einschätzung.",
      color: "bg-warning/10 text-warning border-warning/20",
      numberColor: "text-warning",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            So funktioniert's
          </span>
          <h2 className="text-h2 font-serif mb-4 text-foreground">
            So funktioniert EKGJetzt
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-[20%] right-[20%] h-1 bg-gradient-to-r from-primary via-success to-warning rounded-full" />
            
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  {/* Step Circle */}
                  <div className={`relative z-10 w-36 h-36 lg:w-40 lg:h-40 mx-auto mb-8 rounded-full bg-card border-2 flex flex-col items-center justify-center shadow-card ${step.color}`}>
                    <span className={`text-2xl font-bold mb-2 ${step.numberColor}`}>{step.number}</span>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color}`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-h3 font-serif mb-3 text-foreground">{step.title}</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-card ${step.color}`}>
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-warning mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <span className={`text-sm font-bold ${step.numberColor}`}>Schritt {step.number}</span>
                  <h3 className="text-lg font-serif mb-2 text-foreground">{step.title}</h3>
                  <p className="text-body text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Notice */}
          <div className="mt-16 max-w-lg mx-auto">
            <div className="danger-box text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <p className="text-body text-foreground">
                  Bei akuten Beschwerden wählen Sie bitte <strong className="text-accent text-lg">112</strong>
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