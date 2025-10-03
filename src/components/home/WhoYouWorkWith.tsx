import { Camera, ShoppingBag, Coffee, GraduationCap, Globe, Music } from "lucide-react";

const clients = [
  {
    icon: Camera,
    title: "Influencers & Solo Creators",
    description: "Work with content creators and build your network"
  },
  {
    icon: ShoppingBag,
    title: "Small Businesses & Startups",
    description: "Help growing businesses showcase their products"
  },
  {
    icon: Coffee,
    title: "Restaurants, Cafes, Salons",
    description: "Capture the essence of local businesses"
  },
  {
    icon: GraduationCap,
    title: "Colleges, Events, Communities",
    description: "Document special moments and gatherings"
  },
  {
    icon: Globe,
    title: "Global Brand Campaigns",
    description: "Work with international brands and expand your reach"
  },
    {
    icon: Music,
    title: "Artists & Entertainment",
    description: "Create reels for musicians, performers, and shows"
  }
];

const WhoYouWorkWith = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who You'll <span className="text-primary">Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diverse Opportunities
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Connect with amazing clients and grow your portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
                <p className="text-muted-foreground">{client.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoYouWorkWith;
