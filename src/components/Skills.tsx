import { Card } from "@/components/ui/card";
import { Code2, Layout, Server, Database, Cloud, Plug, Shield, Brain, GitBranch, LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["PHP", "JavaScript", "TypeScript", "Python", "Node.js", "C++"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "Sass", "Vue.js", "React.js", "Next.js", "React Native"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel", "Flask", "Express", "NestJS", "REST APIs", "GraphQL"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQLite", "Redis", "Neo4j"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure", "Docker", "Git", "GitLab", "CI/CD", "Jira", "Azure DevOps"]
  },
  {
    title: "APIs & Tools",
    icon: Plug,
    skills: ["Swagger", "Stripe", "SendGrid", "WhatsApp API"]
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["OWASP Top 10", "ISO 27001", "SonarQube"]
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["IBM Watson", "Dialogflow", "Rasa", "OpenAI", "GenAI"]
  },
  {
    title: "Methodology",
    icon: GitBranch,
    skills: ["Scrum", "Kanban", "SOLID", "KISS", "DRY", "C4 Model", "ADR", "Design Patterns"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stack tecnológico completo para desarrollar soluciones end-to-end
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 animate-slide-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-border/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
