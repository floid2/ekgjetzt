import { Link } from "react-router-dom";
import ekgJetztLogo from "@/assets/ekg-jetzt-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={ekgJetztLogo} 
                alt="EKG Jetzt - Kardiologie Online" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-3 max-w-sm">
              Telemedizinische Kardiologie von Dr. med. Rebekka Suwelack. 
              Schnelle, kompetente Einschätzung Ihrer Herzbefunde.
            </p>
            <p className="text-xs text-muted-foreground">
              Dr. med. Rebekka Suwelack<br />
              Fachärztin für Innere Medizin und Kardiologie
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">EKG-Analyse</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Zweitmeinung</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Video-Sprechstunde</a></li>
                <li><Link to="/herzschlagclub" className="hover:text-primary transition-colors">Herzschlag-Club</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
                <li><Link to="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EKG Jetzt. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Diese Website ersetzt keine ärztliche Untersuchung vor Ort. Bei akuten Beschwerden wählen Sie bitte <strong className="text-destructive">112</strong>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
