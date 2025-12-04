import BlogArticleLayout from "@/components/BlogArticleLayout";

const SmartwatchEKG = () => {
  const faqs = [
    {
      question: "Kann meine Smartwatch einen Herzinfarkt erkennen?",
      answer: "Nein, Smartwatches können keinen Herzinfarkt erkennen. Sie messen nur einen einzigen Ableitungskanal und können daher keine ST-Strecken-Veränderungen zuverlässig erfassen, die für die Herzinfarkt-Diagnostik entscheidend sind."
    },
    {
      question: "Wie zuverlässig ist die Vorhofflimmern-Erkennung?",
      answer: "Studien zeigen eine Sensitivität von 80–98% bei der Erkennung von Vorhofflimmern. Allerdings gibt es auch falsch-positive Ergebnisse, besonders bei Bewegung oder schlechtem Hautkontakt. Eine ärztliche Bestätigung ist immer empfehlenswert."
    },
    {
      question: "Was soll ich tun, wenn meine Uhr 'Auffällig' anzeigt?",
      answer: "Bewahren Sie Ruhe. Wiederholen Sie die Messung unter optimalen Bedingungen (Ruhe, guter Hautkontakt). Speichern Sie das EKG als PDF. Lassen Sie es von einem Arzt oder über einen Telemedizin-Service wie EKGJetzt beurteilen."
    }
  ];

  return (
    <BlogArticleLayout
      title="Was zeigt ein Smartwatch-EKG wirklich?"
      subtitle="Apple Watch & Co. im Vergleich zur ärztlichen Diagnostik."
      category="Smartwatch & EKG"
      categorySlug="smartwatch-ekg"
      date="28. November 2024"
      metaDescription="Smartwatch-EKG erklärt: Was Apple Watch, Samsung Galaxy Watch und Co. können – und wo die Grenzen liegen. Von einer Kardiologin erklärt."
      faqs={faqs}
    >
      <p className="lead text-lg">
        Immer mehr Menschen tragen Smartwatches, die EKGs aufzeichnen können. Apple Watch, Samsung Galaxy Watch, 
        Withings und andere Geräte versprechen Herzgesundheit am Handgelenk. Doch was können diese Geräte wirklich – 
        und wo liegen ihre Grenzen?
      </p>

      <h2>Wie funktionieren Smartwatch-EKGs?</h2>
      <p>
        Smartwatches mit EKG-Funktion messen die elektrische Aktivität des Herzens über zwei Elektroden: 
        eine auf der Rückseite der Uhr (Hautkontakt am Handgelenk) und eine, die Sie während der Messung 
        mit dem Finger berühren.
      </p>
      <p>
        Das Ergebnis ist ein <strong>Ein-Kanal-EKG</strong> (Ableitung I), das einem Teil des klassischen 
        12-Kanal-EKGs entspricht, das Ärzte verwenden. Diese Messung dauert etwa 30 Sekunden und wird 
        dann vom Gerät analysiert.
      </p>

      <h2>Wofür sind Smartwatch-EKGs geeignet?</h2>
      <p>
        Der Haupteinsatzzweck von Smartwatch-EKGs ist die Erkennung von <strong>Vorhofflimmern</strong> (Atrial Fibrillation, AFib). 
        Hier zeigen Studien durchaus gute Ergebnisse:
      </p>
      <ul>
        <li><strong>Sensitivität:</strong> 80–98% für die Erkennung von Vorhofflimmern</li>
        <li><strong>Spezifität:</strong> 85–99% (korrekte Erkennung von normalem Rhythmus)</li>
        <li><strong>Pulsmessung:</strong> Kontinuierliche Überwachung der Herzfrequenz</li>
        <li><strong>Dokumentation:</strong> Aufzeichnung von Episoden für die ärztliche Beurteilung</li>
      </ul>

      <h2>Was Smartwatch-EKGs NICHT erkennen können</h2>
      <p>
        Hier liegt das größte Missverständnis: <strong>Ein normales Smartwatch-EKG schließt eine Herzerkrankung nicht aus!</strong>
      </p>
      <ul>
        <li><strong>Herzinfarkt:</strong> Kann nicht erkannt werden (fehlende Ableitungen für ST-Strecken-Analyse)</li>
        <li><strong>Viele Rhythmusstörungen:</strong> Ventrikuläre Tachykardien, bestimmte Extrasystolen</li>
        <li><strong>Strukturelle Herzprobleme:</strong> Herzklappenfehler, Herzschwäche, Verdickungen</li>
        <li><strong>Durchblutungsstörungen:</strong> Koronare Herzkrankheit, Angina pectoris</li>
        <li><strong>Langsame Rhythmusstörungen:</strong> AV-Blockierungen nur eingeschränkt</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Wichtig zu verstehen</h3>
        <p className="text-amber-800 mb-0">
          Wenn Ihre Smartwatch „Sinusrhythmus" anzeigt, bedeutet das nur, dass kein Vorhofflimmern erkannt wurde. 
          Es bedeutet <strong>nicht</strong>, dass Ihr Herz gesund ist oder dass andere Probleme ausgeschlossen sind.
        </p>
      </div>

      <h2>Automatische Erkennung vs. ärztliche Interpretation</h2>
      <p>
        Die automatische Analyse der Smartwatch basiert auf Algorithmen, die für die Erkennung bestimmter 
        Muster trainiert wurden. Sie kann jedoch nicht:
      </p>
      <ul>
        <li>Den klinischen Kontext berücksichtigen (Symptome, Vorerkrankungen)</li>
        <li>Subtile Veränderungen erkennen, die einem geschulten Auge auffallen würden</li>
        <li>Artefakte von echten Auffälligkeiten unterscheiden (z.B. bei Bewegung)</li>
        <li>Therapieempfehlungen geben</li>
      </ul>
      <p>
        <strong>Eine ärztliche Beurteilung</strong> kann das EKG im Gesamtkontext bewerten und auch 
        Veränderungen erkennen, die der Algorithmus übersieht oder falsch einordnet.
      </p>

      <h2>Was tun bei „Auffälliges Ergebnis"?</h2>
      <p>
        Wenn Ihre Smartwatch ein auffälliges Ergebnis anzeigt:
      </p>
      <ol>
        <li><strong>Ruhe bewahren:</strong> Falsch-positive Ergebnisse sind häufig</li>
        <li><strong>Messung wiederholen:</strong> Unter optimalen Bedingungen (ruhig sitzen, guter Hautkontakt)</li>
        <li><strong>EKG speichern:</strong> Als PDF exportieren für die ärztliche Beurteilung</li>
        <li><strong>Symptome notieren:</strong> Hatten Sie Beschwerden während der Messung?</li>
        <li><strong>Ärztliche Einschätzung einholen:</strong> Hausarzt, Kardiologe oder Telemedizin-Service</li>
      </ol>

      <h2>Studienlage 2023–2024</h2>
      <p>
        Die Evidenz zu Smartwatch-EKGs wächst stetig:
      </p>
      <ul>
        <li><strong>Apple Heart Study (2019):</strong> Über 400.000 Teilnehmer zeigten, dass die Pulserkennung 
        unregelmäßige Rhythmen zuverlässig identifiziert</li>
        <li><strong>HEARTLINE-Studie:</strong> Untersucht aktuell, ob frühe AFib-Erkennung Schlaganfälle verhindert</li>
        <li><strong>Vergleichsstudien 2023/2024:</strong> Bestätigen hohe Genauigkeit für Vorhofflimmern, 
        aber Einschränkungen bei anderen Arrhythmien</li>
      </ul>

      <h2>Wann ist ein ärztlicher Check wichtig?</h2>
      <p>
        Unabhängig von Smartwatch-Ergebnissen sollten Sie einen Arzt aufsuchen bei:
      </p>
      <ul>
        <li>Wiederholten auffälligen Messungen</li>
        <li>Begleitenden Symptomen (Herzstolpern, Herzrasen, Atemnot, Schwindel)</li>
        <li>Bekannten Herzerkrankungen oder Risikofaktoren</li>
        <li>Neu aufgetretenem unregelmäßigem Puls</li>
        <li>Unsicherheit über die Bedeutung der Ergebnisse</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-foreground mb-2">EKG-Check bei EKGJetzt</h3>
        <p className="text-muted-foreground mb-0">
          Unsicher über Ihr Smartwatch-EKG? Laden Sie Ihre Aufzeichnung hoch und erhalten Sie innerhalb 
          von 48 Stunden eine fundierte Einschätzung von einer erfahrenen Kardiologin – ohne wochenlange 
          Wartezeiten auf einen Facharzttermin.
        </p>
      </div>
    </BlogArticleLayout>
  );
};

export default SmartwatchEKG;
