import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productOutdoor from "@/assets/product-outdoor.jpg";
import productWallPanel from "@/assets/product-wall-panel.jpg";

const news = [
  {
    image: productOutdoor,
    title: "Why WPC Decking Is the Best Choice for Modern Outdoor Spaces",
    excerpt: "Discover the benefits of WPC decking for outdoor projects. Durable, low-maintenance, eco-friendly, and stylish — the ideal solution for patios, gardens, and commercial spaces.",
    date: "Dec 15, 2024",
  },
  {
    image: productWallPanel,
    title: "WPC Wall Panels vs Traditional Wall Materials: A Comprehensive Comparison",
    excerpt: "Compare WPC wall panels with traditional wall materials like drywall, wood, and plaster. Learn why WPC panels are a superior choice for modern construction projects.",
    date: "Dec 10, 2024",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            NEWS
          </h2>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Learn More
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-muted-foreground">{item.date}</time>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
