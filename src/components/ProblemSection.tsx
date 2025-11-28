import { AlertTriangle, TrendingUp, Users, Clock } from "lucide-react";

const ProblemSection = () => {
  const stats = [
    {
      number: "340.000",
      label: "Herzinfarkte pro Jahr",
      sublabel: "in Deutschland",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      number: "#1",
      label: "Todesursache",
      sublabel: "weltweit",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "50%",
      label: "vermeidbar",
      sublabel: "durch Früherkennung",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "6 Monate",
      label: "Wartezeit",
      sublabel: "auf Kardiologen-Termin",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ekg-coral/10 text-ekg-coral text-sm font-medium mb-4">
            Die Realität
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
            Warum Herzgesundheit nicht warten kann
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Herz-Kreislauf-Erkrankungen sind die häufigste Todesursache in Deutschland. 
            Viele Betroffene bemerken erste Warnsignale — wie unregelmäßigen Herzschlag 
            auf ihrer Smartwatch — wissen aber nicht, wie sie diese einordnen sollen.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-ekg-coral/10 text-ekg-coral flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-serif text-foreground mb-1">{stat.number}</p>
              <p className="font-medium text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-ekg-mint/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">💡</span>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2 text-foreground">Die gute Nachricht</h3>
              <p className="text-muted-foreground">
                Mit moderner Telemedizin können Sie Ihre Herzgesundheit proaktiv überwachen. 
                Smartwatches erkennen Vorhofflimmern mit über 95% Genauigkeit — aber die 
                Interpretation gehört in ärztliche Hände.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
