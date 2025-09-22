import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              parcours vers la durabilité ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contactez nos experts pour discuter de la façon dont nous pouvons aider votre organisation à atteindre ses objectifs de décarbonation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contactez-nous</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">contact@ecosolve.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Téléphone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Bureau</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Planifiez une consultation
              </h4>
              <p className="text-muted-foreground mb-4">
                Réservez un appel de 30 minutes avec nos experts en durabilité pour discuter de vos besoins spécifiques et comment nous pouvons accélérer votre démarche de décarbonation.
              </p>
              <Button variant="cta" size="lg" className="w-full">
                Réserver une consultation
              </Button>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-card shadow-medium border-0">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Envoyer un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Prénom
                  </label>
                  <Input placeholder="john" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom
                  </label>
                  <Input placeholder="smith" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@entreprise.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Entreprise
                </label>
                <Input placeholder="Votre entreprise" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Parlez-nous de vos objectifs de durabilité et comment nous pouvons vous aider..."
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;