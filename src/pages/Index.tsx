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

const Index = () => {
  return (
    <>
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