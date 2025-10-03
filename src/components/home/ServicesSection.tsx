const services = [
  {
    title: "Female Reel-Maker",
    description: "Female users can now confidently get skilled female reel-makers for their shoots.",
    features: ["Gender-specific booking", "Certified professionals", "Safe environment"],
    mockup: "👩‍💼"
  },
  {
    title: "Pick a Partner",
    description: "Personalized Partner Selection for Every Shoot.",
    features: ["Choose your creator", "View profiles & ratings", "Match preferences"],
    mockup: "🤝"
  },
  {
    title: "Content Storage",
    description: "We securely store your content for up to 6 months, so you can download, revisit, or share it whenever you are ready no rush, no worries.",
    features: ["6-month storage", "Secure cloud backup", "Instant download"],
    mockup: "☁️"
  },
  {
    title: "Instant Booking",
    description: "No more waiting! Get confirmation as soon you book — fast, simple, free.",
    features: ["Real-time booking", "Instant confirmation", "Zero waiting time"],
    mockup: "⚡"
  }
];

const ServicesSection = () => {
  return (
       <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#0c0f1a] border border-cyan-500/30 rounded-2xl p-8 text-center shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/40 rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {service.mockup}
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="text-xs text-gray-400"
                  >
                    • {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;