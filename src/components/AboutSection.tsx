import { Button } from "@/components/ui/button";
import aboutFactory from "@/assets/about-factory.jpg";

const stats = [
  { number: "3", label: "Business Unit" },
  { number: "6", label: "Research Base" },
  { number: "4000+", label: "Global Employees" },
  { number: "12000+", label: "Global Customers" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              ABOUT INTCO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Intco Decor is proud to offer high-quality modern wall panels, acoustic panels, 
              fluted wall panels, skirting boards, composite decking, composite cladding, 
              crown mouldings, and other home decoration products, covering commercial, 
              residential, and public spaces throughout the globe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We operate 6 major production bases across China, Malaysia, Vietnam, and other 
              regions, equipped with nearly 140 advanced production lines and 48 efficient 
              assembly lines to ensure stable and reliable delivery times. Our dedicated 
              design team provides tailored solutions to meet your specific requirements.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>

          {/* Image & Stats */}
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden shadow-card">
              <img
                src={aboutFactory}
                alt="Intco Factory"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
