import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const links = {
    about: [
      { label: "Our Mission", href: "#mission" },
      { label: "Our Team", href: "#team" },
      { label: "Annual Reports", href: "#reports" },
      { label: "Financials", href: "#financials" }
    ],
    giving: [
      { label: "Ways to Give", href: "#give" },
      { label: "Corporate Partnerships", href: "#corporate" },
      { label: "Planned Giving", href: "#planned" },
      { label: "Donor Resources", href: "#resources" }
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-white border-t border-border animate-fade-in">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-header" style={{ color: 'hsl(var(--header))' }}>2Africa</h3>
                <p className="text-xs text-copy" style={{ color: 'hsl(var(--copy)) !important' }}>
                  501(c)(3) Nonprofit
                </p>
              </div>
            </div>
            <div className="text-copy mb-6 leading-relaxed" style={{ color: 'hsl(var(--copy)) !important' }}>
              Connecting generous donors with trusted local nonprofits across Africa for transparent, impactful giving.
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-copy" style={{ color: 'hsl(var(--copy)) !important' }}>
                <Mail className="w-4 h-4 text-primary" />
                <span>info@2africa.org</span>
              </div>
              <div className="flex items-center gap-3 text-copy" style={{ color: 'hsl(var(--copy)) !important' }}>
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-copy" style={{ color: 'hsl(var(--copy)) !important' }}>
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY, USA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-header mb-4">About</h4>
              <ul className="space-y-3">
                {links.about.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-copy hover:text-accent transition-colors" style={{ color: 'hsl(var(--copy)) !important' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-header mb-4">Giving</h4>
              <ul className="space-y-3">
                {links.giving.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-copy hover:text-accent transition-colors" style={{ color: 'hsl(var(--copy)) !important' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-header mb-4">Support</h4>
              <ul className="space-y-3">
                {links.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-copy hover:text-accent transition-colors" style={{ color: 'hsl(var(--copy)) !important' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-header mb-4" style={{ color: 'hsl(var(--header))' }}>Stay Connected</h4>
            <p className="text-copy/70 mb-4 text-sm" style={{ color: 'hsl(var(--copy))' }}>
              Get updates on our impact and new giving opportunities.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-medium text-header mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-copy">
              © 2024 2Africa.org. All rights reserved. 501(c)(3) Tax-Exempt Organization.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-copy hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-copy hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#accessibility" className="text-copy hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}