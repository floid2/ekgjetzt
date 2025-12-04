import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rudolf",
      location: "Freiburg",
      text: "Meine Apple Watch zeigte plötzlich Vorhofflimmern an. Dr. Suwelack hat das EKG innerhalb von 24 Stunden analysiert und mir klare Empfehlungen gegeben. Sehr professionell und beruhigend!",
      rating: 5,
    },
    {
      name: "Christa",
      location: "Geldern",
      text: "Endlich eine Kardiologin, die sich Zeit nimmt und verständlich erklärt. Die Video-Sprechstunde war sehr angenehm und ich wusste danach genau, was zu tun ist.",
      rating: 5,
    },
    {
      name: "Helmut",
      location: "Allgäu",
      text: "Als Selbstständiger habe ich wenig Zeit für lange Wartezeiten beim Arzt. Die schnelle Online-Analyse meines EKGs war genau das Richtige. Absolut empfehlenswert!",
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
            Das sagen unsere Patienten
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
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
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
