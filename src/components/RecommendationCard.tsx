import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RecommendationCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  color: "teal" | "coral" | "gold";
  onClick?: () => void;
}

const colorStyles = {
  teal: {
    bg: "bg-primary/5 hover:bg-primary/10",
    border: "border-primary/20 hover:border-primary/40",
    icon: "bg-primary/10 text-primary",
    number: "text-primary",
    accent: "bg-primary",
  },
  coral: {
    bg: "bg-ekg-coral/5 hover:bg-ekg-coral/10",
    border: "border-ekg-coral/20 hover:border-ekg-coral/40",
    icon: "bg-ekg-coral/10 text-ekg-coral",
    number: "text-ekg-coral",
    accent: "bg-ekg-coral",
  },
  gold: {
    bg: "bg-ekg-gold/5 hover:bg-ekg-gold/10",
    border: "border-ekg-gold/20 hover:border-ekg-gold/40",
    icon: "bg-ekg-gold/10 text-ekg-gold",
    number: "text-ekg-gold",
    accent: "bg-ekg-gold",
  },
};

const RecommendationCard = ({
  number,
  title,
  subtitle,
  description,
  icon,
  color,
  onClick,
}: RecommendationCardProps) => {
  const styles = colorStyles[color];

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500",
        "hover:shadow-2xl hover:-translate-y-2",
        styles.bg,
        styles.border
      )}
    >
      {/* Accent line */}
      <div className={cn("absolute top-0 left-8 right-8 h-1 rounded-b-full", styles.accent)} />
      
      {/* Number */}
      <div className={cn("text-6xl font-serif mb-4 opacity-20 group-hover:opacity-40 transition-opacity", styles.number)}>
        0{number}
      </div>

      {/* Icon */}
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", styles.icon)}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-serif mb-2 text-foreground">{title}</h3>
      <p className="text-sm font-medium text-muted-foreground mb-4">{subtitle}</p>
      <p className="text-muted-foreground/80 leading-relaxed">{description}</p>

      {/* Arrow indicator */}
      <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: `hsl(var(--ekg-${color === "teal" ? "teal" : color}))` }}>
        <span>Details ansehen</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};

export default RecommendationCard;