import { Link } from "react-router-dom";
import { AlertTriangle, Cigarette, Droplets, Gauge, Scale } from "lucide-react";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Risikofaktoren = () => {
  return (
    <HerzgesundheitLayout 
      title="Die fünf wichtigsten Risikofaktoren für Herzkrankheiten"
      metaDescription="Diabetes, Rauchen, Cholesterin, Blutdruck, genetische Risiken – erklärt."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Fünf Risikofaktoren sind für den Großteil aller Herz-Kreislauf-Erkrankungen verantwortlich. 
        Die gute Nachricht: Die meisten davon können Sie selbst beeinflussen.
      </p>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
          <p className="text-amber-800 mb-0">
            <strong>Die „Big Five":</strong> Diese fünf Faktoren sind für etwa 90% aller Herzinfarkte verantwortlich. 
            Die Kontrolle dieser Faktoren ist der Schlüssel zur Herzgesundheit.
          </p>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">1</span>
        Bluthochdruck (Hypertonie)
      </h2>
      <p>
        Bluthochdruck ist der wichtigste Risikofaktor für Herz-Kreislauf-Erkrankungen. Er schädigt langfristig 
        die Gefäßwände und erhöht das Risiko für Herzinfarkt, Schlaganfall und Nierenversagen.
      </p>
      <ul>
        <li><strong>Warum gefährlich:</strong> Belastet Herz und Gefäße dauerhaft, führt zu Arteriosklerose</li>
        <li><strong>Zielwert:</strong> Unter 130/80 mmHg bei den meisten Patienten</li>
        <li><strong>Was hilft:</strong> Salzreduktion, Bewegung, Gewichtsabnahme, Medikamente</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel zu <Link to="/herzgesundheit/bluthochdruck" className="text-primary hover:underline">Bluthochdruck</Link>
      </p>

      <h2 className="flex items-center gap-3">
        <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">2</span>
        Rauchen
      </h2>
      <p>
        Rauchen ist einer der stärksten vermeidbaren Risikofaktoren. Es schädigt die Gefäße direkt und 
        fördert die Bildung von Blutgerinnseln.
      </p>
      <ul>
        <li><strong>Warum gefährlich:</strong> Verengt Gefäße, fördert Entzündungen, erhöht Gerinnungsneigung</li>
        <li><strong>Risiko:</strong> Raucher haben ein doppelt so hohes Herzinfarktrisiko</li>
        <li><strong>Was hilft:</strong> Rauchstopp – das Risiko sinkt bereits nach wenigen Wochen deutlich</li>
      </ul>

      <h2 className="flex items-center gap-3">
        <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold">3</span>
        Erhöhtes Cholesterin
      </h2>
      <p>
        Zu viel LDL-Cholesterin („schlechtes Cholesterin") lagert sich in den Gefäßwänden ab und führt zu 
        Arteriosklerose. Ein besonderer Risikofaktor ist das genetisch bedingte Lipoprotein(a).
      </p>
      <ul>
        <li><strong>LDL-Cholesterin:</strong> Je niedriger, desto besser – Zielwert je nach Risikoprofil</li>
        <li><strong>Lp(a):</strong> Genetisch festgelegt, sollte einmal im Leben bestimmt werden</li>
        <li><strong>Was hilft:</strong> Ernährungsumstellung, Statine, bei Lp(a) engmaschige Kontrolle</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel zu <Link to="/herzgesundheit/ernaehrung" className="text-primary hover:underline">Ernährung & Herz</Link>
      </p>

      <h2 className="flex items-center gap-3">
        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">4</span>
        Diabetes mellitus
      </h2>
      <p>
        Diabetes schädigt auf vielfältige Weise die Gefäße. Menschen mit Diabetes haben ein 2- bis 4-fach 
        erhöhtes Risiko für Herzinfarkt und Schlaganfall.
      </p>
      <ul>
        <li><strong>Warum gefährlich:</strong> Hoher Blutzucker schädigt Gefäßwände und Nerven</li>
        <li><strong>Besonderheit:</strong> Herzinfarkte verlaufen bei Diabetikern oft ohne typische Schmerzen</li>
        <li><strong>Was hilft:</strong> Gute Blutzuckereinstellung, Gewichtskontrolle, Bewegung, moderne Medikamente</li>
      </ul>

      <h2 className="flex items-center gap-3">
        <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">5</span>
        Übergewicht & Bewegungsmangel
      </h2>
      <p>
        Übergewicht und Bewegungsmangel begünstigen fast alle anderen Risikofaktoren: Bluthochdruck, 
        Diabetes, erhöhte Blutfette. Besonders das Bauchfett ist gefährlich.
      </p>
      <ul>
        <li><strong>Warum gefährlich:</strong> Fördert Entzündungen, belastet das Herz-Kreislauf-System</li>
        <li><strong>Bauchumfang:</strong> Risikoerhöht ab 94 cm (Männer) bzw. 80 cm (Frauen)</li>
        <li><strong>Was hilft:</strong> Regelmäßige Bewegung (mind. 150 min/Woche), ausgewogene Ernährung</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel zu <Link to="/herzgesundheit/sport" className="text-primary hover:underline">Sport & Herz</Link>
      </p>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Ihr persönliches Risiko</h3>
        <p className="text-muted-foreground mb-0">
          Das Zusammenspiel dieser Faktoren bestimmt Ihr individuelles Risiko. Eine regelmäßige ärztliche 
          Kontrolle hilft, Risiken früh zu erkennen und gegenzusteuern. Im Herzschlag-Club erhalten Sie 
          regelmäßige Einschätzungen und individuelle Empfehlungen.
        </p>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/fakten" className="text-primary hover:underline">Zahlen & Fakten</Link> und{" "}
          <Link to="/herzgesundheit/erkrankungen" className="text-primary hover:underline">Herz-Kreislauf-Erkrankungen</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Risikofaktoren;
