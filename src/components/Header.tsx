import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto px-4 py-4 w-full max-w-[1440px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-primary">2Africa</h1>
            <p className="text-xs text-muted-foreground">501(c)(3) Nonprofit</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-primary hover:text-accent transition-colors">
            About
          </a>
          <a href="#causes" className="text-primary hover:text-accent transition-colors">
            Causes
          </a>
          <a href="#impact" className="text-primary hover:text-accent transition-colors">
            Impact
          </a>
          <Button variant="cta" size="sm">
            Donate Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-border animate-fade-in">
          <div className="flex flex-col gap-4">
            <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
              About
            </a>
            <a href="#causes" className="text-foreground hover:text-primary transition-colors py-2">
              Causes
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors py-2">
              Impact
            </a>
            <Button variant="cta" size="sm" className="w-full">
              Donate Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}