import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

interface CTASectionProps {
  onQuoteClick: () => void;
}

const CTASection = ({ onQuoteClick }: CTASectionProps) => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Vamos fechar negócio?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Não deixe para depois a proteção que você e sua família merecem. 
          Solicite sua cotação agora mesmo!
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          onClick={onQuoteClick}
          className="font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
        >
          <HandHeart className="w-6 h-6" />
          Faça uma cotação!
        </Button>
      </div>
    </section>
  );
};

export default CTASection;