import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Upload, AlertTriangle, CheckCircle, FileText, X, Heart, Watch, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const WEBHOOK_URL = "https://n8n.avantic.de/webhook/7bce7b9e-6111-4674-bb47-6a648b731413";

const EKGAnalyse = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const [selectedFile3, setSelectedFile3] = useState<File | null>(null);
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (f: File | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Datei zu groß", description: "Bitte wählen Sie eine Datei unter 10 MB.", variant: "destructive" });
        return;
      }
      setter(file);
    }
  };

  const handleDrop = (e: React.DragEvent, setter: (f: File | null) => void) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Datei zu groß", description: "Bitte wählen Sie eine Datei unter 10 MB.", variant: "destructive" });
        return;
      }
      setter(file);
    }
  };

  const renderFileUpload = (
    label: string,
    required: boolean,
    hint: string,
    selectedFile: File | null,
    setter: (f: File | null) => void,
    inputRef: React.RefObject<HTMLInputElement>
  ) => (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.heic"
        onChange={(e) => handleFileChange(e, setter)}
        className="hidden"
      />
      {selectedFile ? (
        <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <FileText className="w-8 h-8 text-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{selectedFile.name}</p>
            <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(0)} KB</p>
          </div>
          <button
            type="button"
            onClick={() => { setter(null); if (inputRef.current) inputRef.current.value = ""; }}
            className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-destructive" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setter)}
          className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
        >
          <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground mb-1">Datei hier ablegen oder klicken</p>
          <p className="text-xs text-muted-foreground">{hint}</p>
        </div>
      )}
    </div>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!selectedFile1) {
      toast({ title: "EKG-Datei fehlt", description: "Bitte laden Sie mindestens die erste EKG-Datei hoch.", variant: "destructive" });
      return;
    }

    if (!consent1 || !consent2) {
      toast({ title: "Zustimmung erforderlich", description: "Bitte bestätigen Sie beide Datenschutz- & Vertragsbedingungen.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const hiddenForm = document.createElement("form");
    hiddenForm.method = "POST";
    hiddenForm.action = WEBHOOK_URL;
    hiddenForm.enctype = "multipart/form-data";
    hiddenForm.style.display = "none";

    const addField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      hiddenForm.appendChild(input);
    };

    addField("Ihr Name", (form.elements.namedItem("ihrName") as HTMLInputElement).value);
    addField("E-Mail-Adresse", (form.elements.namedItem("email") as HTMLInputElement).value);
    addField("Geburtsdatum", (form.elements.namedItem("geburtsdatum") as HTMLInputElement).value);
    addField("Beschwerden / Symptome", (form.elements.namedItem("beschwerden") as HTMLTextAreaElement).value);
    addField("Datenschutz & Vertragsbedingungen", "Ich habe die Datenschutzerklärung gelesen und willige ein, dass meine personenbezogenen Daten einschließlich Gesundheitsdaten zum Zweck der EKG-Analyse verarbeitet werden.");
    addField("Datenschutz & Vertragsbedingungen", "Ich akzeptiere die AGB und bestätige den sofortigen Beginn der Beratung, wodurch das Widerrufsrecht für vollständig erbrachte Leistungen erlischt.");
    addField("submittedAt", new Date().toISOString());
    addField("formMode", "production");

    // File 1 (required)
    const appendFile = (file: File, fieldName: string) => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.name = fieldName;
      const dt = new DataTransfer();
      dt.items.add(file);
      fileInput.files = dt.files;
      hiddenForm.appendChild(fileInput);
    };

    appendFile(selectedFile1, "EKG_Datei_hochladen");
    if (selectedFile2) appendFile(selectedFile2, "EKG_Datei_2");
    if (selectedFile3) appendFile(selectedFile3, "EKG_Datei_3");

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead title="EKG-Analyse Anfrage" description="Laden Sie Ihr Smartwatch-EKG hoch und erhalten Sie eine fachärztliche Einschätzung innerhalb von 48 Stunden." canonical="/ekg-analyse" />
        <NavigationHeader />
        <main className="min-h-screen pt-24 pb-16">
          <div className="container px-4">
            <div className="max-w-xl mx-auto text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-serif mb-4 text-foreground">Vielen Dank!</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Ihre EKG-Analyse Anfrage ist bei uns eingegangen. Dr. Suwelack meldet sich innerhalb von 48 Stunden bei Ihnen.
              </p>
              <p className="text-sm text-muted-foreground mb-8">Sie erhalten eine Bestätigung per E-Mail.</p>
              <Button variant="outline" className="rounded-full" onClick={() => {
                setIsSubmitted(false);
                setSelectedFile1(null);
                setSelectedFile2(null);
                setSelectedFile3(null);
                setConsent1(false);
                setConsent2(false);
              }}>
                Weitere Anfrage stellen
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="EKG-Analyse Anfrage"
        description="Laden Sie Ihr Smartwatch-EKG hoch und erhalten Sie eine fachärztliche Einschätzung innerhalb von 48 Stunden. 39 € einmalig."
        canonical="/ekg-analyse"
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          <Breadcrumbs items={[
            { label: "Leistungen", href: "/#services" },
            { label: "EKG-Analyse Anfrage" }
          ]} />

          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Smartwatch-EKG Analyse – 39 €
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
                EKG-Analyse Anfrage
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Bitte füllen Sie das Formular aus. Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  <strong>WICHTIG:</strong> Dies ist kein Notfalldienst. Bei akuten Beschwerden wählen Sie die <strong>112</strong>.
                </p>
              </div>
            </div>

            {/* EKG Export Guide */}
            <div className="mb-8 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Watch className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif text-foreground">So exportieren Sie Ihr EKG als PDF</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Wir unterstützen EKGs aller Smartwatches und EKG-Geräte – unabhängig vom Hersteller. Reichen Sie Ihr EKG einfach als PDF- oder Bilddatei ein. Die folgenden Anleitungen zeigen exemplarisch, wie der Export bei den gängigsten Uhren funktioniert:
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="apple">
                  <AccordionTrigger className="text-sm font-semibold">Apple Watch (Series 4 oder neuer)</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-3">
                      <li>Öffnen Sie die <strong>Health-App</strong> auf Ihrem iPhone</li>
                      <li>Tippen Sie auf <strong>Entdecken → Herz → Elektrokardiogramme (EKG)</strong></li>
                      <li>Wählen Sie die gewünschte EKG-Aufzeichnung aus</li>
                      <li>Tippen Sie auf <strong>„PDF für den Arzt exportieren"</strong></li>
                      <li>Tippen Sie auf das <strong>Teilen-Symbol</strong> oben rechts</li>
                      <li>Wählen Sie <strong>„In Dateien sichern"</strong></li>
                      <li>Laden Sie die gespeicherte PDF im Formular unten hoch</li>
                    </ol>
                    <p className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                      <strong>Hinweis:</strong> Mindestens Apple Watch Series 4 (keine SE) und iPhone mit iOS 12.2 oder neuer erforderlich.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="samsung">
                  <AccordionTrigger className="text-sm font-semibold">Samsung Galaxy Watch (Active2, Watch3 oder neuer)</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-3">
                      <li>Öffnen Sie die <strong>Samsung Health Monitor App</strong> auf Ihrem Smartphone</li>
                      <li>Tippen Sie auf den <strong>EKG-Bereich</strong></li>
                      <li>Wählen Sie die gewünschte Aufzeichnung aus</li>
                      <li>Tippen Sie auf die <strong>drei Punkte (⋮) → Teilen</strong></li>
                      <li>Der EKG-Bericht wird als PDF erstellt</li>
                      <li>Wählen Sie <strong>„In Dateien sichern"</strong> oder senden Sie sich die PDF per E-Mail</li>
                    </ol>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-xs text-amber-800">
                        <strong>Wichtig:</strong> Die Samsung Health Monitor App funktioniert aktuell leider nur mit Samsung Galaxy-Smartphones. Wenn Sie eine Samsung Watch mit einem anderen Handy nutzen, machen Sie bitte Screenshots Ihrer EKG-Kurven in der App und laden Sie diese als Bilddateien hoch.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="huawei">
                  <AccordionTrigger className="text-sm font-semibold">Huawei Watch (GT 3 Pro, GT 5 Pro, Watch D2 und weitere)</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-3">
                      <li>Öffnen Sie die <strong>Huawei Health App</strong> auf Ihrem Smartphone</li>
                      <li>Gehen Sie zu <strong>Herz → EKG</strong></li>
                      <li>Wählen Sie die gewünschte EKG-Aufzeichnung aus</li>
                      <li>Tippen Sie auf das <strong>Download-Symbol</strong> oben rechts im EKG-Detail-Bildschirm</li>
                      <li>Der EKG-Bericht wird als PDF heruntergeladen</li>
                      <li>Alternativ: Tippen Sie auf <strong>Teilen</strong>, um die PDF direkt per E-Mail zu senden</li>
                    </ol>
                    <p className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                      <strong>Hinweis:</strong> Die EKG-Funktion ist auf der Huawei Watch GT 3 Pro, GT 5 Pro, Watch D, Watch D2, Watch 4 (Pro) und weiteren Modellen verfügbar.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="garmin">
                  <AccordionTrigger className="text-sm font-semibold">Garmin (Fenix 8, Venu 3 und weitere)</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-3">
                      <li>Öffnen Sie die <strong>Garmin Connect App</strong> auf Ihrem Smartphone</li>
                      <li>Tippen Sie auf das <strong>Menü (•••)</strong> unten rechts</li>
                      <li>Gehen Sie zu <strong>Gesundheit & Leistung → EKG</strong></li>
                      <li>Wählen Sie die gewünschte Aufzeichnung aus</li>
                      <li>Tippen Sie auf <strong>Teilen</strong> oder <strong>PDF exportieren</strong></li>
                      <li>Speichern Sie die PDF und laden Sie sie im Formular hoch</li>
                    </ol>
                    <p className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                      <strong>Hinweis:</strong> Die EKG-Funktion ist auf der Garmin Fenix 8, Venu 3, Venu 3S und weiteren Modellen mit ELEVATE Gen 5 Sensor verfügbar.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="withings">
                  <AccordionTrigger className="text-sm font-semibold">Withings (ScanWatch, Move ECG)</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
                      <li>Öffnen Sie die <strong>Withings Health Mate App</strong></li>
                      <li>Tippen Sie auf <strong>Timeline</strong> oder <strong>Messungen</strong></li>
                      <li>Wählen Sie die EKG-Aufzeichnung aus</li>
                      <li>Tippen Sie auf <strong>„Teilen"</strong> oder <strong>„PDF exportieren"</strong></li>
                      <li>Speichern Sie die PDF und laden Sie sie unten hoch</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pixel">
                  <AccordionTrigger className="text-sm font-semibold">Google Pixel Watch</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
                      <li>Öffnen Sie die <strong>Fitbit-App</strong> auf Ihrem Smartphone</li>
                      <li>Gehen Sie zu <strong>Gesundheitswerte → Herz → EKG</strong></li>
                      <li>Wählen Sie die Aufzeichnung aus und tippen Sie auf <strong>Exportieren/Teilen</strong></li>
                      <li>Speichern Sie die PDF</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="other">
                  <AccordionTrigger className="text-sm font-semibold">Andere Uhren / Anderes EKG-Gerät</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ihre Uhr oder Ihr EKG-Gerät ist nicht in der Liste? Prüfen Sie zunächst in der zugehörigen App, ob es eine Export- oder Teilen-Funktion gibt – die meisten EKG-fähigen Geräte bieten einen PDF-Export an.
                    </p>
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Falls kein PDF-Export möglich ist:</p>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-3">
                      <li>Öffnen Sie die EKG-Aufzeichnung in der App Ihres Geräts</li>
                      <li>Machen Sie Screenshots der gesamten EKG-Kurve</li>
                      <li>Laden Sie die Bilder über die Upload-Felder im Formular hoch</li>
                    </ol>
                    <p className="text-xs text-muted-foreground bg-primary/5 p-3 rounded-lg">
                      <strong>Tipp:</strong> Achten Sie darauf, dass die gesamte Kurve, die Herzfrequenz und der Zeitstempel sichtbar sind.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Info-Box */}
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Wir akzeptieren EKGs aller Hersteller und Geräte</strong> – egal ob Smartwatch, mobiles EKG-Gerät oder Klinik-EKG. Wichtig ist nur, dass die Aufzeichnung als PDF oder Bilddatei vorliegt.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <HelpCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <p>
                  Sie kommen nicht weiter? Schreiben Sie uns an{" "}
                  <a href="mailto:info@ekgjetzt.de" className="text-primary hover:underline font-medium">info@ekgjetzt.de</a>
                  {" "}– wir helfen Ihnen gerne beim Export.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="ihrName" className="block text-sm font-medium text-foreground mb-2">
                    Ihr Name <span className="text-destructive">*</span>
                  </label>
                  <Input id="ihrName" name="ihrName" required placeholder="Vor- und Nachname" defaultValue={searchParams.get("name") || ""} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail-Adresse <span className="text-destructive">*</span>
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="ihre@email.de" defaultValue={searchParams.get("email") || ""} />
                </div>

                {/* Geburtsdatum */}
                <div>
                  <label htmlFor="geburtsdatum" className="block text-sm font-medium text-foreground mb-2">
                    Geburtsdatum <span className="text-destructive">*</span>
                  </label>
                  <Input id="geburtsdatum" name="geburtsdatum" type="date" required />
                </div>

                {/* Beschwerden */}
                <div>
                  <label htmlFor="beschwerden" className="block text-sm font-medium text-foreground mb-2">
                    Beschwerden / Symptome
                  </label>
                  <Textarea id="beschwerden" name="beschwerden" rows={4} placeholder="Beschreiben Sie kurz Ihre Symptome oder Ihr Anliegen..." />
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  {renderFileUpload("EKG-Datei 1 hochladen", true, "EKG-PDF, Screenshot oder Foto der EKG-Kurve", selectedFile1, setSelectedFile1, fileInputRef1)}
                  {renderFileUpload("EKG-Datei 2 hochladen", false, "Weitere EKG-Aufnahme oder Screenshot (optional)", selectedFile2, setSelectedFile2, fileInputRef2)}
                  {renderFileUpload("EKG-Datei 3 hochladen", false, "Weitere EKG-Aufnahme oder Screenshot (optional)", selectedFile3, setSelectedFile3, fileInputRef3)}
                </div>

                {/* Datenschutz & Vertragsbedingungen */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Datenschutz & Vertragsbedingungen <span className="text-destructive">*</span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent1" checked={consent1} onChange={(e) => setConsent1(e.target.checked)} className="mt-1 flex-shrink-0" required />
                      <label htmlFor="consent1" className="text-sm text-muted-foreground leading-relaxed">
                        Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und willige ein, dass meine personenbezogenen Daten einschließlich Gesundheitsdaten zum Zweck der EKG-Analyse verarbeitet werden.
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent2" checked={consent2} onChange={(e) => setConsent2(e.target.checked)} className="mt-1 flex-shrink-0" required />
                      <label htmlFor="consent2" className="text-sm text-muted-foreground leading-relaxed">
                        Ich akzeptiere die <a href="/agb" className="text-primary hover:underline">AGB</a> und bestätige den sofortigen Beginn der Beratung, wodurch das Widerrufsrecht für vollständig erbrachte Leistungen erlischt.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Anfrage absenden
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Sichere Übertragung • DSGVO-konform • Ersteinschätzung in 48h
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EKGAnalyse;
