import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      {isMinimized ? (
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-strong hover-lift bg-gradient-hero border-0"
          onClick={() => setIsMinimized(false)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      ) : (
        <div className="bg-white rounded-2xl shadow-strong p-4 max-w-sm border border-border/20 hover-lift">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">Felipe está online</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-muted"
              onClick={() => setIsMinimized(true)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Que tal conversarmos sobre seu próximo projeto?
          </p>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-gradient-hero border-0 shadow-soft"
              asChild
            >
              <a 
                href="https://wa.me/5534991155327" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => {
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsMinimized(true);
              }}
            >
              E-mail
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;