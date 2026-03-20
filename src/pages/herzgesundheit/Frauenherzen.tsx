import { Link } from "react-router-dom";
import HerzgesundheitLayout from "@/components/HerzgesundheitLayout";

const Frauenherzen = () => {
  return (
    <HerzgesundheitLayout 
      title="Frauenherzen: Warum Symptome oft anders sind"
      metaDescription="Atypische Herzinfarktsymptome, Hormone, Schwangerschaft, Menopause."
    >
      <p className="lead text-lg text-muted-foreground mb-8">
        Herzerkrankungen galten lange als „Männerkrankheit". Heute wissen wir: Frauen sind genauso 
        gefährdet – aber ihre Symptome sind oft anders. Das führt häufig zu späten Diagnosen.
      </p>

      <div className="p-6 bg-pink-50 border border-pink-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-pink-800 mb-2">Wussten Sie schon?</h3>
        <p className="text-pink-800 mb-0">
          Herz-Kreislauf-Erkrankungen sind auch bei Frauen die häufigste Todesursache – noch vor 
          Brustkrebs. Dennoch werden Herzprobleme bei Frauen häufiger übersehen oder unterschätzt.
        </p>
      </div>

      <h2>Herzinfarkt bei Frauen – häufig anders</h2>
      <p>
        Der klassische Herzinfarkt mit starken Brustschmerzen und Ausstrahlung in den linken Arm 
        ist typisch für Männer. Frauen erleben oft andere Symptome:
      </p>

      <h3>Typische Symptome bei Männern</h3>
      <ul>
        <li>Starker Brustschmerz, oft wie „Elefant auf der Brust"</li>
        <li>Ausstrahlung in linken Arm, Schulter, Kiefer</li>
        <li>Kalter Schweiß</li>
        <li>Todesangst</li>
      </ul>

      <h3>Häufige Symptome bei Frauen</h3>
      <ul>
        <li>Atemnot (manchmal ohne Brustschmerz!)</li>
        <li>Übelkeit, Erbrechen</li>
        <li>Starke Erschöpfung, ungewöhnliche Müdigkeit</li>
        <li>Rückenschmerzen, Schmerzen zwischen den Schulterblättern</li>
        <li>Schmerzen im Oberbauch</li>
        <li>Schwindel</li>
        <li>Diffuses Unwohlsein</li>
      </ul>

      <div className="p-6 bg-red-50 border border-red-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Wichtig!</h3>
        <p className="text-red-800 mb-0">
          Weil die Symptome bei Frauen oft untypisch sind, wird ein Herzinfarkt häufiger übersehen 
          oder als „Stress" oder „Magenproblem" abgetan. Nehmen Sie ungewöhnliche Beschwerden ernst – 
          auch wenn sie nicht dem „klassischen" Bild entsprechen. Im Zweifel: 112 rufen!
        </p>
      </div>

      <h2>Gefäße reagieren anders</h2>
      <p>
        Das weibliche Herz-Kreislauf-System unterscheidet sich in mehreren Punkten vom männlichen:
      </p>
      <ul>
        <li><strong>Kleinere Gefäße:</strong> Die Herzkranzgefäße sind bei Frauen im Durchschnitt kleiner</li>
        <li><strong>Andere Verkalkungsmuster:</strong> Frauen haben häufiger diffuse Verengungen statt einzelner Engstellen</li>
        <li><strong>Gefäßspasmen:</strong> Krämpfe der Herzkranzgefäße kommen bei Frauen häufiger vor</li>
        <li><strong>Mikrovaskuläre Erkrankung:</strong> Erkrankung der kleinsten Herzgefäße – schwerer zu diagnostizieren</li>
      </ul>

      <h2>Hormone und Herzgesundheit</h2>
      <p>
        Östrogen hat eine schützende Wirkung auf die Gefäße. Deshalb verändert sich das Herzrisiko 
        im Laufe des Lebens einer Frau:
      </p>

      <h3>Vor der Menopause</h3>
      <ul>
        <li>Östrogen wirkt gefäßschützend</li>
        <li>Herzinfarktrisiko niedriger als bei gleichaltrigen Männern</li>
        <li>Aber: Rauchen, Pille und Übergewicht können den Schutz aufheben!</li>
      </ul>

      <h3>Nach der Menopause</h3>
      <ul>
        <li>Östrogenabfall → Schutzeffekt fällt weg</li>
        <li>LDL-Cholesterin steigt an</li>
        <li>Blutdruck kann steigen</li>
        <li>Herzinfarktrisiko steigt deutlich und erreicht das der Männer</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Hormonersatztherapie</h3>
        <p className="text-amber-800 mb-0">
          Anders als früher angenommen, schützt eine Hormonersatztherapie nicht vor Herzerkrankungen. 
          Bei bestehenden Herzerkrankungen kann sie sogar das Risiko erhöhen. Eine individuelle 
          Beratung ist wichtig.
        </p>
      </div>

      <h2>Schwangerschaft und Herzrisiko</h2>
      <p>
        Komplikationen in der Schwangerschaft können auf ein erhöhtes späteres Herzrisiko hinweisen:
      </p>
      <ul>
        <li><strong>Präeklampsie/Schwangerschaftsvergiftung:</strong> Erhöht das lebenslange Risiko für Bluthochdruck und Herzerkrankungen</li>
        <li><strong>Schwangerschaftsdiabetes:</strong> Erhöhtes Risiko für späteren Typ-2-Diabetes und Herzerkrankungen</li>
        <li><strong>Frühgeburt:</strong> Kann auf Gefäßprobleme hinweisen</li>
        <li><strong>Peripartale Kardiomyopathie:</strong> Seltene Herzschwäche während oder nach der Schwangerschaft</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">Nachsorge wichtig!</h3>
        <p className="text-muted-foreground mb-0">
          Wenn Sie eine komplizierte Schwangerschaft hatten, sprechen Sie mit Ihrem Arzt über 
          regelmäßige Kontrollen Ihrer Herzgesundheit. Frühzeitige Prävention kann das Risiko deutlich senken.
        </p>
      </div>

      <h2>Eisenmangel – ein unterschätztes Problem</h2>
      <p>
        Eisenmangel ist bei Frauen besonders häufig und kann das Herz belasten:
      </p>
      <ul>
        <li><strong>Ursachen:</strong> Menstruation, Schwangerschaft, einseitige Ernährung</li>
        <li><strong>Symptome:</strong> Müdigkeit, Herzrasen, Atemnot, Leistungsminderung</li>
        <li><strong>Herzrelevanz:</strong> Bei Herzinsuffizienz verschlechtert Eisenmangel die Prognose erheblich</li>
        <li><strong>Therapie:</strong> Eisensubstitution (oral oder intravenös)</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel <Link to="/herzgesundheit/ernaehrung" className="text-primary hover:underline">Ernährung & Herz</Link>
      </p>

      <h2>Rhythmusstörungen bei Frauen</h2>
      <p>
        Bestimmte Herzrhythmusstörungen treten bei Frauen häufiger auf:
      </p>
      <ul>
        <li>Long-QT-Syndrom (angeboren)</li>
        <li>Vorhofflimmern (nach der Menopause angleichend)</li>
        <li>Tachykardien (schneller Herzschlag) in Zusammenhang mit Hormonschwankungen</li>
      </ul>
      <p className="text-sm text-muted-foreground">
        → Mehr dazu in unserem Artikel <Link to="/herzgesundheit/rhythmusstoerungen" className="text-primary hover:underline">Herzrhythmusstörungen</Link>
      </p>

      <h2>Warum werden Herzerkrankungen bei Frauen öfter übersehen?</h2>
      <ul>
        <li>Atypische Symptome werden nicht als Herzproblem erkannt</li>
        <li>Frauen spielen Beschwerden häufiger herunter</li>
        <li>Ärzte denken bei Frauen seltener an Herzerkrankungen</li>
        <li>Viele Studien wurden früher nur an Männern durchgeführt</li>
        <li>Diagnosetests sind für männliche Symptome optimiert</li>
      </ul>

      <div className="p-6 bg-pink-50 border border-pink-200 rounded-xl my-8">
        <h3 className="text-lg font-semibold text-pink-800 mb-2">Geschlechtersensible Kardiologie</h3>
        <p className="text-pink-800 mb-0">
          Bei EKGJetzt berücksichtigt Dr. Suwelack die besonderen Aspekte 
          der Frauenherzen gezielt. Die Beratung ist abgestimmt auf die spezifischen Risiken und 
          Symptome bei Frauen – für eine präzise, geschlechtersensible Betreuung.
        </p>
      </div>

      <h2>Prävention für Frauen</h2>
      <ul>
        <li>Blutdruck regelmäßig kontrollieren (besonders nach der Menopause)</li>
        <li>Cholesterinwerte kennen (LDL, HDL, Lp(a))</li>
        <li>Bei Schwangerschaftskomplikationen: lebenslange Nachsorge</li>
        <li>Nicht rauchen (Rauchen + Pille = besonders hohes Risiko)</li>
        <li>Regelmäßig bewegen</li>
        <li>Stress reduzieren</li>
        <li>Symptome ernst nehmen und ärztlich abklären lassen</li>
      </ul>

      <div className="p-6 bg-secondary/50 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-0">
          <strong>Mehr erfahren:</strong> Lesen Sie auch unsere Artikel zu{" "}
          <Link to="/herzgesundheit/risikofaktoren" className="text-primary hover:underline">Risikofaktoren</Link>,{" "}
          <Link to="/herzgesundheit/erkrankungen" className="text-primary hover:underline">Herz-Kreislauf-Erkrankungen</Link> und{" "}
          <Link to="/herzgesundheit/studien" className="text-primary hover:underline">aktuelle Studien</Link>.
        </p>
      </div>
    </HerzgesundheitLayout>
  );
};

export default Frauenherzen;
