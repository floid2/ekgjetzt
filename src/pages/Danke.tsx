import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle2, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const Danke = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <SEOHead
        title="Zahlung erfolgreich – EKGjetzt"
        description="Ihre Zahlung war erfolgreich. Vielen Dank für Ihre Buchung."
        
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--ekg-teal-light))] to-background p-4">
        <Card className="max-w-lg w-full text-center">
          <CardContent className="p-8 md:p-10 space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                Zahlung erfolgreich!
              </h1>
              <p className="text-muted-foreground text-base">
                Vielen Dank für Ihre Buchung. Wir haben Ihre Zahlung erhalten.
              </p>
            </div>

            {/* Info Box */}
            <div className="info-box text-left space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Wie geht es weiter?</h3>
              <ul className="space-y-3">
                {[
                  "Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details",
                  "Unsere Fachärztin Dr. med. Rebekka Suwelack prüft Ihre Unterlagen",
                  "Innerhalb von 48 Stunden erhalten Sie Ihre ärztliche Ersteinschätzung bzw. kardiologische Zweitmeinung per E-Mail",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <p className="text-sm text-muted-foreground">
              Bei Fragen erreichen Sie uns unter:{" "}
              <a href="mailto:info@ekgjetzt.de" className="text-primary hover:underline">
                info@ekgjetzt.de
              </a>
            </p>

            {/* Button */}
            <Button asChild className="w-full">
              <Link to="/">Zurück zur Startseite</Link>
            </Button>

            {/* Countdown */}
            <p className="text-xs text-muted-foreground">
              Sie werden in {seconds} Sekunde{seconds !== 1 ? "n" : ""} automatisch zur Startseite weitergeleitet.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Danke;
