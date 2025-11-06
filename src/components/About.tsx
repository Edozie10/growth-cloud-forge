import { Award, Shield, Cloud, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const certifications = [
    {
      icon: Cloud,
      title: "AWS Certified Solutions Architect",
      description: "Expert in designing scalable cloud solutions"
    },
    {
      icon: Server,
      title: "Red Hat Certified System Administrator",
      description: "Master of Linux system administration"
    },
    {
      icon: Shield,
      title: "Terraform Associate",
      description: "Infrastructure as Code specialist"
    },
    {
      icon: Award,
      title: "DevOps & Cloud Security",
      description: "Certified in security best practices"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Excellence</span> Meets Marketing Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a Site Reliability Engineer at Guhatek, I combine deep technical expertise with strategic marketing insights to help tech companies scale both their infrastructure and their client base.
            </p>
          </div>

          {/* Bio section */}
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 mb-12 shadow-card border border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                With over 5 years of experience in Cloud DevOps and Site Reliability Engineering, I specialize in building and maintaining highly available, scalable systems that power modern tech businesses. Currently serving as an SRE at <span className="font-semibold text-primary">Guhatek</span>, I ensure production systems maintain 99.9% uptime while optimizing for performance and cost.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Beyond infrastructure, I've developed a unique expertise in <span className="font-semibold text-primary">Meta Ads Management</span> specifically for tech companies. I understand the technical language that resonates with CTOs, DevOps teams, and engineering leaders — helping cloud, DevOps, SRE, and ML companies attract qualified leads through precisely targeted Facebook and Instagram campaigns.
              </p>
            </div>
          </div>

          {/* Certifications grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
