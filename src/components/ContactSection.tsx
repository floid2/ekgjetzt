import { useState } from "react";
import { Heart, Mail, Upload, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual n8n webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-ekg-mint/10">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-serif mb-4 text-foreground">Vielen Dank!</h2>
            <p className="text-muted-foreground mb-6">
              Ihre Anfrage ist bei uns eingegangen. Dr. Suwelack meldet sich innerhalb von 24 Stunden bei Ihnen.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Weitere Anfrage stellen
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-ekg-mint/10">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
              Starten Sie jetzt mit Ihrer Anfrage
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Füllen Sie das Formular aus und laden Sie Ihre EKG-Daten oder Unterlagen hoch. 
              Dr. Suwelack meldet sich innerhalb von 24 Stunden bei Ihnen.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-Mail</p>
                  <p className="text-muted-foreground">info@ekgjetzt.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sprechzeiten</p>
                  <p className="text-muted-foreground">Mo-Fr: 9:00 - 17:00 Uhr</p>
                </div>
              </div>
            </div>

            {/* Emergency Note */}
            <div className="mt-8 p-4 rounded-xl bg-ekg-coral/10 border border-ekg-coral/20">
              <p className="text-sm text-ekg-coral font-medium mb-1">⚠️ Wichtiger Hinweis</p>
              <p className="text-sm text-muted-foreground">
                Bei akuten Beschwerden wie Brustschmerzen, Atemnot oder Bewusstlosigkeit 
                rufen Sie bitte sofort den Notruf <strong>112</strong> an.
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Vorname *</label>
                  <Input placeholder="Max" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nachname *</label>
                  <Input placeholder="Mustermann" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-Mail *</label>
                <Input type="email" placeholder="max@beispiel.de" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Gewünschter Service *</label>
                <select 
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  required
                >
                  <option value="">Bitte wählen...</option>
                  <option value="ekg">EKG-Analyse (39€)</option>
                  <option value="zweitmeinung">Zweitmeinung (69€)</option>
                  <option value="video">Video-Sprechstunde (99€)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Ihre Nachricht</label>
                <Textarea 
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  rows={4}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Datei hochladen</label>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    EKG-PDF oder Unterlagen hier ablegen
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    PDF, JPG, PNG bis 10MB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Ich habe die <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen 
                  und stimme der Verarbeitung meiner Gesundheitsdaten zu. *
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Sichere Übertragung • DSGVO-konform • Antwort in 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
