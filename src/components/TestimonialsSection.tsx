import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rudolf",
      location: "Freiburg",
      initial: "R",
      text: "Schnelle, nachvollziehbare Einschätzung – hat mir die Angst genommen.",
      rating: 5,
    },
    {
      name: "Christa",
      location: "Geldern",
      initial: "C",
      text: "Ich verstehe endlich meinen Arztbericht. Die Zweitmeinung war Gold wert.",
      rating: 5,
    },
    {
      name: "Helmut",
      location: "Allgäu",
      initial: "H",
      text: "Sehr kompetent und freundlich! Rückmeldung kam viel schneller als gedacht.",
      rating: 5,
    },
  ];

  const initialColors = {
    R: "bg-primary/10 text-primary",
    C: "bg-ekg-coral/10 text-ekg-coral",
    H: "bg-ekg-gold/10 text-ekg-gold",
  };

  return (
    <section className="py-28 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Erfahrungen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Erfahrungen unserer Patient:innen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${initialColors[testimonial.initial as keyof typeof initialColors]}`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">aus {testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ekg-gold text-ekg-gold" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                „{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
