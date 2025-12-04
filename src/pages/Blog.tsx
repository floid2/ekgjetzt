import { Link } from "react-router-dom";
import { Watch, Zap, Gauge, Users, Dumbbell, Apple, Heart, Newspaper, Calendar, ArrowRight } from "lucide-react";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const categories = [
  { name: "Smartwatch & EKG", slug: "smartwatch-ekg", icon: Watch, color: "text-blue-600", bgColor: "bg-blue-100" },
  { name: "Rhythmusstörungen", slug: "rhythmusstoerungen", icon: Zap, color: "text-purple-600", bgColor: "bg-purple-100" },
  { name: "Bluthochdruck", slug: "bluthochdruck", icon: Gauge, color: "text-red-600", bgColor: "bg-red-100" },
  { name: "Frauenherzen", slug: "frauenherzen", icon: Users, color: "text-pink-600", bgColor: "bg-pink-100" },
  { name: "Sport & Herz", slug: "sport-herz", icon: Dumbbell, color: "text-green-600", bgColor: "bg-green-100" },
  { name: "Ernährung", slug: "ernaehrung", icon: Apple, color: "text-orange-600", bgColor: "bg-orange-100" },
  { name: "Herz-Kreislauf-Erkrankungen", slug: "erkrankungen", icon: Heart, color: "text-ekg-coral", bgColor: "bg-ekg-coral/10" },
  { name: "Forschung & Studien", slug: "forschung", icon: Newspaper, color: "text-cyan-600", bgColor: "bg-cyan-100" },
];

const articles = [
  {
    slug: "smartwatch-ekg-was-zeigt-es",
    title: "Was zeigt ein Smartwatch-EKG wirklich?",
    subtitle: "Apple Watch & Co. im Vergleich zur ärztlichen Diagnostik.",
    category: "Smartwatch & EKG",
    categorySlug: "smartwatch-ekg",
    date: "28. November 2024",
    excerpt: "Smartwatches können Ein-Kanal-EKGs aufzeichnen und Vorhofflimmern erkennen. Doch was können sie wirklich – und wo liegen die Grenzen?",
  },
  {
    slug: "vorhofflimmern-symptome-behandlung",
    title: "Vorhofflimmern: Symptome, Risiken und moderne Behandlung",
    subtitle: "Die häufigste Rhythmusstörung – verständlich erklärt.",
    category: "Rhythmusstörungen",
    categorySlug: "rhythmusstoerungen",
    date: "25. November 2024",
    excerpt: "Vorhofflimmern betrifft Millionen Menschen und erhöht das Schlaganfallrisiko. Erfahren Sie, wie Sie es erkennen und behandeln lassen können.",
  },
  {
    slug: "eisenmangel-frauen-herz",
    title: "Eisenmangel bei Frauen: Warum er das Herz stärker belastet, als viele denken",
    subtitle: "Frauenherzen reagieren sensibel auf niedrige Eisenwerte.",
    category: "Frauenherzen",
    categorySlug: "frauenherzen",
    date: "20. November 2024",
    excerpt: "Eisenmangel ist bei Frauen weit verbreitet – und kann das Herz belasten. Was Sie über den Zusammenhang wissen sollten.",
  },
];

const Blog = () => {
  return (
    <>
      <SEOHead 
        title="Blog"
        description="Aktuelle Studien und medizinisches Wissen aus der Kardiologie, verständlich erklärt. News zu Smartwatch-EKG, Herzrhythmusstörungen und Prävention."
        canonical="/blog"
      />
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="container px-4 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              <span>Blog & News</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Herzgesundheit – News, Forschung & Tipps
            </h1>
            <p className="text-lg text-muted-foreground">
              Aktuelle Studien, verständlich erklärt. Medizinisches Wissen aus der Kardiologie, 
              aufbereitet von einer Fachärztin. Hier finden Sie Orientierung zu Themen rund um 
              Herzgesundheit, Smartwatch-EKGs, Forschung, Diagnostik und Prävention.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="container px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-serif text-foreground mb-6 text-center">Kategorien</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/blog?kategorie=${cat.slug}`}
                  className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
                >
                  <div className={`w-10 h-10 ${cat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <cat.icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-serif text-foreground mb-8">Aktuelle Artikel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-ekg-mint/20 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary/30" />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container px-4 mt-16">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-ekg-mint/10 rounded-2xl text-center">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Bleiben Sie informiert
            </h2>
            <p className="text-muted-foreground mb-6">
              Im Herzschlag-Club erhalten Sie regelmäßige Updates zu Herzgesundheit, neue Artikel und 
              persönliche Einschätzungen zu Ihren EKG-Daten.
            </p>
            <Link 
              to="/herzschlagclub"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Mehr über den Herzschlag-Club
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
