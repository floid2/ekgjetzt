import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Check, ArrowRight, AlertTriangle, Users, FileText, BarChart3, ClipboardCheck, Shield, Lock, Server, UserCheck, BookOpen, Activity, Beaker } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HerzschlagClub = () => {
  const membershipTiers = [
    {
      name: "Basic",
      price: "19",
      description: "Ideal für alle, die ihr Herz regelmäßig im Blick behalten möchten.",
      features: [
        "Quartalsweiser EKG- oder Gesundheitsdaten-Check",
        "Kurzer schriftlicher Befund",
        "Einschätzung: unauffällig / kontrollbedürftig / abklärungsbedürftig",
        "Antwortzeit per E-Mail: innerhalb von 72 Stunden",
        "Zugriff auf die medizinische Wissensbibliothek von EKGJetzt",
      ],
      color: "primary",
      cta: "Basic wählen",
    },
    {
      name: "Plus",
      price: "49",
      description: "Für Menschen, die eine monatliche fachärztliche Begleitung wünschen.",
      features: [
        "Monatlicher EKG- oder Daten-Check",
        "Ausführlicher Monatsbericht (inkl. Trends)",
        "Persönliche Empfehlungen zu Bewegung, Herzfrequenz, Stress & Schlaf",
        "E-Mail-Antwort innerhalb von 24 Stunden",
        "Frühzeitiges Erkennen von Veränderungen",
        "Zugang zur Wissensbibliothek",
      ],
      color: "coral",
      popular: true,
      cta: "Plus wählen",
    },
    {
      name: "Premium",
      price: "99",
      description: "Die umfassendste Betreuung – inkl. persönlicher Videosprechstunden.",
      features: [
        "Monatlicher Check + ausführlicher persönlicher Report",
        "Antwort außerhalb der regulären Zeiten möglich",
        "Priorisierte Bearbeitung (innerhalb von 12 Stunden an Werktagen)",
        "Vierteljährliche Video-Sprechstunde (20–30 Min)",
        "Individueller Risikoprofil-Plan",
        "Persönliche Empfehlungen für das gesamte Herz-Kreislauf-System",
      ],
      color: "gold",
      cta: "Premium wählen",
    },
  ];

  const benefits = [
    "Menschen mit Bluthochdruck",
    "Personen mit Herzrhythmusstörungen (z. B. Extrasystolen, Vorhofflimmern)",
    "Patient:innen mit erhöhten kardiovaskulären Risiken",
    "Frauen mit spezifischen Herzrisiken (Schwangerschaft, Menopause, atypische Symptome)",
    "Sportler:innen, die Belastung, Puls, Regeneration & Myokarditis-Risiken im Blick behalten möchten",
    "Menschen mit vielen Smartwatch-Daten, aber wenig Klarheit",
    "Personen mit Ängsten oder Unsicherheiten rund um das Herz",
    "Beruflich stark Eingespannte, die eine regelmäßige Betreuung ohne Praxisstress möchten",
  ];

  const steps = [
    { 
      title: "Mitgliedschaft wählen", 
      description: "Sie entscheiden sich für Basic, Plus oder Premium – ganz nach Ihrem Bedarf.",
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      title: "Gesundheitsfragebogen ausfüllen", 
      description: "Damit die Ärztin Ihren Zustand und Ihre Risiken kennt.",
      icon: <FileText className="w-6 h-6" /> 
    },
    { 
      title: "Regelmäßige Checks", 
      description: "Sie laden EKGs oder Daten hoch – die Ärztin analysiert und bewertet alles persönlich.",
      icon: <BarChart3 className="w-6 h-6" /> 
    },
    { 
      title: "Persönlicher Bericht & Empfehlungen", 
      description: "Sie erhalten klare Orientierung, konkrete Maßnahmen und individuelle Hinweise.",
      icon: <ClipboardCheck className="w-6 h-6" /> 
    },
  ];

  const whyBulletpoints = [
    "Frühzeitiges Erkennen von Risiken",
    "Regelmäßige EKG- und Datenauswertung",
    "Persönliche Bewertung durch eine erfahrene Kardiologin",
    "Priorisierte Antworten auf medizinische Fragen",
    "Individuelle Empfehlungen zu Bewegung, Ernährung & Lebensstil",
    "Mehr Sicherheit im Alltag – ohne Praxisbesuche",
  ];

  const frauenherzenBullets = [
    "Frauen haben häufiger atypische Herzinfarkt-Symptome",
    "Gefäße reagieren anders auf Stress & Hormone",
    "Das Risiko steigt nach der Menopause deutlich",
    "Schwangerschaft und Präeklampsie beeinflussen das Herz langfristig",
    "Eisenmangel & Rhythmusstörungen treten häufiger auf",
  ];

  const scienceTopics = [
    { label: "Belastung & Blutdruck", icon: <Activity className="w-5 h-5" /> },
    { label: "Smartwatch-EKG vs. 12-Kanal-EKG", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Lp(a) & Cholesterin", icon: <Beaker className="w-5 h-5" /> },
    { label: "Frauenherzen-Forschung", icon: <Heart className="w-5 h-5" /> },
    { label: "Myokarditis-Risiken", icon: <Shield className="w-5 h-5" /> },
  ];

  const securityFeatures = [
    { label: "Vollständig DSGVO-konform", icon: <Shield className="w-5 h-5" /> },
    { label: "Server in der EU", icon: <Server className="w-5 h-5" /> },
    { label: "Verschlüsselte Datenübertragung", icon: <Lock className="w-5 h-5" /> },
    { label: "Zugriff nur durch die Ärztin", icon: <UserCheck className="w-5 h-5" /> },
    { label: "Ärztliche Schweigepflicht garantiert", icon: <BookOpen className="w-5 h-5" /> },
  ];

  const faqs = [
    { q: "Wie lange ist die Mindestlaufzeit?", a: "Es gibt keine Mindestlaufzeit. Sie können monatlich kündigen." },
    { q: "Wie kann ich kündigen?", a: "Sie können jederzeit zum Ende des laufenden Monats kündigen – per E-Mail oder über Ihr Mitgliedskonto." },
    { q: "Sind das Kassenleistungen?", a: "Nein, es handelt sich um Selbstzahlerleistungen. PKV-Versicherte können die Rechnung bei ihrer Versicherung einreichen." },
    { q: "Ist der Club ein Notdienst?", a: "Nein! Bei akuten Beschwerden bitte 112 wählen. Der Club ist für die regelmäßige Betreuung, nicht für Notfälle." },
    { q: "Gilt die normale ärztliche Schweigepflicht?", a: "Ja, selbstverständlich unterliegt Dr. Suwelack der ärztlichen Schweigepflicht." },
  ];

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-ekg-coral/10 via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--ekg-coral)/0.08),transparent_50%)]" />
          <div className="container px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekg-coral/10 text-ekg-coral text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Herzschlag-Club</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-foreground leading-tight">
                Der Herzschlag-Club
                <span className="text-ekg-coral block mt-2">regelmäßige telekardiologische Begleitung</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Für alle, die ihre Herzgesundheit nicht dem Zufall überlassen möchten: persönliche Betreuung, regelmäßige Checks und klare Empfehlungen – direkt durch eine Fachärztin für Kardiologie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Mitglied werden
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="#why">Mehr erfahren</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section id="why" className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
                  Warum regelmäßige Begleitung so wichtig ist
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                  Herz-Kreislauf-Erkrankungen entwickeln sich oft schleichend. Viele Menschen spüren lange nichts – bis plötzlich Beschwerden auftreten. Gleichzeitig erzeugen Smartwatches eine enorme Menge an Daten, die ohne medizinische Einordnung schwer zu verstehen sind. Der Herzschlag-Club verbindet moderne Technologie mit fachärztlicher Expertise: Sie erhalten regelmäßige Orientierung, klare Einschätzungen und Empfehlungen, die sich an Ihren persönlichen Gesundheitsdaten und Ihrer Lebenssituation orientieren.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  {whyBulletpoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground">{point}</p>
                    </div>
                  ))}
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
                Wählen Sie die Mitgliedschaft, die zu Ihnen passt
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipTiers.map((tier) => (
                <div 
                  key={tier.name}
                  className={`relative bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                    tier.popular 
                      ? "border-ekg-coral ring-2 ring-ekg-coral ring-offset-2 scale-105" 
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-ekg-coral text-white text-xs font-medium shadow-lg">
                        Empfohlen
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-serif mb-2 text-foreground">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-serif text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground text-lg">€/Monat</span>
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
                    className={`w-full rounded-full text-base py-5 ${
                      tier.color === "coral" 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : tier.color === "gold"
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    {tier.cta}
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
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  So läuft Ihre Betreuung im Herzschlag-Club ab
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-6 border border-border text-center relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
              
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
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
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
                  Frauenherzen verdienen besondere Aufmerksamkeit
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                  Herzerkrankungen äußern sich bei Frauen oft anders als bei Männern – und werden deshalb häufiger zu spät erkannt. Hormonelle Einflüsse, Schwangerschaft, Menopause und ein anderes Gefäßmuster machen das weibliche Herz besonders sensibel.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-6">
                <div className="space-y-3">
                  {frauenherzenBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-ekg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-4 h-4 text-ekg-coral" />
                      </div>
                      <p className="text-muted-foreground">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-foreground font-medium text-lg">
                Im Herzschlag-Club berücksichtigt Dr. Suwelack diese Unterschiede gezielt – für eine präzise, geschlechtersensible Betreuung.
              </p>
            </div>
          </div>
        </section>

        {/* Science & Transparency */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
                  Auf dem neuesten Stand der medizinischen Forschung
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                  Die Empfehlungen im Herzschlag-Club basieren auf aktuellen Leitlinien, Studien und telemedizinischen Best Practices. Moderne Wearables liefern wertvolle Daten – erst die ärztliche Interpretation macht sie medizinisch nutzbar.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {scienceTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                    <span className="text-primary">{topic.icon}</span>
                    <span className="text-sm text-foreground">{topic.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Ihre Daten sind geschützt
                </h2>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {securityFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">{feature.icon}</span>
                      </div>
                      <span className="text-foreground">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                  Häufige Fragen
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-card rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-ekg-coral/10 via-background to-primary/5">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
                Bereit für mehr Klarheit & Sicherheit?
              </h2>
              <Button size="lg" className="rounded-full bg-ekg-coral hover:bg-ekg-coral/90 text-white px-10 py-6 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Jetzt Mitglied werden
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
