import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Fakten = () => {
  return (
    <HerzgesundheitLayout 
      title="Herz-Kreislauf-Erkrankungen: Zahlen & wichtigste Fakten"
      metaDescription="Häufigkeiten, Sterblichkeit, Risikotrends – kompakt erklärt."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Herz-Kreislauf-Erkrankungen sind weltweit die häufigste Todesursache. 
        Hier finden Sie die wichtigsten Zahlen und Fakten – und warum Prävention so entscheidend ist.
      </p>

      <h2>Todesursache Nummer 1</h2>
      <p>
        In Deutschland sterben jährlich über 300.000 Menschen an Herz-Kreislauf-Erkrankungen – das entspricht etwa 
        einem Drittel aller Todesfälle. Weltweit sind es rund 18 Millionen Menschen pro Jahr.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="p-6 bg-primary/5 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary mb-2">340.000</div>
          <p className="text-sm text-muted-foreground mb-0">Todesfälle pro Jahr in Deutschland</p>
        </div>
        <div className="p-6 bg-ekg-coral/10 rounded-xl text-center">
          <div className="text-3xl font-bold text-ekg-coral mb-2">~33%</div>
          <p className="text-sm text-muted-foreground mb-0">aller Todesfälle</p>
        </div>
        <div className="p-6 bg-ekg-mint/20 rounded-xl text-center">
          <div className="text-3xl font-bold text-green-700 mb-2">18 Mio.</div>
          <p className="text-sm text-muted-foreground mb-0">Todesfälle weltweit pro Jahr</p>
        </div>
      </div>

      <h2>Herzinfarkt und Schlaganfall</h2>
      <p>
        Herzinfarkt und Schlaganfall haben eine gemeinsame Ursache: die Arteriosklerose (Gefäßverkalkung). 
        Dabei lagern sich Fette, Kalk und andere Substanzen in den Gefäßwänden ab und verengen die Blutbahn.
      </p>
      <ul>
        <li><strong>Herzinfarkt:</strong> Verschluss einer Herzkranzarterie – Herzmuskelgewebe stirbt ab</li>
        <li><strong>Schlaganfall:</strong> Verschluss oder Blutung eines Hirngefäßes – Hirngewebe wird geschädigt</li>
        <li><strong>Gemeinsame Risikofaktoren:</strong> Bluthochdruck, Diabetes, Rauchen, hohes Cholesterin</li>
      </ul>

      <h2>Häufigkeit in Deutschland und Europa</h2>
      <p>
        Die gute Nachricht: Die Sterblichkeit an Herz-Kreislauf-Erkrankungen ist in den letzten Jahrzehnten gesunken – 
        dank besserer Therapien und Prävention. Dennoch bleiben die Zahlen alarmierend:
      </p>
      <ul>
        <li>Etwa 1,8 Millionen Menschen in Deutschland leben mit einer koronaren Herzkrankheit</li>
        <li>Rund 2 Millionen Menschen leiden an Herzinsuffizienz</li>
        <li>Etwa 1,5 Millionen Menschen haben Vorhofflimmern</li>
        <li>In der EU sterben jährlich etwa 1,8 Millionen Menschen an Herz-Kreislauf-Erkrankungen</li>
      </ul>

      <h2>Einflussfaktoren</h2>
      <p>
        Das Risiko für Herz-Kreislauf-Erkrankungen wird von verschiedenen Faktoren beeinflusst:
      </p>

      <h3>Nicht beeinflussbare Faktoren</h3>
      <ul>
        <li><strong>Alter:</strong> Das Risiko steigt mit zunehmendem Alter deutlich an</li>
        <li><strong>Geschlecht:</strong> Männer erkranken früher, Frauen holen nach der Menopause auf</li>
        <li><strong>Genetik:</strong> Familiäre Vorbelastung erhöht das Risiko</li>
      </ul>

      <h3>Beeinflussbare Faktoren</h3>
      <ul>
        <li><strong>Bluthochdruck:</strong> Der wichtigste Risikofaktor überhaupt</li>
        <li><strong>Rauchen:</strong> Verdoppelt das Herzinfarktrisiko</li>
        <li><strong>Diabetes:</strong> Erhöht das Risiko um das 2- bis 4-fache</li>
        <li><strong>Cholesterin:</strong> Insbesondere erhöhtes LDL-Cholesterin</li>
        <li><strong>Bewegungsmangel:</strong> Erhöht das Risiko um etwa 30%</li>
        <li><strong>Übergewicht:</strong> Begünstigt fast alle anderen Risikofaktoren</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Die gute Nachricht</h3>
        <p className="text-muted-foreground mb-0">
          Bis zu 80% aller Herzinfarkte und Schlaganfälle könnten durch einen gesunden Lebensstil verhindert werden. 
          Prävention lohnt sich – in jedem Alter!
        </p>
      </div>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu den{" "}
          <Link to="/herzgesundheit/risikofaktoren" className="text-primary hover:underline">5 wichtigsten Risikofaktoren</Link> und{" "}
          <Link to="/herzgesundheit/erkrankungen" className="text-primary hover:underline">Herz-Kreislauf-Erkrankungen im Überblick</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Fakten;
