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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-6 animate-float">
            <div className="bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl">
              <Sprout className="h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            FarmEra
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-white font-semibold drop-shadow-lg">
            Fresh from the farm to your door in 15 minutes.
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Get farm-fresh fruits and veggies at your doorstep — faster than ever before.
            Supporting local farmers, delivering pure freshness.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-6 gradient-primary shadow-2xl hover:scale-105 transition-transform"
            >
              Join the Wishlist 🚀
            </Button>
            <SocialProofCounter />
          </div>

          <div className="flex flex-col items-center gap-2 text-white/80 text-sm">
            <p>⚡ Limited early access for the first 1,000 people</p>
            <p>🔒 Be the first to know when we launch in your city</p>
          </div>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white mx-auto" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <HowItWorks />
        </div>
      </section>

      {/* Farmer Trust Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={farmerImage}
                  alt="Local farmer with fresh produce"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Empowering Local Farmers, Nourishing Your Family
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Every order supports hardworking farmers in your community. No middlemen, no
                  delays — just pure, honest farm-to-table goodness.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands who are already excited to make a difference while enjoying the
                  freshest produce.
                </p>
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="gradient-primary"
                >
                  Join Now & Support Local Farmers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Form Section */}
      <section id="wishlist-form" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join the FarmEra Wishlist
            </h2>
            <p className="text-lg text-muted-foreground">
              Be among the first to experience farm-fresh delivery in your city. Tell us what you
              want, and we'll make it happen!
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border">
            <WishlistForm onSuccess={() => setShowSuccessModal(true)} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Out on the Freshness Revolution
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join now and get exclusive early access when we launch in your city!
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            variant="secondary"
            className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
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
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
        <Button onClick={scrollToForm} className="w-full gradient-primary py-6">
          Join Wishlist Now 🚀
        </Button>
      </div>
    </div>
  );
};

export default Index;
