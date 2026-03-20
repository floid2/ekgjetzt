import { useState } from "react";
import { Heart, Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const vorname = (form.querySelector('#contact-vorname') as HTMLInputElement)?.value || "";
    const nachname = (form.querySelector('#contact-nachname') as HTMLInputElement)?.value || "";
    const email = (form.querySelector('#contact-email') as HTMLInputElement)?.value || "";
    const nachricht = (form.querySelector('#contact-nachricht') as HTMLTextAreaElement)?.value || "";

    const subject = `Allgemeine Anfrage – ${vorname} ${nachname}`;
    const body = `Vorname: ${vorname}\nNachname: ${nachname}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}`;

    window.location.href = `mailto:info@ekgjetzt.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    toast({
      title: "E-Mail-Programm geöffnet",
      description: "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die E-Mail ab.",
    });
  };

  const showForm = selectedService === "" || selectedService === "allgemein";
  const isRedirectService = selectedService === "ekg" || selectedService === "zweitmeinung" || selectedService === "video";

  const getFormParams = () => {
    const vorname = (document.querySelector('#contact-vorname') as HTMLInputElement)?.value || "";
    const nachname = (document.querySelector('#contact-nachname') as HTMLInputElement)?.value || "";
    const email = (document.querySelector('#contact-email') as HTMLInputElement)?.value || "";
    const params = new URLSearchParams();
    if (vorname || nachname) params.set("name", `${vorname} ${nachname}`.trim());
    if (email) params.set("email", email);
    return params.toString();
  };

  const getRedirectHref = (basePath: string) => {
    const params = getFormParams();
    return params ? `${basePath}?${params}` : basePath;
  };

  const redirectContent: Record<string, { text: string; buttonText: string; href: string; isMail?: boolean }> = {
    ekg: {
      text: "Für die EKG-Analyse nutzen Sie bitte unser spezielles Anfrageformular mit Upload-Funktion.",
      buttonText: "Zum EKG-Formular",
      href: "/ekg-analyse",
    },
    zweitmeinung: {
      text: "Für die kardiologische Zweitmeinung nutzen Sie bitte unser spezielles Anfrageformular mit Upload-Funktion.",
      buttonText: "Zum Zweitmeinung-Formular",
      href: "/zweitmeinung",
    },
    video: {
      text: "Für die Video-Sprechstunde kontaktieren Sie uns bitte per E-Mail, damit wir einen Termin vereinbaren können.",
      buttonText: "E-Mail schreiben",
      href: "mailto:info@ekgjetzt.de?subject=Anfrage%20Video-Sprechstunde",
      isMail: true,
    },
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
            <p className="text-muted-foreground mb-2">
              Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die E-Mail ab.
            </p>
            <p className="text-muted-foreground mb-6">
              Dr. Suwelack meldet sich innerhalb von 24 Stunden bei Ihnen.
            </p>
            <Button variant="outline" onClick={() => { setIsSubmitted(false); setSelectedService(""); }}>
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
              Wählen Sie den gewünschten Service aus und wir leiten Sie zum passenden Formular weiter.
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
                  <Input id="contact-vorname" placeholder="Max" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nachname *</label>
                  <Input id="contact-nachname" placeholder="Mustermann" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-Mail *</label>
                <Input id="contact-email" type="email" placeholder="max@beispiel.de" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Gewünschter Service *</label>
                <select 
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="" disabled>Bitte wählen...</option>
                  <option value="ekg">EKG-Analyse (39€)</option>
                  <option value="zweitmeinung">Zweitmeinung (69€)</option>
                  <option value="video">Video-Sprechstunde (99€)</option>
                  <option value="allgemein">Allgemeine Frage</option>
                </select>
              </div>

              {/* Redirect hint for EKG/Zweitmeinung/Video */}
              {isRedirectService && redirectContent[selectedService] && (
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 space-y-4">
                  <p className="text-sm text-foreground">
                    {redirectContent[selectedService].text}
                  </p>
                  {redirectContent[selectedService].isMail ? (
                    <Button asChild className="w-full rounded-full">
                      <a href={redirectContent[selectedService].href}>
                        {redirectContent[selectedService].buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild className="w-full rounded-full">
                      <Link to={getRedirectHref(redirectContent[selectedService].href)}>
                        {redirectContent[selectedService].buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>
              )}

              {/* Regular form fields for "Allgemeine Frage" or default */}
              {showForm && (
                <>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Ihre Nachricht *</label>
                    <Textarea 
                      id="contact-nachricht"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      rows={4}
                      required={selectedService === "allgemein"}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen 
                      und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-full"
                  >
                    Anfrage absenden
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Sichere Übertragung • DSGVO-konform • Antwort in 24h
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
