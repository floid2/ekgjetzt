import { useState } from "react";
import { Mail, Phone, Clock, AlertTriangle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - EKGJetzt",
    "description": "Kontaktieren Sie EKGJetzt für fachärztliche Online-Kardiologie",
    "mainEntity": {
      "@type": "Organization",
      "name": "EKGJetzt",
      "email": "info@ekgjetzt.de"
    }
  };

  return (
    <>
      <SEOHead 
        title="Kontakt"
        description="Kontaktieren Sie EKGJetzt für Ihre kardiologische Beratung. Schnelle Antworten, fachärztliche Expertise, datenschutzkonform."
        canonical="/kontakt"
        schema={schema}
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Kontakt
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Haben Sie Fragen zu unseren Leistungen oder möchten Sie einen Termin vereinbaren? 
                Wir sind für Sie da.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-serif text-foreground mb-6">So erreichen Sie uns</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">E-Mail</h3>
                      <a href="mailto:info@ekgjetzt.de" className="text-muted-foreground hover:text-primary transition-colors">
                        info@ekgjetzt.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Antwortzeit</h3>
                      <p className="text-muted-foreground">
                        EKG-Analysen: Innerhalb von 48 Stunden<br />
                        Allgemeine Anfragen: 1–2 Werktage
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-red-800">Notfall?</h3>
                      <p className="text-sm text-red-700">
                        EKGJetzt ersetzt keine Notfallversorgung. Bei akuten Symptomen wie 
                        starken Brustschmerzen, Atemnot oder Bewusstlosigkeit wählen Sie bitte 
                        sofort die <strong>112</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Links */}
                <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                  <h3 className="font-medium text-foreground mb-4">Unsere Leistungen</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/leistungen/smartwatch-ekg" className="text-primary hover:underline">
                        Smartwatch-EKG Analyse → 39 €
                      </a>
                    </li>
                    <li>
                      <a href="/leistungen/zweitmeinung" className="text-primary hover:underline">
                        Ärztliche Zweitmeinung → 79 €
                      </a>
                    </li>
                    <li>
                      <a href="/leistungen/videosprechstunde" className="text-primary hover:underline">
                        Video-Sprechstunde → 99 €
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-xl font-serif text-foreground mb-6">Nachricht senden</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                        Vorname *
                      </label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                        Nachname *
                      </label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      E-Mail *
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Betreff *
                    </label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Nachricht *
                    </label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
                  </p>

                  <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Kontakt;
