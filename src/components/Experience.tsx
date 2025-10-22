import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface Job {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: "Mercado Libre",
    position: "CS Software Engineer",
    period: "06/2024 – 09/2025",
    location: "Medellín, Colombia",
    description: "Creador del proyecto AutomateX en CryptoSecurity. Desarrollo de soluciones de seguridad automatizadas utilizando IA generativa y múltiples LLM.",
    technologies: ["Python", "JavaScript", "Flask", "React", "MySQL", "Neo4j", "AWS", "GCP", "GenAI", "OWASP Top 10"]
  },
  {
    company: "Idea Latente",
    position: "Senior Full Stack Development Engineer",
    period: "12/2023 – 06/2024",
    location: "Medellín, Antioquia",
    description: "Proyecto Tyfyr. Desarrollo de plataforma e-commerce con integraciones de pago y mensajería.",
    technologies: ["TypeScript", "React", "Next.js", "NestJs", "MongoDB", "Redis", "Docker", "Stripe", "WhatsApp API"]
  },
  {
    company: "Teleperformance",
    position: "IVA Developer Jr",
    period: "03/2023 – 12/2023",
    location: "Medellín, Colombia",
    description: "Proyectos GenAI, Athena for Audio PC, IVA Factory Intelligent Virtual Assistant. Desarrollo de asistentes virtuales inteligentes con IA.",
    technologies: ["TypeScript", "React.js", "Angular", "Node.js", "GraphQL", "AWS", "OpenAI", "Dialogflow", "Rasa"]
  },
  {
    company: "Wolkvox",
    position: "Software Development Analyst Middle",
    period: "09/2020 – 02/2023",
    location: "Medellín, Colombia",
    description: "Proyecto CRM. Desarrollo de sistema de gestión de relaciones con clientes.",
    technologies: ["PHP", "JavaScript", "Vue.js", "Laravel", "NestJs", "MySQL", "MongoDB", "Azure DevOps"]
  },
  {
    company: "Indra Company",
    position: "Technical Support Specialist",
    period: "04/2019 – 08/2020",
    location: "Medellín, Colombia",
    description: "Proyecto Grupo Familia CAU. Implementación de soluciones con IA en SAP y automatización de procesos.",
    technologies: ["IBM Watson", "Node.js", "HTML", "SAP", "Automatización"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Trayectoria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Más de 5 años construyendo soluciones tecnológicas innovadoras
          </p>
        </div>

        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <Card 
              key={`${job.company}-${idx}`}
              className="glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 group animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground/80">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {job.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
