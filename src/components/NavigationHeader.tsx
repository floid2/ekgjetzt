import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Über mich", id: "about" },
    { label: "Leistungen", id: "services" },
    { label: "So funktioniert's", id: "how-it-works" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
          >
            <div className="p-2 rounded-xl bg-primary/10">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-semibold text-primary">EKG Jetzt</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollTo("contact")}
              className="rounded-full"
            >
              Jetzt anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <Button 
                  onClick={() => scrollTo("contact")}
                  className="w-full rounded-full"
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
