import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <AboutSection />
      <LocationSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
};

export default Index;
