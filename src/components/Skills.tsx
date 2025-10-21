import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["PHP", "JavaScript", "TypeScript", "Python", "Node.js", "C++"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Sass", "Vue.js", "React.js", "Next.js", "React Native"]
  },
  {
    title: "Backend",
    skills: ["Laravel", "Flask", "Express", "NestJS", "REST APIs", "GraphQL"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite", "Redis", "Neo4j"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Git", "GitLab", "CI/CD", "Jira", "Azure DevOps"]
  },
  {
    title: "APIs & Tools",
    skills: ["Swagger", "Stripe", "SendGrid", "WhatsApp API"]
  },
  {
    title: "Security",
    skills: ["OWASP Top 10", "ISO 27001", "SonarQube"]
  },
  {
    title: "AI & ML",
    skills: ["IBM Watson", "Dialogflow", "Rasa", "OpenAI", "GenAI"]
  },
  {
    title: "Methodology",
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
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.title}
              className="p-6 glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
