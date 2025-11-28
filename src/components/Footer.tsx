import { Heart } from "lucide-react";
import EKGLine from "./EKGLine";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/50 border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* EKG Line */}
          <div className="mb-8 text-primary/30">
            <EKGLine />
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold text-foreground">EKG Jetzt</span>
          </div>

          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Strategie-Playbook für telemedizinische Kardiologie. 
            Rechtlich fundiert, wirtschaftlich validiert, operativ umsetzbar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>Telemedizin B2C</span>
            <span className="text-border">•</span>
            <span>Versicherer-Kooperation</span>
            <span className="text-border">•</span>
            <span>Premium-Membership</span>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
            © 2024 EKG Jetzt — Alle Rechte vorbehalten
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;