import { Server, Activity, Shield, Cloud, Terminal, FileCode, Database, AlertTriangle, Lock, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const SREServices = () => {
  const sreServices = [
    {
      icon: Activity,
      title: "Infrastructure Monitoring & Alerting",
      description: "Implement comprehensive monitoring with Prometheus, Grafana, Datadog, or CloudWatch. Build custom dashboards to visualize system health in real-time.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Management & Response",
      description: "Set up incident playbooks and alert routing with PagerDuty or Opsgenie. Reduce downtime through automated recovery scripts and rapid response.",
    },
    {
      icon: Server,
      title: "Performance Optimization & Load Testing",
      description: "Analyze system bottlenecks and optimize compute, storage, and database performance. Run comprehensive load/stress tests using JMeter or Locust.",
    },
    {
      icon: Terminal,
      title: "CI/CD Pipeline Implementation",
      description: "Build automated pipelines with Jenkins, GitHub Actions, or GitLab CI. Ensure smooth, reliable, and repeatable deployments across all environments.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Management",
      description: "Design and manage scalable cloud systems on AWS, Azure, or GCP. Optimize costs and ensure high availability through multi-region setups.",
    },
    {
      icon: FileCode,
      title: "Infrastructure as Code (IaC)",
      description: "Use Terraform or Ansible for provisioning and managing environments. Improve consistency and version control across all deployments.",
    },
    {
      icon: Shield,
      title: "System Reliability Audits",
      description: "Review uptime SLAs, redundancy, and failover strategies. Recommend and implement reliability improvements based on industry best practices.",
    },
    {
      icon: RefreshCw,
      title: "Disaster Recovery & Backup",
      description: "Design failover systems and backup solutions for critical workloads. Test and document recovery procedures to ensure business continuity.",
    },
    {
      icon: Database,
      title: "Observability & Logging Solutions",
      description: "Implement full observability stacks using ELK/EFK, OpenTelemetry, or cloud-native tools. Improve issue detection and root-cause analysis speed.",
    },
    {
      icon: Lock,
      title: "Security & Compliance Support",
      description: "Integrate security scanning into CI/CD pipelines. Ensure compliance with PCI DSS, HIPAA, or ISO 27001 standards.",
    }
  ];

  return (
    <section id="sre-services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium">
                Additional Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Site Reliability Engineering <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional SRE services to ensure your infrastructure is reliable, scalable, and secure. Supporting tech companies with enterprise-grade DevOps solutions.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sreServices.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-secondary/30 rounded-xl mb-3 group-hover:bg-secondary/50 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need reliable infrastructure and DevOps support?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-base font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Discuss Your Infrastructure Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SREServices;
