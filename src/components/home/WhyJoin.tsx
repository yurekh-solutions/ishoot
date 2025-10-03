import { Smartphone, DollarSign, Clock, Globe2, GraduationCap, Award, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Powered by Your iPhone",
    description: "No DSLR. No fancy gear. Just your iPhone 13 Pro or newer."
  },
  {
    icon: DollarSign,
    title: "Earn Per Shoot",
    description: "Get paid instantly for every shoot you complete."
  },
  {
    icon: Clock,
    title: "Super Flexible",
    description: "Choose your own schedule. Work on weekends, evenings, or go full-time."
  },
  {
    icon: Globe2,
    title: "Global Exposure",
    description: "Work with influencers, startups, cafes, events, and brands—locally and internationally."
  },
  {
    icon: GraduationCap,
    title: "Free Training & Certification",
    description: "Learn everything from our team. No fees. Just skills, practice, and growth."
  },
  {
    icon: Award,
    title: "Creator Partner Kit",
    description: "Get your official T-shirt, partner badge, and exclusive access to the iShoot App."
  },
  {
    icon: Users,
    title: "Creative Community",
    description: "Join a high-performance creator network. Share ideas. Get inspired. Grow together."
  },
  {
    icon: TrendingUp,
    title: "Growth Path & Campaigns",
    description: "Top performers get featured in paid brand shoots, international collabs, and more."
  }
];

const WhyJoin = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join <span className="text-primary">iShoot?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn your iPhone into a creative business with endless opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
