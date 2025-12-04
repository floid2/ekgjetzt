import { Stethoscope, Clock, MonitorSmartphone, Shield } from "lucide-react";

const WhyEKGJetztSection = () => {
  const benefits = [
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Fachärztliche Auswertung",
      description: "Analyse durch erfahrene Kardiologin mit über 10 Jahren klinischer Erfahrung",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Schnelle Klarheit in 24–48h",
      description: "Keine wochenlangen Wartezeiten – Sie erhalten Ihren Befund zeitnah",
    },
    {
      icon: <MonitorSmartphone className="w-7 h-7" />,
      title: "Rein online, ohne Wartezimmer",
      description: "Bequem von zuhause – flexibel und zeitsparend",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Sicher & DSGVO-konform",
      description: "Ihre Daten sind verschlüsselt und werden auf EU-Servern gespeichert",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Ihre Vorteile
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Warum EKGJetzt?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEKGJetztSection;
