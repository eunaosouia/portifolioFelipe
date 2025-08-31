import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de e-commerce moderna com design responsivo, sistema de pagamento integrado e painel administrativo completo.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Fullstack"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com interface intuitiva, drag & drop e sincronização em tempo real.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Portfolio Website",
      description: "Site portfolio responsivo com animações suaves, otimização SEO e integração com CMS headless.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind", "Framer Motion", "Sanity"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "API Dashboard",
      description: "Dashboard para monitoramento de APIs com gráficos em tempo real, alertas e relatórios detalhados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: ["React", "Chart.js", "C#", ".NET Core"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Fullstack"
    }
  ];

  const categories = ["Todos", "Frontend", "Fullstack"];

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Projetos em Destaque
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trabalhos que demonstram
              <span className="text-primary block">minha experiência</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada projeto representa um desafio único superado, 
              combinando design moderno com funcionalidade robusta.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="px-6 hover-lift"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden shadow-soft hover-lift group bg-gradient-card border-0"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="shadow-medium">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12 animate-fade-in">
            <Button variant="outline" size="lg" className="hover-lift">
              <Github className="h-5 w-5 mr-2" />
              Ver todos os projetos no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;