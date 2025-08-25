import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=554799647685";
  
  return (
    <Button
      variant="whatsapp"
      size="icon"
      asChild
      className="animate-pulse hover:animate-none"
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </Button>
  );
};

export default WhatsAppButton;