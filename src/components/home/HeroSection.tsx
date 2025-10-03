import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mt-20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>World's First Quick Content Service</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Turn Your iPhone Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent animate-shine bg-[length:200%_auto]">
              an Income Machine
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Become a certified iShoot creator who shoots, edits, and delivers professional Instagram reels in just 10 minutes. Turn your creativity into income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 text-lg px-8 group"
            >
              <Link to="/partner">
                Join as Creator
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {/* <Button 
              asChild
              size="lg"
              variant="outline"
              className="glass-card text-lg px-8 hover:border-primary"
            >
              <Link to="/contact">
                Learn More
              </Link>
            </Button> */}
             <Button 
              asChild
              size="lg"
                            variant="outline"

              className="glass-card from-primary to-primary-glow hover:shadow-glow transition-all duration-300 text-lg px-8 group"
            >
              <Link to="/discover">
             Discover More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-10 max-w-4xl   glass-card rounded-2xl mx-auto p-4 ">
            <div className="text-center ">
              <div className="text-2xl font-bold text-primary ">50,00+</div>
              <div className="text-sm text-muted-foreground mt-1">Reels Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    
    </section>
  );
};

export default HeroSection;
