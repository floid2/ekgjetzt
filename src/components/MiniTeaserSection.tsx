import { Heart, Stethoscope, FileCheck } from "lucide-react";

const MiniTeaserSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/40 to-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-ekg-teal rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main text with enhanced styling */}
          <p className="text-center text-xl md:text-2xl lg:text-[1.65rem] text-foreground/80 leading-relaxed font-medium">
            Schnelle fachärztliche Orientierung – ob Smartwatch-EKG, unklare Beschwerden oder eine unabhängige ärztliche Zweitmeinung.
          </p>
          
          {/* Visual indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">EKG-Analyse</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-9 h-9 rounded-full bg-ekg-teal/10 flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-ekg-teal" />
              </div>
              <span className="text-sm font-medium">Zweitmeinung</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Video-Sprechstunde</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniTeaserSection;