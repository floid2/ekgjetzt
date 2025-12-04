import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Check, ArrowRight, AlertTriangle, Users, TrendingUp, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HerzschlagClub = () => {
  const membershipTiers = [
    {
      name: "Basic",
      price: "19",
      description: "Quartalsweise Begleitung für Einsteiger",
      features: [
        "Quartalsweise Daten-/EKG-Check",
        "Kurzer schriftlicher Bericht",
        "Antwortzeit: bis 72h per E-Mail",
        "Zugriff auf Wissensbibliothek",
      ],
      color: "primary",
    },
    {
      name: "Plus",
      price: "49",
      description: "Monatliche Betreuung mit persönlichem Bericht",
      features: [
        "Monatlicher Daten-/EKG-Check",
        "Persönlicher Monatsbericht",
        "Antwort auf Fragen innerhalb 24h",
        "Empfehlungen zu Bewegung, Blutdruck, Lebensstil",
      ],
      color: "coral",
      popular: true,
    },
    {
      name: "Premium",
      price: "99",
      description: "Umfassende Betreuung mit Video-Sprechstunden",
      features: [
        "Alles aus Plus",
        "Vierteljährliche Video-Sprechstunde (20–30 Min)",
        "Priorisierte Bearbeitung (Antwort innerhalb 12h)",
        "Individueller Herz-Risikoplan",
      ],
      color: "gold",
    },
  ];

  const benefits = [
    "Menschen mit Bluthochdruck",
    "Mit bereits bekannten Herzkrankheiten",
    "Frauen mit spezifischen Herzrisiken",
    "Personen mit vielen Risikofaktoren (Diabetes, Rauchen usw.)",
    "Sportlich Aktive, die ihre Belastung besser einschätzen möchten",
    "Smartwatch-Nutzer mit vielen Messdaten",
  ];

  const steps = [
    { title: "Online-Mitgliedschaft abschließen", icon: <Users className="w-5 h-5" /> },
    { title: "Gesundheitsfragebogen & Upload von EKG / Daten", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Regelmäßige Auswertung & Berichte", icon: <Clock className="w-5 h-5" /> },
    { title: "Anpassung der Empfehlungen im Verlauf", icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ekg-coral/5 via-background to-primary/5">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekg-coral/10 text-ekg-coral text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Herzschlag-Club</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                Regelmäßige Begleitung
                <span className="text-ekg-coral block">für dein Herz</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Telemedizinische Betreuung durch eine Fachärztin für Kardiologie – 
                mit regelmäßigen Checks, Berichten und persönlicher Empfehlung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-ekg-coral hover:bg-ekg-coral/90">
                  <Heart className="w-5 h-5 mr-2" />
                  Mitglied werden
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <a href="#membership">Mehr erfahren</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Warum ein Herzschlag-Club?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Das Problem</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Herz-Kreislauf-Erkrankungen = Todesursache Nr. 1</li>
                    <li>• Viele Risiken entwickeln sich schleichend</li>
                    <li>• Ein einmaliger Check ist gut – Kontinuität ist besser</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Die Lösung</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Wearables liefern Daten, aber keine Interpretation</li>
                    <li>• Mit ärztlicher Begleitung lassen sich Risiken früh erkennen</li>
                    <li>• Persönliche Empfehlungen statt allgemeiner Tipps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section id="membership" className="py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Mitgliedschaften
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                Die drei Mitgliedschafts-Modelle
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {membershipTiers.map((tier) => (
                <div 
                  key={tier.name}
                  className={`relative bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                    tier.popular 
                      ? "border-ekg-coral ring-2 ring-ekg-coral ring-offset-2" 
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-ekg-coral text-white text-xs font-medium">
                        Empfohlen
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-serif mb-2 text-foreground">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-serif text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">€/Monat</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 flex-shrink-0 ${
                          tier.color === "primary" ? "text-primary" : 
                          tier.color === "coral" ? "text-ekg-coral" : "text-ekg-gold"
                        }`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full rounded-full ${
                      tier.color === "coral" 
                        ? "bg-ekg-coral hover:bg-ekg-coral/90 text-white" 
                        : tier.color === "gold"
                        ? "bg-ekg-gold hover:bg-ekg-gold/90 text-white"
                        : ""
                    }`}
                  >
                    Mitglied werden
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Wie läuft die Betreuung ab?
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <p className="text-sm font-medium text-foreground">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Wer profitiert besonders?
                </h2>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-ekg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-ekg-coral" />
                      </div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frauenherzen Section */}
        <section className="py-20 bg-gradient-to-br from-ekg-coral/5 via-background to-primary/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-ekg-coral/10 text-ekg-coral text-sm font-medium mb-4">
                  Frauenherzen
                </span>
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Frauenherzen im Fokus
                </h2>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Unterschiede Frau vs. Mann:</strong> Frauen haben oft andere Symptome bei Herzproblemen. 
                    Kleinere Gefäße und hormonelle Einflüsse spielen eine wichtige Rolle.
                  </p>
                  <p>
                    <strong className="text-foreground">Herzinfarkt bei Frauen</strong> wird oft später erkannt, weil die typischen Symptome 
                    (Übelkeit, Atemnot, Rückenschmerzen) weniger bekannt sind als der klassische Brustschmerz.
                  </p>
                  <p>
                    <strong className="text-foreground">Spezielle Lebensphasen:</strong> Schwangerschaft und Menopause bringen besondere 
                    Herausforderungen für das Herz mit sich.
                  </p>
                  <p className="text-foreground font-medium">
                    Der Herzschlag-Club unterstützt Frauen mit gezielter Aufklärung & Betreuung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Häufige Fragen zum Herzschlag-Club
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { q: "Wie lange ist die Mindestlaufzeit?", a: "Es gibt keine Mindestlaufzeit. Sie können monatlich kündigen." },
                  { q: "Wie kann ich kündigen?", a: "Sie können jederzeit zum Ende des laufenden Monats kündigen – per E-Mail oder über Ihr Mitgliedskonto." },
                  { q: "Sind das Kassenleistungen?", a: "Nein, es handelt sich um Selbstzahlerleistungen. PKV-Versicherte können die Rechnung bei ihrer Versicherung einreichen." },
                  { q: "Ist der Club ein Notdienst?", a: "Nein! Bei akuten Beschwerden bitte 112 wählen. Der Club ist für die regelmäßige Betreuung, nicht für Notfälle." },
                  { q: "Gilt die normale ärztliche Schweigepflicht?", a: "Ja, selbstverständlich unterliegt Dr. Suwelack der ärztlichen Schweigepflicht." },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-ekg-coral/10">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                Bereit für regelmäßige Herzgesundheit?
              </h2>
              <p className="text-muted-foreground mb-6">
                Starten Sie jetzt mit dem Herzschlag-Club und behalten Sie Ihr Herz langfristig im Blick.
              </p>
              <Button size="lg" className="rounded-full bg-ekg-coral hover:bg-ekg-coral/90">
                <Heart className="w-5 h-5 mr-2" />
                Mitglied werden
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <div className="bg-ekg-coral/10 py-4 border-t border-ekg-coral/20">
          <div className="container px-4">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-5 h-5 text-ekg-coral" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Bei akuten Beschwerden</strong> bitte <strong className="text-ekg-coral">112</strong> wählen.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HerzschlagClub;
