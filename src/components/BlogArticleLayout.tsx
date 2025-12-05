import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Upload, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface BlogArticleLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  date: string;
  metaDescription?: string;
  faqs?: FAQ[];
  relatedLinks?: { label: string; href: string }[];
}

const BlogArticleLayout = ({ 
  children, 
  title, 
  subtitle,
  category,
  categorySlug,
  date,
  faqs = [],
  relatedLinks = []
}: BlogArticleLayoutProps) => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        <article className="container px-4">
          {/* Breadcrumb */}
          <div className="max-w-3xl mx-auto mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>
          </div>

          {/* Header */}
          <header className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Link 
                to={`/blog?kategorie=${categorySlug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <Tag className="w-3.5 h-3.5" />
                {category}
              </Link>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          </header>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            {children}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-br from-primary/10 to-ekg-mint/20 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-serif text-foreground mb-4">
                Haben Sie Fragen zu Ihrer Herzgesundheit?
              </h3>
              <p className="text-muted-foreground mb-6">
                Lassen Sie Ihr EKG von einer erfahrenen Kardiologin beurteilen oder holen Sie eine unabhängige Zweitmeinung ein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/#contact">
                    <Upload className="w-4 h-4 mr-2" />
                    EKG jetzt hochladen
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/#contact">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Zweitmeinung anfordern
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="text-2xl font-serif text-foreground mb-6">Häufige Fragen</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Related Links */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-lg font-serif text-foreground mb-4">Verwandte Themen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/herzgesundheit/rhythmusstoerungen" className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">Herzrhythmusstörungen verstehen →</span>
              </Link>
              <Link to="/herzgesundheit/frauenherzen" className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">Frauenherzen: Wichtige Unterschiede →</span>
              </Link>
              <Link to="/herzgesundheit/erkrankungen" className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">Herz-Kreislauf-Erkrankungen →</span>
              </Link>
              <Link to="/herzgesundheit/studien" className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">Aktuelle Studien & Forschung →</span>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 text-center mb-0">
                <strong>Hinweis:</strong> Dieser Artikel dient der allgemeinen Information und ersetzt keine ärztliche Untersuchung oder Beratung. 
                Bei Beschwerden wenden Sie sich bitte an Ihren Arzt.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleLayout;
