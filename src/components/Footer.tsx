import { Link } from "react-router-dom";
import ekgJetztLogo from "@/assets/ekg-jetzt-logo.png";

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
                className="h-12 w-auto"
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
              <li><a href="#services" className="hover:text-primary transition-colors">Herzschlag-Club</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EKG Jetzt. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground">
              Bei Notfällen: <strong className="text-ekg-coral">112</strong> • 
              Diese Website ersetzt keine ärztliche Untersuchung vor Ort.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
