import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">¿Trabajamos juntos?</h3>
            <p className="text-muted-foreground">
              Disponible para proyectos y oportunidades
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-lg bg-card hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground text-sm">
          <p>© 2025 Steven Alexander Hernández Jiménez. Construido con React, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
