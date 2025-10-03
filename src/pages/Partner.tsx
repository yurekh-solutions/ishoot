import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import { ArrowRight } from "lucide-react";

const Partner = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span>Join as a Creator</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Turn Your iPhone Into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent">
                an Income Machine
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              iShoot creators are trained iPhone content specialists who shoot, edit, and deliver professional Instagram reels in just 10 minutes. Whether you're a student, hustler, or creative explorer—iShoot helps you earn through content creation using nothing but your phone. We're live across India, UAE, USA—and growing fast. Join our expanding network of creators worldwide.
            </p>
          </div>

          {/* Application Form */}
          <PartnerForm />

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">₹1,999+</div>
              <div className="text-sm text-muted-foreground">Per Shoot Earnings</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">10 Min</div>
              <div className="text-sm text-muted-foreground">Shoot to Delivery</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Zero Fees</div>
              <div className="text-sm text-muted-foreground">No Investment Required</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
