import { Camera, Clock, Globe } from "lucide-react";

const WhoAreCreators = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who Are <span className="text-primary">iShoot Creators?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            iShoot creators are trained iPhone content specialists who shoot, edit, and deliver professional Instagram reels in just 10 minutes. Whether you're a student, hustler, or creative explorer—iShoot helps you earn through content creation using nothing but your phone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Quality</h3>
            <p className="text-muted-foreground">
              Create stunning reels that match professional standards, all shot on your iPhone
            </p>
          </div>

          <div className="glass-card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Complete the entire process—shoot, edit, and deliver—in just 10 minutes
            </p>
          </div>

          <div className="glass-card p-8 text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Network</h3>
            <p className="text-muted-foreground">
              We're live across India, UAE, USA—and growing fast worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreCreators;
