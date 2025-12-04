import { Link } from "react-router-dom";
import { Heart, Activity, AlertTriangle, Stethoscope, Zap, Gauge, Dumbbell, Apple, Users, Newspaper, Upload, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

const topics = [
  {
    title: "Anatomie des Herzens",
    description: "Aufbau, Blutfluss und elektrisches System einfach erklärt",
    icon: Heart,
    href: "/herzgesundheit/anatomie",
    color: "text-ekg-coral",
    bgColor: "bg-ekg-coral/10"
  },
  {
    title: "Zahlen & Fakten",
    description: "Häufigkeiten, Sterblichkeit und Risikotrends",
    icon: Activity,
    href: "/herzgesundheit/fakten",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Die großen 5 Risikofaktoren",
    description: "Diabetes, Rauchen, Cholesterin, Blutdruck, Übergewicht",
    icon: AlertTriangle,
    href: "/herzgesundheit/risikofaktoren",
    color: "text-amber-600",
    bgColor: "bg-amber-100"
  },
  {
    title: "Herz-Kreislauf-Erkrankungen",
    description: "KHK, Herzinsuffizienz, Myokarditis und mehr",
    icon: Stethoscope,
    href: "/herzgesundheit/erkrankungen",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Herzrhythmusstörungen",
    description: "Extrasystolen, Vorhofflimmern, Herzrasen verstehen",
    icon: Zap,
    href: "/herzgesundheit/rhythmusstoerungen",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "Bluthochdruck",
    description: "Ursachen, Gefahren und moderne Therapien",
    icon: Gauge,
    href: "/herzgesundheit/bluthochdruck",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    title: "Sport & Herz",
    description: "Training, Belastung und Myokarditis-Risiken",
    icon: Dumbbell,
    href: "/herzgesundheit/sport",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Ernährung & Herz",
    description: "Cholesterin, Omega-3, Salz und mediterrane Diät",
    icon: Apple,
    href: "/herzgesundheit/ernaehrung",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    title: "Frauenherzen",
    description: "Warum Symptome bei Frauen oft anders sind",
    icon: Users,
    href: "/herzgesundheit/frauenherzen",
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    title: "Aktuelle Studien & News",
    description: "Neuigkeiten aus der Herzforschung",
    icon: Newspaper,
    href: "/herzgesundheit/studien",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100"
  }
];

const Herzgesundheit = () => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="container px-4 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Wissen für Ihre Herzgesundheit</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Herzgesundheit: Alles, was Sie über Ihr Herz wissen sollten
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Verständlich erklärt von einer Fachärztin für Kardiologie. 
              Fundiertes Wissen für Ihre Herzgesundheit – von Anatomie bis zu aktuellen Studien.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="container px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-ekg-mint/10 rounded-2xl border border-border">
              <h2 className="text-xl font-serif text-foreground mb-4">Warum Herzgesundheit so wichtig ist</h2>
              <p className="text-muted-foreground mb-4">
                Herz-Kreislauf-Erkrankungen sind weltweit die häufigste Todesursache – auch in Deutschland. 
                Dabei sind viele dieser Erkrankungen vermeidbar oder gut behandelbar, wenn sie früh erkannt werden.
              </p>
              <p className="text-muted-foreground">
                Auf diesen Seiten finden Sie verständliche Informationen zu allen wichtigen Themen rund um Ihr Herz: 
                von der Anatomie über Risikofaktoren bis hin zu aktuellen Forschungsergebnissen. 
                Alle Inhalte sind von einer erfahrenen Kardiologin erstellt und medizinisch geprüft.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="container px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-serif text-foreground text-center mb-8">Unsere Themen im Überblick</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link
                  key={topic.href}
                  to={topic.href}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${topic.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <topic.icon className={`w-6 h-6 ${topic.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="container px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 text-center">
                <strong>Wichtiger Hinweis:</strong> Die Informationen auf diesen Seiten dienen der allgemeinen Aufklärung 
                und ersetzen keine ärztliche Untersuchung oder Beratung. Bei Beschwerden wenden Sie sich bitte an Ihren Arzt.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-ekg-mint/20 rounded-2xl text-center">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Haben Sie Fragen zu Ihrer Herzgesundheit?
            </h2>
            <p className="text-muted-foreground mb-6">
              Lassen Sie Ihr EKG von einer erfahrenen Kardiologin beurteilen oder holen Sie eine unabhängige Zweitmeinung ein.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/#contact">
                  <Upload className="w-4 h-4 mr-2" />
                  EKG hochladen
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Herzgesundheit;
