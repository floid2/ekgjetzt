import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Ernaehrung = () => {
  return (
    <HerzgesundheitLayout 
      title="Ernährung für ein gesundes Herz"
      metaDescription="Cholesterin, Omega-3, Salz, Eisenmangel – was wirklich zählt."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Die richtige Ernährung kann Ihr Herz schützen und das Risiko für Herz-Kreislauf-Erkrankungen 
        deutlich senken. Hier erfahren Sie, worauf es wirklich ankommt.
      </p>

      <h2>Cholesterin verstehen: LDL, HDL und Lp(a)</h2>
      <p>
        Cholesterin ist ein lebenswichtiger Baustein für Zellen und Hormone. Doch zu viel davon 
        im Blut kann die Gefäße schädigen.
      </p>

      <h3>LDL-Cholesterin – das „schlechte" Cholesterin</h3>
      <ul>
        <li>Transportiert Cholesterin in die Gefäßwände</li>
        <li>Fördert Arteriosklerose</li>
        <li><strong>Zielwert:</strong> Je nach Risikoprofil unter 116, 100, 70 oder sogar 55 mg/dl</li>
        <li>Beeinflusst durch: Ernährung, Genetik, Medikamente</li>
      </ul>

      <h3>HDL-Cholesterin – das „gute" Cholesterin</h3>
      <ul>
        <li>Transportiert überschüssiges Cholesterin zur Leber zurück</li>
        <li>Schützt die Gefäße</li>
        <li><strong>Wünschenswert:</strong> Über 40 mg/dl (Männer) bzw. 50 mg/dl (Frauen)</li>
        <li>Erhöht durch: Bewegung, gesunde Fette, Nichtrauchen</li>
      </ul>

      <h3>Lipoprotein(a) – der genetische Risikofaktor</h3>
      <ul>
        <li>Genetisch festgelegt, kaum durch Lebensstil beeinflussbar</li>
        <li>Erhöhte Werte steigern das Herzinfarktrisiko deutlich</li>
        <li><strong>Empfehlung:</strong> Einmal im Leben bestimmen lassen</li>
        <li>Bei erhöhten Werten: Engmaschige Kontrolle, aggressive Senkung anderer Risikofaktoren</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Wichtig zu wissen</h3>
        <p className="text-amber-800 mb-0">
          Etwa 70% des Cholesterins wird vom Körper selbst produziert. Deshalb reicht Ernährungsumstellung 
          allein oft nicht aus, um stark erhöhte Werte zu senken. Medikamente (Statine) sind in vielen Fällen 
          der wichtigste Baustein der Therapie.
        </p>
      </div>

      <h2>Omega-3-Fettsäuren – Herzschutz aus dem Meer</h2>
      <p>
        Omega-3-Fettsäuren haben entzündungshemmende Eigenschaften und können das Herz schützen:
      </p>
      <ul>
        <li><strong>Beste Quellen:</strong> Fetter Seefisch (Lachs, Makrele, Hering), Leinöl, Walnüsse</li>
        <li><strong>Empfehlung:</strong> 2 Portionen Fisch pro Woche</li>
        <li><strong>Wirkung:</strong> Senken Triglyzeride, wirken entzündungshemmend, stabilisieren den Herzrhythmus</li>
        <li><strong>Nahrungsergänzung:</strong> Nur bei nachgewiesenem Mangel oder sehr hohen Triglyzeriden sinnvoll</li>
      </ul>

      <h2>Salz und Blutdruck</h2>
      <p>
        Zu viel Salz erhöht bei vielen Menschen den Blutdruck. Die meisten Deutschen nehmen zu viel Salz zu sich:
      </p>
      <ul>
        <li><strong>Empfehlung:</strong> Maximal 5–6 g Salz pro Tag</li>
        <li><strong>Durchschnittlicher Konsum:</strong> 8–10 g pro Tag</li>
        <li><strong>Versteckte Quellen:</strong> Brot, Wurst, Käse, Fertiggerichte, Restaurant-Essen</li>
      </ul>

      <h3>Tipps zur Salzreduktion</h3>
      <ul>
        <li>Weniger Fertigprodukte, mehr selbst kochen</li>
        <li>Mit Kräutern und Gewürzen statt Salz würzen</li>
        <li>Brot vom Bäcker statt abgepackt (oft salzärmer)</li>
        <li>Salzgehalt auf Verpackungen prüfen</li>
        <li>Am Tisch nicht nachsalzen</li>
      </ul>

      <h2>Eisenmangel – besonders bei Frauen wichtig</h2>
      <p>
        Eisenmangel ist weit verbreitet und kann auch das Herz belasten:
      </p>
      <ul>
        <li><strong>Symptome:</strong> Müdigkeit, Leistungsminderung, Herzrasen, Atemnot</li>
        <li><strong>Besonders betroffen:</strong> Frauen (Menstruation), Vegetarier, Sportler</li>
        <li><strong>Herzrelevanz:</strong> Bei Herzinsuffizienz verschlechtert Eisenmangel die Prognose</li>
        <li><strong>Gute Quellen:</strong> Rotes Fleisch, Hülsenfrüchte, Vollkornprodukte, grünes Blattgemüse</li>
        <li><strong>Tipp:</strong> Vitamin C verbessert die Eisenaufnahme</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr zum Thema in unserem Artikel <Link to="/herzgesundheit/frauenherzen" className="text-primary hover:underline">Frauenherzen</Link>
      </p>

      <h2>Die mediterrane Ernährung – das Herzschutz-Konzept</h2>
      <p>
        Die mediterrane Ernährung ist das am besten untersuchte Ernährungskonzept für die Herzgesundheit. 
        Studien zeigen eine deutliche Reduktion von Herzinfarkten und Schlaganfällen.
      </p>

      <h3>Die Grundprinzipien</h3>
      <ul>
        <li><strong>Reichlich:</strong> Gemüse, Obst, Vollkornprodukte, Hülsenfrüchte, Nüsse</li>
        <li><strong>Regelmäßig:</strong> Fisch, Olivenöl (als Hauptfettquelle)</li>
        <li><strong>Moderat:</strong> Geflügel, Eier, Milchprodukte (v.a. Joghurt, Käse)</li>
        <li><strong>Selten:</strong> Rotes Fleisch, Wurst, Süßigkeiten</li>
        <li><strong>Vermeiden:</strong> Stark verarbeitete Lebensmittel, Softdrinks</li>
      </ul>

      <div className="p-6 bg-green-50 border border-green-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Die PREDIMED-Studie</h3>
        <p className="text-green-800 mb-0">
          Die große PREDIMED-Studie zeigte: Menschen, die sich mediterran ernährten und zusätzlich Olivenöl 
          oder Nüsse konsumierten, hatten ein um 30% geringeres Risiko für Herzinfarkt und Schlaganfall 
          im Vergleich zur Kontrollgruppe.
        </p>
      </div>

      <h2>Praktische Ernährungstipps für den Alltag</h2>
      <ul>
        <li><strong>Frühstück:</strong> Haferflocken mit Beeren und Nüssen statt Weißbrot mit Marmelade</li>
        <li><strong>Mittag:</strong> Salat mit Olivenöl, Gemüse, mageres Protein</li>
        <li><strong>Abend:</strong> Fisch oder Hülsenfrüchte mit viel Gemüse</li>
        <li><strong>Snacks:</strong> Nüsse, Obst statt Süßigkeiten</li>
        <li><strong>Getränke:</strong> Wasser, ungesüßter Tee statt Softdrinks</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Individuelle Beratung</h3>
        <p className="text-muted-foreground mb-0">
          Bei EKGJetzt erhalten Sie neben fachärztlichen EKG-Analysen auch individuelle Empfehlungen 
          zu Ernährung und Lebensstil – abgestimmt auf Ihre persönliche Situation und Ihre Gesundheitsdaten.
        </p>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/risikofaktoren" className="text-primary hover:underline">Risikofaktoren</Link>,{" "}
          <Link to="/herzgesundheit/bluthochdruck" className="text-primary hover:underline">Bluthochdruck</Link>,{" "}
          <Link to="/herzgesundheit/sport" className="text-primary hover:underline">Sport & Herz</Link> und{" "}
          <Link to="/herzgesundheit/mikrobiom" className="text-primary hover:underline">Mikrobiom & Verdauung</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Ernaehrung;
