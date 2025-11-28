import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import MembershipSection from "@/components/MembershipSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <AboutSection />
        <ServicesSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <TrustSection />
        <MembershipSection />
        <div id="faq">
          <FAQSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
