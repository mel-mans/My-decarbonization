import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sustainability.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable technology and clean energy solutions"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre partenaire en
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              transition énergétique
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Solutions innovantes pour accompagner votre entreprise vers un avenir durable, écoresponsable et sans émissions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-48">
              Explorer les solutions
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              Planifier une consultation
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Entreprises Transformées</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Tonnes de CO₂ Réduites</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;