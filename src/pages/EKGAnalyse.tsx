import { useState, useRef } from "react";
import { Upload, AlertTriangle, CheckCircle, FileText, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const WEBHOOK_URL = "https://n8n.avantic.de/webhook/7bce7b9e-6111-4674-bb47-6a648b731413";

const EKGAnalyse = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Datei zu groß",
          description: "Bitte wählen Sie eine Datei unter 10 MB.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Datei zu groß",
          description: "Bitte wählen Sie eine Datei unter 10 MB.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    
    if (!selectedFile) {
      toast({
        title: "EKG-Datei fehlt",
        description: "Bitte laden Sie Ihre EKG-Datei hoch.",
        variant: "destructive",
      });
      return;
    }

    if (!consent1 || !consent2) {
      toast({
        title: "Zustimmung erforderlich",
        description: "Bitte bestätigen Sie beide Datenschutz- & Vertragsbedingungen.",
        variant: "destructive",
      });
      return;
    }

    // Immediately block further submissions
    setIsSubmitting(true);

    // Build a hidden form and submit natively so the browser follows the 302 redirect
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
    addField(
      "Datenschutz & Vertragsbedingungen",
      "Ich habe die Datenschutzerklärung gelesen und willige ein, dass meine personenbezogenen Daten einschließlich Gesundheitsdaten zum Zweck der EKG-Analyse verarbeitet werden."
    );
    addField(
      "Datenschutz & Vertragsbedingungen",
      "Ich akzeptiere die AGB und bestätige den sofortigen Beginn der Beratung, wodurch das Widerrufsrecht für vollständig erbrachte Leistungen erlischt."
    );
    addField("submittedAt", new Date().toISOString());
    addField("formMode", "production");

    // Append file via DataTransfer
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.name = "EKG_Datei_hochladen";
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(selectedFile);
    fileInput.files = dataTransfer.files;
    hiddenForm.appendChild(fileInput);

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="EKG-Analyse Anfrage"
          description="Laden Sie Ihr Smartwatch-EKG hoch und erhalten Sie eine fachärztliche Einschätzung innerhalb von 48 Stunden."
          canonical="/ekg-analyse"
        />
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
              <p className="text-sm text-muted-foreground mb-8">
                Sie erhalten eine Bestätigung per E-Mail.
              </p>
              <Button variant="outline" className="rounded-full" onClick={() => {
                setIsSubmitted(false);
                setSelectedFile(null);
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

            {/* Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="ihrName" className="block text-sm font-medium text-foreground mb-2">
                    Ihr Name <span className="text-destructive">*</span>
                  </label>
                  <Input id="ihrName" name="ihrName" required placeholder="Vor- und Nachname" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail-Adresse <span className="text-destructive">*</span>
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="ihre@email.de" />
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
                  <Textarea
                    id="beschwerden"
                    name="beschwerden"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihre Symptome oder Ihr Anliegen..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    EKG-Datei hochladen <span className="text-destructive">*</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.heic"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {selectedFile ? (
                    <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                      <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{selectedFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(selectedFile.size / 1024).toFixed(0)} KB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground mb-1">
                        EKG-PDF oder Screenshot hier ablegen
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, JPG, PNG bis 10 MB
                      </p>
                    </div>
                  )}
                </div>

                {/* Datenschutz & Vertragsbedingungen */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Datenschutz & Vertragsbedingungen <span className="text-destructive">*</span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent1"
                        checked={consent1}
                        onChange={(e) => setConsent1(e.target.checked)}
                        className="mt-1 flex-shrink-0"
                        required
                      />
                      <label htmlFor="consent1" className="text-sm text-muted-foreground leading-relaxed">
                        Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und willige ein, dass meine personenbezogenen Daten einschließlich Gesundheitsdaten zum Zweck der EKG-Analyse verarbeitet werden.
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent2"
                        checked={consent2}
                        onChange={(e) => setConsent2(e.target.checked)}
                        className="mt-1 flex-shrink-0"
                        required
                      />
                      <label htmlFor="consent2" className="text-sm text-muted-foreground leading-relaxed">
                        Ich akzeptiere die <a href="/agb" className="text-primary hover:underline">AGB</a> und bestätige den sofortigen Beginn der Beratung, wodurch das Widerrufsrecht für vollständig erbrachte Leistungen erlischt.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
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
