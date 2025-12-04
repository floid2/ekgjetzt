import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import MiniTeaserSection from "@/components/MiniTeaserSection";
import WhyEKGJetztSection from "@/components/WhyEKGJetztSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForWhomSection from "@/components/ForWhomSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import HerzschlagClubTeaser from "@/components/HerzschlagClubTeaser";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "EKGJetzt",
    "description": "Fachärztliche Online-Kardiologie. Smartwatch-EKG Analyse, ärztliche Zweitmeinung und Video-Sprechstunde.",
    "medicalSpecialty": "Cardiology",
    "priceRange": "€€",
    "founder": {
      "@type": "Physician",
      "name": "Dr. med. Rebekka Suwelack",
      "medicalSpecialty": "Cardiology"
    }
  };

  return (
    <>
      <SEOHead 
        title="Fachärztliche Online-Kardiologie"
        description="Smartwatch-EKG auffällig? Holen Sie sich eine fundierte ärztliche Einschätzung von einer erfahrenen Kardiologin. Befund in 48h, DSGVO-konform."
        canonical="/"
        schema={schema}
      />
      <NavigationHeader />
      <main className="min-h-screen">
        <HeroSection />
        <MiniTeaserSection />
        <WhyEKGJetztSection />
        <ServicesSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <ForWhomSection />
        <div id="about">
          <AboutSection />
        </div>
        <TestimonialsSection />
        <SecuritySection />
        <div id="faq">
          <FAQSection />
        </div>
        <HerzschlagClubTeaser />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;