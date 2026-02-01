import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{t('footer.title')}</h3>
            <p className="text-muted-foreground">
              {t('footer.subtitle')}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/stevenhdz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/stevenhdz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:stevenalexanderhernandezjimenez.com"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
