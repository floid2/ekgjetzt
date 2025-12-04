import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";

const EisenmangelFrauen = () => {
  const faqs = [
    {
      question: "Wie merke ich, ob ich Eisenmangel habe?",
      answer: "Typische Symptome sind anhaltende Müdigkeit, Erschöpfung, blasse Haut, brüchige Nägel, Haarausfall, Konzentrationsprobleme, Herzrasen und Kurzatmigkeit bei Belastung. Ein Bluttest (Ferritin, Transferrinsättigung, Hämoglobin) gibt Gewissheit."
    },
    {
      question: "Welche Ferritin-Werte sind normal?",
      answer: "Der Normbereich liegt je nach Labor bei 15–150 ng/ml für Frauen. Allerdings können Symptome schon bei Werten unter 50 ng/ml auftreten. Bei Herzpatienten wird oft ein Zielwert von mindestens 100 ng/ml angestrebt."
    },
    {
      question: "Wie kann ich meinen Eisenmangel behandeln?",
      answer: "Bei leichtem Mangel helfen eisenreiche Ernährung und orale Eisenpräparate (am besten nüchtern mit Vitamin C). Bei schwerem Mangel oder Unverträglichkeit von Tabletten kann Eisen auch als Infusion gegeben werden – schneller und oft besser verträglich."
    }
  ];

  return (
    <BlogArticleLayout
      title="Eisenmangel bei Frauen: Warum er das Herz stärker belastet, als viele denken"
      subtitle="Frauenherzen reagieren sensibel auf niedrige Eisenwerte."
      category="Frauenherzen"
      categorySlug="frauenherzen"
      date="20. November 2024"
      metaDescription="Eisenmangel und Herzgesundheit bei Frauen: Symptome, Zusammenhänge mit Herzrhythmus und moderne Behandlung. Von einer Kardiologin erklärt."
      faqs={faqs}
    >
      <p className="lead text-lg">
        Eisenmangel ist die häufigste Mangelerkrankung weltweit – und Frauen sind besonders betroffen. 
        Was viele nicht wissen: Eisenmangel belastet nicht nur die Energie, sondern auch das Herz. 
        Herzrasen, Herzstolpern und Atemnot können die Folge sein.
      </p>

      <h2>Warum haben Frauen häufiger Eisenmangel?</h2>
      <p>
        Mehrere Faktoren machen Frauen besonders anfällig für Eisenmangel:
      </p>
      <ul>
        <li><strong>Menstruation:</strong> Monatlicher Blutverlust von durchschnittlich 30–40 ml (bei starker Blutung deutlich mehr)</li>
        <li><strong>Schwangerschaft:</strong> Der Eisenbedarf verdoppelt sich für die Versorgung des Kindes</li>
        <li><strong>Stillzeit:</strong> Erhöhter Bedarf durch die Milchproduktion</li>
        <li><strong>Ernährung:</strong> Vegetarische/vegane Ernährung ohne Supplementierung</li>
        <li><strong>Diäten:</strong> Einseitige Ernährung bei Gewichtsreduktion</li>
      </ul>

      <div className="p-6 bg-pink-50 border border-pink-200 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-pink-800 mb-2">Zahlen & Fakten</h3>
        <p className="text-pink-800 mb-0">
          Etwa <strong>20–30% der Frauen im gebärfähigen Alter</strong> haben einen Eisenmangel. 
          Bei Schwangeren liegt die Rate noch höher. Dennoch wird Eisenmangel oft nicht erkannt 
          oder als „normal müde" abgetan.
        </p>
      </div>

      <h2>Symptome: Nicht nur Müdigkeit</h2>
      <p>
        Eisenmangel äußert sich vielfältig – und einige Symptome betreffen direkt das Herz:
      </p>

      <h3>Allgemeine Symptome</h3>
      <ul>
        <li>Anhaltende Müdigkeit und Erschöpfung</li>
        <li>Konzentrationsschwäche, „Brain Fog"</li>
        <li>Blasse Haut und Schleimhäute</li>
        <li>Brüchige Nägel, Haarausfall</li>
        <li>Eingerissene Mundwinkel</li>
        <li>Restless Legs (unruhige Beine)</li>
      </ul>

      <h3>Herz-bezogene Symptome</h3>
      <ul>
        <li><strong>Herzrasen (Tachykardie):</strong> Das Herz versucht, den Sauerstoffmangel durch schnelleres Schlagen auszugleichen</li>
        <li><strong>Herzstolpern:</strong> Extrasystolen können bei Eisenmangel häufiger auftreten</li>
        <li><strong>Kurzatmigkeit:</strong> Besonders bei Belastung, da weniger Sauerstoff transportiert wird</li>
        <li><strong>Verminderte Belastbarkeit:</strong> Schon geringe Anstrengung erschöpft</li>
      </ul>

      <h2>Der Zusammenhang zwischen Eisenmangel und Herzrhythmus</h2>
      <p>
        Eisen ist essentiell für den Sauerstofftransport im Blut (als Teil des Hämoglobins) und für 
        den Energiestoffwechsel in den Zellen (als Teil der Mitochondrien). Bei Eisenmangel:
      </p>
      <ul>
        <li>Wird weniger Sauerstoff zu den Organen transportiert</li>
        <li>Muss das Herz schneller und stärker pumpen, um dies auszugleichen</li>
        <li>Arbeitet der Herzmuskel selbst unter erschwerten Bedingungen</li>
        <li>Können Rhythmusstörungen wie Extrasystolen auftreten</li>
      </ul>

      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Herzstolpern durch Eisenmangel?</h3>
        <p className="text-amber-800 mb-0">
          Wenn Sie Herzstolpern oder Herzrasen bemerken und gleichzeitig typische Eisenmangel-Symptome 
          haben, sollte der Eisenstatus unbedingt überprüft werden. Manchmal verschwinden die 
          Rhythmusstörungen allein durch die Eisensubstitution.
        </p>
      </div>

      <h2>Wann sollte Eisen kontrolliert werden?</h2>
      <p>
        Eine Überprüfung des Eisenstatus ist sinnvoll bei:
      </p>
      <ul>
        <li>Anhaltender Müdigkeit ohne erkennbare Ursache</li>
        <li>Starker Menstruation</li>
        <li>Schwangerschaft und Stillzeit</li>
        <li>Vegetarischer oder veganer Ernährung</li>
        <li>Herzrasen oder Herzstolpern</li>
        <li>Kurzatmigkeit bei Belastung</li>
        <li>Bekannter Herzinsuffizienz</li>
      </ul>

      <h3>Wichtige Laborwerte</h3>
      <ul>
        <li><strong>Ferritin:</strong> Speichereisen – zeigt die Reserven an</li>
        <li><strong>Transferrinsättigung:</strong> Wie viel Eisen wird gerade transportiert?</li>
        <li><strong>Hämoglobin (Hb):</strong> Blutfarbstoff – bei Anämie erniedrigt</li>
        <li><strong>MCV:</strong> Größe der roten Blutkörperchen (klein bei Eisenmangel)</li>
      </ul>

      <h2>Besondere Lebensphasen</h2>

      <h3>Menstruation</h3>
      <p>
        Bei starker Menstruation (Hypermenorrhoe) kann der monatliche Eisenverlust so hoch sein, 
        dass er durch Ernährung allein nicht ausgeglichen werden kann. Anzeichen für eine zu starke 
        Blutung: Tampon/Binde muss stündlich gewechselt werden, Blutung länger als 7 Tage.
      </p>

      <h3>Schwangerschaft</h3>
      <p>
        Der Eisenbedarf steigt in der Schwangerschaft auf etwa 30 mg/Tag (normal: 15 mg). 
        Viele Schwangere entwickeln einen Eisenmangel, der behandelt werden sollte – für die 
        eigene Gesundheit und die Entwicklung des Kindes.
      </p>

      <h3>Stillzeit</h3>
      <p>
        Auch nach der Geburt bleibt der Eisenbedarf erhöht. Gleichzeitig sind die Speicher durch 
        Schwangerschaft und Blutverlust bei der Geburt oft erschöpft.
      </p>

      <h2>Moderne Diagnostik & Therapie</h2>

      <h3>Ernährung</h3>
      <p>
        Eisenreiche Lebensmittel können helfen, reichen aber bei manifestem Mangel oft nicht aus:
      </p>
      <ul>
        <li><strong>Häm-Eisen (gut aufnehmbar):</strong> Rotes Fleisch, Leber, dunkles Geflügel</li>
        <li><strong>Nicht-Häm-Eisen:</strong> Hülsenfrüchte, Vollkorn, grünes Blattgemüse, Nüsse</li>
        <li><strong>Aufnahme verbessern:</strong> Vitamin C (z.B. Orangensaft zum Essen)</li>
        <li><strong>Aufnahme verschlechtern:</strong> Kaffee, Tee, Milchprodukte, Phytate (Getreide)</li>
      </ul>

      <h3>Orale Eisenpräparate</h3>
      <ul>
        <li>Einnahme nüchtern für beste Aufnahme</li>
        <li>Mit Vitamin C kombinieren</li>
        <li>Nebenwirkungen: Übelkeit, Verstopfung, Bauchschmerzen</li>
        <li>Schwarzfärbung des Stuhls ist normal</li>
      </ul>

      <h3>Eiseninfusion</h3>
      <p>
        Bei schwerem Mangel, Unverträglichkeit oraler Präparate oder dringendem Bedarf:
      </p>
      <ul>
        <li>Schneller und zuverlässiger Ausgleich</li>
        <li>Oft besser verträglich als Tabletten</li>
        <li>Besonders wichtig bei Herzinsuffizienz</li>
      </ul>

      <h2>Eisenmangel und Herzinsuffizienz</h2>
      <p>
        Bei Patientinnen mit Herzschwäche ist Eisenmangel besonders kritisch:
      </p>
      <ul>
        <li>Verschlechtert Symptome und Lebensqualität</li>
        <li>Erhöht das Risiko für Krankenhauseinweisungen</li>
        <li>Verschlechtert die Prognose</li>
        <li>Eiseninfusionen können hier nachweislich helfen (Studien: FAIR-HF, AFFIRM-AHF)</li>
      </ul>

      <div className="p-6 bg-primary/5 rounded-xl my-8 not-prose">
        <h3 className="text-lg font-semibold text-foreground mb-2">Herzstolpern abklären lassen</h3>
        <p className="text-muted-foreground mb-0">
          Wenn Sie neben Müdigkeit auch Herzstolpern oder Herzrasen bemerken, kann ein EKG-Check 
          sinnvoll sein. Bei EKGJetzt können Sie Ihr Smartwatch-EKG von einer erfahrenen Kardiologin 
          beurteilen lassen – und gleichzeitig besprechen, ob eine Eisenabklärung sinnvoll wäre.
        </p>
      </div>

      <p>
        <strong>Mehr zum Thema:</strong> Lesen Sie auch unseren ausführlichen Artikel zu{" "}
        <Link to="/herzgesundheit/frauenherzen" className="text-primary hover:underline">Frauenherzen</Link> und{" "}
        <Link to="/herzgesundheit/ernaehrung" className="text-primary hover:underline">Ernährung & Herzgesundheit</Link>.
      </p>
    </BlogArticleLayout>
  );
};

export default EisenmangelFrauen;
