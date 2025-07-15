import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Handshake, Target } from "lucide-react";
import missionImage from "@/assets/mission-hands-realistic.jpg";

export function MissionSection() {
  const values = [
    {
      icon: Heart,
      title: "Transparency",
      description: "Every donation is tracked with full visibility into impact and outcomes."
    },
    {
      icon: Handshake,
      title: "Local Partnership",
      description: "We work directly with trusted local nonprofits who understand their communities."
    },
    {
      icon: Target,
      title: "Lasting Impact",
      description: "Supporting locally-led solutions that create sustainable, long-term change."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
                OUR MISSION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-header leading-tight" style={{ color: 'hsl(var(--header))' }}>
                Connect generous donors with trusted local nonprofits across Africa
              </h2>
            </div>

            <p className="text-lg text-copy mb-8 leading-relaxed" style={{ color: 'hsl(var(--copy))' }}>
              We make cross-border giving easier, more transparent, and more impactful—so communities can thrive on their own terms. From education to the environment, we support locally led solutions through smart technology, strong partnerships, and a deep belief that lasting change starts within.
            </p>

            <div className="grid gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-header mb-2" style={{ color: 'hsl(var(--header))' }}>{value.title}</h3>
                    <p className="text-copy" style={{ color: 'hsl(var(--copy))' }}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="group bg-button text-white hover:bg-accent">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <img 
                  src={missionImage} 
                  alt="Unity and community connection" 
                  className="w-full h-[500px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}