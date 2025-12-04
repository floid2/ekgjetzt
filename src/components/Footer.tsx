import { Link } from "react-router-dom";
import { Heart, Mail, AlertTriangle } from "lucide-react";
import ekgJetztLogo from "@/assets/ekg-jetzt-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={ekgJetztLogo} 
                alt="EKG Jetzt" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Fachärztliche Online-Kardiologie. Schnell, kompetent, verständlich.
            </p>
            <a 
              href="mailto:info@ekgjetzt.de"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="w-4 h-4" />
              info@ekgjetzt.de
            </a>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Info</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/leistungen/smartwatch-ekg" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Smartwatch-EKG
                </Link>
              </li>
              <li>
                <Link to="/leistungen/zweitmeinung" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Zweitmeinung
                </Link>
              </li>
              <li>
                <Link to="/leistungen/videosprechstunde" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Video-Sprechstunde
                </Link>
              </li>
              <li>
                <Link to="/herzschlagclub" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Herzschlag-Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Wissen */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Wissen</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/herzgesundheit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Herzgesundheit
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/herzgesundheit/rhythmusstoerungen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rhythmusstörungen
                </Link>
              </li>
              <li>
                <Link to="/herzgesundheit/frauenherzen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Frauenherzen
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-800">
              <strong>Notfallhinweis:</strong> EKGJetzt ersetzt keine Notfallversorgung. 
              Bei akuten Symptomen wie starken Brustschmerzen, Atemnot oder Bewusstlosigkeit 
              wählen Sie bitte sofort die <strong>112</strong>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EKGJetzt. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Mit <Heart className="w-4 h-4 text-ekg-coral" /> für Ihre Herzgesundheit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
