import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Hourly Plan",
    badge: "Quickest Content",
    price: "₹1,999",
    description: "Perfect for anyone who want a single, fast, high-quality reel.",
    features: [
      "1 Professional Reel",
      "10 Minute Delivery",
      "Professional Editing",
      "HD Quality Output",
      "Instant Download"
    ],
    popular: false
  },
  {
    name: "Half-Day Plan",
    badge: "Event Essential",
    price: "₹4,999",
    description: "Ideal for events and creators who need more time and more content.",
    features: [
      "5 Professional Reels",
      "4 Hour Session",
      "Advanced Editing",
      "4K Quality Output",
      "Raw Footage Included",
      "Multiple Formats",
      "Priority Support"
    ],
    popular: true
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bestsellers
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card-hover rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-sm text-primary font-semibold mb-4">
                  {plan.badge}
                </div>
                <div className="text-4xl font-bold gradient-text mb-4">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${plan.popular ? 'red-glow' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;