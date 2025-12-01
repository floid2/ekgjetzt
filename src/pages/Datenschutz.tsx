import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <p className="font-medium text-foreground">Verantwortlich im Sinne der DSGVO:</p>
              <p>Dr. med. Rebekka Suwelack</p>
              <p>Louise-Dumont-Straße 13</p>
              <p>40211 Düsseldorf</p>
              <p>info@ekgjetzt.de</p>
            </div>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">1. Art der verarbeiteten Daten</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Stammdaten (Name, Geburtsdatum, E-Mail)</li>
                <li>Gesundheitsdaten (EKG, Befunde, Symptome)</li>
                <li>Zahlungsdaten (über Stripe)</li>
                <li>Technische Metadaten (IP-Adresse, Browser, Zugriffszeit)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">2. Zwecke und Rechtsgrundlage</h2>
              <p>
                Die Datenverarbeitung erfolgt zur Bereitstellung der Dienstleistung (Art. 6 Abs. 1 lit. b DSGVO) 
                sowie zur medizinischen Einschätzung (Art. 9 Abs. 2 lit. h DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">3. Hosting</h2>
              <p>Unsere Website wird bei Hetzner Online GmbH (EU) gehostet. Es besteht ein AV-Vertrag.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">4. Zahlungsdienstleister</h2>
              <p>
                Stripe Payments Europe Ltd. ist für Zahlungen verantwortlich. Datenschutzerklärung:{" "}
                <a 
                  href="https://stripe.com/de/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://stripe.com/de/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">5. Betroffenenrechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit 
                und Widerspruch. Kontakt: info@ekgjetzt.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">6. Aufsichtsbehörde</h2>
              <p>
                Landesbeauftragte für Datenschutz NRW –{" "}
                <a 
                  href="https://www.ldi.nrw.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.ldi.nrw.de
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Datenschutz;
