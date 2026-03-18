import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Rhythmusstoerungen = () => {
  return (
    <HerzgesundheitLayout 
      title="Herzrhythmusstörungen: Was bedeuten Herzstolpern & Herzrasen?"
      metaDescription="Extrasystolen, Vorhofflimmern, Tachykardien – verständlich erklärt."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Herzstolpern, Herzrasen, unregelmäßiger Puls – Herzrhythmusstörungen können beunruhigend sein. 
        Doch nicht jede Rhythmusstörung ist gefährlich. Hier erfahren Sie, worauf es ankommt.
      </p>

      <h2>Was sind Herzrhythmusstörungen?</h2>
      <p>
        Normalerweise schlägt das Herz regelmäßig mit 60–100 Schlägen pro Minute. Bei Herzrhythmusstörungen 
        (Arrhythmien) ist dieser Rhythmus gestört: Das Herz schlägt zu schnell, zu langsam oder unregelmäßig.
      </p>
      <p>
        Die Ursache liegt meist in Störungen des elektrischen Reizleitungssystems des Herzens. 
        Manchmal sind Rhythmusstörungen harmlos, manchmal weisen sie auf eine ernsthafte Erkrankung hin.
      </p>

      <h2>Extrasystolen – das häufige Herzstolpern</h2>
      <p>
        Extrasystolen sind zusätzliche Herzschläge, die außerhalb des normalen Rhythmus auftreten. 
        Fast jeder Mensch hat sie – meist ohne es zu bemerken.
      </p>
      <ul>
        <li><strong>Gefühl:</strong> Kurzes Stolpern, Aussetzer oder Klopfen im Hals</li>
        <li><strong>Häufigkeit:</strong> Bis zu einige hundert pro Tag können normal sein</li>
        <li><strong>Auslöser:</strong> Stress, Koffein, Alkohol, Schlafmangel, Elektrolytstörungen</li>
        <li><strong>Meist harmlos:</strong> Wenn sie selten auftreten und das Herz sonst gesund ist</li>
      </ul>

      <div className="p-6 bg-green-50 border border-green-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Wann sind Extrasystolen harmlos?</h3>
        <ul className="text-green-800 mb-0">
          <li>Sie treten vereinzelt auf und verschwinden von selbst</li>
          <li>Es gibt keine Begleiterscheinungen wie Schwindel oder Ohnmacht</li>
          <li>Das Herz ist strukturell gesund (normales Echo, normales EKG)</li>
          <li>Sie treten vor allem in Ruhe auf, nicht bei Belastung</li>
        </ul>
      </div>

      <h2>Vorhofflimmern – die häufigste behandlungsbedürftige Rhythmusstörung</h2>
      <p>
        Beim Vorhofflimmern schlagen die Herzvorhöfe chaotisch und viel zu schnell (300–600/min). 
        Die Herzkammern folgen unregelmäßig – der Puls wird „absolut arrhythmisch".
      </p>

      <h3>Symptome</h3>
      <ul>
        <li>Unregelmäßiger, oft schneller Puls</li>
        <li>Herzrasen, Herzklopfen</li>
        <li>Atemnot, verminderte Belastbarkeit</li>
        <li>Schwindel, Benommenheit</li>
        <li>Manche Betroffene spüren gar nichts!</li>
      </ul>

      <h3>Warum ist Vorhofflimmern gefährlich?</h3>
      <p>
        Im flimmernden Vorhof können sich Blutgerinnsel bilden. Werden diese ins Gehirn gespült, 
        kann ein Schlaganfall entstehen. Das Schlaganfallrisiko ist beim Vorhofflimmern 5-fach erhöht.
      </p>

      <h3>Behandlung</h3>
      <ul>
        <li><strong>Blutverdünnung:</strong> Zum Schutz vor Schlaganfall (bei den meisten Patienten)</li>
        <li><strong>Frequenzkontrolle:</strong> Medikamente, um den Puls zu normalisieren</li>
        <li><strong>Rhythmuskontrolle:</strong> Medikamente oder Katheterablation, um den Sinusrhythmus wiederherzustellen</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Smartwatch und Vorhofflimmern</h3>
        <p className="text-amber-800 mb-0">
          Moderne Smartwatches können Vorhofflimmern erkennen – aber nicht immer zuverlässig. 
          Ein auffälliges Ergebnis sollte immer ärztlich überprüft werden. Im EKGJetzt-Service 
          können Sie Ihre Smartwatch-Aufzeichnungen von einer Kardiologin beurteilen lassen.
        </p>
      </div>

      <h2>Herzrasen – Tachykardien</h2>
      <p>
        Von Tachykardie spricht man bei einem Puls über 100/min. Es gibt verschiedene Formen:
      </p>
      <ul>
        <li><strong>Sinustachykardie:</strong> Schneller, aber regelmäßiger Puls – meist harmlos (Sport, Aufregung, Fieber)</li>
        <li><strong>Supraventrikuläre Tachykardie (SVT):</strong> Anfallsartiges Herzrasen, oft plötzlich beginnend und endend</li>
        <li><strong>Ventrikuläre Tachykardie:</strong> Aus den Herzkammern – potenziell gefährlich, muss abgeklärt werden</li>
      </ul>

      <h2>Zu langsamer Herzschlag – Bradykardie</h2>
      <p>
        Ein Puls unter 60/min muss nicht krankhaft sein – Sportler haben oft einen niedrigen Ruhepuls. 
        Krankhaft wird es, wenn Symptome auftreten:
      </p>
      <ul>
        <li>Schwindel, Benommenheit</li>
        <li>Ohnmachtsanfälle (Synkopen)</li>
        <li>Starke Müdigkeit, Leistungsschwäche</li>
      </ul>
      <p>
        <strong>Behandlung:</strong> Bei symptomatischer Bradykardie kann ein Herzschrittmacher helfen.
      </p>

      <h2>Was Smartwatches anzeigen können – und was nicht</h2>
      <p>
        Moderne Smartwatches können Ein-Kanal-EKGs aufzeichnen und Vorhofflimmern erkennen. 
        Allerdings haben sie Grenzen:
      </p>
      <ul>
        <li><strong>Können erkennen:</strong> Vorhofflimmern, sehr unregelmäßigen Puls, Herzfrequenz</li>
        <li><strong>Können NICHT erkennen:</strong> Herzinfarkt, viele Extrasystolen-Arten, strukturelle Herzprobleme</li>
        <li><strong>Wichtig:</strong> Ein „normales" Smartwatch-EKG schließt eine Herzerkrankung nicht aus!</li>
      </ul>

      <h2>ICD und CRT – wenn Technik das Herz schützt</h2>
      <p>
        Bei bestimmten Herzerkrankungen können implantierbare Geräte lebensrettend sein:
      </p>
      <ul>
        <li><strong>ICD (Implantierbarer Defibrillator):</strong> Erkennt gefährliche Rhythmusstörungen und beendet sie durch Schock</li>
        <li><strong>CRT (Kardiale Resynchronisationstherapie):</strong> Koordiniert die Herzkammern bei Herzschwäche</li>
      </ul>

      <div className="p-6 bg-red-50 border border-red-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Wann sofort zum Arzt?</h3>
        <ul className="text-red-800 mb-0">
          <li>Herzrasen mit Brustschmerzen oder Atemnot</li>
          <li>Ohnmacht oder Beinahe-Ohnmacht</li>
          <li>Herzstolpern bei körperlicher Belastung (nicht in Ruhe)</li>
          <li>Neu aufgetretener unregelmäßiger Puls, der nicht aufhört</li>
          <li>Herzrasen über 150/min, das nicht von selbst endet</li>
        </ul>
      </div>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">EKG-Check bei Herzstolpern</h3>
        <p className="text-muted-foreground mb-0">
          Haben Sie Herzstolpern oder ein auffälliges Smartwatch-EKG? Im EKGJetzt-Service 
          können Sie Ihre Aufzeichnungen schnell und unkompliziert von einer erfahrenen Kardiologin 
          beurteilen lassen – ohne wochenlange Wartezeiten.
        </p>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zur{" "}
          <Link to="/herzgesundheit/anatomie" className="text-primary hover:underline">Anatomie des Herzens</Link> und{" "}
          <Link to="/herzgesundheit/sport" className="text-primary hover:underline">Sport & Herz</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Rhythmusstoerungen;
