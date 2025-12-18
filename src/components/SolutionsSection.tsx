import { TrendingUp, Lightbulb, Truck, Factory, Headphones, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: TrendingUp,
    title: "Market Trend Sharing",
  },
  {
    icon: Lightbulb,
    title: "Product Development & Sampling",
  },
  {
    icon: Truck,
    title: "Deliver",
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply",
  },
  {
    icon: Headphones,
    title: "Marketing Support",
  },
  {
    icon: Clock,
    title: "24-Hour After-Sales Service",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              OUR<br />
              <span className="text-gradient">SOLUTIONS</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Intco Decor is a brand of Intco Recycling, Intco Recycling (Symbol 688087) is a 
              high-tech manufacturing company headquartered in Zibo, Shandong Province, 
              specializing in recycling. Our solutions can be divided into commercial and 
              household based on scenarios.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <solution.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-foreground leading-tight">
                  {solution.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
