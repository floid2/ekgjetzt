import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Anatomie = () => {
  return (
    <HerzgesundheitLayout 
      title="Wie funktioniert das Herz? Anatomie einfach erklärt"
      metaDescription="Aufbau des Herzens, Blutfluss, elektrische Erregung – verständlich erklärt."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Das Herz ist ein faszinierendes Organ: Es schlägt etwa 100.000 Mal pro Tag und pumpt dabei rund 7.000 Liter Blut durch Ihren Körper. 
        Doch wie genau funktioniert dieses Wunderwerk der Natur?
      </p>

      <h2>Der Aufbau des Herzens</h2>
      <p>
        Das menschliche Herz ist etwa faustgroß und wiegt zwischen 250 und 350 Gramm. Es besteht aus vier Kammern:
      </p>
      <ul>
        <li><strong>Rechter Vorhof (Atrium):</strong> Empfängt sauerstoffarmes Blut aus dem Körper</li>
        <li><strong>Rechte Herzkammer (Ventrikel):</strong> Pumpt das Blut in die Lunge</li>
        <li><strong>Linker Vorhof:</strong> Empfängt sauerstoffreiches Blut aus der Lunge</li>
        <li><strong>Linke Herzkammer:</strong> Pumpt das Blut in den gesamten Körper</li>
      </ul>

      <h2>Die Herzklappen</h2>
      <p>
        Vier Herzklappen sorgen dafür, dass das Blut nur in eine Richtung fließt:
      </p>
      <ul>
        <li><strong>Trikuspidalklappe:</strong> Zwischen rechtem Vorhof und rechter Kammer</li>
        <li><strong>Pulmonalklappe:</strong> Zwischen rechter Kammer und Lungenarterie</li>
        <li><strong>Mitralklappe:</strong> Zwischen linkem Vorhof und linker Kammer</li>
        <li><strong>Aortenklappe:</strong> Zwischen linker Kammer und Hauptschlagader</li>
      </ul>

      <h2>Das elektrische System des Herzens</h2>
      <p>
        Das Herz erzeugt seine eigenen elektrischen Impulse. Dieses System ist der Grund, warum ein EKG so aufschlussreich ist:
      </p>
      <ul>
        <li><strong>Sinusknoten:</strong> Der natürliche Schrittmacher im rechten Vorhof – gibt den Takt vor (60–100 Schläge/min)</li>
        <li><strong>AV-Knoten:</strong> Verzögert den Impuls kurz, damit die Vorhöfe sich vollständig entleeren können</li>
        <li><strong>His-Bündel & Purkinje-Fasern:</strong> Leiten den Impuls schnell in beide Herzkammern</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Wussten Sie schon?</h3>
        <p className="text-muted-foreground mb-0">
          Ihr Herz pumpt pro Minute etwa 5 Liter Blut – bei Belastung kann sich diese Menge auf bis zu 25 Liter steigern. 
          Pro Tag sind das rund 7.000 Liter, pro Jahr über 2,5 Millionen Liter!
        </p>
      </div>

      <h2>Der Blutfluss durch das Herz</h2>
      <p>
        Der Blutfluss folgt einem präzisen Kreislauf:
      </p>
      <ol>
        <li>Sauerstoffarmes Blut fließt aus dem Körper in den rechten Vorhof</li>
        <li>Durch die Trikuspidalklappe gelangt es in die rechte Kammer</li>
        <li>Die rechte Kammer pumpt es durch die Pulmonalklappe in die Lunge</li>
        <li>In der Lunge wird das Blut mit Sauerstoff angereichert</li>
        <li>Das sauerstoffreiche Blut fließt in den linken Vorhof</li>
        <li>Durch die Mitralklappe gelangt es in die linke Kammer</li>
        <li>Die kräftige linke Kammer pumpt es durch die Aortenklappe in den Körper</li>
      </ol>

      <h2>Das Herz als Versorgungszentrum</h2>
      <p>
        Das Herz versorgt alle Organe und Gewebe mit sauerstoffreichem Blut. Dabei passt es seine Leistung ständig an: 
        In Ruhe schlägt es langsamer, bei körperlicher Anstrengung oder Stress schneller und kräftiger.
      </p>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/rhythmusstoerungen" className="text-primary hover:underline">Herzrhythmusstörungen</Link> und{" "}
          <Link to="/herzgesundheit/erkrankungen" className="text-primary hover:underline">Herz-Kreislauf-Erkrankungen</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Anatomie;
