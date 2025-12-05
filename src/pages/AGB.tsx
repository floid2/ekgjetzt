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
            
            {/* Anbieter */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">Anbieter</h2>
              <p>Dr. med. Rebekka Suwelack</p>
              <p>Fachärztin für Innere Medizin und Kardiologie</p>
              <p>Louise-Dumont-Straße 13</p>
              <p>40211 Düsseldorf</p>
              <p>E-Mail: <a href="mailto:info@ekgjetzt.de" className="text-primary hover:underline">info@ekgjetzt.de</a></p>
            </section>

            {/* §1 Geltungsbereich */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen regeln das Vertragsverhältnis zwischen
                Dr. med. Rebekka Suwelack (Anbieterin) und den Kundinnen und Kunden (Patientinnen und Patienten),
                die Leistungen der EKG-Analyse, Zweitmeinung oder Videosprechstunde über die Website ekgjetzt.de in Anspruch nehmen.
              </p>
            </section>

            {/* §2 Leistungsbeschreibung */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§2 Leistungsbeschreibung</h2>
              
              <p className="font-medium text-foreground">(1) Der Service umfasst:</p>
              <ul className="list-[lower-alpha] list-inside space-y-1 mt-2">
                <li>Analyse von EKG-Daten aus Smartwatches, Wearables, Apps oder hochgeladenen Dateien (PDF, Screenshot, Foto).</li>
                <li>Ärztliche Zweitmeinung zu vorhandenen Befunden und medizinischen Dokumenten.</li>
                <li>Video-Beratung zu Fragen der Herzgesundheit.</li>
              </ul>

              <p className="font-medium text-foreground mt-4">(2) Die Leistung beinhaltet keine:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Diagnosestellung im rechtlichen Sinne</li>
                <li>Therapieempfehlung im Sinne einer ärztlichen Behandlung</li>
                <li>Notfallversorgung</li>
                <li>Erstellung einer Arbeitsunfähigkeitsbescheinigung</li>
                <li>Verordnung von Medikamenten</li>
                <li>persönliche Untersuchung vor Ort</li>
              </ul>

              <p className="mt-4">
                (3) Die ärztliche Einschätzung basiert ausschließlich auf den vom Kunden übermittelten Informationen.
                Unvollständige oder fehlerhafte Angaben können das Ergebnis beeinflussen.
              </p>
            </section>

            {/* §3 Vertragsschluss */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§3 Vertragsschluss</h2>
              <p>(1) Der Vertrag kommt zustande, sobald der Kunde:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>die erforderlichen Daten über das Online-Formular eingibt,</li>
                <li>die Datenschutzerklärung akzeptiert,</li>
                <li>die AGB bestätigt,</li>
                <li>eine Zahlung über Stripe erfolgreich abschließt.</li>
              </ul>
              <p className="mt-4">(2) Die Anbieterin bestätigt den Vertrag per E-Mail.</p>
            </section>

            {/* §4 Zahlung */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§4 Zahlung</h2>
              <p>(1) Die Zahlung erfolgt über Stripe Payments Europe Ltd.</p>
              <p>(2) Es gelten Endpreise gemäß § 19 UStG (Kleinunternehmerregelung).</p>
              <p>(3) Der Kunde trägt etwaige Bank- oder Zahlungsgebühren.</p>
            </section>

            {/* §5 Widerruf */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§5 Widerruf und sofortige Leistungserbringung</h2>
              <p>
                (1) Bei den angebotenen Leistungen handelt es sich um individuell erstellte Gesundheitsdienstleistungen, 
                die auf ausdrücklichen Wunsch des Kunden sofort beginnen.
              </p>
              <p className="mt-4">(2) Der Kunde erklärt daher im Rahmen des Bestellprozesses:</p>
              <p className="mt-2 italic border-l-4 border-primary pl-4">
                „Ich verlange ausdrücklich, dass mit der Leistungserbringung vor Ablauf der Widerrufsfrist begonnen wird 
                und bestätige, dass mein Widerrufsrecht erlischt, sobald die Leistung vollständig erbracht wurde."
              </p>
              <p className="mt-4">(3) Ein Widerrufsrecht besteht daher nicht (§ 312g Abs. 2 Nr. 1 BGB).</p>
            </section>

            {/* §6 Mitwirkungspflichten */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§6 Mitwirkungspflichten des Kunden</h2>
              <p>(1) Der Kunde verpflichtet sich, alle Angaben wahrheitsgemäß und vollständig zu machen.</p>
              <p>(2) Änderungen an Gesundheitsdaten, Symptomen oder Vorerkrankungen sind unverzüglich mitzuteilen.</p>
              <p>
                (3) Die Anbieterin ist berechtigt, die Leistung abzulehnen, falls die Angaben unzureichend sind 
                oder der Verdacht auf eine akute Notfallsituation besteht.
              </p>
            </section>

            {/* §7 Haftung */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§7 Haftung</h2>
              <p>(1) Die Anbieterin haftet für vorsätzlich oder grob fahrlässig verursachte Schäden.</p>
              
              <p className="mt-4">(2) Bei einfacher Fahrlässigkeit haftet die Anbieterin nur für:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Verletzung wesentlicher Vertragspflichten (Kardinalpflichten),</li>
                <li>wobei die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt ist.</li>
              </ul>

              <p className="mt-4">(3) Bei Verletzung von Leben, Körper oder Gesundheit haftet die Anbieterin uneingeschränkt.</p>

              <p className="mt-4">(4) Keine Haftung:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>für fehlerhafte oder unvollständige Eingaben des Kunden</li>
                <li>für technische Störungen der Übertragungswege</li>
                <li>für medizinische Fehleinschätzungen aufgrund unzureichender Datenbasis</li>
                <li>für Notfallsituationen, die eine sofortige Versorgung benötigen</li>
              </ul>
              <p className="mt-2 text-sm italic">
                („Bei akuten Beschwerden ist unverzüglich die Notrufnummer 112 zu wählen.")
              </p>
            </section>

            {/* §8 Keine Notfallleistung */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§8 Keine Notfallleistung</h2>
              <p>(1) Die angebotenen Leistungen sind nicht für akute Notfälle geeignet.</p>
              <p className="font-medium text-foreground">
                (2) Bei Brustschmerzen, Luftnot, Bewusstseinsstörungen oder anhaltenden Rhythmusstörungen ist sofort die 112 zu wählen.
              </p>
            </section>

            {/* §9 Dokumentation */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§9 Dokumentation & Aufbewahrung</h2>
              <p>(1) Alle medizinischen Einschätzungen werden gemäß § 630f BGB dokumentiert.</p>
              <p>(2) Die Aufbewahrungsfrist beträgt mindestens 10 Jahre.</p>
              <p>(3) Eine Löschung der Daten vor Ablauf dieser Frist ist gesetzlich nicht möglich.</p>
            </section>

            {/* §10 Nutzung der Inhalte */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§10 Nutzung der Inhalte</h2>
              <p>
                Die übermittelten Auswertungen, PDF-Dateien und Einschätzungen sind urheberrechtlich geschützt 
                und dürfen nicht ohne Zustimmung der Anbieterin verändert oder weitergegeben werden.
              </p>
            </section>

            {/* §11 Gerichtsstand */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§11 Gerichtsstand & anwendbares Recht</h2>
              <p>(1) Es gilt deutsches Recht.</p>
              <p>(2) Gerichtsstand ist Düsseldorf, sofern der Kunde Kaufmann ist.</p>
              <p>(3) Für Verbraucher gilt der gesetzliche Gerichtsstand.</p>
            </section>

            {/* §12 Schlussbestimmungen */}
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">§12 Schlussbestimmungen</h2>
              <p>(1) Sollten einzelne Klauseln unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
              <p>(2) Änderungen dieser AGB bedürfen der Textform.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AGB;
