const steps = [
  {
    number: "1",
    title: "Apply",
    description: "Fill the form below with your details & reel samples"
  },
  {
    number: "2",
    title: "Workshop",
    description: "Attend live orientation on Zoom or in-person"
  },
  {
    number: "3",
    title: "Demo Shoots",
    description: "Complete 3–4 sample shoots with instant editing"
  },
  {
    number: "4",
    title: "Get Rated",
    description: "Based on creativity, speed, professionalism"
  },
  {
    number: "5",
    title: "Onboarded",
    description: "Get app access, partner kit, and start earning"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Journey to Becoming an iShoot Creator
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Simple steps to start your creative journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent transform -translate-x-1/2"></div>

            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold shadow-glow">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
