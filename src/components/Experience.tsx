import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { IconType } from "react-icons";
import { useTranslation } from 'react-i18next';
import { 
  SiPython, SiJavascript, SiFlask, SiReact, SiMysql, SiNeo4J, SiAmazon, SiGooglecloud,
  SiSwagger, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiRedis, SiDocker, 
  SiGitlab, SiStripe, SiWhatsapp, SiGraphql, SiVuedotjs, SiLaravel, SiNestjs,
  SiOpenai, SiSap, SiAngular, SiGooglegemini, SiDigitalocean
} from "react-icons/si";
import { Shield, Brain, Cloud } from "lucide-react";

interface Technology {
  name: string;
  icon?: IconType | React.ComponentType<{ className?: string }>;
  color?: string;
}

interface Job {
  company: string;
  logo?: IconType | React.ComponentType<{ className?: string }>;
  logoColor?: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: Technology[];
  details?: {
    problem?: string;
    solution?: string;
    result?: string;
  };
}

const techMap: Record<string, { icon?: IconType | React.ComponentType<{ className?: string }>; color?: string }> = {
  "Python": { icon: SiPython, color: "#3776AB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Flask": { icon: SiFlask, color: "#000000" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Neo4j": { icon: SiNeo4J, color: "#008CC1" },
  "AWS": { icon: SiAmazon, color: "#FF9900" },
  "GCP": { icon: SiGooglecloud, color: "#4285F4" },
  "GenAI": { icon: SiGooglegemini, color: "#8E75FF" },
  "OWASP Top 10": { icon: Shield, color: "#000000" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "NestJs": { icon: SiNestjs, color: "#E0234E" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Stripe": { icon: SiStripe, color: "#008CDD" },
  "WhatsApp API": { icon: SiWhatsapp, color: "#25D366" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "GraphQL": { icon: SiGraphql, color: "#E10098" },
  "OpenAI": { icon: SiOpenai, color: "#412991" },
  "Dialogflow": { icon: Brain, color: "#FF9800" },
  "Rasa": { icon: Brain, color: "#5A17EE" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  "Laravel": { icon: SiLaravel, color: "#FF2D20" },
  "Azure DevOps": { icon: Cloud, color: "#0078D4" },
  "Angular": { icon: SiAngular, color: "#DD0031" },
  "Swagger": { icon: SiSwagger, color: "#85EA2D" },
  "GitLab": { icon: SiGitlab, color: "#FC6D26" },
  "IBM Watson": { icon: Brain, color: "#006699" },
  "SAP": { icon: SiSap, color: "#0FAAFF" },
  "Digital Ocean": { icon: SiDigitalocean, color: "#0080FF" }
};

const jobs: Job[] = [
  {
    company: "Mercado Libre",
    logoColor: "#FFE600",
    position: "CS Software Engineer",
    period: "06/2024 – 09/2025",
    location: "Medellín, Colombia",
    description: "experience.mercadoLibre.description",
    technologies: ["Python", "JavaScript", "Flask", "React", "MySQL", "Neo4j", "AWS", "GCP", "GenAI", "OWASP Top 10"].map(name => ({
      name,
      icon: techMap[name]?.icon,
      color: techMap[name]?.color
    })),
    //details: {
      //problem: "experience.mercadoLibre.problem",
      //solution: "experience.mercadoLibre.solution",
      //result: "experience.mercadoLibre.result"
    //}
  },
  {
    company: "Idea Latente",
    logoColor: "#6366F1",
    position: "Senior Full Stack Development Engineer",
    period: "12/2023 – 06/2024",
    location: "Medellín, Antioquia",
    description: "Proyecto Tyfyr. Plataforma e-commerce usando VTEX por debajo, con integración de pagos y mensajería. Incluye creación de campañas publicitarias y aplicación de descuentos masivos automáticos.",
    technologies: ["TypeScript", "React", "Next.js", "NestJs", "MongoDB", "Redis", "Docker", "Digital Ocean", "Stripe", "WhatsApp API"].map(name => ({
      name,
      icon: techMap[name]?.icon,
      color: techMap[name]?.color
    }))
  },
  {
    company: "Teleperformance",
    logoColor: "#0066B2",
    position: "IVA Developer Jr",
    period: "03/2023 – 12/2023",
    location: "Medellín, Colombia",
    description: "Proyectos \u2014 GenAI, Athena for Audio PC, IVA Factory, Web-Scraping Assistant. Desarrollo de asistentes virtuales y agentes de IA. Incluye un asistente de web-scraping para extraer datos de sitios web; Athena for Audio PC, que reemplazo multiples servicios de AWS reduciendo costos; e IVA Factory, plataforma para crear chatbots avanzados con Dialogflow, Rasa, OpenAI o enfoques hibridos."

,
    technologies: ["TypeScript", "React", "Angular", "Node.js", "GraphQL", "AWS", "OpenAI", "Dialogflow", "Rasa"].map(name => ({
      name,
      icon: techMap[name]?.icon,
      color: techMap[name]?.color
    }))
  },
  {
    company: "Wolkvox",
    logoColor: "#00A3E0",
    position: "Software Development Analyst Middle",
    period: "09/2020 – 02/2023",
    location: "Medellín, Colombia",
    description: "Proyecto CRM. Desarrollo de sistema de gestión de relaciones con clientes.",
    technologies: ["JavaScript", "Vue.js", "Laravel", "NestJs", "MySQL", "MongoDB", "Azure DevOps"].map(name => ({
      name,
      icon: techMap[name]?.icon,
      color: techMap[name]?.color
    }))
  },
  {
    company: "Indra Company",
    logoColor: "#E30613",
    position: "Technical Support Specialist",
    period: "04/2019 – 08/2020",
    location: "Medellín, Colombia",
    description: "Proyecto Grupo Familia CAU. Implementación de soluciones con IA chatbots internos, SAP y automatización de procesos.",
    technologies: ["Node.js", "IBM Watson", "SAP"].map(name => ({
      name,
      icon: techMap[name]?.icon,
      color: techMap[name]?.color
    }))
  }
];

const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Trayectoria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('experience.title')} {t('experience.titleHighlight')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('experience.subtitle')}
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
                    <div className="flex items-center gap-3 mb-3">
                      {job.logo ? (
                        <>
                          <div className="p-2 rounded-lg bg-background border border-border/50">
                            <job.logo className="w-6 h-6" style={{ color: job.logoColor }} />
                          </div>
                          <CardDescription className="text-base font-semibold text-foreground/80">
                            {job.company}
                          </CardDescription>
                        </>
                      ) : (
                        <div 
                          className="px-3 py-1.5 rounded-lg bg-background border-2 text-sm font-bold text-foreground"
                          style={{ borderColor: job.logoColor }}
                        >
                          {job.company}
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {job.position}
                    </CardTitle>
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
                  {t(job.description)}
                </p>
                
                {job.details && (
                  <div className="space-y-4 mb-6">
                    {job.details.problem && (
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-destructive">•</span> {t('experience.problem')}
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {t(job.details.problem)}
                        </p>
                      </div>
                    )}
                    {job.details.solution && (
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-primary">•</span> {t('experience.solution')}
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {t(job.details.solution)}
                        </p>
                      </div>
                    )}
                    {job.details.result && (
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-green-500">•</span> {t('experience.result')}
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {t(job.details.result)}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3">
                  {job.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border/30 hover:border-primary/50 transition-all group/tech"
                        title={tech.name}
                      >
                        {Icon ? (
                          <>
                            <Icon className="w-4 h-4" style={{ color: tech.color }} />
                            <span className="text-xs font-medium text-foreground/80 group-hover/tech:text-primary transition-colors">
                              {tech.name}
                            </span>
                          </>
                        ) : (
                          <span className="text-xs font-medium" style={{ color: tech.color }}>
                            {tech.name}
                          </span>
                        )}
                      </div>
                    );
                  })}
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
