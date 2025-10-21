import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Desarrollo estructurado y orientado a la mantenibilidad siguiendo principios SOLID y mejores prácticas."
  },
  {
    icon: Rocket,
    title: "Alto Rendimiento",
    description: "Enfoque en escalabilidad, optimización y arquitecturas robustas que soportan crecimiento."
  },
  {
    icon: Users,
    title: "Liderazgo Técnico",
    description: "Colaboración efectiva en equipos multidisciplinarios ágiles con mentalidad de ownership."
  },
  {
    icon: TrendingUp,
    title: "Mejora Continua",
    description: "Aprendizaje constante de nuevas tecnologías y metodologías para aportar soluciones innovadoras."
  }
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que <span className="gradient-text">aporto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformando ideas en productos digitales de impacto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.title}
                className="p-8 glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 group animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-12 glass-card border-border/50 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Mi objetivo</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            He participado en todo el ciclo de desarrollo: desde el diseño de arquitecturas 
            y APIs hasta la implementación de interfaces dinámicas, intuitivas y mantenibles.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Busco seguir creciendo como ingeniero senior, aportando{" "}
            <span className="text-primary font-semibold">soluciones tecnológicas de alto impacto</span>{" "}
            que unan innovación, calidad y eficiencia en cada proyecto.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
