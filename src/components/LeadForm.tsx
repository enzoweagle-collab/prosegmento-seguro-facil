import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface LeadFormProps {
  title?: string;
  className?: string;
}

const LeadForm = ({ title = "Solicite sua cotação", className = "" }: LeadFormProps) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Simular envio de dados
    console.log("Lead capturado:", formData);
    navigate("/obrigado");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className={`w-full max-w-md mx-auto shadow-xl ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          <Button type="submit" variant="quote" className="w-full" size="lg">
            <HandHeart className="w-5 h-5" />
            Faça uma cotação!
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;