import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPackages = () => {
  const weddingPackages = [
    { name: "Basic", events: "Single Event" },
    { name: "Silver", events: "Three Events" },
    { name: "Gold", events: "Four Events" },
    { name: "Platinum", events: "Complete Wedding" },
  ];

  const corporateInclusions = [
    "Up to 3 Reels (each up to 60 seconds)",
    "Up to 6 hours of shoot time",
    "Mobile portrait photos: up to 15",
    "Shot on iPhone",
    "Instant reel delivery",
    "iShoot branding included",
    "Raw footage provided",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose Your Perfect Plan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Wedding Package */}
          <div className="glass-card p-8 lg:p-12 animate-slide-up">
            <div className="mb-6">
              <p className="text-primary uppercase text-sm font-semibold tracking-wider mb-2">
                For Your Special Day
              </p>
              <h3 className="text-4xl font-bold mb-4">Wedding Packages</h3>
              <p className="text-muted-foreground mb-6">
                Professional coverage for your wedding celebrations, specializing in traditional and modern Indian ceremonies with elegant, timeless captures.
              </p>
              
              <div className="mb-8">
                <p className="text-muted-foreground mb-2">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">₹14,999</span>
                  <span className="text-muted-foreground">/package</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {weddingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-primary text-xs uppercase font-semibold mb-1">
                    {pkg.events}
                  </p>
                  <p className="text-xl font-bold">{pkg.name}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow group"
              size="lg"
            >
              <Link to="/contact">
                Know More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Corporate Package */}
          <div className="glass-card p-8 lg:p-12 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="mb-6">
              <p className="text-primary uppercase text-sm font-semibold tracking-wider mb-2">
                For Business Events
              </p>
              <h3 className="text-4xl font-bold mb-4">Corporate Package</h3>
              <p className="text-muted-foreground mb-6">
                Professional coverage for your business events, delivering polished content that aligns with your brand identity and marketing goals.
              </p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">₹9,999</span>
                  <span className="text-muted-foreground">/only</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-4">Package Inclusions:</p>
              <div className="space-y-3">
                {corporateInclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">{inclusion}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow group"
              size="lg"
            >
              <Link to="/contact">
                Book Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
