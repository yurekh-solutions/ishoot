import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const features: Feature[] = [
  {
    title: "Female Reel-Maker",
    description: "Female users can now confidently get skilled female reel-makers for their shoots.",
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    category: "creator",
  },
  {
    title: "Pick a Partner",
    description: "Personalized Partner Selection for Every Shoot.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    category: "booking",
  },
  {
    title: "Content Storage",
    description:
      "We securely store your content for up to 6 months, so you can download, revisit, or share it whenever you are ready no rush, no worries.",
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    category: "storage",
  },
  {
    title: "Instant Booking",
    description:
      "No more waiting! Get immediate confirmation as soon as you book — fast, simple, and hassle-free.",
    imageUrl:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80",
    category: "booking",
  },
  {
    title: "Live Tracking",
    description:
      "Know where your reel-maker is, in real-time. Stay updated from arrival to final wrap.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    category: "tracking",
  },
  {
    title: "Customer Support",
    description:
      "24/7 support to keep your day running smoothly. Anytime help, just a message or call away.",
    imageUrl:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&w=400&q=80",
    category: "support",
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const getVisibleFeatures = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(features[(currentIndex + i) % features.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="text-primary">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and deliver amazing content
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass-card h-12 w-12 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass-card h-12 w-12 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {getVisibleFeatures().map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center h-full"
              >
                <h3 className="text-xl font-bold mb-3 min-h-[56px] flex items-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">
                  {feature.description}
                </p>

                {/* Phone Mockup with Image */}
                <div className="relative w-full max-w-[200px] aspect-[9/19] bg-background rounded-3xl border-4 border-foreground/20 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-background rounded-b-2xl z-10"></div>
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
