import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Bluthochdruck = () => {
  return (
    <HerzgesundheitLayout 
      title="Bluthochdruck verstehen: Primäre vs. sekundäre Hypertonie"
      metaDescription="Ursachen, Symptome, Behandlung und moderne Therapieoptionen."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Bluthochdruck ist der wichtigste Risikofaktor für Herzinfarkt und Schlaganfall – und betrifft 
        etwa jeden dritten Erwachsenen. Das Tückische: Oft verursacht er lange keine Beschwerden.
      </p>

      <h2>Was ist Bluthochdruck?</h2>
      <p>
        Der Blutdruck beschreibt den Druck, mit dem das Blut durch die Gefäße fließt. Er wird in zwei 
        Werten angegeben: dem systolischen (oberen) und dem diastolischen (unteren) Wert.
      </p>
      <ul>
        <li><strong>Normal:</strong> unter 130/85 mmHg</li>
        <li><strong>Hochnormal:</strong> 130–139/85–89 mmHg</li>
        <li><strong>Bluthochdruck Grad 1:</strong> 140–159/90–99 mmHg</li>
        <li><strong>Bluthochdruck Grad 2:</strong> 160–179/100–109 mmHg</li>
        <li><strong>Bluthochdruck Grad 3:</strong> ab 180/110 mmHg</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Wie häufig ist Bluthochdruck?</h3>
        <p className="text-muted-foreground mb-0">
          In Deutschland haben etwa 20–30 Millionen Menschen Bluthochdruck. Viele wissen es nicht, 
          denn erhöhter Blutdruck verursacht oft keine spürbaren Beschwerden. Regelmäßiges Messen ist daher wichtig.
        </p>
      </div>

      <h2>Primärer vs. sekundärer Bluthochdruck</h2>
      
      <h3>Primäre (essentielle) Hypertonie – 90% der Fälle</h3>
      <p>
        Bei der primären Hypertonie ist keine einzelne Ursache erkennbar. Es handelt sich um ein 
        Zusammenspiel verschiedener Faktoren:
      </p>
      <ul>
        <li>Genetische Veranlagung</li>
        <li>Übergewicht</li>
        <li>Zu viel Salz</li>
        <li>Bewegungsmangel</li>
        <li>Stress</li>
        <li>Alkoholkonsum</li>
      </ul>

      <h3>Sekundäre Hypertonie – 10% der Fälle</h3>
      <p>
        Bei der sekundären Hypertonie liegt eine erkennbare Grunderkrankung vor:
      </p>
      <ul>
        <li>Nierenerkrankungen</li>
        <li>Hormonelle Störungen (z.B. Schilddrüse, Nebenniere)</li>
        <li>Schlafapnoe</li>
        <li>Bestimmte Medikamente (z.B. Schmerzmittel, Pille)</li>
        <li>Verengung der Nierenarterie</li>
      </ul>

      <h2>Warum ist Bluthochdruck so gefährlich?</h2>
      <p>
        Dauerhaft erhöhter Blutdruck schädigt die Gefäße und lebenswichtige Organe – oft schleichend 
        und über Jahre unbemerkt:
      </p>
      <ul>
        <li><strong>Herz:</strong> Verdickung des Herzmuskels, Herzinsuffizienz, Herzinfarkt</li>
        <li><strong>Gehirn:</strong> Schlaganfall, Demenz</li>
        <li><strong>Nieren:</strong> Chronische Nierenerkrankung bis hin zur Dialyse</li>
        <li><strong>Augen:</strong> Schädigung der Netzhaut</li>
        <li><strong>Gefäße:</strong> Arteriosklerose, Aneurysmen</li>
      </ul>

      <h2>Moderne Blutdrucktherapie</h2>
      <p>
        Die Behandlung des Bluthochdrucks hat sich in den letzten Jahren stark verbessert. 
        Moderne Therapiekonzepte setzen auf Kombinationen:
      </p>

      <h3>Lebensstil – die Basis</h3>
      <ul>
        <li><strong>Gewichtsreduktion:</strong> Pro Kilogramm weniger sinkt der Blutdruck um ca. 1 mmHg</li>
        <li><strong>Salzreduktion:</strong> Maximal 5–6 g Salz pro Tag</li>
        <li><strong>Bewegung:</strong> 30 Minuten moderate Aktivität an den meisten Tagen</li>
        <li><strong>Alkohol reduzieren:</strong> Maximal 1–2 Gläser pro Tag</li>
        <li><strong>Stress abbauen:</strong> Entspannungstechniken, ausreichend Schlaf</li>
      </ul>

      <h3>Medikamente – wenn nötig</h3>
      <p>
        <strong>Neuer Standard: Kombinationspräparate von Anfang an</strong>
      </p>
      <p>
        Früher wurde mit einem Medikament begonnen und bei Bedarf gesteigert. Heute empfehlen die 
        Leitlinien bei den meisten Patienten den Start mit einer niedrig dosierten Kombination:
      </p>
      <ul>
        <li>Besser verträglich als Hochdosis-Einzeltherapie</li>
        <li>Schnellerer Wirkungseintritt</li>
        <li>Höhere Erfolgsrate</li>
        <li>Weniger Nebenwirkungen durch niedrige Dosierungen</li>
      </ul>

      <h2>Bewegung und Bluthochdruck – die Studienlage</h2>
      <p>
        Sport ist ein wirksames „Medikament" gegen Bluthochdruck. Die Evidenz ist eindeutig:
      </p>

      <h3>Ausdauersport</h3>
      <ul>
        <li>Senkt den Blutdruck um durchschnittlich 5–8 mmHg</li>
        <li>Empfohlen: 150 Minuten moderate Aktivität pro Woche</li>
        <li>Geeignet: Walken, Joggen, Schwimmen, Radfahren</li>
      </ul>

      <h3>Krafttraining</h3>
      <ul>
        <li>Ebenfalls blutdrucksenkend, entgegen früherer Annahmen</li>
        <li>Empfohlen: 2–3 Einheiten pro Woche</li>
        <li>Wichtig: Pressatmung vermeiden, gleichmäßig atmen</li>
      </ul>

      <h3>Hochintensives Intervalltraining (HIIT)</h3>
      <ul>
        <li>Aktuelle Studien zeigen gute Effekte</li>
        <li>Nur nach ärztlicher Rücksprache bei bestehendem Bluthochdruck</li>
        <li>Nicht geeignet bei unkontrolliertem Bluthochdruck</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Meta-Analyse 2024</h3>
        <p className="text-amber-800 mb-0">
          Eine aktuelle Meta-Analyse zeigt: Isometrisches Training (z.B. Wandsitzen) kann den Blutdruck 
          besonders effektiv senken – sogar stärker als klassisches Ausdauertraining. 
          Sprechen Sie mit Ihrem Arzt über die für Sie geeignete Trainingsform.
        </p>
      </div>

      <div className="p-6 bg-red-50 border border-red-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Wann zum Arzt?</h3>
        <ul className="text-red-800 mb-0">
          <li>Blutdruck wiederholt über 140/90 mmHg</li>
          <li>Kopfschmerzen, Schwindel, Sehstörungen</li>
          <li>Nasenbluten ohne erkennbare Ursache</li>
          <li>Brustenge oder Atemnot</li>
          <li>Bei Werten über 180/120 mmHg: Sofort zum Arzt!</li>
        </ul>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/risikofaktoren" className="text-primary hover:underline">Risikofaktoren</Link>,{" "}
          <Link to="/herzgesundheit/sport" className="text-primary hover:underline">Sport & Herz</Link> und{" "}
          <Link to="/herzgesundheit/ernaehrung" className="text-primary hover:underline">Ernährung & Herz</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Bluthochdruck;
