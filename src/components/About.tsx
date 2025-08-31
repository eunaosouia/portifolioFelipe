import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Lightbulb, Globe, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Experiência do Usuário",
      description: "Foco em interfaces intuitivas e acessíveis"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Visão Empreendedora",
      description: "Compreendo as necessidades do negócio"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Inglês Fluente",
      description: "Comunicação fluente em projetos globais"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Aprendizado Contínuo",
      description: "Sempre atualizando minhas habilidades"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Sobre mim
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Desenvolvedor com paixão por
              <span className="text-primary block">criar soluções digitais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Com 27 anos e uma trajetória sólida no desenvolvimento front-end, 
              combino conhecimento técnico com visão estratégica para entregar resultados excepcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Especializado em desenvolvimento front-end com experiência sólida na criação 
                  de interfaces modernas e responsivas. Minha abordagem vai além do código - 
                  entendo as necessidades do usuário e do negócio.
                </p>
                <p>
                  Com conhecimentos em C# e fundamentos de back-end, tenho uma visão completa 
                  do desenvolvimento web. Minha formação em Design e UX/UI me permite criar 
                  soluções que são tanto funcionais quanto esteticamente atrativas.
                </p>
                <p>
                  Atualmente estudando Análise e Desenvolvimento de Sistemas e Engenharia de 
                  Software, estou sempre buscando expandir meus conhecimentos e aplicar as 
                  melhores práticas do mercado.
                </p>
              </div>
            </div>

            <div className="grid gap-4 animate-slide-up">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover-lift shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <Card className="p-8 bg-gradient-accent border-0 shadow-medium">
              <h3 className="text-2xl font-semibold mb-4">
                Vamos criar algo incrível juntos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a novos desafios e oportunidades de colaboração.
              </p>
              <Badge variant="secondary" className="px-6 py-2">
                Disponível para projetos
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;