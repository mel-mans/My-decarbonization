import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Accélérer la
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                transition verte
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MyDecarbonization s'associe à des organisations visionnaires pour fournir des stratégies de décarbonation innovantes qui génèrent à la fois un impact environnemental et une valeur commerciale.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre équipe d'experts en durabilité et d'ingénieurs travaille en étroite collaboration avec les clients pour développer des solutions personnalisées adaptées à leurs besoins opérationnels et objectifs de durabilité.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Experts</div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              En savoir plus sur nous
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Notre mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accélérer la décarbonation mondiale en fournissant des solutions innovantes et évolutives qui permettent aux organisations d'atteindre leurs engagements de neutralité carbone tout en favorisant une croissance durable.
              </p>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Notre approche</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous combinons des technologies de pointe, une expertise sectorielle approfondie et des méthodologies éprouvées pour fournir des résultats mesurables qui créent une valeur environnementale et économique durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;