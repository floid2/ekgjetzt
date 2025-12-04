import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Studien = () => {
  return (
    <HerzgesundheitLayout 
      title="Neuigkeiten aus der Herzforschung"
      metaDescription="Aktuelle Studien, moderne Diagnostik, Forschungstrends."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Die Herzmedizin entwickelt sich ständig weiter. Hier finden Sie aktuelle Erkenntnisse aus der 
        Forschung – verständlich aufbereitet.
      </p>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <p className="text-muted-foreground mb-0">
          <strong>Hinweis:</strong> Diese Seite gibt einen Überblick über aktuelle Forschungsthemen. 
          Für individuelle medizinische Entscheidungen sollten Sie immer Rücksprache mit Ihrem Arzt halten.
        </p>
      </div>

      <h2>Smartwatch-EKG: Was können die Geräte wirklich?</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>Aktuelle Studienlage 2024</span>
      </div>
      <p>
        Immer mehr Menschen tragen Smartwatches, die EKGs aufzeichnen können. Doch wie zuverlässig 
        sind diese Messungen?
      </p>
      <ul>
        <li><strong>Vorhofflimmern-Erkennung:</strong> Studien zeigen eine Sensitivität von 80–98% bei der Erkennung von Vorhofflimmern</li>
        <li><strong>Einschränkungen:</strong> Falsch-positive Ergebnisse sind häufig, besonders bei Bewegung</li>
        <li><strong>Nicht erkennbar:</strong> Herzinfarkt, viele Formen von Extrasystolen, strukturelle Herzprobleme</li>
        <li><strong>Empfehlung:</strong> Auffällige Befunde immer ärztlich abklären lassen</li>
      </ul>
      <p>
        Die Apple Heart Study mit über 400.000 Teilnehmern zeigte, dass Smartwatches unregelmäßige 
        Herzrhythmen zuverlässig erkennen können. Die HEARTLINE-Studie untersucht derzeit, ob die 
        frühe Erkennung von Vorhofflimmern tatsächlich Schlaganfälle verhindert.
      </p>

      <h2>Vorhofflimmer-Screening: Neue Daten</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>Studienlage 2023/2024</span>
      </div>
      <p>
        Soll man Menschen ohne Symptome systematisch auf Vorhofflimmern untersuchen? Die Debatte 
        ist noch nicht abgeschlossen:
      </p>
      <ul>
        <li><strong>Pro Screening:</strong> Vorhofflimmern verläuft oft symptomlos, Schlaganfallrisiko kann durch Früherkennung gesenkt werden</li>
        <li><strong>Contra Screening:</strong> Viele Befunde sind harmlos, Überdiagnose möglich, Nutzen bei Personen ohne Risikofaktoren unklar</li>
        <li><strong>Aktuelle Empfehlung:</strong> Opportunistisches Screening bei Risikopatienten (über 65, Bluthochdruck, Diabetes)</li>
      </ul>
      <p>
        Die STROKESTOP-Studie zeigte einen leichten Vorteil des Screenings bei über 75-Jährigen. 
        Die Ergebnisse weiterer großer Studien werden in den nächsten Jahren erwartet.
      </p>

      <h2>Sport und Blutdruck: Meta-Analyse 2024</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>British Journal of Sports Medicine 2024</span>
      </div>
      <p>
        Eine viel beachtete Meta-Analyse hat verschiedene Trainingsformen auf ihre blutdrucksenkende 
        Wirkung untersucht:
      </p>
      <ul>
        <li><strong>Überraschender Sieger:</strong> Isometrisches Training (z.B. Wandsitzen) senkte den Blutdruck am stärksten</li>
        <li><strong>Ausdauersport:</strong> Nach wie vor sehr effektiv, senkt systolischen Blutdruck um durchschnittlich 4–8 mmHg</li>
        <li><strong>Krafttraining:</strong> Ebenfalls wirksam, entgegen früherer Bedenken</li>
        <li><strong>HIIT:</strong> Gute Ergebnisse, aber nicht für jeden geeignet</li>
      </ul>
      <p>
        <strong>Fazit:</strong> Die beste Sportart ist die, die Sie regelmäßig machen. Eine Kombination 
        verschiedener Trainingsformen ist ideal.
      </p>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel <Link to="/herzgesundheit/bluthochdruck" className="text-primary hover:underline">Bluthochdruck</Link>
      </p>

      <h2>Frauenherzen: Aktuelle Forschung</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>Forschungsschwerpunkt 2024</span>
      </div>
      <p>
        Die geschlechtersensible Kardiologie ist ein wachsendes Forschungsfeld:
      </p>
      <ul>
        <li><strong>MINOCA (Herzinfarkt ohne Gefäßverschluss):</strong> Betrifft überwiegend Frauen, neue Erkenntnisse zu Ursachen und Therapie</li>
        <li><strong>Takotsubo-Kardiomyopathie („Broken Heart Syndrom"):</strong> Zu 90% Frauen betroffen, Forschung zu Langzeitfolgen</li>
        <li><strong>Schwangerschaftskomplikationen:</strong> Neue Leitlinien zur Nachsorge nach Präeklampsie</li>
        <li><strong>Östrogen und Gefäße:</strong> Besseres Verständnis der Schutzmechanismen und deren Verlust</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel <Link to="/herzgesundheit/frauenherzen" className="text-primary hover:underline">Frauenherzen</Link>
      </p>

      <h2>Myokarditis und Sport</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>Post-COVID-Erkenntnisse</span>
      </div>
      <p>
        Die COVID-19-Pandemie hat das Bewusstsein für Herzmuskelentzündungen geschärft:
      </p>
      <ul>
        <li><strong>Häufigkeit nach COVID:</strong> Geringer als anfangs befürchtet, aber erhöht bei schwerem Verlauf</li>
        <li><strong>Sportfreigabe:</strong> Neue Empfehlungen zur schrittweisen Rückkehr zum Sport nach Infekten</li>
        <li><strong>Screening:</strong> Bei Leistungssportlern nach COVID-19 ggf. kardiologische Untersuchung empfohlen</li>
        <li><strong>Langzeitfolgen:</strong> Studien zu Long-COVID und Herzgesundheit laufen</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel <Link to="/herzgesundheit/sport" className="text-primary hover:underline">Sport & Herz</Link>
      </p>

      <h2>Medikamente und neue Therapien</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>Therapieentwicklungen</span>
      </div>
      
      <h3>Herzinsuffizienz</h3>
      <ul>
        <li><strong>SGLT2-Hemmer:</strong> Ursprünglich Diabetesmedikamente, jetzt Standard bei Herzinsuffizienz</li>
        <li><strong>Neue Kombinationen:</strong> Vier-Säulen-Therapie als neuer Standard</li>
      </ul>

      <h3>Cholesterin</h3>
      <ul>
        <li><strong>PCSK9-Hemmer:</strong> Sehr effektive LDL-Senkung, Langzeitdaten bestätigen Nutzen</li>
        <li><strong>Inclisiran:</strong> Neues Medikament, nur 2x jährlich als Spritze</li>
        <li><strong>Lp(a)-Senkung:</strong> Erste spezifische Medikamente in Entwicklung</li>
      </ul>

      <h3>Vorhofflimmern</h3>
      <ul>
        <li><strong>Katheterablation:</strong> Immer häufiger als Erstlinientherapie bei geeigneten Patienten</li>
        <li><strong>Pulsed Field Ablation:</strong> Neue, schonendere Technik</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Bleiben Sie informiert</h3>
        <p className="text-amber-800 mb-0">
          Die Herzmedizin entwickelt sich schnell. Im Herzschlag-Club erhalten Sie regelmäßig Updates 
          zu relevanten Entwicklungen und wie sie Ihre persönliche Herzgesundheit betreffen könnten.
        </p>
      </div>

      <h2>Teaser: Kommende Themen</h2>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="p-4 bg-secondary/50 rounded-xl">
          <h4 className="font-semibold text-foreground mb-2">KI in der Kardiologie</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Wie künstliche Intelligenz die Herzdiagnostik revolutioniert
          </p>
        </div>
        <div className="p-4 bg-secondary/50 rounded-xl">
          <h4 className="font-semibold text-foreground mb-2">Genetik und Herzrisiko</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Polygene Risikoscores und personalisierte Prävention
          </p>
        </div>
        <div className="p-4 bg-secondary/50 rounded-xl">
          <h4 className="font-semibold text-foreground mb-2">Telemedizin-Studien</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Evidenz zur Fernüberwachung von Herzpatienten
          </p>
        </div>
        <div className="p-4 bg-secondary/50 rounded-xl">
          <h4 className="font-semibold text-foreground mb-2">Prävention 2.0</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Neue Ansätze zur Verhinderung von Herzerkrankungen
          </p>
        </div>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Grundlagenartikel zu{" "}
          <Link to="/herzgesundheit/erkrankungen" className="text-primary hover:underline">Herz-Kreislauf-Erkrankungen</Link>,{" "}
          <Link to="/herzgesundheit/rhythmusstoerungen" className="text-primary hover:underline">Herzrhythmusstörungen</Link> und{" "}
          <Link to="/herzgesundheit/risikofaktoren" className="text-primary hover:underline">Risikofaktoren</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Studien;
