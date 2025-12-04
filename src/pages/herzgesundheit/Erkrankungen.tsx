import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Erkrankungen = () => {
  return (
    <HerzgesundheitLayout 
      title="Die wichtigsten Herz-Kreislauf-Erkrankungen im Überblick"
      metaDescription="Von Herzinsuffizienz bis KHK – Symptome, Ursachen, Behandlung."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Herz-Kreislauf-Erkrankungen umfassen viele verschiedene Krankheitsbilder. 
        Hier erhalten Sie einen Überblick über die wichtigsten Erkrankungen, ihre Symptome und Behandlungsmöglichkeiten.
      </p>

      <h2>Koronare Herzkrankheit (KHK)</h2>
      <p>
        Die KHK ist die häufigste Herzerkrankung. Dabei sind die Herzkranzgefäße durch Arteriosklerose verengt, 
        sodass der Herzmuskel nicht mehr ausreichend mit Sauerstoff versorgt wird.
      </p>
      <ul>
        <li><strong>Symptome:</strong> Brustenge (Angina pectoris), Atemnot bei Belastung, Leistungsminderung</li>
        <li><strong>Ursachen:</strong> Arteriosklerose durch Risikofaktoren wie Bluthochdruck, Rauchen, Diabetes</li>
        <li><strong>Behandlung:</strong> Medikamente, Stent-Implantation, Bypass-Operation, Lebensstiländerung</li>
        <li><strong>Komplikation:</strong> Herzinfarkt bei komplettem Gefäßverschluss</li>
      </ul>

      <div className="p-6 bg-red-50 border border-red-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Warnsignale Herzinfarkt</h3>
        <ul className="text-red-800 mb-0">
          <li>Starke Brustschmerzen (länger als 5 Minuten)</li>
          <li>Ausstrahlung in Arm, Schulter, Kiefer oder Oberbauch</li>
          <li>Engegefühl, Atemnot, kalter Schweiß</li>
          <li>Bei Frauen oft: Übelkeit, Erschöpfung, Rückenschmerzen</li>
          <li><strong>→ Sofort 112 rufen!</strong></li>
        </ul>
      </div>

      <h2>Herzinsuffizienz (Herzschwäche)</h2>
      <p>
        Bei der Herzinsuffizienz kann das Herz nicht mehr ausreichend Blut pumpen. 
        Die Erkrankung entwickelt sich meist schleichend und kann verschiedene Ursachen haben.
      </p>
      <ul>
        <li><strong>Symptome:</strong> Atemnot (anfangs bei Belastung, später auch in Ruhe), geschwollene Beine, Müdigkeit</li>
        <li><strong>Ursachen:</strong> KHK, Bluthochdruck, Herzklappenfehler, Herzmuskelentzündung</li>
        <li><strong>Behandlung:</strong> Medikamente (ACE-Hemmer, Betablocker, etc.), Schrittmacher, in schweren Fällen Herztransplantation</li>
      </ul>

      <h2>Herzmuskelentzündung (Myokarditis)</h2>
      <p>
        Eine Entzündung des Herzmuskels, meist durch Viren verursacht. Besonders gefährlich, wenn bei einem Infekt 
        Sport getrieben wird.
      </p>
      <ul>
        <li><strong>Symptome:</strong> Oft unspezifisch – Müdigkeit, Herzstolpern, Brustschmerzen, Atemnot</li>
        <li><strong>Ursachen:</strong> Virusinfekte (Grippe, COVID-19, Erkältung), selten Bakterien</li>
        <li><strong>Behandlung:</strong> Körperliche Schonung (oft wochenlang), Behandlung der Grunderkrankung</li>
        <li><strong>Wichtig:</strong> Bei Infekten unbedingt Sport pausieren!</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel zu <Link to="/herzgesundheit/sport" className="text-primary hover:underline">Sport & Herz</Link>
      </p>

      <h2>Herzrhythmusstörungen</h2>
      <p>
        Das Herz schlägt zu schnell, zu langsam oder unregelmäßig. Die Bandbreite reicht von harmlosen 
        Extrasystolen bis zum gefährlichen Vorhofflimmern.
      </p>
      <ul>
        <li><strong>Häufig:</strong> Extrasystolen (Herzstolpern) – meist harmlos</li>
        <li><strong>Wichtig:</strong> Vorhofflimmern – erhöht das Schlaganfallrisiko deutlich</li>
        <li><strong>Selten:</strong> Ventrikuläre Tachykardien – können lebensbedrohlich sein</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Ausführliche Informationen in unserem Artikel zu <Link to="/herzgesundheit/rhythmusstoerungen" className="text-primary hover:underline">Herzrhythmusstörungen</Link>
      </p>

      <h2>Herzklappenerkrankungen</h2>
      <p>
        Die Herzklappen können verengt (Stenose) oder undicht (Insuffizienz) sein. 
        Dies belastet das Herz und kann unbehandelt zur Herzinsuffizienz führen.
      </p>
      <ul>
        <li><strong>Häufig:</strong> Aortenklappenstenose (besonders im Alter), Mitralklappeninsuffizienz</li>
        <li><strong>Symptome:</strong> Atemnot, Leistungsminderung, Herzgeräusche</li>
        <li><strong>Behandlung:</strong> Medikamente, Katheter-Eingriffe (TAVI), Operation</li>
      </ul>

      <h2>Endokarditis</h2>
      <p>
        Eine bakterielle Infektion der Herzinnenhaut, meist der Herzklappen. Selten, aber gefährlich.
      </p>
      <ul>
        <li><strong>Risikofaktoren:</strong> Künstliche Herzklappen, angeborene Herzfehler, schlechte Zahnhygiene</li>
        <li><strong>Symptome:</strong> Fieber, Nachtschweiß, Gewichtsverlust, Herzgeräusch</li>
        <li><strong>Behandlung:</strong> Wochen lange Antibiotika-Therapie, manchmal Operation</li>
      </ul>

      <h2>Gefäßerkrankungen</h2>
      <p>
        Neben den Herzkranzgefäßen können auch andere Gefäße von Arteriosklerose betroffen sein:
      </p>
      <ul>
        <li><strong>Periphere arterielle Verschlusskrankheit (pAVK):</strong> Durchblutungsstörungen der Beine („Schaufensterkrankheit")</li>
        <li><strong>Karotisstenose:</strong> Verengung der Halsschlagader – Schlaganfallrisiko</li>
        <li><strong>Aortenaneurysma:</strong> Aussackung der Hauptschlagader</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Früherkennung ist entscheidend</h3>
        <p className="text-muted-foreground mb-0">
          Viele Herzerkrankungen entwickeln sich schleichend und machen anfangs keine Beschwerden. 
          Regelmäßige Kontrollen – etwa durch EKG-Checks oder Gesundheits-Screenings – können helfen, 
          Veränderungen früh zu erkennen.
        </p>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/risikofaktoren" className="text-primary hover:underline">Risikofaktoren</Link> und{" "}
          <Link to="/herzgesundheit/anatomie" className="text-primary hover:underline">Anatomie des Herzens</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Erkrankungen;
