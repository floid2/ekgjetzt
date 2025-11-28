import { X, Target, Users, Cog, Server, Shield, Megaphone, Calculator, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailSectionProps {
  id: number;
  onClose: () => void;
}

const recommendations = {
  1: {
    title: "Telemedizinische Direktservices",
    subtitle: "EKG-Analyse, Zweitmeinung, Video",
    color: "teal",
    sections: [
      {
        icon: <Target className="w-5 h-5" />,
        title: "Angebot & Preise",
        items: [
          "Good: EKG-Analyse Basic — 39€, Befund in 48h",
          "Better: Arztbrief-Zweitmeinung — 69€, ausführlicher Bericht + E-Mail-Rückfragen",
          "Best: Video-Konsultation Premium — 99€, 20 Min Call + Zusammenfassung",
          "Bundle-Option: EKG + Video-Nachbesprechung zum Kombipreis",
        ],
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Funnel & UX",
        items: [
          "Getrennte Landingpages für jeden Service",
          "Minimales Formular: Upload, Patientendaten, Einwilligung",
          "SLA-Angaben deutlich sichtbar",
          "Automatische E-Mail-Bestätigung mit nächstem Schritt",
        ],
      },
      {
        icon: <Cog className="w-5 h-5" />,
        title: "Operative SOPs",
        items: [
          "Eingangs-Triage: Assistenz checkt täglich auf Notfälle",
          "Befundung mit einheitlichem Formular",
          "Qualitätssicherung: Peer-Review bei jedem 10. Fall",
          "Follow-up: Automatische Mail nach 1 Woche",
        ],
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "Tech-Stack",
        items: [
          "n8n für Workflow-Automatisierung",
          "Stripe für Zahlungsabwicklung",
          "Zertifizierter Video-Anbieter (arzt-direkt/Red Medical)",
          "Verschlüsselte Cloud mit ISO27001",
        ],
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "DSGVO & Legal",
        items: [
          "Impressum mit Kammerangaben",
          "Datenschutzerklärung für Gesundheitsdaten",
          "AVV mit allen externen Tools",
          "Notfallhinweis auf jeder Seite",
        ],
      },
      {
        icon: <Megaphone className="w-5 h-5" />,
        title: "Marketing",
        items: [
          "SEO: Blog zu Herzrhythmusstörungen, Smartwatch-EKG",
          "8-Wochen Contentplan: 1 Blogpost pro Woche",
          "Google Ads auf Keywords (30€/Tag)",
          "Partnerschaft mit Herzstiftung",
        ],
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        title: "Unit Economics",
        items: [
          "LTV initial ~50€, Ziel >80€ in 6 Monaten",
          "CAC anfangs ~40-50€, Ziel <20€",
          "Break-Even: ~10 Min pro EKG-Fall",
          "Bruttomarge >70% bei Skalierung",
        ],
      },
    ],
  },
  2: {
    title: "Versicherer-Kooperation",
    subtitle: "B2B2C Partnerschaft",
    color: "coral",
    sections: [
      {
        icon: <Target className="w-5 h-5" />,
        title: "Angebot & Preise",
        items: [
          "Pilot: 100 Fälle für 5.000€ Fixpreis",
          "Standard: Unbegrenzt, 10% unter B2C-Preis",
          "Premium: Full-Service Pauschal ~50.000€/Jahr",
          "GOÄ-konforme Abrechnung für PKV",
        ],
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Akquise & Funnel",
        items: [
          "B2B Landing Page \"Für Versicherungen\"",
          "Pitch-Deck mit Case-Rechnung",
          "Top-10 Versicherer im DACH identifizieren",
          "Personalisierte Outbound-Anschreiben ab Woche 4",
        ],
      },
      {
        icon: <Cog className="w-5 h-5" />,
        title: "Operative SOPs",
        items: [
          "VIP-Fallbehandlung mit priorisierter SLA",
          "Monatlicher Abstimm-Call mit Partner",
          "Qualitätsbericht quartalsweise",
          "Skalierungsplan bei >X Fällen/Monat",
        ],
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "Tech-Stack",
        items: [
          "REST-API oder Partner-Portal",
          "PowerBI/Tableau Dashboard für Status",
          "HTTPS + Auth Token für Sicherheit",
          "FastBill für B2B Rechnungen",
        ],
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "DSGVO & Legal",
        items: [
          "AVV mit jeder Versicherung",
          "Einwilligungsvorlage für Versicherte",
          "Leistungsabgrenzung im Vertrag",
          "EuGH-Urteil für DACH-Expansion nutzen",
        ],
      },
      {
        icon: <Megaphone className="w-5 h-5" />,
        title: "Marketing",
        items: [
          "Whitepaper \"Tele-Kardiologie für Versicherer\"",
          "Teilnahme an Health Insurance Events",
          "Gemeinsame Pressemitteilung bei Pilot-Start",
          "FOMO-Effekt bei Konkurrenten nutzen",
        ],
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        title: "Unit Economics",
        items: [
          "LTV pro Partner: 750k-1Mio€ über 3-5 Jahre",
          "CAC ~10k€ (100h Vertriebszeit + Material)",
          "LTV:CAC Ratio ~1:50",
          "Marge ~60% bei dediziertem Personal",
        ],
      },
    ],
  },
  3: {
    title: "Premium-Mitgliedschaft",
    subtitle: "Herzschlag-Club",
    color: "gold",
    sections: [
      {
        icon: <Target className="w-5 h-5" />,
        title: "Angebot & Preise",
        items: [
          "Basic (19€/M): Quartals-Check, Wissensbibliothek, 3-Tage-Antwort",
          "Plus (49€/M): Monatliche Auswertung, <24h Support, Gruppensprechstunde",
          "VIP (99€/M): Quartals-Video, Aktionsplan, Telefon-Hotline",
          "Beta-Preise zum Start, später erhöhen",
        ],
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Funnel & UX",
        items: [
          "Bewerbung an Bestandskunden nach Einzelleistung",
          "E-Mail-Drip: \"1. Monat kostenlos\"",
          "Feature-Comparison auf Landingpage",
          "Mitglieder-Dashboard mit Countdown zum nächsten Check",
        ],
      },
      {
        icon: <Cog className="w-5 h-5" />,
        title: "Operative SOPs",
        items: [
          "Onboarding: Willkommens-Mail in 48h",
          "Monatliche Routine: Query am 1. für fällige Checks",
          "Fragen-Management mit Triage durch Assistant",
          "Notfall-Eskalation bei akuten Symptomen",
        ],
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "Tech-Stack",
        items: [
          "Stripe Subscriptions oder Chargebee",
          "Memberstack oder custom Login-Bereich",
          "Hubspot/Brevo für E-Mail-Automatisierung",
          "Analytics für Engagement & Churn-Vorhersage",
        ],
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "DSGVO & Legal",
        items: [
          "Erweiterte Einwilligung für Langzeit-Speicherung",
          "Klare Abgrenzung von Hausarzt-Funktion",
          "Online-Kündigungsmöglichkeit",
          "Medizinische Aufbewahrungspflicht 10 Jahre",
        ],
      },
      {
        icon: <Megaphone className="w-5 h-5" />,
        title: "Marketing",
        items: [
          "Cross-Sell an Einmalservice-Kunden",
          "Testimonials von zufriedenen Mitgliedern",
          "Referral-Programm: Freund werben",
          "Content-Marketing zu präventiver Herzgesundheit",
        ],
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        title: "Unit Economics",
        items: [
          "100 Mitglieder × 29€ = 34.800€/Jahr",
          "Hohe Marge durch geringe Inanspruchnahme",
          "Ziel: <5% monatliche Churn-Rate",
          "LTV steigt mit Membership-Dauer",
        ],
      },
    ],
  },
};

const colorMap = {
  teal: {
    bg: "bg-primary/5",
    border: "border-primary/20",
    header: "bg-gradient-to-r from-primary to-primary/80",
    icon: "bg-primary/10 text-primary",
    badge: "bg-primary/10 text-primary",
  },
  coral: {
    bg: "bg-ekg-coral/5",
    border: "border-ekg-coral/20",
    header: "bg-gradient-to-r from-ekg-coral to-ekg-coral/80",
    icon: "bg-ekg-coral/10 text-ekg-coral",
    badge: "bg-ekg-coral/10 text-ekg-coral",
  },
  gold: {
    bg: "bg-ekg-gold/5",
    border: "border-ekg-gold/20",
    header: "bg-gradient-to-r from-ekg-gold to-ekg-gold/80",
    icon: "bg-ekg-gold/10 text-ekg-gold",
    badge: "bg-ekg-gold/10 text-ekg-gold",
  },
};

const DetailSection = ({ id, onClose }: DetailSectionProps) => {
  const data = recommendations[id as keyof typeof recommendations];
  const colors = colorMap[data.color as keyof typeof colorMap];

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="container px-4 max-w-6xl">
        {/* Back button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Zurück zur Übersicht</span>
        </button>

        {/* Header */}
        <div className={cn("rounded-2xl p-8 md:p-12 mb-12 text-primary-foreground", colors.header)}>
          <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-sm font-medium mb-4">
            Empfehlung {id}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-2">{data.title}</h2>
          <p className="text-xl opacity-90">{data.subtitle}</p>
        </div>

        {/* 90-Tage Plan Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif text-foreground mb-2">90-Tage Go-to-Market Plan</h3>
          <p className="text-muted-foreground">Detaillierte Umsetzungsstrategie für die ersten 3 Monate</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.sections.map((section, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-xl p-6 border transition-all hover:shadow-lg",
                colors.bg,
                colors.border
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colors.icon)}>
                  {section.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                    <span className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", colors.icon.replace("text-", "bg-"))} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Close button at bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;