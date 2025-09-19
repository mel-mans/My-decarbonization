const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              EcoSolve
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Leading the transition to a sustainable future through innovative 
              decarbonization solutions and expert guidance.
            </p>
            <div className="text-sm text-background/60">
              © 2024 EcoSolve. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-smooth">Carbon Assessment</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Renewable Energy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Sustainable Operations</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Carbon Offsets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;