import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Obrigado = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            Obrigado!
          </h1>
          <p className="text-xl text-muted-foreground">
            Já entraremos em contato!
          </p>
        </div>
        
        <Button 
          onClick={() => navigate("/")}
          variant="outline"
          className="mt-6"
        >
          Voltar ao início
        </Button>
      </div>
    </div>
  );
};

export default Obrigado;