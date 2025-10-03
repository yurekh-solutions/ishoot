import { Button } from "@/components/ui/button";

const Carsoule = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-8 animate-slide-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
            <span className="text-primary font-semibold mr-2">✨</span>
            WORLD'S FIRST QUICK CONTENT SERVICE
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              We Shoot • Edit • Deliver Reels in
            </h1>
            <div className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text animate-glow-pulse">
              10 Minutes*
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="flex justify-center mt-12">
            <div className="phone-mockup animate-float">
              <div className="phone-screen h-[400px] md:h-[500px] w-[200px] md:w-[250px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-3 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 text-white">
                    <div className="text-sm text-gray-400 mb-2">Hey, Shrey</div>
                    <div className="text-lg font-bold mb-4">You are just in<br />the right place!</div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-1">
                          <span className="text-lg">+</span>
                        </div>
                        <span className="text-xs">Book Now</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-1">
                          <span className="text-lg">📦</span>
                        </div>
                        <span className="text-xs">Packages</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-1">
                          <span className="text-lg">💰</span>
                        </div>
                        <span className="text-xs">My Wallet</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-1">
                          <span className="text-lg">⚙️</span>
                        </div>
                        <span className="text-xs">Settings</span>
                      </div>
                    </div>
                    
                    {/* Featured Card */}
                    <div className="bg-primary rounded-lg p-4 mb-4">
                      <div className="text-white font-bold text-sm mb-1">REELS CREATED</div>
                      <div className="text-white font-bold text-sm">AND DELIVERED</div>
                      <div className="text-white font-bold text-sm">ON THE SPOT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button size="lg" className="red-glow px-8 py-6 text-lg rounded-full">
              Start Your Reel Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  Carsoule;