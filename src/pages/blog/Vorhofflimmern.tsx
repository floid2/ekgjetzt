import BlogArticleLayout from "@/components/BlogArticleLayout";

const Vorhofflimmern = () => {
  const faqs = [
    {
      question: "Ist Vorhofflimmern gefährlich?",
      answer: "Vorhofflimmern an sich ist meist nicht unmittelbar lebensbedrohlich, erhöht aber das Schlaganfallrisiko um das 5-fache. Mit der richtigen Behandlung (oft Blutverdünnung) kann dieses Risiko jedoch deutlich gesenkt werden."
    },
    {
      question: "Kann Vorhofflimmern von selbst verschwinden?",
      answer: "Ja, besonders zu Beginn kann Vorhofflimmern anfallsartig auftreten und von selbst enden (paroxysmales Vorhofflimmern). Im Verlauf kann es jedoch häufiger oder dauerhaft werden. Frühzeitige Behandlung verbessert die Chancen auf Rhythmuserhalt."
    },
    {
      question: "Muss ich bei Vorhofflimmern Blutverdünner nehmen?",
      answer: "Das hängt von Ihrem individuellen Schlaganfallrisiko ab, das anhand verschiedener Faktoren (Alter, Begleiterkrankungen) berechnet wird. Bei den meisten Patienten mit Vorhofflimmern ist eine Blutverdünnung empfohlen."
    }
  ];

  return (
    <BlogArticleLayout
      title="Vorhofflimmern: Symptome, Risiken und moderne Behandlung"
      subtitle="Die häufigste Rhythmusstörung – verständlich erklärt."
      category="Rhythmusstörungen"
      categorySlug="rhythmusstoerungen"
      date="25. November 2024"
      metaDescription="Vorhofflimmern verstehen: Symptome, Schlaganfallrisiko und moderne Behandlung. Von einer Kardiologin erklärt."
      faqs={faqs}
    >
      <p className="lead text-lg">
        Vorhofflimmern ist die häufigste anhaltende Herzrhythmusstörung – etwa 1,5 Millionen Menschen in Deutschland 
        sind betroffen. Viele wissen nichts davon, obwohl die Erkrankung das Schlaganfallrisiko erheblich erhöht. 
        Die gute Nachricht: Mit moderner Behandlung lässt sich dieses Risiko deutlich senken.
      </p>

      <h2>Was ist Vorhofflimmern?</h2>
      <p>
        Beim Vorhofflimmern schlagen die Herzvorhöfe nicht mehr koordiniert, sondern chaotisch und viel zu schnell 
        (300–600 Mal pro Minute). Die Herzkammern folgen diesem unregelmäßigen Signal – der Puls wird „absolut arrhythmisch".
      </p>
      <p>
        Man unterscheidet verschiedene Formen:
      </p>
      <ul>
        <li><strong>Paroxysmales Vorhofflimmern:</strong> Anfallsartig, endet von selbst innerhalb von 7 Tagen</li>
        <li><strong>Persistierendes Vorhofflimmern:</strong> Hält länger als 7 Tage an, kann behandelt werden</li>
        <li><strong>Permanentes Vorhofflimmern:</strong> Dauerhaft, Rhythmuskontrolle nicht mehr sinnvoll/möglich</li>
      </ul>

      <h2>Symptome – klassisch und atypisch</h2>
      <p>
        Vorhofflimmern kann sich sehr unterschiedlich äußern:
      </p>

      <h3>Klassische Symptome</h3>
      <ul>
        <li>Unregelmäßiger, oft schneller Puls</li>
        <li>Herzrasen, Herzklopfen</li>
        <li>Gefühl von „Herzstolpern"</li>
        <li>Innere Unruhe</li>
      </ul>

      <h3>Atypische Symptome</h3>
      <ul>
        <li>Atemnot bei Belastung</li>
        <li>Verminderte Belastbarkeit</li>
        <li>Müdigkeit, Erschöpfung</li>
        <li>Schwindel, Benommenheit</li>
        <li>Brustdruck oder -enge</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Viele merken nichts!</h3>
        <p className="text-amber-800 mb-0">
          Etwa ein Drittel der Betroffenen spürt gar keine Symptome. Das Vorhofflimmern wird dann oft 
          zufällig entdeckt – oder erst beim Auftreten eines Schlaganfalls. Deshalb ist regelmäßige 
          Pulskontrolle wichtig, besonders ab 65 Jahren.
        </p>
      </div>

      <h2>Warum ist Vorhofflimmern gefährlich?</h2>
      <p>
        Das größte Risiko beim Vorhofflimmern ist der <strong>Schlaganfall</strong>:
      </p>
      <ul>
        <li>Im flimmernden Vorhof fließt das Blut nicht mehr richtig</li>
        <li>Es können sich Blutgerinnsel bilden (besonders im „linken Herzohr")</li>
        <li>Löst sich ein Gerinnsel, kann es ins Gehirn gespült werden</li>
        <li>Das Schlaganfallrisiko ist beim Vorhofflimmern <strong>5-fach erhöht</strong></li>
      </ul>
      <p>
        Etwa jeder fünfte Schlaganfall wird durch Vorhofflimmern verursacht. Diese Schlaganfälle sind 
        oft besonders schwer und haben eine höhere Sterblichkeit.
      </p>

      <h2>Diagnostik</h2>
      <p>
        Verschiedene Methoden helfen bei der Diagnose:
      </p>
      <ul>
        <li><strong>Ruhe-EKG:</strong> Zeigt Vorhofflimmern, wenn es gerade besteht</li>
        <li><strong>Langzeit-EKG (24–72 Stunden):</strong> Erfasst anfallsartiges Vorhofflimmern</li>
        <li><strong>Event-Recorder:</strong> Wochen- bis monatelange Überwachung bei seltenen Anfällen</li>
        <li><strong>Smartwatch-EKG:</strong> Kann Hinweise geben, muss aber ärztlich bestätigt werden</li>
        <li><strong>Implantierbarer Loop-Recorder:</strong> Bei Verdacht und negativen Standarduntersuchungen</li>
      </ul>

      <h2>Moderne Behandlungsmöglichkeiten</h2>

      <h3>Blutverdünnung (Antikoagulation)</h3>
      <p>
        Der wichtigste Baustein zur Vermeidung von Schlaganfällen:
      </p>
      <ul>
        <li><strong>Neue orale Antikoagulanzien (NOAKs):</strong> Dabigatran, Rivaroxaban, Apixaban, Edoxaban</li>
        <li>Einfacher einzunehmen als Marcumar/Falithrom</li>
        <li>Keine regelmäßigen Blutkontrollen nötig</li>
        <li>Ob eine Blutverdünnung nötig ist, wird anhand des CHA₂DS₂-VASc-Scores berechnet</li>
      </ul>

      <h3>Frequenzkontrolle</h3>
      <p>
        Ziel: Den Puls normalisieren, auch wenn Vorhofflimmern bestehen bleibt:
      </p>
      <ul>
        <li>Betablocker (z.B. Metoprolol, Bisoprolol)</li>
        <li>Kalziumantagonisten (z.B. Verapamil, Diltiazem)</li>
        <li>Digitalis in bestimmten Fällen</li>
      </ul>

      <h3>Rhythmuskontrolle</h3>
      <p>
        Ziel: Den normalen Sinusrhythmus wiederherstellen und erhalten:
      </p>
      <ul>
        <li><strong>Medikamente:</strong> Amiodaron, Flecainid, Dronedaron u.a.</li>
        <li><strong>Elektrische Kardioversion:</strong> „Elektroschock" unter Kurznarkose</li>
        <li><strong>Katheterablation:</strong> Verödung der Störquellen im Herzen</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-foreground mb-2">Katheterablation</h3>
        <p className="text-muted-foreground mb-0">
          Die Katheterablation hat in den letzten Jahren große Fortschritte gemacht. Bei vielen Patienten 
          kann sie Vorhofflimmern dauerhaft beseitigen oder zumindest deutlich reduzieren. Besonders bei 
          jüngeren Patienten und anfallsartigem Vorhofflimmern sind die Erfolgsraten gut.
        </p>
      </div>

      <h2>Lebensstilfaktoren</h2>
      <p>
        Bestimmte Faktoren können Vorhofflimmern begünstigen oder verschlechtern:
      </p>
      <ul>
        <li><strong>Schlafapnoe:</strong> Unbehandelt verdoppelt sie das Risiko für Vorhofflimmern</li>
        <li><strong>Alkohol:</strong> Auch moderate Mengen erhöhen das Risiko („Holiday Heart Syndrome")</li>
        <li><strong>Übergewicht:</strong> Fördert Vorhofflimmern, Gewichtsreduktion verbessert die Prognose</li>
        <li><strong>Bluthochdruck:</strong> Wichtigster behandelbarer Risikofaktor</li>
        <li><strong>Ausdauersport:</strong> Exzessiver Ausdauersport kann das Risiko erhöhen</li>
      </ul>

      <h2>Wann ist ärztliche Abklärung notwendig?</h2>
      <p>
        Suchen Sie einen Arzt auf bei:
      </p>
      <ul>
        <li>Neu aufgetretenem unregelmäßigem Puls</li>
        <li>Anhaltendem Herzrasen (über 10–15 Minuten)</li>
        <li>Herzrasen mit Schwindel, Atemnot oder Brustschmerzen</li>
        <li>Auffälligem Smartwatch-EKG</li>
        <li>Verdacht auf Vorhofflimmern bei bekannten Risikofaktoren</li>
      </ul>

      <div className="p-6 bg-red-50 border border-red-200 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Notfall!</h3>
        <p className="text-red-800 mb-0">
          Bei plötzlicher Schwäche, Sprachstörungen, Sehstörungen, hängendem Mundwinkel oder einseitiger 
          Lähmung: <strong>Sofort 112 rufen!</strong> Dies können Anzeichen eines Schlaganfalls sein.
        </p>
      </div>

      <div className="p-6 bg-primary/5 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-foreground mb-2">Zweitmeinung bei EKGJetzt</h3>
        <p className="text-muted-foreground mb-0">
          Sie haben einen Befund erhalten und möchten eine zweite Meinung? Oder Ihr Smartwatch zeigt 
          Vorhofflimmern an? Bei EKGJetzt können Sie Ihre Befunde von einer erfahrenen Kardiologin 
          beurteilen lassen – schnell, unkompliziert und verständlich erklärt.
        </p>
      </div>
    </BlogArticleLayout>
  );
};

export default Vorhofflimmern;
