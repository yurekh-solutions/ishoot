import { Video, Camera, Edit3, Music, Film, Sparkles } from "lucide-react";

const ServicesSections = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video shoots for any occasion"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Stunning photos that capture your moments"
    },
    {
      icon: Edit3,
      title: "Video Editing",
      description: "Expert post-production and color grading"
    },
    {
      icon: Music,
      title: "Audio Enhancement",
      description: "Crystal clear sound and music integration"
    },
    {
      icon: Film,
      title: "Reels & Shorts",
      description: "Engaging content for social media"
    },
    {
      icon: Sparkles,
      title: "Special Effects",
      description: "Add magic with professional VFX"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional content creation services at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSections;
