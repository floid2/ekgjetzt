import { Heart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HerzschlagClubTeaser = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-ekg-mint/20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekg-coral/10 text-ekg-coral text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            <span>Neu: Der Herzschlag-Club</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
            ❤️ Neu: Der Herzschlag-Club
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Regelmäßige telekardiologische Betreuung für alle, die ihre Herzgesundheit langfristig im Blick behalten möchten – inklusive monatlicher Checks und persönlicher Empfehlungen.
          </p>
          
          <Button asChild variant="outline" className="rounded-full group">
            <Link to="/herzschlagclub">
              Mehr über den Herzschlag-Club erfahren
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HerzschlagClubTeaser;