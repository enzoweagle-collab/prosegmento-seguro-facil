import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section com form */}
      <div ref={formRef}>
        <HeroSection />
      </div>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Middle CTA Button */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <Button 
            variant="quote" 
            size="lg" 
            onClick={scrollToForm}
            className="font-semibold text-lg px-8 py-4"
          >
            <HandHeart className="w-6 h-6" />
            Faça uma cotação!
          </Button>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Final CTA Section */}
      <CTASection onQuoteClick={scrollToForm} />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;