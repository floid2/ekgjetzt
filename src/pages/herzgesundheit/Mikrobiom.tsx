import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Shield, Zap, Clock, CheckCircle, AlertTriangle, XCircle, BookOpen } from "lucide-react";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import mikrobiomHero from "@/assets/mikrobiom-hero.png";
import darmHirnAchse from "@/assets/darm-hirn-achse.png";
import immunsystemDarm from "@/assets/immunsystem-darm.png";

const Mikrobiom = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Verdauung & Mikrobiom: Die Zentrale für Gesundheit & Longevity",
    "description": "Wissenschaftlich fundierte Informationen über das Mikrobiom, die Darm-Hirn-Achse und evidenzbasierte Empfehlungen für Ihre Darmgesundheit.",
    "author": {
      "@type": "Person",
      "name": "Dr. med. Rebekka Suwelack"
    }
  };

  return (
    <>
      <SEOHead 
        title="Verdauung & Mikrobiom – Wissenschaftliche Grundlagen | EKGJetzt"
        description="Ihr Mikrobiom beeinflusst Immunsystem, Gehirn, Stoffwechsel und Alterung. Erfahren Sie, was die Forschung wirklich sagt."
        canonical="/herzgesundheit/mikrobiom"
        schema={schema}
      />
      <NavigationHeader />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-ekg-mint/20 to-background"></div>
          <div className="container px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                to="/herzgesundheit/ernaehrung" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zu Ernährung
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
                  Verdauung & Mikrobiom:<br />
                  <span className="text-primary">Die Zentrale für Gesundheit</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Ihr Mikrobiom ist kein verstecktes Organ – es ist ein großer Akteur in Ihrem Körper.
                  Wissenschaftlich belegt: Ein gesundes Mikrobiom beeinflusst Ihr Immunsystem, Gehirn, 
                  Stoffwechsel und Alterungsprozesse.
                </p>
                <p className="text-primary font-semibold text-lg">
                  Hier erfahren Sie, was die Forschung wirklich sagt.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={mikrobiomHero} 
                  alt="Mikrobiom und Darm-Hirn-Achse Illustration" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Was ist das Mikrobiom */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-6">
              Was ist das Mikrobiom – und warum sollte es Sie interessieren?
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Ihr Darm beherbergt etwa <strong className="text-foreground">38 Billionen Mikroorganismen</strong> – 
              überwiegend Bakterien, aber auch Viren, Pilze und Archeobakterien. 
              Diese winzigen Bewohner wiegen zusammen etwa so viel wie Ihr Gehirn und sind mindestens genauso wichtig für Ihre Gesundheit.
            </p>

            <h3 className="text-2xl font-serif text-foreground text-center mb-8">
              🌟 Der Darm: Das Kommandozentrum Ihres Körpers
            </h3>
            <p className="text-center text-muted-foreground mb-10">
              Im Darm leben 38 Billionen Bakterien. Sie beeinflussen 4 Bereiche Ihres Körpers fundamental:
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
              {/* Gehirn */}
              <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h4 className="text-xl font-semibold text-purple-700">GEHIRN</h4>
                </div>
                <p className="text-sm text-foreground mb-2">
                  <strong>Die Verbindung:</strong> Darmbakterien produzieren Chemikalien, die ins Gehirn gelangen
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Was Sie merken:</strong> Besseres Gedächtnis, bessere Stimmung, klarere Gedanken
                </p>
              </div>

              {/* Immunsystem */}
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-semibold text-green-700">IMMUNSYSTEM</h4>
                </div>
                <p className="text-sm text-foreground mb-2">
                  <strong>Die Verbindung:</strong> 70% Ihres Immunsystems sitzt im Darm
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Was Sie merken:</strong> Weniger Allergien, stärkere Abwehr, weniger Entzündungen
                </p>
              </div>

              {/* Stoffwechsel */}
              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-amber-600" />
                  <h4 className="text-xl font-semibold text-amber-700">STOFFWECHSEL</h4>
                </div>
                <p className="text-sm text-foreground mb-2">
                  <strong>Die Verbindung:</strong> Bestimmt, wie viel Energie Sie aus Essen gewinnen
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Was Sie merken:</strong> Stabiles Gewicht, konstante Energie, gute Blutzuckerkontrolle
                </p>
              </div>

              {/* Alterung */}
              <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-red-500" />
                  <h4 className="text-xl font-semibold text-red-600">ALTERUNG</h4>
                </div>
                <p className="text-sm text-foreground mb-2">
                  <strong>Die Verbindung:</strong> Altes, vielfaltloses Mikrobiom = chronische Entzündung
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Was Sie merken:</strong> Mit gutem Mikrobiom: länger jung, vitaler, gesünder
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 max-w-4xl mx-auto">
              <p className="text-primary font-semibold mb-2">💡 Wichtig:</p>
              <p className="text-muted-foreground">
                Das Mikrobiom ist <strong className="text-foreground">nicht fest</strong> – es ändert sich täglich durch Ihre Ernährung, Stress und Schlaf. 
                Sie können es aktiv verbessern!
              </p>
            </div>
          </div>
        </section>

        {/* Biologische Zusammenhänge */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
              Die biologischen Zusammenhänge: Wie funktioniert das konkret?
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* 1. Immunsystem */}
              <div className="bg-card rounded-2xl p-8 border-l-4 border-green-500 shadow-sm">
                <h3 className="text-2xl font-serif text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-7 h-7 text-green-500" />
                  1️⃣ Darm → Immunsystem: Das Training
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">In Worten:</strong> Der Darm ist wie ein Trainingscamp für Ihr Immunsystem. 
                      Gute Darmbakterien produzieren eine Substanz namens <strong className="text-foreground">Butyrat</strong>. 
                      Dieses Butyrat trainiert die Immunzellen, zwischen gefährlichen Eindringlingen und harmlosen Substanzen zu unterscheiden.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Das Ergebnis:</strong> Mit gutem Mikrobiom haben Sie weniger Allergien, weniger Autoimmunerkrankungen und eine stärkere echte Abwehr. 
                      Ohne gutes Mikrobiom: Das Immunsystem reagiert überempfindlich und greift auch sich selbst an.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={immunsystemDarm} alt="Immunsystem im Darm" className="rounded-xl w-full max-w-[200px]" />
                  </div>
                </div>
              </div>

              {/* 2. Darm-Hirn-Achse */}
              <div className="bg-card rounded-2xl p-8 border-l-4 border-purple-500 shadow-sm">
                <h3 className="text-2xl font-serif text-foreground mb-4 flex items-center gap-3">
                  <Brain className="w-7 h-7 text-purple-500" />
                  2️⃣ Darm → Gehirn: Die Darm-Hirn-Achse
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center order-last md:order-first">
                    <img src={darmHirnAchse} alt="Darm-Hirn-Achse" className="rounded-xl w-full max-w-[200px]" />
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Die Mäuse-Studie: Warum Alter nicht alles ist</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Was Wissenschaftler machten:</strong> Sie nahmen alte Mäuse und gaben ihnen das Darmmikrobiom von jungen, gesunden Mäusen.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Was passierte:</strong> Die alten Mäuse bekamen plötzlich ein besseres Gedächtnis und bessere Lernfähigkeit – genauso wie junge Mäuse!
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-foreground mt-6 mb-4">🔗 Der konkrete biologische Weg:</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 border-l-3 border-purple-500 rounded-r-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong>Schritt 1 – Gute Bakterien produzieren Butyrat:</strong> Wenn Sie Fasern essen (z.B. Gemüse, Vollkorn), nutzen gute Darmbakterien diese als Futter und produzieren Butyrat.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-3 border-green-500 rounded-r-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong>Schritt 2 – Butyrat gelangt ins Gehirn:</strong> Das Butyrat wird aufgenommen und gelangt über den Vagusnerv ins Gehirn.
                    </p>
                  </div>
                  <div className="bg-primary/10 border-l-3 border-primary rounded-r-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong>Schritt 3 – Effekt im Gehirn:</strong> Butyrat stärkt die Blut-Hirn-Schranke, reduziert Gehirnentzündung und fördert die Verbindung zwischen Nervenzellen.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Stoffwechsel */}
              <div className="bg-card rounded-2xl p-8 border-l-4 border-amber-500 shadow-sm">
                <h3 className="text-2xl font-serif text-foreground mb-4 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-amber-500" />
                  3️⃣ Darm → Stoffwechsel: Gewicht, Blutzucker, Energie
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">In Worten:</strong> Ihre Darmbakterien bestimmen, wie Ihr Körper mit Nahrung umgeht. 
                  Ein gutes Mikrobiom hilft Ihrem Körper, den Blutzucker stabil zu halten, Energie gleichmäßig bereitzustellen und das Gewicht zu kontrollieren.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Das Ergebnis:</strong> Mit gutem Mikrobiom: stabiles Gewicht, konstante Energie, kein Hunger-Crash. Ohne: Gewichtszunahme, Blutzucker-Schwankungen, Energielöcher.
                </p>
              </div>

              {/* 4. Alterung */}
              <div className="bg-card rounded-2xl p-8 border-l-4 border-red-400 shadow-sm">
                <h3 className="text-2xl font-serif text-foreground mb-4 flex items-center gap-3">
                  <Clock className="w-7 h-7 text-red-500" />
                  4️⃣ Darm → Alterung: Die stille Entzündung
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">In Worten:</strong> Mit dem Alter wird das Mikrobiom weniger vielfältig und „träger". 
                  Das führt zu einer niedriggradigen, chronischen Entzündung im ganzen Körper – das nennt sich <strong className="text-foreground">Inflammaging</strong>.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Das Ergebnis:</strong> Mit gutem, vielfältigem Mikrobiom altern Sie langsamer und gesünder. Das Mikrobiom ist ein Schlüssel zur Longevity.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 max-w-4xl mx-auto mt-10">
              <p className="text-foreground">
                <strong>🎯 Zusammengefasst:</strong> Der Darm steuert über 4 Kanäle (Gehirn, Immunsystem, Stoffwechsel, Entzündung) 
                eine große Kontrolle über Ihre Gesundheit und Ihr Altern. <strong>Das Gute: Sie können Ihr Mikrobiom innerhalb von Wochen / Monaten verbessern!</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Studienlage */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4">
              Die aktuelle Studienlage: Was die Wissenschaft wirklich sagt
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Basierend auf aktuellen Meta-Analysen, RCTs und Beobachtungsstudien (2023–2025)
            </p>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-4 text-left font-semibold">Thema</th>
                    <th className="p-4 text-left font-semibold">Zentrale Erkenntnisse</th>
                    <th className="p-4 text-left font-semibold">Qualität</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">Mikrobiom & Immunsystem</td>
                    <td className="p-4 text-sm text-muted-foreground">SCFAs aktivieren regulatorische T-Zellen und stärken Barriere-Integrität. Dysbiose korreliert mit erhöhtem Infektionsrisiko.</td>
                    <td className="p-4"><span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">HOCH</span></td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">Darm-Hirn-Achse & Kognition</td>
                    <td className="p-4 text-sm text-muted-foreground">Ältere Mäuse mit jungem Mikrobiota zeigen besseres Gedächtnis. Butyrat verbessert Lernfähigkeit.</td>
                    <td className="p-4"><span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">HOCH</span></td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">Psychisches Wohlbefinden</td>
                    <td className="p-4 text-sm text-muted-foreground">GABA-produzierende Bakterien reduzieren Angstsymptome. Probiotika + Präbiotika verbessern depressive Symptome.</td>
                    <td className="p-4"><span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">MITTEL</span></td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">Alterung & Longevity</td>
                    <td className="p-4 text-sm text-muted-foreground">Centenarians haben diversere Microbiota mit höheren Butyrat-produzierenden Stämmen.</td>
                    <td className="p-4"><span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">HOCH</span></td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">Stoffwechselerkrankungen</td>
                    <td className="p-4 text-sm text-muted-foreground">Dysbiose korreliert mit Gewichtszunahme, Insulinresistenz. Präbiotika verbessern Glukosekontrolle.</td>
                    <td className="p-4"><span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">HOCH</span></td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">Kardiovaskuläre Gesundheit</td>
                    <td className="p-4 text-sm text-muted-foreground">Microbiota regelt Cholesterin-Metabolismus und Blutdruck über Butyrat.</td>
                    <td className="p-4"><span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">MITTEL-HOCH</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 max-w-4xl mx-auto mt-10">
              <p className="text-foreground">
                <strong>📊 Zusammengefasst:</strong><br />
                • <strong>400+</strong> Humanstudien belegen Microbiota-Effekte auf Gesundheit<br />
                • <strong>Starke Evidenz</strong> für Immunsystem, Kognition, Alterung, Stoffwechsel<br />
                • <strong>Kausalität weitgehend etabliert</strong> (via Mendelian Randomization, FMT-Studien)
              </p>
            </div>
          </div>
        </section>

        {/* Nahrungsergänzungsmittel */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4">
              Nahrungsergänzungsmittel: Evidenzbasierte Bewertung
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              <strong>Keine Übertreibungen, keine Heilsversprechen – nur die Fakten.</strong>
            </p>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Klar empfohlen */}
              <div>
                <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-7 h-7" />
                  Klar empfohlen (Gute Evidenz)
                </h3>

                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-primary mb-3">Präbiotika: Inulin & FOS</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Wirkmechanismus:</strong> Selektive Nahrung für gute Bifidobacterien. Diese Stämme produzieren Butyrat (bis zu 3x mehr mit Präbiotika-Zusatz).
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Lebensmittel:</strong> Chicorée, Artischocken, Knoblauch, Zwiebeln, Spargel, Hafer.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Supplement sinnvoll?</strong> <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">JA – situativ</span> wenn Faseraufnahme {'<'} 25g/Tag, nach Antibiotika, bei Stoffwechselproblemen
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-primary mb-3">Probiotika: Spezifische Stämme</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Stämme mit bester Evidenz:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside mb-2 space-y-1">
                      <li><strong>Lactobacillus plantarum:</strong> Immunfunktion, Darmgesundheit – 12+ RCTs</li>
                      <li><strong>Bifidobacterium longum:</strong> Immunität, Stimmung, Verdauung – 20+ RCTs</li>
                      <li><strong>Akkermansia muciniphila:</strong> Barriere-Integrität, Gewicht – vielversprechend</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Supplement sinnvoll?</strong> <span className="bg-amber-500 text-white px-2 py-0.5 rounded text-xs font-bold">JA – mit Vorbehalt</span> nach Antibiotika, bei Reizdarmsyndrom. Qualität ist kritisch!
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-primary mb-3">Butyrat / Butyrat-Vorstufen</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Wirkmechanismus:</strong> Direkter Input der Energiequelle für Darmepithel. Stärkt Barriere, lindert Entzündung.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Supplement sinnvoll?</strong> <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">JA – bei Dysbiose</span> nach Stress, bei kognitiven Problemen. Oft 4-8 Wochen, dann Präbiotika.
                    </p>
                  </div>
                </div>
              </div>

              {/* Manchmal sinnvoll */}
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-7 h-7" />
                  Manchmal sinnvoll (Kontextabhängig)
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Probiotika nach Antibiotika</h4>
                    <p className="text-sm text-muted-foreground">
                      Antibiotika zerstören 80-90% der guten Bakterien. Multi-Stamm-Produkt kann die Wiederbesiedlung beschleunigen.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Probiotika bei chronischem Stress</h4>
                    <p className="text-sm text-muted-foreground">
                      Stress schrumpft die Diversität akut. Kurzzeitige Ergänzung kann stabilisierend wirken.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 md:col-span-2">
                    <h4 className="font-semibold text-amber-800 mb-2">Fiber / Psyllium Husk</h4>
                    <p className="text-sm text-muted-foreground">
                      Wenn Faseraufnahme drastisch unzureichend ist ({'<'} 15g/Tag), kann Psyllium helfen. Ziel: Erhöhung der natürlichen Faseraufnahme.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nicht empfohlen */}
              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center gap-2">
                  <XCircle className="w-7 h-7" />
                  Nicht empfohlen (Schwache Evidenz)
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-200">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Viele kommerzielle Multi-Probiotika:</strong> Zu viele Stämme, unklare Wirkung, oft nicht die High-Evidence-Stämme.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-200">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">„Superfoods" mit Probiotika:</strong> Kombucha, Kefir gut für Vielfalt, aber unkontrollierte Dosierung und schwache klinische Evidenz.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-200">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Probiotische „Superblends" mit 50+ Stämmen:</strong> Zu viele Unbekannte, kaum eine überlebt in bedeutsamer Menge.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 max-w-4xl mx-auto mt-10">
              <p className="text-foreground">
                <strong>🎯 Praktische Regel:</strong><br />
                <strong>Erst Essentials:</strong> Faser ({'>'} 25g/Tag), guter Schlaf, Stressabbau, regelmäßige Bewegung<br />
                <strong>Dann Ergänzung:</strong> Wenn nötig, Präbiotika + hochwertige Probiotika gezielt einsetzen<br />
                <strong>Nicht:</strong> Blind Dutzende Supplemente nehmen ohne Grund
              </p>
            </div>
          </div>
        </section>

        {/* Personalisierung */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
              Personalisierung: Der nächste Schritt
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg text-muted-foreground text-center">
                Nicht alle haben das gleiche Mikrobiom-Profil. Individualisierung macht Sinn – hier sind die Optionen:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">🩸 Blutwerte</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Entzündungsmarker:</strong> CRP, IL-6, TNF-α – zeigen chronische Entzündung</li>
                    <li><strong>Stoffwechsel:</strong> Nüchternglukose, Insulinresistenz-Index, Lipidprofil</li>
                    <li><strong>Darmbarriere:</strong> Zonula Occludens 1, LPS – zunehmend verfügbar</li>
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">🔬 Stuhltest / Mikrobiom-Analyse</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Was Sie bekommen:</strong> Exakte Zusammensetzung der Bakterien, Pilze, ggf. Parasitenbelastung.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Sinnvoll bei:</strong> Chronischen Verdauungsproblemen, anhaltendem Übergewicht, kognitiven Problemen.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                <p className="text-foreground">
                  <strong>Ehrlich gemeint:</strong> Für die meisten Menschen reicht es, die Basics zu optimieren (Faser, Stress, Schlaf, Bewegung). 
                  Umfangreiche Tests sind ein netter Bonus, aber nicht notwendig.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quellen */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
              Quellen & Weiterführende Ressourcen
            </h2>

            <div className="max-w-4xl mx-auto bg-card rounded-xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-border">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>[1]</strong> Kim, M., et al. (2024). "The microbiome: an emerging key player in aging and longevity." <em>Nature Aging</em>.
                  </p>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-border">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>[2]</strong> Nature Reviews Microbiology (2024). "Short-chain fatty acids mediate gut microbiota–brain communication."
                  </p>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-border">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>[3]</strong> Microbiome Journal (2020). "Young versus aged microbiota transplants: improved cognitive performance."
                  </p>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-border">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>[4]</strong> BMC Medicine (2024). "Mendelian randomization analyses support causal relationships between gut microbiome and longevity."
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>[5]</strong> Frontiers in Nutrition (2024). "Unveiling the therapeutic symphony of probiotics, prebiotics, and postbiotics."
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">📚 Weitere Ressourcen:</strong><br />
                  • PubMed.gov – für selbstständige Recherche<br />
                  • Google Scholar – für frei verfügbare Volltext-PDFs<br />
                  • Nature, Lancet, NEJM – hochwertige Publikationen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Transparenz ist uns wichtig
            </h2>
            <p className="text-lg opacity-95 max-w-2xl mx-auto mb-8">
              Alle Empfehlungen basieren auf aktueller Forschung (PubMed, Nature, Lancet, NEJM).
              Wir verkaufen keine Heilsversprechen – nur evidenzbasierte Strategien für echte Gesundheit.
            </p>
            <p className="text-sm opacity-80">
              Diese Seite ersetzt keine medizinische Beratung. Bei bestehenden Erkrankungen konsultieren Sie einen Arzt.
            </p>
          </div>
        </section>

        {/* Related Topics */}
        <section className="py-12 bg-secondary/30">
          <div className="container px-4">
            <h3 className="text-xl font-serif text-foreground text-center mb-6">Weitere Themen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/herzgesundheit/ernaehrung" className="px-5 py-2.5 bg-card rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border">
                Ernährung
              </Link>
              <Link to="/herzgesundheit/risikofaktoren" className="px-5 py-2.5 bg-card rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border">
                Risikofaktoren
              </Link>
              <Link to="/herzgesundheit/sport" className="px-5 py-2.5 bg-card rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border">
                Sport & Herz
              </Link>
              <Link to="/herzgesundheit/frauenherzen" className="px-5 py-2.5 bg-card rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border">
                Frauenherzen
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Mikrobiom;
