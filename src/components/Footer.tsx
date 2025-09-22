import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              <img src={logo} alt="Logo" className="h-8" />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Leader de la transition vers un avenir durable grâce à des solutions innovantes de décarbonation et des conseils d'experts.
            </p>

            <div className="text-sm text-background/60">
          © 2025 MyDecarbonization. Tous droits réservés.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-smooth">Audit énergétique</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Energy management system</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Solaire Photovoltaïque</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Bilan Carbone</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Sensibilisation du personnel</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contrats et Financements Innovants</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
            <li><a href="#" className="hover:text-primary transition-smooth">À propos</a></li>
            <li><a href="#" className="hover:text-primary transition-smooth">Notre équipe</a></li>
            <li><a href="#" className="hover:text-primary transition-smooth">Carrières</a></li>
            <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;