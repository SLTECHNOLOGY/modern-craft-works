import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img 
              src={profileImage} 
              alt="Steven Alexander Hernández Jiménez" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </div>
        
        <div className="inline-block mb-4 px-4 py-2 rounded-full glass-card">
          <span className="text-sm text-muted-foreground">Full Stack Software Engineer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Steven Alexander <span className="gradient-text">Hernández Jiménez</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
          Construyendo soluciones digitales escalables
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Desarrollo aplicaciones web modernas y de alto rendimiento que transforman 
          la experiencia del usuario y optimizan los procesos de negocio.
        </p>
        
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:bg-card/50 backdrop-blur-sm"
          >
            Contáctame
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
