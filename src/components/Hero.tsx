import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import felipeHero from "@/assets/felipe-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transformo
              <span className="block text-primary-glow">ideias</span>
              em interfaces
              <span className="block text-primary-glow">digitais</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
              Desenvolvedor Front-End apaixonado por criar experiências digitais modernas, 
              funcionais e centradas no usuário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="bg-white text-primary hover:bg-white/90 shadow-soft hover-lift"
              >
                <Mail className="mr-2 h-5 w-5" />
                Vamos conversar
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('projetos')}
                className="bg-white text-primary hover:bg-white/90 shadow-soft hover-lift"
              >
                Ver projetos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors hover-lift"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors hover-lift"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              
              <img 
                src={felipeHero} 
                alt="Felipe - Desenvolvedor Front-End"
                className="w-max max-w-lg mx-auto rounded-2xl shadow-strong"
                />
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-medium hover-lift">
              <div className="text-sm text-muted-foreground">Disponível para</div>
              <div className="font-semibold text-primary">Novos projetos</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;