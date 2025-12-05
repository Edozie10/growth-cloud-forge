import { Terminal, Users, Settings, Shield, Container, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Terminal,
    title: "Linux Fundamentals & Command Line Mastery",
    description: "Master the terminal, file systems, navigation, and essential commands that form the backbone of Linux administration."
  },
  {
    icon: Users,
    title: "User, Permission & System Security Management",
    description: "Learn to manage users, groups, permissions, and implement robust security policies for enterprise environments."
  },
  {
    icon: Settings,
    title: "System Administration Tasks",
    description: "Handle services, processes, storage management, system monitoring, and performance optimization like a pro."
  },
  {
    icon: Shield,
    title: "Networking, Firewalls & Server Hardening",
    description: "Configure networks, firewalls, SELinux, and implement security best practices to protect your infrastructure."
  },
  {
    icon: Container,
    title: "Containers (Docker) & DevOps Tools",
    description: "Get hands-on with Docker containers, orchestration concepts, and essential DevOps tooling for modern infrastructure."
  },
  {
    icon: Cog,
    title: "Automation with Ansible & Shell Scripting",
    description: "Automate repetitive tasks with Bash scripting and Ansible, becoming more efficient and valuable as an admin."
  }
];

const CoreSkills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// CORE_SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Skills You Will <span className="text-primary">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive curriculum covers the 6 core competencies every Linux System Administrator needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Skill Number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary/5 font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative z-10">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 font-sans relative z-10">{skill.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;