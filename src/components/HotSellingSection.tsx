import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productWallPanel from "@/assets/product-wall-panel.jpg";
import productMoulding from "@/assets/product-moulding.jpg";

const products = [
  { image: productWallPanel, title: "SPC Wall Panel" },
  { image: productMoulding, title: "PS Wall Panel" },
  { image: productWallPanel, title: "WPC Wall Panel" },
  { image: productMoulding, title: "MDF Acoustic Panel" },
  { image: productWallPanel, title: "Skirting Board" },
  { image: productMoulding, title: "Crown Moulding" },
];

const HotSellingSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, products.length - visibleCount));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            HOT SELLING
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex >= products.length - visibleCount}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCount + 2)}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[calc(25%-18px)] md:min-w-[calc(25%-18px)] group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-4 text-center font-medium text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotSellingSection;
