import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Engenharia de Software",
      institution: "Universidade Federal",
      period: "2023 - 2027",
      status: "Em andamento",
      description: "Foco em arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento.",
      type: "Graduação"
    },
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Instituto Tecnológico",
      period: "2022 - 2024",
      status: "Em andamento",
      description: "Desenvolvimento de sistemas web, mobile e desktop com ênfase em tecnologias modernas.",
      type: "Tecnólogo"
    }
  ];

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      title: "TypeScript Advanced",
      issuer: "Microsoft",
      date: "2023",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      title: "UX/UI Design Fundamentals",
      issuer: "Google",
      date: "2022",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      title: "Agile Development",
      issuer: "Scrum Alliance",
      date: "2022",
      icon: <Award className="h-5 w-5 text-primary" />
    }
  ];

  const continuousLearning = [
    "Acompanho as principais tendências em desenvolvimento web",
    "Participo de comunidades de desenvolvedores",
    "Leio documentações técnicas e artigos especializados",
    "Pratico coding challenges e contribuo para projetos open source",
    "Assisto conferências e webinars da área"
  ];

  return (
    <section id="formacao" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Formação & Aprendizado
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investindo no futuro
              <span className="text-primary block">através do conhecimento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Minha jornada acadêmica e profissional reflete o compromisso com a 
              excelência e o aprendizado contínuo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Academic Education */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Formação Acadêmica
              </h3>
              
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-soft hover-lift">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <Badge 
                          variant={edu.status === "Em andamento" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-3">{edu.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                        <Badge variant="outline" className="text-xs">
                          {edu.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Certifications & Continuous Learning */}
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  Certificações
                </h3>
                <Card className="p-6 shadow-soft">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        {cert.icon}
                        <div className="flex-1">
                          <h5 className="font-medium text-sm">{cert.title}</h5>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                          <span className="text-xs text-primary">{cert.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Continuous Learning */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Aprendizado Contínuo
                </h3>
                <Card className="p-6 shadow-soft">
                  <div className="space-y-3">
                    {continuousLearning.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 animate-fade-in">
            <Card className="p-8 bg-gradient-accent border-0 shadow-medium text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                "O aprendizado nunca para"
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Acredito que a tecnologia evolui rapidamente, e por isso mantenho-me sempre 
                atualizado com as últimas tendências e melhores práticas do mercado. 
                Cada projeto é uma oportunidade de crescer e aplicar novos conhecimentos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;