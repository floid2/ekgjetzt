import { Calendar, CheckCircle2 } from "lucide-react";

const TimelineSection = () => {
  const phases = [
    {
      week: "Woche 1-4",
      title: "Foundation",
      tasks: [
        "Rechtliche Texte finalisieren (AGB, DSGVO)",
        "Tech-Stack Setup & Formulare",
        "Landingpages optimieren",
        "Erste Content-Pieces erstellen",
      ],
    },
    {
      week: "Woche 5-8",
      title: "Launch & Learn",
      tasks: [
        "B2C Services live schalten",
        "Paid Ads starten (Google, Social)",
        "B2B Outreach beginnen",
        "SOPs testen & verfeinern",
      ],
    },
    {
      week: "Woche 9-12",
      title: "Scale & Optimize",
      tasks: [
        "Membership-Programm einführen",
        "Versicherer-Pilot verhandeln",
        "Unit Economics validieren",
        "Team-Erweiterung planen",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 inline-block mr-2" />
            90-Tage Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            Umsetzungsfahrplan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strukturierte Phasen für einen erfolgreichen Launch
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {phases.map((phase, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-8" />

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {phase.week}
                    </span>
                    <h3 className="text-2xl font-serif mb-4 text-card-foreground">{phase.title}</h3>
                    <ul className={`space-y-3 ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                      {phase.tasks.map((task, taskIdx) => (
                        <li
                          key={taskIdx}
                          className={`flex items-center gap-3 text-muted-foreground ${
                            idx % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;