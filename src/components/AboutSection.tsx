import marceloFilippi from "@/assets/marcelo-filippi.png";

const AboutSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-12">
            Sobre o dono
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-primary mb-6">Marcelo Filippi</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Marcelo Filippi é o fundador da empresa e tem como principal objetivo oferecer muito mais do que serviços de seguros: ele busca proporcionar tranquilidade, segurança e confiança para cada cliente que escolhe caminhar ao seu lado.
                </p>
                <p>
                  Sua visão é de que o seguro deve ser algo simples, acessível e humano, indo além de contratos e cláusulas para se tornar uma verdadeira parceria de proteção.
                </p>
                <p>
                  Guiado por valores como transparência, ética e dedicação, Marcelo acredita que cada pessoa e cada história merecem atenção especial. Por isso, sua liderança é marcada pelo compromisso de entregar soluções que façam sentido para a vida real, trazendo segurança tanto para o presente quanto para o futuro.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 italic text-primary font-medium text-lg mt-8">
                  "Acredito que o seguro não é apenas sobre bens, mas sobre cuidar de pessoas e de sonhos."
                  <footer className="mt-2 text-sm font-normal">— Marcelo Filippi</footer>
                </blockquote>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={marceloFilippi}
                alt="Marcelo Filippi"
                className="rounded-lg shadow-2xl max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;