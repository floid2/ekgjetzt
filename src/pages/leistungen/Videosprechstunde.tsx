import { Link } from "react-router-dom";
import { Video, Clock, Shield, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const Videosprechstunde = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Video-Sprechstunde",
    "description": "Persönliche kardiologische Video-Sprechstunde mit einer Fachärztin. 30 Minuten individuelle Beratung.",
    "provider": {
      "@type": "Physician",
      "name": "Dr. med. Rebekka Suwelack",
      "medicalSpecialty": "Cardiology"
    },
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead 
        title="Video-Sprechstunde"
        description="Persönliche kardiologische Video-Sprechstunde mit einer erfahrenen Fachärztin. 30 Minuten individuelle Beratung für 99€."
        canonical="/leistungen/videosprechstunde"
        schema={schema}
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          <Breadcrumbs items={[
            { label: "Leistungen", href: "/#services" },
            { label: "Video-Sprechstunde" }
          ]} />

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              <span>Persönliche Beratung</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Video-Sprechstunde
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Komplexe Fragen brauchen Zeit und persönlichen Austausch. In der Video-Sprechstunde 
              besprechen wir Ihre Anliegen ausführlich und individuell – von Angesicht zu Angesicht.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">99 €</span>
              <span className="text-muted-foreground">30 Minuten</span>
            </div>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/#contact">
                <Calendar className="w-4 h-4 mr-2" />
                Termin anfragen
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">30 Minuten Zeit</h3>
                <p className="text-muted-foreground">
                  Ausreichend Zeit für Ihre Fragen – ohne Hetze, ohne Wartezimmer.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Datenschutz</h3>
                <p className="text-muted-foreground">
                  DSGVO-konforme Videoverbindung mit Ende-zu-Ende-Verschlüsselung.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Video className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Von zu Hause</h3>
                <p className="text-muted-foreground">
                  Bequem von Ihrem Computer, Tablet oder Smartphone – egal wo Sie sind.
                </p>
              </div>
            </div>
          </div>

          {/* When useful */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Ideal für diese Anliegen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Ausführliche Besprechung komplexer Unterlagen",
                "Beratung zu Behandlungsoptionen und deren Vor-/Nachteilen",
                "Fragen zu Medikamenten und Nebenwirkungen",
                "Beratung vor geplanten Eingriffen",
                "Lifestyle-Beratung bei Herzerkrankungen",
                "Psychische Belastung durch Herzerkrankung",
                "Beratung für Angehörige von Herzpatienten",
                "Fragen, die sich nicht in einem kurzen Befund klären lassen"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">So läuft es ab</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Anfrage</h3>
                <p className="text-sm text-muted-foreground">
                  Sie senden Ihre Anfrage mit Ihrem Anliegen.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Terminvorschlag</h3>
                <p className="text-sm text-muted-foreground">
                  Sie erhalten Terminvorschläge zur Auswahl.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Unterlagen</h3>
                <p className="text-sm text-muted-foreground">
                  Sie laden relevante Befunde vorab hoch.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">Gespräch</h3>
                <p className="text-sm text-muted-foreground">
                  30 Minuten persönliche Beratung per Video.
                </p>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Das ist im Preis enthalten</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "30 Minuten persönliches Videogespräch",
                "Vorbereitung durch Sichtung Ihrer Unterlagen",
                "Ausführliche Beantwortung Ihrer Fragen",
                "Verständliche Erklärungen ohne Fachchinesisch",
                "Schriftliche Zusammenfassung der wichtigsten Punkte",
                "Bei Bedarf: Empfehlung für das weitere Vorgehen"
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
                to="/herzgesundheit/frauenherzen"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Frauenherzen: Besonderheiten
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Warum Herzerkrankungen bei Frauen oft anders verlaufen.
                </p>
                <span className="text-sm text-primary inline-flex items-center gap-1">
                  Zur Wissensseite <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link 
                to="/herzschlagclub"
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Herzschlag-Club
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Regelmäßige Betreuung mit Video-Sprechstunden inklusive.
                </p>
                <span className="text-sm text-primary inline-flex items-center gap-1">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-ekg-mint/20 rounded-2xl text-center">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Persönliche Beratung gewünscht?
            </h2>
            <p className="text-muted-foreground mb-6">
              Vereinbaren Sie einen Termin für Ihre Video-Sprechstunde und besprechen Sie 
              Ihre Anliegen ausführlich mit einer erfahrenen Kardiologin.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/#contact">
                <Calendar className="w-4 h-4 mr-2" />
                Termin anfragen – 99 €
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Videosprechstunde;
