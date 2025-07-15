import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, TreePine, Users, DollarSign, ArrowRight } from "lucide-react";
import causeEducation from "@/assets/cause-education.jpg";
import causeWater from "@/assets/cause-water.jpg";
import causeHealthcare from "@/assets/cause-healthcare.jpg";
import causeEnvironment from "@/assets/cause-environment.jpg";

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Lives Impacted",
      description: "Across 12 African countries"
    },
    {
      icon: DollarSign,
      number: "$2.5M+",
      label: "Funds Distributed",
      description: "Directly to local organizations"
    },
    {
      icon: GraduationCap,
      number: "200+",
      label: "Education Projects",
      description: "Schools and learning programs"
    },
    {
      icon: TreePine,
      number: "100+",
      label: "Environmental Initiatives",
      description: "Sustainability and conservation"
    }
  ];

  const causes = [
    {
      title: "Education & Skills",
      description: "Supporting schools, vocational training, and literacy programs to empower the next generation.",
      image: causeEducation,
      raised: "$485,000",
      projects: 45
    },
    {
      title: "Clean Water & Sanitation",
      description: "Bringing clean water access and sanitation facilities to rural communities.",
      image: causeWater,
      raised: "$320,000",
      projects: 28
    },
    {
      title: "Healthcare Access",
      description: "Mobile clinics, maternal health, and preventive care in underserved areas.",
      image: causeHealthcare,
      raised: "$275,000",
      projects: 32
    },
    {
      title: "Environmental Conservation",
      description: "Reforestation, renewable energy, and climate adaptation projects.",
      image: causeEnvironment,
      raised: "$190,000",
      projects: 18
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-3xl md:text-4xl font-bold text-header mb-4" style={{ color: 'hsl(var(--header))' }}>
            Our Impact Across Africa
          </h2>
          <p className="text-lg text-copy max-w-2xl mx-auto" style={{ color: 'hsl(var(--copy))' }}>
            Together, we're building a stronger future for African communities through transparent, locally-led initiatives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-copy mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-copy mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-copy/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Causes Section */}
        <div className="mb-16 animate-slide-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-header mb-4" style={{ color: 'hsl(var(--header))' }}>
              Active Causes & Projects
            </h3>
            <p className="text-copy max-w-2xl mx-auto" style={{ color: 'hsl(var(--copy))' }}>
              Explore the diverse initiatives we support, each making a real difference in communities across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {causes.map((cause, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full bg-[#105040]">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img src={cause.image} alt={cause.title + ' thumbnail'} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="text-center flex-1">
                  <CardTitle className="text-lg text-white">{cause.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-copy text-sm mb-4 leading-relaxed text-white/90">
                      {cause.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-white/80">
                        <span className="text-white/70">Raised:</span>
                        <span className="font-semibold">{cause.raised}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span className="text-white/70">Projects:</span>
                        <span className="font-semibold">{cause.projects}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-end">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Support This Cause
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <Card className="bg-gradient-primary p-8 text-center shadow-glow">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Join thousands of donors who are creating lasting change in African communities. Every contribution, no matter the size, makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="group bg-button text-white hover:bg-accent">
                  Explore All Causes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="bg-random text-white hover:bg-accent">
                  Start Giving Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}