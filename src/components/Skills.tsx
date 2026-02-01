import { Card } from "@/components/ui/card";
import { 
  SiPhp, SiJavascript, SiTypescript, SiPython, SiNodedotjs,
  SiHtml5, SiCss3, SiSass, SiVuedotjs, SiReact, SiNextdotjs,
  SiLaravel, SiFlask, SiExpress, SiNestjs, SiGraphql,
  SiMysql, SiMongodb, SiSqlite, SiRedis,
  SiAmazon, SiGooglecloud, SiDocker, SiGit, SiJira,
  SiSwagger, SiOpenai, SiSonarqube, SiGithubactions,
  SiAngular, SiJest, SiPytest,
  SiSharp,
  SiGoland
} from "react-icons/si";
import { 
  Shield, Lock, Workflow, Trello, Code2, Brain, Sparkles, 
  Droplets, Layers, FileText, Grid3x3, Building2, TrendingUp, 
  GitBranch, RotateCw 
} from "lucide-react";
import { IconType } from "react-icons";
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string;
  icon?: IconType | React.ComponentType<{ className?: string }>;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "csharp", icon: SiSharp, color: "#412991" },
      { name: "Golang", icon: SiGoland, color: "#3178C6" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "ReactNative", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Jira", icon: SiJira, color: "#0052CC" }
    ]
  },
  {
    title: "Security",
    skills: [
      { name: "OWASP TOP 10", icon: Shield, color: "#000000" },
      { name: "ISO 27001", icon: Lock, color: "#0066CC" },
      { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD" },
      { name: "SAST", icon: Shield, color: "#000000" }
    ]
  },
  {
    title: "AI & ML",
    skills: [
      { name: "IBM Watson", icon: Brain, color: "#006699" },
      { name: "Dialogflow", icon: Shield, color: "#FF9800" },
      { name: "Rasa", icon: Shield, color: "#5A17EE" },
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
      { name: "GenAI", icon: Brain, color: "#006699" }
    ]
  },
  {
    title: "Testing / QA",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Pytest", icon: SiPytest, color: "#0A9EDC" },
      { name: "PHPUnit", icon: SiPhp, color: "#777BB4" }
    ]
  },
  {
    title: "Methodology",
    skills: [
      { name: "Scrum", icon: Workflow, color: "#009FDA" },
      { name: "Kanban", icon: Trello, color: "#0079BF" },
      { name: "SOLID", icon: Code2, color: "#FF6B6B" },
      { name: "KISS", icon: Sparkles, color: "#FFB800" },
      { name: "DRY", icon: Droplets, color: "#00BCD4" },
      { name: "C4 Model", icon: Layers, color: "#9C27B0" },
      { name: "ADR", icon: FileText, color: "#4CAF50" },
      { name: "Design Patterns", icon: Grid3x3, color: "#FF5722" },
      { name: "Architecture", icon: Building2, color: "#607D8B" },
      { name: "Big O", icon: TrendingUp, color: "#E91E63" },
      { name: "CI/CD", icon: GitBranch, color: "#00C853" },
      { name: "Github Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "SDLC", icon: RotateCw, color: "#FF9800" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    ]
  }
];

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.title}
              className="p-6 glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 group/item"
                      title={skill.name}
                    >
                      {Icon ? (
                        <>
                          <div className="p-3 rounded-lg bg-background/50 border border-border/30 group-hover/item:border-primary/50 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg">
                            <Icon 
                              className="w-8 h-8 transition-colors" 
                              style={{ color: skill.color }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground text-center group-hover/item:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </>
                      ) : (
                        <div className="px-3 py-2 rounded-lg bg-background/50 border border-border/30 group-hover/item:border-primary/50 transition-all duration-300 group-hover/item:scale-105 group-hover/item:shadow-lg">
                          <span 
                            className="text-xs font-medium text-foreground/90 transition-colors"
                            style={{ color: skill.color }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
