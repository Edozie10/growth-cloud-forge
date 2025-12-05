import { Cloud, Shield, Network, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Cloud,
    title: "Foundation of Cloud & DevOps",
    description: "Linux powers 96% of the world's top servers, all major cloud platforms, and is essential for DevOps practices."
  },
  {
    icon: Shield,
    title: "Cybersecurity Essential",
    description: "From penetration testing to security hardening, Linux is the go-to platform for cybersecurity professionals."
  },
  {
    icon: Network,
    title: "In-Demand Skill",
    description: "Every tech professional needs Linux. It's the most sought-after skill by employers worldwide."
  },
  {
    icon: DollarSign,
    title: "Six-Figure Careers",
    description: "Linux System Administrators earn $80,000-$150,000+ annually. Your investment pays off quickly."
  }
];

const WhyLinux = () => {
  return (
    <section id="why-linux" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// WHY_LINUX</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Why <span className="text-primary">Linux</span> is Your Gateway to Tech
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Linux isn't just an operating system—it's the foundation of modern technology infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-sans">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>

        {/* Terminal Quote */}
        <div className="mt-16 bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <div className="font-mono text-sm">
            <p className="text-muted-foreground">
              <span className="text-primary">root@career:~#</span> cat /etc/opportunity
            </p>
            <p className="text-primary mt-2 text-lg">
              "The future is open source. The future is Linux."
            </p>
            <p className="text-muted-foreground mt-1">— Linus Torvalds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLinux;