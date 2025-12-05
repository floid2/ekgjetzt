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
    C: "bg-success/10 text-success",
    H: "bg-warning/10 text-warning",
  };

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Erfahrungen
          </span>
          <h2 className="text-h2 font-serif mb-4 text-foreground">
            Erfahrungen unserer Patient:innen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-card p-6 md:p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 relative"
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
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-body leading-relaxed">
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