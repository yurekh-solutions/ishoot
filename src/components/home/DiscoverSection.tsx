import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoContent {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

const categories = [
  "All",
  "Events & Weddings",
  "Car Delivery",
  "Outfit Shoots",
  "Concerts",
  "Collaborations",
  "Decor & Interiors",
];

const videoContent: VideoContent[] = [
  {
    id: "1",
    title: "Wedding Celebration",
    category: "Events & Weddings",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552",
    videoUrl: "https://example.com/wedding.mp4"
  },
  {
    id: "2",
    title: "Restaurant Interior",
    category: "Decor & Interiors",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    videoUrl: "https://example.com/restaurant.mp4"
  },
  {
    id: "3",
    title: "Luxury Car Showcase",
    category: "Car Delivery",
    thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    videoUrl: "https://example.com/car.mp4"
  },
  {
    id: "4",
    title: "Fashion Photoshoot",
    category: "Outfit Shoots",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    videoUrl: "https://example.com/fashion.mp4"
  },
  {
    id: "5",
    title: "Live Concert",
    category: "Concerts",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    videoUrl: "https://example.com/concert.mp4"
  },
  {
    id: "6",
    title: "Brand Collaboration",
    category: "Collaborations",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad",
    videoUrl: "https://example.com/collab.mp4"
  }
];

const DiscoverSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const filteredVideos = selectedCategory === "All"
    ? videoContent
    : videoContent.filter(video => video.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover with <span className="text-primary">Vibe</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore trending reels from our creators
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "glass-card"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden glass-card cursor-pointer"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              {/* iShoot Watermark */}
              <div className="absolute top-4 right-4 z-10">
                <div className="text-white font-bold text-lg tracking-wider drop-shadow-lg">
                  i<span className="text-primary">Shoot</span>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    hoveredVideo === video.id
                      ? "scale-110 shadow-glow"
                      : "scale-100"
                  }`}
                >
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {video.title}
                </h3>
                <p className="text-white/80 text-sm">{video.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-card rounded-full px-8"
          >
            Load More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
