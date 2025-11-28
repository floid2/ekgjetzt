import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import DetailSection from "@/components/DetailSection";
import TimelineSection from "@/components/TimelineSection";
import MetricsSection from "@/components/MetricsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedRecommendation, setSelectedRecommendation] = useState<number | null>(null);

  if (selectedRecommendation) {
    return (
      <main className="min-h-screen">
        <DetailSection 
          id={selectedRecommendation} 
          onClose={() => setSelectedRecommendation(null)} 
        />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <RecommendationsSection onSelectRecommendation={setSelectedRecommendation} />
      <TimelineSection />
      <MetricsSection />
      <Footer />
    </main>
  );
};

export default Index;