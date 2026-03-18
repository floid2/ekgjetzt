import { Link } from "react-router-dom";
import { Watch, Clock, Shield, CheckCircle, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const SmartwatchEKGService = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Smartwatch-EKG Analyse",
    "description": "Professionelle Auswertung Ihres Smartwatch-EKGs durch eine Fachärztin für Kardiologie. Ärztliche Ersteinschätzung innerhalb von 48 Stunden.",
    "provider": {
      "@type": "Physician",
      "name": "Dr. med. Rebekka Suwelack",
      "medicalSpecialty": "Cardiology"
    },
    "offers": {
      "@type": "Offer",
      "price": "39",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead 
        title="Smartwatch-EKG Analyse"
        description="Lassen Sie Ihr Apple Watch, Samsung Galaxy Watch oder Withings EKG von einer erfahrenen Kardiologin auswerten. Befund in 48h für nur 39€."
        canonical="/leistungen/smartwatch-ekg"
        schema={schema}
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          <Breadcrumbs items={[
            { label: "Leistungen", href: "/#services" },
            { label: "Smartwatch-EKG Analyse" }
          ]} />

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Watch className="w-4 h-4" />
              <span>Beliebteste Leistung</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Smartwatch-EKG Analyse
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ihre Smartwatch zeigt „Auffällig" oder „Vorhofflimmern"? Erhalten Sie eine fundierte 
              fachärztliche Einschätzung – schnell, unkompliziert und verständlich erklärt.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">39 €</span>
              <span className="text-muted-foreground">einmalig</span>
            </div>
            <Button size="lg" className="rounded-full" onClick={() => window.location.href = "/ekg-analyse"}>
              <Upload className="w-4 h-4 mr-2" />
              EKG jetzt hochladen
            </Button>
          </div>

          {/* Features */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Schnelle Antwort</h3>
                <p className="text-muted-foreground">
                  Befund innerhalb von 48 Stunden – keine wochenlange Wartezeit auf einen Facharzttermin.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Fachärztliche Expertise</h3>
                <p className="text-muted-foreground">
                  Auswertung durch eine erfahrene Kardiologin mit über 10 Jahren klinischer Erfahrung.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Verständlicher Befund</h3>
                <p className="text-muted-foreground">
                  Klare Einschätzung und konkrete Handlungsempfehlungen – kein medizinisches Fachchinesisch.
                </p>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">So funktioniert es</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">EKG exportieren</h3>
                <p className="text-sm text-muted-foreground">
                  Exportieren Sie Ihr Smartwatch-EKG als PDF aus der Health-App oder Samsung Health.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hochladen & bezahlen</h3>
                <p className="text-sm text-muted-foreground">
                  Laden Sie das EKG hoch, beantworten Sie kurze Fragen und bezahlen Sie sicher online.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Befund erhalten</h3>
                <p className="text-sm text-muted-foreground">
                  Innerhalb von 48 Stunden erhalten Sie Ihren verständlichen Befund per E-Mail.
                </p>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Das ist im Preis enthalten</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Analyse Ihres Smartwatch-EKGs durch eine Fachärztin",
                "Einschätzung: unauffällig / kontrollbedürftig / abklärungsbedürftig",
                "Verständliche Erklärung des Befunds",
                "Konkrete Handlungsempfehlung",
                "Hinweise für das Gespräch mit Ihrem Hausarzt",
                "Schriftlicher Befund zum Speichern"
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
                to="/herzgesundheit/rhythmusstoerungen"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Herzrhythmusstörungen verstehen
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Alles über Extrasystolen, Vorhofflimmern und was Ihr EKG zeigt.
                </p>
                <span className="text-sm text-primary inline-flex items-center gap-1">
                  Zur Wissensseite <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link 
                to="/blog/smartwatch-ekg-was-zeigt-es"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Was zeigt ein Smartwatch-EKG wirklich?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Möglichkeiten und Grenzen von Apple Watch, Samsung & Co.
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
              Bereit für Klarheit?
            </h2>
            <p className="text-muted-foreground mb-6">
              Laden Sie Ihr Smartwatch-EKG hoch und erhalten Sie innerhalb von 48 Stunden 
              eine fundierte Einschätzung.
            </p>
            <Button size="lg" className="rounded-full" onClick={() => window.location.href = "/ekg-analyse"}>
              <Upload className="w-4 h-4 mr-2" />
              EKG jetzt hochladen – 39 €
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SmartwatchEKGService;
