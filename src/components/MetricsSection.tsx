import { TrendingUp, Users, Euro, Percent } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: <Euro className="w-6 h-6" />,
      value: "39-99€",
      label: "B2C Preispunkte",
      description: "Validierte Preisarchitektur",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: ">70%",
      label: "Bruttomarge",
      description: "Bei optimierten Prozessen",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "3:1",
      label: "Ziel LTV:CAC",
      description: "Nach 6 Monaten Optimierung",
    },
    {
      icon: <Percent className="w-6 h-6" />,
      value: "<5%",
      label: "Churn-Rate Ziel",
      description: "Im Membership-Programm",
    },
  ];

  return (
    <section className="py-20 bg-ekg-navy text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Schlüsselkennzahlen</h2>
          <p className="text-primary-foreground/70">Unit Economics im Überblick</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 text-primary-foreground/80">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{metric.value}</div>
              <div className="font-medium mb-1">{metric.label}</div>
              <div className="text-sm text-primary-foreground/60">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;