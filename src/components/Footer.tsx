import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com"
    },
    {
      name: "E-mail",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:felipe@exemplo.com"
    }
  ];

  const quickLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Felipe</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Desenvolvedor Front-End apaixonado por criar experiências digitais 
              modernas e funcionais. Sempre em busca de novos desafios e oportunidades 
              de crescimento.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover-lift"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.href.replace('#', ''));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Uberlândia, MG - Brasil</p>
              <p>felipe@exemplo.com</p>
              <p>+55 (34) 99115-5327</p>
            </div>
            
            <Button 
              className="mt-4 w-full hover-lift shadow-soft"
              onClick={() => {
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              Vamos conversar
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border/20">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Felipe. Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>e muito código</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover-lift"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;