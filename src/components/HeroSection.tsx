import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-africa.jpg";
import africaOutline from "@/assets/africa-outline-clean.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Africa Outline - Left Side */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              <img 
                src={africaOutline} 
                alt="Africa continent outline with strategic locations"
                className="w-full max-w-lg h-auto"
              />
              {/* Animated pulse dots */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse shadow-glow"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-500 shadow-glow"></div>
              <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-primary rounded-full animate-pulse delay-1000 shadow-glow"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse delay-700 shadow-glow"></div>
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="space-y-12 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
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
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Trusted, Tax</span><br />
                <span className="text-foreground">Deductible</span><br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">International</span><br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">Giving</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We are a US-based <strong className="text-foreground">501(C)(3) nonprofit</strong> committed to making <strong className="text-foreground">cross-border giving to African communities</strong> easy, transparent, and impactful.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="xl" className="group">
                Explore Causes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta" size="xl">
                Donate Now
              </Button>
            </div>

            {/* Secondary CTA */}
            <div>
              <Button variant="link" size="lg" className="text-primary hover:text-accent">
                Join the Friends of Africa Network →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}