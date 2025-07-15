import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-africa.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Tax Deductible</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>International Giving</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Trusted, Tax</span><br />
            <span className="text-foreground">Deductible</span><br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">International</span><br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Giving</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a US-based <strong className="text-foreground">501(C)(3) nonprofit</strong> committed to making <strong className="text-foreground">cross-border giving to African communities</strong> easy, transparent, and impactful. Your generosity fuels grassroots organizations that are driving change where it's needed most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Explore Causes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Fiscal Sponsor
            </Button>
            <Button variant="cta" size="xl">
              Donate Now
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8">
            <Button variant="link" size="lg" className="text-primary hover:text-accent">
              Join the Friends of Africa Network →
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}