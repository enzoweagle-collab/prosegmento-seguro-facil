import LeadForm from "./LeadForm";
import prosegeuroLogo from "@/assets/proseguros-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src={prosegeuroLogo} 
                alt="ProSeguros Corretora" 
                className="h-16 mx-auto lg:mx-0 mb-6"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Proteção completa para você e sua família
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos especialistas em seguros com mais de 15 anos de experiência. 
              Oferecemos as melhores soluções em seguro de vida, auto, empresarial e muito mais.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Seguro de Vida</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Seguro de Auto</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Seguro Empresarial</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <LeadForm title="Receba sua cotação gratuita" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;