import { Target, TrendingUp, BarChart3, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Meta Ads Management",
      description: "Strategic Facebook & Instagram ad campaigns tailored for tech companies. Reach decision-makers in the cloud, DevOps, and ML space with precision targeting.",
      features: ["Campaign Setup & Optimization", "A/B Testing & Analytics", "Budget Management", "ROI Tracking"]
    },
    {
      icon: TrendingUp,
      title: "Audience Targeting for Tech",
      description: "Leverage deep technical knowledge to identify and target the right audience — CTOs, DevOps Engineers, SREs, and tech leaders actively seeking solutions.",
      features: ["Lookalike Audiences", "Technical Interest Targeting", "Custom Audience Building", "Retargeting Strategies"]
    },
    {
      icon: BarChart3,
      title: "Conversion Optimization",
      description: "Data-driven approach to maximize conversions. From landing pages to ad creatives, every element is optimized for performance and qualified lead generation.",
      features: ["Landing Page Analysis", "Conversion Funnel Optimization", "Pixel Setup & Tracking", "Performance Reporting"]
    },
    {
      icon: Zap,
      title: "Growth Consulting",
      description: "Strategic consulting to align your marketing efforts with business goals. Get insights on scaling your tech brand and attracting high-value clients.",
      features: ["Marketing Strategy", "Competitive Analysis", "Growth Roadmap", "Technical Positioning"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services That <span className="gradient-text">Scale Your Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized Meta Ads management and growth strategies designed exclusively for tech startups and cloud infrastructure companies.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card border-border group"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-hero rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to attract more qualified clients and scale your tech business?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-elevated hover:shadow-xl"
            >
              Let's Build Your Growth Strategy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
