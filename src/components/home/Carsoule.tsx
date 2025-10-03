import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Carsoule = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 mb-4">
      <div className="container mx-auto">
        <div className="text-center space-y-8 animate-slide-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mt-20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>World's First Quick Content Service</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white">
              We Shoot • Edit • Deliver Reels in
            </h1>
            <div className="text-4xl md:text-8xl lg:text-9xl font-extrabold text-primary tracking-tight">
              10 Minutes<span className="align-super text-2xl">*</span>
            </div>
          </div>

          {/* Animated Phone Mockup */}
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ y: 20, rotate: -2 }}
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[220px] h-[460px] md:w-[260px] md:h-[520px] rounded-[3rem] 
              bg-primary border-[12px] border-secondary-800 shadow-2xl overflow-hidden"
            >
              {/* Screen glow animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-black animate-pulse" />

              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2 text-white text-xs z-10">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                </div>
              </div>

              {/* App UI */}
              <div className="relative p-4 text-white z-10">
                <div className="text-sm text-gray-400 mb-2">Hey, Yurekh</div>
                <div className="text-lg font-bold mb-4 leading-snug">
                  You are just in <br /> the right place!
                </div>

                {/* Grid actions with animated hover */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { icon: "+", label: "Book Now" },
                    { icon: "📦", label: "Packages" },
                    { icon: "💰", label: "Wallet" },
                    { icon: "⚙️", label: "Settings" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 rounded-xl glass-card bg-gradient-to-br from-primary/20 to-accent/10 
                        flex items-center justify-center shadow-md"
                      >
                        <span className="text-lg text-primary">{item.icon}</span>
                      </div>
                      <span className="text-xs mt-1 text-gray-300 group-hover:text-primary">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Highlight Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-b from-[#0872af] to-zinc-900 rounded-lg p-4 text-center shadow-inner"
                >
                  <p className="text-xs font-bold">REELS CREATED</p>
                  <p className="text-xs font-bold">AND DELIVERED</p>
                  <p className="text-xs font-bold">ON THE SPOT</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-zinc-700 px-8 py-6 text-lg rounded-full shadow-lg"
            >
              Start Your Reel Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carsoule;
