import { useState } from "react";
import { Sprout, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WishlistForm } from "@/components/WishlistForm";
import { SuccessModal } from "@/components/SuccessModal";
import { SocialProofCounter } from "@/components/SocialProofCounter";
import { TrustBadges } from "@/components/TrustBadges";
import { HowItWorks } from "@/components/HowItWorks";
import heroImage from "@/assets/hero-produce.jpg";
import farmerImage from "@/assets/farmer-portrait.jpg";

const Index = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const scrollToForm = () => {
    document.getElementById("wishlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="flex justify-center mb-8 animate-float">
            <div className="bg-card/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/20">
              <Sprout className="h-20 w-20 text-primary drop-shadow-lg" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl tracking-tight">
            FarmEra
          </h1>
          <p className="text-2xl md:text-4xl mb-4 text-white font-bold drop-shadow-lg">
            Fresh from the farm to your door in 15 minutes.
          </p>
          <p className="text-lg md:text-xl mb-10 text-white/95 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Get farm-fresh fruits and veggies at your doorstep — faster than ever before.
            Supporting local farmers, delivering pure freshness.
          </p>

          <div className="flex flex-col items-center gap-6 mb-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-xl px-12 py-8 gradient-cta shadow-2xl hover:scale-110 transition-all duration-300 font-bold rounded-2xl animate-pulse-glow"
            >
              Join the Wishlist 🚀
            </Button>
            <SocialProofCounter />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white/90 text-base bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl max-w-2xl mx-auto border border-white/20">
            <p className="flex items-center gap-2">⚡ Limited early access for first 100 people</p>
            <span className="hidden md:inline">•</span>
            <p className="flex items-center gap-2">🔒 Priority launch notification</p>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-10 w-10 text-white mx-auto drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 animate-slide-up">
          <TrustBadges />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <HowItWorks />
        </div>
      </section>

      

      {/* Wishlist Form Section */}
      <section id="wishlist-form" className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Join the FarmEra Wishlist
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be among the first to experience farm-fresh delivery in your city. Tell us what you
              want, and we'll make it happen!
            </p>
          </div>

          <div className="bg-card p-10 md:p-16 rounded-3xl shadow-elegant hover:shadow-glow transition-shadow duration-500 border-2 border-primary/10 animate-fade-in">
            <WishlistForm onSuccess={() => setShowSuccessModal(true)} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Don't Miss Out on the Freshness Revolution
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto">
            Join now and get exclusive early access when we launch in your city!
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            variant="secondary"
            className="text-xl px-12 py-8 shadow-2xl hover:scale-110 transition-all duration-300 font-bold rounded-2xl"
          >
            Secure Your Spot Now 🍃
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">FarmEra</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Fresh from the farm to your door in 15 minutes.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2025 FarmEra. Supporting farmers, delivering freshness.
          </p>
        </div>
      </footer>

      {/* Success Modal */}
      <SuccessModal open={showSuccessModal} onOpenChange={setShowSuccessModal} />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/98 backdrop-blur-md border-t-2 border-primary/20 md:hidden z-50 shadow-elegant">
        <Button onClick={scrollToForm} className="w-full gradient-cta py-7 text-lg font-bold shadow-glow hover:scale-105">
          Join Wishlist Now 🚀
        </Button>
      </div>
    </div>
  );
};

export default Index;
