import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Impressum</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <div>
              <p className="font-medium text-foreground">Dr. med. Rebekka Suwelack</p>
              <p>Fachärztin für Innere Medizin und Kardiologie</p>
              <p>Louise-Dumont-Straße 13</p>
              <p>40211 Düsseldorf</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-medium text-foreground">Kontakt</p>
              <p>E-Mail: info@ekgjetzt.de</p>
            </div>

            <div>
              <p className="font-medium text-foreground">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>
              <p>Dr. med. Rebekka Suwelack, Adresse wie oben</p>
            </div>

            <div>
              <p className="font-medium text-foreground">Haftungshinweis</p>
              <p>
                Die bereitgestellten Informationen und Leistungen stellen keine Notfallversorgung dar. 
                Bei akuten Beschwerden wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst (116117) 
                oder den Notruf (112).
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">EU-Streitschlichtung</p>
              <p>
                Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">Gültigkeit</p>
              <p>
                Dieses Impressum gilt auch für unsere Profile bei LinkedIn, Instagram und Facebook – sofern vorhanden.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;
