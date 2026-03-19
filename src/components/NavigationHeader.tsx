import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import ekgJetztLogo from "@/assets/ekg-jetzt-logo.png";

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  const services = [
    { label: "Smartwatch-EKG Analyse", href: "/leistungen/smartwatch-ekg" },
    { label: "Ärztliche Zweitmeinung", href: "/zweitmeinung" },
    { label: "Video-Sprechstunde", href: "/leistungen/videosprechstunde" },
  ];

  const navItems = [
    { label: "Über mich", id: "about", isScroll: true },
    { label: "So funktioniert's", id: "how-it-works", isScroll: true },
    { label: "FAQ", id: "faq", isScroll: true },
  ];

  const pageLinks = [
    { label: "Herzgesundheit", href: "/herzgesundheit" },
    { label: "Blog", href: "/blog" },
    { label: "Herzschlag-Club", href: "/herzschlagclub" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={ekgJetztLogo} 
              alt="EKG Jetzt - Kardiologie Online" 
              className="h-20 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Leistungen Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-body text-muted-foreground hover:text-primary transition-colors py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Leistungen
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={cn(
                  "absolute top-full left-0 pt-2 transition-all duration-200",
                  isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-background border border-border rounded-card shadow-card-hover py-2 min-w-[220px]">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-3 text-body text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Links */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-body text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Page Links */}
            {pageLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-body text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Kontakt */}
            <Link
              to="/kontakt"
              className="text-body text-muted-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollTo("contact")}
            >
              Jetzt anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col gap-1">
              {/* Leistungen Section */}
              <div className="px-4 py-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Leistungen
                </span>
              </div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-body text-foreground hover:bg-secondary transition-colors"
                >
                  {service.label}
                </Link>
              ))}

              <div className="border-t border-border my-2" />

              {/* Scroll Links */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-body text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-border my-2" />

              {/* Page Links */}
              {pageLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-body text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-body text-foreground hover:bg-secondary transition-colors"
              >
                Kontakt
              </Link>

              <div className="pt-4 px-4">
                <Button 
                  onClick={() => scrollTo("contact")}
                  className="w-full"
                >
                  Jetzt anfragen
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;