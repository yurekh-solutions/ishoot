import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhoAreCreators from "@/components/home/WhoAreCreators";
import WhyJoin from "@/components/home/WhyJoin";
import WhoCanApply from "@/components/home/WhoCanApply";
import HowItWorks from "@/components/home/HowItWorks";
import WhoYouWorkWith from "@/components/home/WhoYouWorkWith";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import PartnerForm from "@/components/PartnerForm";
import Carsoule from "@/components/home/carsoule";
import PricingPackages from "@/components/discover/PricingPackages";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturesGrid from "@/components/discover/FeaturesGrid";
import AppFeatures from "@/components/discover/AppFeatures";
import DiscoverSection from "@/components/home/DiscoverSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSections from "@/components/home/ServicesSections";
import FeaturesCarousel from "@/components/home/FeaturesCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesCarousel />
        {/* <DiscoverSection /> */}

                <FeaturesSection />
        <AppFeatures />
                        <ServicesSections />

        <WhoAreCreators />
        {/* <PricingPackages/> */}
        {/* <ServicesSection /> */}
        <WhyJoin />

        <WhoCanApply />

        <HowItWorks />
                <PricingPackages />

        <WhoYouWorkWith />
        <Testimonials />
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-primary">Start?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join the world's fastest-growing creator network. Shoot. Edit. Deliver. Earn. All through your iPhone.
              </p>
            </div>
            <PartnerForm />
          </div>
        </section> */}

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
