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
            
            {/* Verantwortliche Stelle */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">Verantwortliche Stelle gemäß Art. 4 Nr. 7 DSGVO</h2>
              <p>Dr. med. Rebekka Suwelack</p>
              <p>Fachärztin für Innere Medizin und Kardiologie</p>
              <p>Louise-Dumont-Straße 13</p>
              <p>40211 Düsseldorf</p>
              <p>E-Mail: <a href="mailto:info@ekgjetzt.de" className="text-primary hover:underline">info@ekgjetzt.de</a></p>
            </section>

            {/* 1. Arten der verarbeiteten Daten */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">1. Arten der verarbeiteten Daten</h2>
              <p>Wir verarbeiten folgende personenbezogene Daten:</p>
              
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.1 Stammdaten</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Name</li>
                <li>Geburtsdatum</li>
                <li>E-Mail-Adresse</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.2 Gesundheitsdaten (besondere Kategorien nach Art. 9 DSGVO)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>EKG-Daten aus Smartwatches (Apple Watch, Samsung, Fitbit, Garmin etc.)</li>
                <li>medizinische Befunde</li>
                <li>Angaben zu Symptomen</li>
                <li>hochgeladene Dokumente, Bilder und Screenshots</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.3 Technische Daten</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>IP-Adresse</li>
                <li>Browsertyp / Version</li>
                <li>Zeitpunkt des Zugriffs</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.4 Zahlungsdaten</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>werden ausschließlich durch Stripe Payments Europe Ltd. verarbeitet</li>
                <li>wir erhalten keinen Zugriff auf vollständige Zahlungsinformationen</li>
              </ul>
            </section>

            {/* 2. Zwecke der Datenverarbeitung */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">2. Zwecke der Datenverarbeitung und Rechtsgrundlagen</h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2.1 Erbringung der EKG-Analyse und ärztlichen Bewertung</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Erstellung einer fachärztlichen Einschätzung</li>
                <li>Kommunikation mit Ihnen</li>
                <li>Identifikation zur medizinischen Zuordnung</li>
              </ul>
              <p className="mt-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung in Gesundheitsdaten)</li>
              </ul>
              <p className="mt-2 text-sm italic">
                Hinweis: Online-Telemedizin erfordert Einwilligung, da kein reguläres Behandlungsverhältnis vorab besteht.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2.2 Dokumentationspflicht für ärztliche Leistungen</h3>
              <p>Wir sind gesetzlich verpflichtet, medizinische Unterlagen aufzubewahren.</p>
              <p className="mt-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>§ 630f BGB (Dokumentationspflicht)</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2.3 Nutzung der Website und Fehlersicherheit</h3>
              <p>Technische Daten werden verarbeitet, um:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>die Website bereitzustellen</li>
                <li>Sicherheit und Stabilität zu gewährleisten</li>
              </ul>
              <p className="mt-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
              <p>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: sichere und funktionale Website)</p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2.4 Zahlungsabwicklung über Stripe</h3>
              <p>Die Zahlung erfolgt über Stripe Payments Europe Ltd., Dublin.</p>
              <p className="mt-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (betrugsfreie Zahlungsabwicklung)</li>
              </ul>
              <p className="mt-2">
                Stripe verarbeitet Daten teilweise in den USA. Es gelten Standardvertragsklauseln (SCC).
                <br />
                Datenschutz bei Stripe:{" "}
                <a 
                  href="https://stripe.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://stripe.com/privacy
                </a>
              </p>
            </section>

            {/* 3. Einwilligung in Gesundheitsdaten */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">3. Einwilligung in Gesundheitsdaten</h2>
              <p>
                Für die Verarbeitung Ihrer Gesundheitsdaten ist Ihre ausdrückliche Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO erforderlich.
              </p>
              <p className="mt-2">
                Diese wird vor Absenden des Formulars aktiv eingeholt und ist jederzeit mit Wirkung für die Zukunft widerrufbar.
              </p>
              <p className="mt-2">
                Ein Widerruf berührt die Rechtmäßigkeit bereits erfolgter Verarbeitung nicht.
              </p>
            </section>

            {/* 4. Empfänger / Weitergabe von Daten */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">4. Empfänger / Weitergabe von Daten</h2>
              <p>Wir geben personenbezogene Daten nicht an Dritte weiter, außer:</p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.1 Hosting</h3>
              <p>
                Hetzner Online GmbH<br />
                Industriestr. 25<br />
                91710 Gunzenhausen
              </p>
              <p className="mt-2">
                Es besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
                <br />
                Speicherung ausschließlich in Rechenzentren innerhalb der EU.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.2 Zahlungsdienstleister</h3>
              <p>Stripe Payments Europe Ltd.</p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.3 Ärztliche Leistungserbringung</h3>
              <p>Zugriff auf Gesundheitsdaten hat ausschließlich:</p>
              <p className="font-medium text-foreground">Dr. med. Rebekka Suwelack</p>
              <p className="mt-2">
                Eine Weitergabe an andere Ärzte, Versicherungen oder Dritte erfolgt nicht, außer mit ausdrücklicher Zustimmung oder gesetzlicher Pflicht.
              </p>
            </section>

            {/* 5. Speicherdauer */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">5. Speicherdauer</h2>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">5.1 Gesundheitsdaten & medizinische Dokumente</h3>
              <p>Werden gemäß § 630f BGB mindestens 10 Jahre aufbewahrt.</p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">5.2 Zahlungsdaten (über Stripe)</h3>
              <p>Gemäß gesetzlichen Aufbewahrungspflichten 10 Jahre.</p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">5.3 Kommunikationsdaten</h3>
              <p>E-Mails und Formulareingaben werden gemäß Dokumentationspflicht und Behandlungsakteneinsicht ebenfalls mindestens 10 Jahre gespeichert.</p>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">5.4 Technische Logdaten</h3>
              <p>Werden für maximal 14 Tage gespeichert, sofern keine sicherheitsrelevanten Ereignisse Anlass zur längeren Speicherung geben.</p>
            </section>

            {/* 6. Ihre Rechte */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">6. Ihre Rechte als betroffene Person</h2>
              <p>Sie haben folgende Rechte gemäß DSGVO:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Recht auf Auskunft (Art. 15)</li>
                <li>Recht auf Berichtigung (Art. 16)</li>
                <li>Recht auf Löschung (Art. 17, nach Ablauf der Dokumentationspflicht)</li>
                <li>Recht auf Einschränkung (Art. 18)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20)</li>
                <li>Recht auf Widerspruch (Art. 21)</li>
                <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3)</li>
              </ul>
              <p className="mt-3">
                Kontakt:{" "}
                <a href="mailto:info@ekgjetzt.de" className="text-primary hover:underline">
                  info@ekgjetzt.de
                </a>
              </p>
            </section>

            {/* 7. Sicherheit */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">7. Sicherheit der Datenverarbeitung</h2>
              <p>Wir verwenden:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>TLS/SSL-Verschlüsselung</li>
                <li>Zugriffskontrolle</li>
                <li>Serverstandort ausschließlich in der EU</li>
                <li>minimale Datenhaltung</li>
                <li>sichere Verschlüsselung bei Übermittlung und Speicherung</li>
              </ul>
            </section>

            {/* 8. Keine automatisierten Entscheidungen */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">8. Keine automatisierten Entscheidungen</h2>
              <p>Es findet keine automatisierte Entscheidungsfindung gemäß Art. 22 DSGVO statt.</p>
            </section>

            {/* 9. Aufsichtsbehörde */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">9. Aufsichtsbehörde</h2>
              <p>
                Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
                <br />
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

            {/* 10. Aktualität */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">10. Aktualität</h2>
              <p>Stand: Februar 2025</p>
              <p className="mt-2">
                Wir behalten uns vor, diese Erklärung anzupassen, wenn gesetzliche Änderungen dies erfordern.
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
