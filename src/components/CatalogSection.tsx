import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import productWallPanel from "@/assets/product-wall-panel.jpg";

const CatalogSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-hover">
              <img
                src={productWallPanel}
                alt="Product Catalog"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              DOWNLOAD CATALOG
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-6">
              Click To Download The Brochure
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Want to learn more about product details? We provide you with product 
              brochures in different product categories.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Click To Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
