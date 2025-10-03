import { Shield, Clock, Users, Lock, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Trained & Certified Reel Makers",
    description: "Each Partner clears 6 filters to get their certification",
    image: "👨‍💼"
  },
  {
    icon: Clock,
    title: "Easy Booking",
    description: "Stop struggling with complex booking procedure",
    image: "📱"
  },
  {
    icon: Zap,
    title: "Unbelievable Pricing",
    description: "Each Reel starts 1999/-",
    image: "💰"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "You & Your data is safe and secured",
    image: "🔒"
  },
  {
    icon: Clock,
    title: "Instant Reels, Instant Editing",
    description: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
    image: "⚡"
  },
  {
    icon: Heart,
    title: "Women Safety",
    description: "A women can book a female Reel maker",
    image: "👩‍💼"
  }
];

const FeaturesSection = () => {
  return (
        <section className="py-20  text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Not Just Instant
            <span className="text-primary"> Delivery, But..</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900/80 border glass-card border-zinc-800 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start space-x-4">
                {/* Feature Icon */}
                <div className="flex-shrink-0 text-primary">
                  <div className="w-12 h-12 bg-[#153a4a]  rounded-lg flex items-center justify-center text-2xl">
                    {feature.image}
                  </div>
                </div>

                {/* Feature Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 
  );
};

export default FeaturesSection;