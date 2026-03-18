import { useState, useRef } from "react";
import { Upload, AlertTriangle, FileText, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const Zweitmeinung = () => {
  const { toast } = useToast();
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const [selectedFile3, setSelectedFile3] = useState<File | null>(null);
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (f: File | null) => void
  ) => {
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
      setter(file);
    }
  };

  const handleDrop = (
    e: React.DragEvent,
    setter: (f: File | null) => void
  ) => {
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
      setter(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile1) {
      toast({
        title: "Unterlage fehlt",
        description: "Bitte laden Sie mindestens eine medizinische Unterlage hoch.",
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

    // Submission wird im nächsten Schritt implementiert
    toast({
      title: "Hinweis",
      description: "Die Formular-Übermittlung wird im nächsten Schritt implementiert.",
    });
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
        accept=".pdf,.png,.jpg,.jpeg"
        onChange={(e) => handleFileChange(e, setter)}
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
              setter(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
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
          <p className="text-sm font-medium text-foreground mb-1">
            Datei hier ablegen oder klicken
          </p>
          <p className="text-xs text-muted-foreground">
            PDF, JPG, PNG bis 10 MB
          </p>
        </div>
      )}
      <p className="text-xs text-muted-foreground mt-1">{hint}</p>
    </div>
  );

  return (
    <>
      <SEOHead
        title="Kardiologische Zweitmeinung"
        description="Laden Sie Ihre medizinischen Unterlagen hoch und erhalten Sie eine fundierte kardiologische Zweitmeinung von Dr. med. Rebekka Suwelack. 69 € einmalig."
        canonical="/zweitmeinung"
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          <Breadcrumbs items={[
            { label: "Leistungen", href: "/#services" },
            { label: "Kardiologische Zweitmeinung" }
          ]} />

          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Kardiologische Zweitmeinung – 69 €
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
                Kardiologische Zweitmeinung
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Laden Sie Ihre medizinischen Unterlagen hoch. Unsere Fachärztin Dr. med. Rebekka Suwelack gibt Ihnen eine fundierte kardiologische Zweitmeinung.
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

                {/* Spezifische Fragen */}
                <div>
                  <label htmlFor="fragen" className="block text-sm font-medium text-foreground mb-2">
                    Spezifische Fragen
                  </label>
                  <Textarea
                    id="fragen"
                    name="fragen"
                    rows={3}
                    placeholder="Haben Sie spezifische Fragen, die wir Ihnen beantworten können?"
                  />
                </div>

                {/* File Upload 1 */}
                {renderFileUpload(
                  "Unterlage 1 hochladen",
                  true,
                  "Arztbrief, Befund oder andere medizinische Unterlage",
                  selectedFile1,
                  setSelectedFile1,
                  fileInputRef1
                )}

                {/* File Upload 2 */}
                {renderFileUpload(
                  "Unterlage 2 hochladen",
                  false,
                  "Arztbrief, Befund oder andere medizinische Unterlage",
                  selectedFile2,
                  setSelectedFile2,
                  fileInputRef2
                )}

                {/* File Upload 3 */}
                {renderFileUpload(
                  "Unterlage 3 hochladen",
                  false,
                  "Arztbrief, Befund oder andere medizinische Unterlage",
                  selectedFile3,
                  setSelectedFile3,
                  fileInputRef3
                )}

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
                        Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und willige in die Verarbeitung meiner Gesundheitsdaten ein.
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
                        Ich akzeptiere die <a href="/agb" className="text-primary hover:underline">AGB</a> und bestätige, dass die kardiologische Zweitmeinung keine klinische Diagnose oder Untersuchung vor Ort ersetzt.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Kostenpflichtig einreichen (69 €)
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Nach Zahlungseingang wird Ihre Anfrage von Dr. med. Rebekka Suwelack bearbeitet. Sie erhalten die kardiologische Zweitmeinung in der Regel innerhalb von 48 Stunden per E-Mail.
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

export default Zweitmeinung;
