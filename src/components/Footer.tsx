import { Link } from "react-router-dom";
import ekgJetztLogo from "@/assets/ekg-jetzt-logo.png";
import { AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={ekgJetztLogo} 
                alt="EKG Jetzt - Kardiologie Online" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Telemedizinische Kardiologie von Dr. med. Rebekka Suwelack. 
              Schnelle, kompetente Einschätzung Ihrer Herzbefunde.
            </p>
            <p className="text-xs text-muted-foreground">
              Dr. med. Rebekka Suwelack<br />
              Fachärztin für Innere Medizin und Kardiologie
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">EKG-Analyse</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Zweitmeinung</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Video-Sprechstunde</a></li>
              <li><Link to="/herzschlagclub" className="hover:text-primary transition-colors">Herzschlag-Club</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mb-8 p-4 bg-ekg-coral/10 rounded-xl border border-ekg-coral/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-ekg-coral flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Bei akuten Beschwerden, Brustschmerz oder Luftnot</strong> bitte umgehend <strong className="text-ekg-coral">112</strong> wählen. 
              Diese Website ersetzt keine Notfallversorgung.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EKG Jetzt. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground">
              Diese Website ersetzt keine ärztliche Untersuchung vor Ort.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
