import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Sport = () => {
  return (
    <HerzgesundheitLayout 
      title="Wie viel Sport ist gesund für das Herz?"
      metaDescription="Training, Belastung, Myokarditis-Risiken – was Sie wissen müssen."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Regelmäßige Bewegung ist einer der wichtigsten Schutzfaktoren für das Herz. 
        Doch wie viel Sport ist optimal – und wann wird er zum Risiko?
      </p>

      <h2>Die Empfehlungen: Wie viel Bewegung ist ideal?</h2>
      <p>
        Die aktuellen Leitlinien empfehlen für Erwachsene:
      </p>
      <ul>
        <li><strong>Minimum:</strong> 150 Minuten moderate Aktivität pro Woche (z.B. zügiges Gehen, Radfahren)</li>
        <li><strong>Alternativ:</strong> 75 Minuten intensive Aktivität pro Woche (z.B. Joggen, schnelles Schwimmen)</li>
        <li><strong>Optimal:</strong> Kombination aus Ausdauer- und Krafttraining</li>
        <li><strong>Krafttraining:</strong> 2–3 Einheiten pro Woche für alle großen Muskelgruppen</li>
      </ul>

      <div className="p-6 bg-green-50 border border-green-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Jede Bewegung zählt!</h3>
        <p className="text-green-800 mb-0">
          Auch wenn Sie die Empfehlungen nicht vollständig erfüllen: Jede Form von Bewegung ist besser als keine. 
          Schon 10 Minuten tägliches Spazierengehen haben positive Effekte auf Ihr Herz-Kreislauf-System.
        </p>
      </div>

      <h2>Ruhepuls und Trainingspuls</h2>
      <p>
        Der Ruhepuls gibt Hinweise auf Ihre Fitness. Der Trainingspuls hilft, die richtige Intensität zu finden:
      </p>

      <h3>Ruhepuls</h3>
      <ul>
        <li><strong>Normal:</strong> 60–100 Schläge pro Minute</li>
        <li><strong>Gut trainiert:</strong> 50–60 Schläge pro Minute</li>
        <li><strong>Ausdauersportler:</strong> Oft unter 50 Schläge pro Minute</li>
        <li><strong>Messung:</strong> Morgens vor dem Aufstehen, im Liegen</li>
      </ul>

      <h3>Trainingspuls</h3>
      <p>
        Für effektives Training sollten Sie in der richtigen Herzfrequenzzone trainieren:
      </p>
      <ul>
        <li><strong>Fettverbrennung:</strong> 60–70% der maximalen Herzfrequenz</li>
        <li><strong>Ausdauer:</strong> 70–80% der maximalen Herzfrequenz</li>
        <li><strong>Faustregel maximale HF:</strong> 220 minus Lebensalter (sehr grob!)</li>
        <li><strong>Besser:</strong> Individuelle Bestimmung durch Belastungs-EKG</li>
      </ul>

      <h2>Übertraining – wenn Sport schadet</h2>
      <p>
        Zu viel Training ohne ausreichende Erholung kann dem Körper schaden. Anzeichen für Übertraining:
      </p>
      <ul>
        <li>Anhaltende Müdigkeit trotz ausreichend Schlaf</li>
        <li>Leistungsabfall statt -steigerung</li>
        <li>Erhöhter Ruhepuls</li>
        <li>Schlafstörungen</li>
        <li>Häufige Infekte</li>
        <li>Stimmungsschwankungen, Reizbarkeit</li>
        <li>Herzrhythmusstörungen</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Das Sportlerherz</h3>
        <p className="text-amber-800 mb-0">
          Bei Leistungssportlern kann sich das Herz vergrößern („Sportlerherz"). Dies ist meist eine gesunde 
          Anpassung an die Belastung. Bei Unsicherheit oder Beschwerden sollte jedoch eine kardiologische 
          Untersuchung erfolgen, um krankhafte Herzvergrößerungen auszuschließen.
        </p>
      </div>

      <h2>Myokarditis – die unterschätzte Gefahr</h2>
      <p>
        Eine Herzmuskelentzündung (Myokarditis) ist eine der häufigsten Ursachen für plötzlichen Herztod 
        bei jungen Sportlern. Sie entsteht meist durch Virusinfekte.
      </p>

      <h3>Warum ist Sport bei Infekten gefährlich?</h3>
      <ul>
        <li>Viren können bei Infekten auch das Herz befallen</li>
        <li>Sport belastet das ohnehin geschwächte Herz zusätzlich</li>
        <li>Im schlimmsten Fall: lebensbedrohliche Rhythmusstörungen</li>
        <li>Auch „banale" Erkältungen können eine Myokarditis auslösen</li>
      </ul>

      <h3>Symptome einer Myokarditis</h3>
      <ul>
        <li>Müdigkeit, die über den Infekt hinaus anhält</li>
        <li>Herzstolpern, Herzrasen</li>
        <li>Atemnot bei Belastung</li>
        <li>Brustschmerzen</li>
        <li>Leistungsknick</li>
      </ul>

      <div className="p-6 bg-red-50 border border-red-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Die wichtigste Regel</h3>
        <p className="text-red-800 mb-4">
          <strong>Kein Sport bei Infekten!</strong> Warten Sie mindestens 2–3 Tage nach Abklingen aller 
          Symptome, bevor Sie wieder trainieren. Bei fieberhaften Infekten: mindestens 1 Woche Pause.
        </p>
        <p className="text-red-800 mb-0">
          Bei Symptomen wie Herzstolpern oder Atemnot nach einem Infekt: Unbedingt ärztlich abklären 
          lassen, bevor Sie wieder Sport treiben!
        </p>
      </div>

      <h2>Wann wird Sport gefährlich?</h2>
      <p>
        In bestimmten Situationen sollten Sie auf Sport verzichten oder vorher ärztlichen Rat einholen:
      </p>
      <ul>
        <li><strong>Bei akuten Infekten</strong> (auch „nur" Erkältung)</li>
        <li><strong>Bei Fieber</strong></li>
        <li><strong>Bei Brustschmerzen oder Atemnot</strong> unter Belastung</li>
        <li><strong>Bei bekannter Herzerkrankung</strong> ohne ärztliche Freigabe</li>
        <li><strong>Bei unkontrolliertem Bluthochdruck</strong> (über 180/110 mmHg)</li>
        <li><strong>Bei Herzrhythmusstörungen</strong>, die nicht abgeklärt sind</li>
        <li><strong>Kurz nach dem Essen</strong> (mindestens 1–2 Stunden warten)</li>
      </ul>

      <h2>Sport nach COVID-19</h2>
      <p>
        Nach einer COVID-19-Infektion ist besondere Vorsicht geboten:
      </p>
      <ul>
        <li><strong>Milder Verlauf ohne Symptome:</strong> 3 Tage Pause, dann langsam steigern</li>
        <li><strong>Mit Symptomen (ohne Fieber):</strong> Mindestens 1 Woche Pause nach Symptomende</li>
        <li><strong>Mit Fieber oder schwerem Verlauf:</strong> Ärztliche Abklärung vor Sportbeginn empfohlen</li>
        <li><strong>Bei anhaltenden Beschwerden:</strong> Kardiologische Untersuchung</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">EKG-Check für Sportler</h3>
        <p className="text-muted-foreground mb-0">
          Unsicher, ob Ihr Herz fit für Sport ist? Mit dem EKGJetzt-Service können Sie Ihre 
          Smartwatch-Daten oder EKG-Aufzeichnungen von einer erfahrenen Kardiologin beurteilen lassen – 
          schnell und unkompliziert.
        </p>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/rhythmusstoerungen" className="text-primary hover:underline">Herzrhythmusstörungen</Link>,{" "}
          <Link to="/herzgesundheit/bluthochdruck" className="text-primary hover:underline">Bluthochdruck</Link> und{" "}
          <Link to="/herzgesundheit/erkrankungen" className="text-primary hover:underline">Herz-Kreislauf-Erkrankungen</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Sport;
