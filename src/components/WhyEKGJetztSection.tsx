import { Stethoscope, Clock, MonitorSmartphone, Shield, Scale } from "lucide-react";

const WhyEKGJetztSection = () => {
  const benefits = [
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Fachärztliche Auswertung",
      description: "Alle Befunde werden ausschließlich von einer approbierten Fachärztin für Kardiologie analysiert.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Schnelle Klarheit in 24–48h",
      description: "Sie erhalten zeitnah eine präzise, strukturierte Einschätzung.",
    },
    {
      icon: <MonitorSmartphone className="w-7 h-7" />,
      title: "Einfach & vollständig online",
      description: "Unterlagen sicher hochladen – Befund per E-Mail erhalten.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Sicher & DSGVO-konform",
      description: "Datenübertragung verschlüsselt, Speicherung ausschließlich in der EU.",
    },
    {
      icon: <Scale className="w-7 h-7" />,
      title: "Unabhängige ärztliche Zweitmeinung",
      description: "Ideal bei Unsicherheiten, unklaren Befunden oder unterschiedlichen Einschätzungen von Ärzt:innen.",
    },
  ];

  return (
    <section className="section-padding-sm bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Ihre Vorteile
          </span>
          <h2 className="text-h2 font-serif mb-6 text-foreground">
            Warum EKGJetzt?
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Herzbeschwerden oder Warnmeldungen Ihrer Smartwatch können verunsichern – ganz besonders dann, wenn ein Arztbericht unklar formuliert ist oder verschiedene Meinungen im Raum stehen.
          </p>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            EKGJetzt bietet Ihnen schnelle, fachärztliche Orientierung. Ob Sie ein Smartwatch-EKG analysieren lassen möchten, Ihre Symptome besser verstehen wollen oder eine unabhängige ärztliche Zweitmeinung brauchen: Hier erhalten Sie Klarheit innerhalb von 24–48 Stunden, ohne Wartezimmer, ohne Stress und vollkommen digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-card p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-card bg-primary/10 text-primary flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-body text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEKGJetztSection;