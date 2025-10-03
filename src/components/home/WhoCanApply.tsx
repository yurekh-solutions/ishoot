import { Smartphone, TrendingUp, MapPin, Clock, Instagram, Sparkles, CheckCircle } from "lucide-react";

const requirements = [
  {
    icon: Smartphone,
    title: "iPhone 13 Pro or newer",
    description: "No DSLR. No fancy gear. Just your iPhone"
  },
  {
    icon: TrendingUp,
    title: "Strong Reel Knowledge",
    description: "Understanding of reels, editing, and trends"
  },
  {
    icon: MapPin,
    title: "Local Availability",
    description: "Ready to take up local shoots"
  },
  {
    icon: Clock,
    title: "Work Ethic",
    description: "Clean and punctual work ethic"
  },
  {
    icon: Instagram,
    title: "Instagram Profile",
    description: "Public profile or reel samples"
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Creative mindset and hunger to grow"
  }
];

const WhoCanApply = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who Can <span className="text-primary">Apply?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Join Our Creator Network
          </p>
          <p className="text-lg text-muted-foreground">
            If you're creative and hungry to grow—you're in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{req.title}</h3>
                    <p className="text-sm text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-8 max-w-2xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-lg font-medium text-muted-foreground">
            No degree or prior work experience needed
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
