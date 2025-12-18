import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import CatalogSection from "@/components/CatalogSection";
import HotSellingSection from "@/components/HotSellingSection";
import AboutSection from "@/components/AboutSection";
import SampleSection from "@/components/SampleSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <SolutionsSection />
        <ProductsSection />
        <CatalogSection />
        <HotSellingSection />
        <AboutSection />
        <SampleSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
