import { Card } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      title: "Carbon Assessment",
      description: "Comprehensive analysis of your organization's carbon footprint with actionable insights and reduction strategies.",
      icon: "📊",
      features: ["Scope 1, 2 & 3 Analysis", "Real-time Monitoring", "Compliance Reporting"]
    },
    {
      title: "Renewable Energy Integration",
      description: "Seamless transition to clean energy sources with customized implementation plans and ongoing support.",
      icon: "⚡",
      features: ["Solar & Wind Solutions", "Energy Storage", "Grid Integration"]
    },
    {
      title: "Sustainable Operations",
      description: "Transform your operations with efficient processes, waste reduction, and sustainable supply chain management.",
      icon: "🌱",
      features: ["Process Optimization", "Waste Management", "Supply Chain Sustainability"]
    },
    {
      title: "Carbon Offset Programs",
      description: "High-quality carbon offset solutions through verified projects that create measurable environmental impact.",
      icon: "🌍",
      features: ["Verified Projects", "Impact Tracking", "Transparent Reporting"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Decarbonization Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions designed to accelerate your journey to net-zero emissions 
            while maintaining operational excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 bg-gradient-card shadow-medium hover:shadow-large transition-smooth border-0 group hover:-translate-y-1">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-bounce">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;