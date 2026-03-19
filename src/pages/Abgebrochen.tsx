import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const Abgebrochen = () => {
  return (
    <>
      <SEOHead
        title="Zahlung abgebrochen – EKGjetzt"
        description="Ihre Zahlung wurde nicht abgeschlossen. Starten Sie den Vorgang erneut."
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(43,87%,95%)] to-background p-4">
        <Card className="max-w-lg w-full text-center">
          <CardContent className="p-8 md:p-10 space-y-6">
            {/* Warning Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-warning" />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                Zahlung abgebrochen
              </h1>
              <p className="text-muted-foreground text-base">
                Ihre Zahlung wurde nicht abgeschlossen. Keine Sorge – es wurde nichts berechnet.
              </p>
            </div>

            {/* Info Box */}
            <div className="warning-box text-left">
              <p className="text-sm text-muted-foreground">
                Sie können den Vorgang jederzeit erneut starten.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link to="/ekg-analyse">EKG-Analyse starten</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/zweitmeinung">Zweitmeinung anfordern</Link>
              </Button>
            </div>

            {/* Contact */}
            <p className="text-sm text-muted-foreground">
              Bei Fragen erreichen Sie uns unter:{" "}
              <a href="mailto:info@ekgjetzt.de" className="text-primary hover:underline">
                info@ekgjetzt.de
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Abgebrochen;
