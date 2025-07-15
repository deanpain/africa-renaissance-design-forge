import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, TreePine, Users, DollarSign, ArrowRight } from "lucide-react";

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
      image: "🎓",
      raised: "$485,000",
      projects: 45
    },
    {
      title: "Clean Water & Sanitation",
      description: "Bringing clean water access and sanitation facilities to rural communities.",
      image: "💧",
      raised: "$320,000",
      projects: 28
    },
    {
      title: "Healthcare Access",
      description: "Mobile clinics, maternal health, and preventive care in underserved areas.",
      image: "🏥",
      raised: "$275,000",
      projects: 32
    },
    {
      title: "Environmental Conservation",
      description: "Reforestation, renewable energy, and climate adaptation projects.",
      image: "🌍",
      raised: "$190,000",
      projects: 18
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact Across Africa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we're building a stronger future for African communities through transparent, locally-led initiatives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Causes Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Active Causes & Projects
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse initiatives we support, each making a real difference in communities across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{cause.image}</div>
                  <CardTitle className="text-lg">{cause.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cause.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Raised:</span>
                      <span className="font-semibold text-primary">{cause.raised}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="font-semibold">{cause.projects}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Support This Cause
                  </Button>
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
                <Button variant="secondary" size="lg" className="group">
                  Explore All Causes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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