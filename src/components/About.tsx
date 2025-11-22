import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const highlights = [
    {
      icon: Code2,
      titleKey: "about.cleanCode.title",
      descriptionKey: "about.cleanCode.description"
    },
    {
      icon: Rocket,
      titleKey: "about.highPerformance.title",
      descriptionKey: "about.highPerformance.description"
    },
    {
      icon: Users,
      titleKey: "about.technicalLeadership.title",
      descriptionKey: "about.technicalLeadership.description"
    },
    {
      icon: TrendingUp,
      titleKey: "about.continuousImprovement.title",
      descriptionKey: "about.continuousImprovement.description"
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.titleKey}
                className="p-8 glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 group animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(item.descriptionKey)}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-12 glass-card border-border/50 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('about.objective')}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('about.objectiveText1')}
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            {t('about.objectiveText2')}{" "}
            <span className="text-primary font-semibold">{t('about.objectiveText2Highlight')}</span>{" "}
            {t('about.objectiveText2End')}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
