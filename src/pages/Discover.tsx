import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import FeaturesGrid from "@/components/discover/FeaturesGrid";
import PricingPackages from "@/components/discover/PricingPackages";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FeaturesGrid from "@/components/discover/FeaturesGrid";

const Discover = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-cyan-500/20" />
          <div className="absolute inset-0 pixel-grid opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Discover the <span className="text-primary">iShoot</span> Difference
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Professional iPhone content creation that transforms your vision into reality
              </p>
            </div>
          </div>
        </section>

        <FeaturesGrid />
        {/* <AppFeatures /> */}
        <PricingPackages />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
