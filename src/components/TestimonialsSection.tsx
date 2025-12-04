import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rudolf",
      location: "Freiburg",
      text: "Die Einschätzung war schnell, gut nachvollziehbar und hat mir die Angst genommen.",
      rating: 5,
    },
    {
      name: "Christa",
      location: "Geldern",
      text: "Ich verstehe endlich meinen Arztbericht. Die Zweitmeinung war Gold wert.",
      rating: 5,
    },
    {
      name: "Helmut",
      location: "Allgäu",
      text: "Sehr kompetent und freundlich! Die Rückmeldung kam viel schneller als gedacht.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Erfahrungen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Erfahrungen unserer Patient:innen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ekg-gold text-ekg-gold" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                „{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">– {testimonial.name}</p>
                <p className="text-sm text-muted-foreground">aus {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;