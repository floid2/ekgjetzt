import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";

interface HerzgesundheitLayoutProps {
  children: ReactNode;
  title: string;
  metaDescription?: string;
}

const HerzgesundheitLayout = ({ children, title }: HerzgesundheitLayoutProps) => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/herzgesundheit" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Übersicht
            </Link>
          </div>

          {/* Content */}
          <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-8">{title}</h1>
            {children}
          </article>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-primary/5 to-ekg-mint/10 rounded-2xl border border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Dieser Inhalt ersetzt keine ärztliche Untersuchung.</p>
              <h3 className="text-xl font-serif text-foreground mb-4">
                Haben Sie Fragen zu Ihrer Herzgesundheit?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full" onClick={() => window.location.href = "/ekg-analyse"}>
                  <Upload className="w-4 h-4 mr-2" />
                  EKG hochladen
                </Button>
                <Button variant="outline" className="rounded-full" onClick={() => window.location.href = "/zweitmeinung"}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Zweitmeinung anfordern
                </Button>
              </div>
            </div>
          </div>

          {/* Related Topics */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-lg font-serif text-foreground mb-4">Weitere Themen</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link to="/herzgesundheit/anatomie" className="p-3 bg-secondary/50 rounded-lg text-sm text-center hover:bg-secondary transition-colors">
                Anatomie
              </Link>
              <Link to="/herzgesundheit/risikofaktoren" className="p-3 bg-secondary/50 rounded-lg text-sm text-center hover:bg-secondary transition-colors">
                Risikofaktoren
              </Link>
              <Link to="/herzgesundheit/rhythmusstoerungen" className="p-3 bg-secondary/50 rounded-lg text-sm text-center hover:bg-secondary transition-colors">
                Rhythmusstörungen
              </Link>
              <Link to="/herzgesundheit/frauenherzen" className="p-3 bg-secondary/50 rounded-lg text-sm text-center hover:bg-secondary transition-colors">
                Frauenherzen
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HerzgesundheitLayout;
