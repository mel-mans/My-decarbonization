import { BarChart3, Handshake, Presentation, Sun, Zap, Leaf } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "Audit énergétique",
      icon: BarChart3,
      position: "top"
    },
    {
      title: "Energy management system", 
      icon: Zap,
      position: "top-right"
    },
    {
      title: "Solaire Photovoltaïque",
      icon: Sun,
      position: "bottom-right"
    },
    {
      title: "Bilan Carbone",
      icon: Leaf,
      position: "bottom"
    },
    {
      title: "Sensibilisation du personnel",
      icon: Presentation,
      position: "bottom-left"
    },
    {
      title: "Contrats et Financements Innovants",
      icon: Handshake,
      position: "top-left"
    }
  ];

  const getPositionClasses = (position: string) => {
    switch(position) {
      case "top": return "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2";
      case "top-right": return "top-[15%] right-0 translate-x-1/2 -translate-y-1/2";
      case "bottom-right": return "bottom-[15%] right-0 translate-x-1/2 translate-y-1/2";
      case "bottom": return "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2";
      case "bottom-left": return "bottom-[15%] left-0 -translate-x-1/2 translate-y-1/2";
      case "top-left": return "top-[15%] left-0 -translate-x-1/2 -translate-y-1/2";
      default: return "";
    }
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions de
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Décarbonation Complètes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions end-to-end conçues pour accélérer votre transition vers la neutralité carbone
            tout en maintenant l'excellence opérationnelle.
          </p>
        </div>
        
        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Central Hub */}
          <div className="relative z-10 w-64 h-64 bg-gradient-primary rounded-full flex flex-col items-center justify-center text-white shadow-glow">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Scope 2</h3>
              <p className="text-lg font-semibold">décarbonation</p>
              <p className="text-sm opacity-90 italic">d'énergie</p>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] relative">
              {solutions.map((_, index) => (
                <div
                  key={index}
                  className="absolute w-px h-24 bg-gradient-to-t from-primary/20 to-transparent origin-bottom"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -100%) rotate(${(index * 60)}deg)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Solution Circles */}
          <div className="absolute w-[500px] h-[500px]">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className={`absolute ${getPositionClasses(solution.position)} group cursor-pointer`}
                >
                  <div className="w-24 h-24 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:shadow-large transition-smooth border border-border/50 group-hover:scale-110 group-hover:bg-primary/10">
                    <IconComponent 
                      size={32} 
                      className="text-primary group-hover:text-primary-glow transition-colors"
                    />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium text-foreground whitespace-nowrap px-2 py-1 bg-card/90 backdrop-blur-sm rounded-md shadow-sm border border-border/50">
                      {solution.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;