import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§1 Anbieter</h2>
              <p>Dr. med. Rebekka Suwelack, Fachärztin für Innere Medizin und Kardiologie</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§2 Leistungen</h2>
              <p>Analyse von EKG-Daten und ärztliche Zweitmeinung auf ärztliche Dokumente.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§3 Vertragsschluss</h2>
              <p>Der Vertrag kommt mit Einreichen der Daten und erfolgreicher Zahlung über Stripe zustande.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§4 Zahlung</h2>
              <p>Zahlung über Stripe, es gelten Endpreise (Kleinunternehmerregelung § 19 UStG).</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§5 Widerruf</h2>
              <p>Kein Widerrufsrecht nach § 312g Abs. 2 Nr. 1 BGB – individuelle Gesundheitsleistung.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§6 Haftung</h2>
              <p>Keine Haftung für unvollständige oder fehlerhafte Nutzerangaben. Kein Notfalldienst.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§7 Gerichtsstand</h2>
              <p>Gerichtsstand ist Düsseldorf. Es gilt deutsches Recht.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AGB;
