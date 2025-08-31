import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "E-mail",
      value: "felipe@exemplo.com",
      link: "mailto:felipe@exemplo.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefone",
      value: "+55 (34) 99115-5327",
      link: "tel:+5534991155327"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Localização",
      value: "Uberlândia, MG - Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/eunaosouia",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/felipe-gonçalvesdev",
      color: "hover:text-blue-600"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://wa.me/5534991155327",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Vamos conversar
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para o
              <span className="text-primary block">próximo projeto?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
              ou simplesmente trocar ideias sobre tecnologia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-soft">
                <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sobre o que você gostaria de conversar?"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me mais sobre seu projeto ou ideia..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hover-lift shadow-soft"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6 shadow-soft">
                <h3 className="text-xl font-semibold mb-6">Informações de contato</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 shadow-soft">
                <h3 className="text-xl font-semibold mb-6">Redes sociais</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group ${social.color}`}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Contact CTA */}
              <Card className="p-6 bg-gradient-hero border-0 text-white shadow-medium">
                <h3 className="text-xl font-semibold mb-4">Precisa falar urgente?</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Para projetos urgentes ou conversas rápidas, me chame no WhatsApp!
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a 
                    href="https://wa.me/5534991155327" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;