import { Smartphone, Shield, Clock, Users, Video, Heart } from "lucide-react";
import creatorConfident from "@/assets/creator-confident.jpg";
import creatorAction from "@/assets/creator-action.jpg";
import creatorFemale from "@/assets/creator-female.jpg";
import phoneBooking from "@/assets/phone-booking.jpg";
import securityShield from "@/assets/security-shield.jpg";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Trained & Certified Reel Makers",
      description: "Each Partner clears 6 filters to get their certification",
      image: creatorConfident,
      icon: Users,
    },
    {
      title: "Easy Booking",
      description: "Stop struggling with complex booking procedures",
      image: phoneBooking,
      icon: Smartphone,
    },
    {
      title: "Unbelievable Pricing",
      description: "Each Reel starts at ₹1999/-",
      image: creatorAction,
      icon: Clock,
    },
    {
      title: "Safe & Secure",
      description: "You & Your data is safe and secured",
      image: securityShield,
      icon: Shield,
    },
    {
      title: "Instant Reels, Instant Editing",
      description: "No hidden charges! Upfront pricing and seamless checkout experience",
      image: creatorAction,
      icon: Video,
    },
    {
      title: "Women Safety",
      description: "A woman can book a female Reel maker",
      image: creatorFemale,
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Just <span className="text-primary">Instant Delivery</span>, But..
          </h2>
          <p className="text-xl text-muted-foreground">
            Why Choose iShoot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-500 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <feature.icon className="w-8 h-8 text-primary animate-glow" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
