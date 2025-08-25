import { Shield, Car, Truck, Building, Users, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Proteção financeira para sua família em momentos difíceis"
  },
  {
    icon: Car,
    title: "Seguro de Auto",
    description: "Cobertura completa para seu veículo com as melhores seguradoras"
  },
  {
    icon: Truck,
    title: "Seguro de Frota",
    description: "Soluções especializadas para empresas com múltiplos veículos"
  },
  {
    icon: Truck,
    title: "Seguro de Transporte",
    description: "Proteção para cargas e mercadorias em trânsito"
  },
  {
    icon: Shield,
    title: "Responsabilidade Civil",
    description: "Cobertura contra danos causados a terceiros"
  },
  {
    icon: Building,
    title: "Seguro Empresarial",
    description: "Proteção completa para seu negócio e patrimônio"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-center text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de seguros para proteger o que mais importa para você
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 bg-primary-foreground text-primary border-primary-foreground/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;