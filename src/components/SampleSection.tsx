import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const SampleSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            ORDER A SAMPLE
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Learn about our products and request a free sample
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="gap-2"
          >
            <Send className="w-5 h-5" />
            Get Free Samples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SampleSection;
