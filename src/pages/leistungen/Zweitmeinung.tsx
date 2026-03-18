import { Link, useNavigate } from "react-router-dom";
import { FileCheck, Clock, Shield, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const Zweitmeinung = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ärztliche Zweitmeinung",
    "description": "Unabhängige fachärztliche Zweitmeinung zu kardiologischen Befunden. Verständliche Einordnung durch eine erfahrene Kardiologin.",
    "provider": {
      "@type": "Physician",
      "name": "Dr. med. Rebekka Suwelack",
      "medicalSpecialty": "Cardiology"
    },
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead 
        title="Ärztliche Zweitmeinung"
        description="Unabhängige kardiologische Zweitmeinung zu Ihren Befunden. Verständliche Einordnung, konkrete Empfehlungen. 79€ - Antwort in 48h."
        canonical="/leistungen/zweitmeinung"
        schema={schema}
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          <Breadcrumbs items={[
            { label: "Leistungen", href: "/#services" },
            { label: "Ärztliche Zweitmeinung" }
          ]} />

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekg-coral/10 text-ekg-coral text-sm font-medium mb-6">
              <FileCheck className="w-4 h-4" />
              <span>Empfohlen</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Ärztliche Zweitmeinung
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sie haben einen kardiologischen Befund erhalten und möchten eine unabhängige Einschätzung? 
              Erhalten Sie Klarheit und Sicherheit durch eine erfahrene Fachärztin.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">79 €</span>
              <span className="text-muted-foreground">einmalig</span>
            </div>
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/zweitmeinung">
                <MessageSquare className="w-4 h-4 mr-2" />
                Zweitmeinung anfordern
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Schnelle Antwort</h3>
                <p className="text-muted-foreground">
                  Ausführliche Stellungnahme innerhalb von 48 Stunden – ohne monatelange Wartezeit.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Unabhängige Expertise</h3>
                <p className="text-muted-foreground">
                  Objektive Einschätzung ohne Interessenkonflikte – nur Ihre Gesundheit zählt.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Verständliche Erklärung</h3>
                <p className="text-muted-foreground">
                  Ihr Befund wird so erklärt, dass Sie ihn wirklich verstehen können.
                </p>
              </div>
            </div>
          </div>

          {/* When useful */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Wann ist eine Zweitmeinung sinnvoll?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Sie haben einen Befund erhalten, der Sie beunruhigt",
                "Die vorgeschlagene Behandlung erscheint Ihnen zu invasiv",
                "Sie verstehen Ihren Befund nicht vollständig",
                "Sie möchten sicher sein, bevor Sie eine Entscheidung treffen",
                "Verschiedene Ärzte haben unterschiedliche Meinungen",
                "Sie möchten eine moderne, telemedizinische Perspektive"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Das ist im Preis enthalten</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Sichtung aller eingereichten Unterlagen (EKGs, Befunde, Arztbriefe)",
                "Ausführliche schriftliche Stellungnahme",
                "Verständliche Erklärung der Diagnose",
                "Einschätzung der vorgeschlagenen Therapie",
                "Alternative Behandlungsoptionen (falls relevant)",
                "Konkrete Empfehlungen für das weitere Vorgehen",
                "Hinweise für das Gespräch mit Ihrem behandelnden Arzt",
                "Möglichkeit für eine Rückfrage per E-Mail"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related content */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Mehr erfahren</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/herzgesundheit/erkrankungen"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Herz-Kreislauf-Erkrankungen verstehen
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Überblick über KHK, Herzinsuffizienz, Klappenerkrankungen und mehr.
                </p>
                <span className="text-sm text-primary inline-flex items-center gap-1">
                  Zur Wissensseite <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link 
                to="/blog/vorhofflimmern-symptome-behandlung"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Vorhofflimmern: Symptome & Behandlung
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Die häufigste Rhythmusstörung – verständlich erklärt.
                </p>
                <span className="text-sm text-primary inline-flex items-center gap-1">
                  Zum Blogartikel <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-ekg-mint/20 rounded-2xl text-center">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Sicherheit durch Expertise
            </h2>
            <p className="text-muted-foreground mb-6">
              Lassen Sie Ihre Befunde von einer unabhängigen Fachärztin einschätzen 
              und treffen Sie informierte Entscheidungen über Ihre Gesundheit.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/zweitmeinung">
                <MessageSquare className="w-4 h-4 mr-2" />
                Zweitmeinung anfordern – 69 €
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Zweitmeinung;
