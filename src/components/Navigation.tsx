import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <img src={logo} alt="Logo" className="w-4 h-4"/>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-foreground hover:text-primary transition-smooth">
              Solutions
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              À propos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
          
          <Button variant="cta" size="sm">
            Commencer
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
