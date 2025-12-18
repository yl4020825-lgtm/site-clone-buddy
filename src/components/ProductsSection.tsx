import productWallPanel from "@/assets/product-wall-panel.jpg";
import productMoulding from "@/assets/product-moulding.jpg";
import productOutdoor from "@/assets/product-outdoor.jpg";

const products = [
  {
    image: productWallPanel,
    title: "Wall Panel",
    description: "Premium interior wall panels for modern spaces",
  },
  {
    image: productMoulding,
    title: "Moulding & Accessories",
    description: "Elegant trim and decorative elements",
  },
  {
    image: productOutdoor,
    title: "Outdoor",
    description: "Durable exterior cladding and decking",
  },
];

const features = [
  { icon: "💧", label: "Waterproof" },
  { icon: "🌿", label: "Non-Formaldehyde" },
  { icon: "🛡️", label: "Anti-Moth" },
  { icon: "🔧", label: "Easy to Install" },
  { icon: "⚗️", label: "Non-Heavy Metal" },
  { icon: "♻️", label: "Eco-Friendly" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-12">
          PRODUCT
        </h2>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Bar */}
        <div className="bg-card rounded-lg shadow-soft p-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
