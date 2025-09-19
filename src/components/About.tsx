import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Accelerating the
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Green Transition
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              EcoSolve partners with forward-thinking organizations to deliver innovative 
              decarbonization strategies that drive both environmental impact and business value.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of sustainability experts and engineers work closely with clients 
              to develop customized solutions that align with their unique operational 
              needs and sustainability goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Expert Team</div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate global decarbonization by providing innovative, 
                scalable solutions that empower organizations to achieve their 
                net-zero commitments while driving sustainable growth.
              </p>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg shadow-medium">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine cutting-edge technology, deep industry expertise, 
                and proven methodologies to deliver measurable results that 
                create lasting environmental and economic value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;