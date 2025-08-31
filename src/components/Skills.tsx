import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "JavaScript ES6+", level: 95, category: "Frontend" },
    { name: "CSS3 / SASS", level: 90, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "C#", level: 75, category: "Backend" },
    { name: ".NET", level: 70, category: "Backend" },
    { name: "REST APIs", level: 85, category: "Backend" },
    { name: "Git / GitHub", level: 90, category: "Tools" },
    { name: "Figma", level: 85, category: "Design" }
  ];

  const softSkills = [
    "Comunicação eficaz",
    "Trabalho em equipe",
    "Resolução de problemas",
    "Pensamento analítico",
    "Gestão de tempo",
    "Adaptabilidade",
    "Liderança",
    "Criatividade"
  ];

  const categories = ["Frontend", "Backend", "Tools", "Design"];
  const categoryColors = {
    Frontend: "bg-primary",
    Backend: "bg-primary-light", 
    Tools: "bg-accent",
    Design: "bg-secondary"
  };

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Habilidades & Tecnologias
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ferramentas que domino
              <span className="text-primary block">para criar soluções</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinação de conhecimentos técnicos sólidos com habilidades interpessoais 
              que fazem a diferença em projetos complexos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-soft hover-lift">
                <h3 className="text-2xl font-semibold mb-8">Habilidades Técnicas</h3>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category) => (
                    <Badge 
                      key={category} 
                      variant="secondary" 
                      className="px-3 py-1"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{skill.name}</span>
                          <Badge 
                            variant="outline" 
                            className="text-xs"
                          >
                            {skill.category}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 group-hover:h-3 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Soft Skills */}
            <div className="space-y-8">
              <Card className="p-8 shadow-soft hover-lift">
                <h3 className="text-2xl font-semibold mb-6">Habilidades Interpessoais</h3>
                <div className="grid gap-3">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Languages */}
              <Card className="p-8 shadow-soft hover-lift">
                <h3 className="text-xl font-semibold mb-6">Idiomas</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Português</span>
                      <span className="text-sm text-muted-foreground">Nativo</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Inglês</span>
                      <span className="text-sm text-muted-foreground">Avançado</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;