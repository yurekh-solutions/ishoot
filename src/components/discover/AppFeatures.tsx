import {  MessageCircle } from "lucide-react";
import phonePartners from "@/assets/phone-partners.jpg";
import phoneBooking from "@/assets/phone-booking.jpg";
import creatorConfident from "@/assets/creator-confident.jpg";
import creatorAction from "@/assets/creator-action.jpg";
import creatorFemale from "@/assets/creator-female.jpg";
import securityShield from "@/assets/security-shield.jpg";

const AppFeatures = () => {
  const features = [
    {
      title: "Female Reel-Maker",
      description: "Female users can now confidently get skilled female reel-makers for their shoots.",
      image: creatorFemale ,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Pick a Partner",
      description: "Personalized Partner Selection for Every Shoot.",
      image: phonePartners,
      color: "from-primary to-cyan-500",
    },
    {

      title: "Content Storage",
      description: "We securely store your content for up to 6 months, so you can download, revisit, or share it whenever you are ready—no rush, no worries.",
            image: creatorConfident,

      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Instant Booking",
      description: "No more waiting! Get immediate confirmation as soon as you book — fast, simple, and hassle-free.",
      image: phoneBooking,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Live Tracking",
      description: "Know where your reel-maker is, in real-time. Stay updated from arrival to final wrap.",
      image: creatorAction,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Customer Support",
      description: "24/7 support to keep your day running smoothly. Anytime help, just a message or call away.",
      image: securityShield,

    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 pixel-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get to Know <span className="text-primary">iShoot</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Features That Make Us Stand Out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 hover:shadow-glow animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.image ? (
                <div className="relative overflow-hidden rounded-xl mb-6 h-72">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              ) : (
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:animate-glow`}>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
