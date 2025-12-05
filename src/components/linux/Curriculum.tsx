import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, CheckCircle2 } from "lucide-react";

const modules = [
  {
    title: "Module 1: Linux Basics & Installation",
    topics: ["Linux distributions overview", "Installation & VM setup", "Desktop vs Server environments", "Basic navigation & file structure"]
  },
  {
    title: "Module 2: File Systems & Storage",
    topics: ["File system hierarchy", "Mounting & unmounting", "Disk partitioning", "LVM management", "RAID concepts"]
  },
  {
    title: "Module 3: Users & Permissions",
    topics: ["User & group management", "File permissions (chmod, chown)", "Access control lists (ACLs)", "sudo & privilege escalation"]
  },
  {
    title: "Module 4: Package Management",
    topics: ["apt/yum/dnf package managers", "Installing & removing software", "Repository management", "Compiling from source"]
  },
  {
    title: "Module 5: Networking Fundamentals",
    topics: ["Network configuration", "IP addressing & subnetting", "DNS & DHCP", "SSH & remote access", "Network troubleshooting"]
  },
  {
    title: "Module 6: Firewalls & Security",
    topics: ["iptables & firewalld", "UFW configuration", "SELinux basics", "Security hardening best practices"]
  },
  {
    title: "Module 7: System Troubleshooting",
    topics: ["Log analysis", "System monitoring tools", "Performance tuning", "Boot process & recovery", "Common issues & solutions"]
  },
  {
    title: "Module 8: Bash Scripting",
    topics: ["Variables & data types", "Conditionals & loops", "Functions", "Automation scripts", "Cron jobs & scheduling"]
  },
  {
    title: "Module 9: Containers & Docker",
    topics: ["Container concepts", "Docker installation", "Creating & managing containers", "Docker Compose basics", "Container networking"]
  },
  {
    title: "Module 10: Ansible Automation",
    topics: ["Ansible architecture", "Playbooks & roles", "Inventory management", "Ad-hoc commands", "Infrastructure as Code"]
  },
  {
    title: "Module 11: Real-World Projects",
    topics: ["Web server deployment", "Database server setup", "Backup automation", "Monitoring stack implementation"]
  },
  {
    title: "Module 12: Career & Interview Prep",
    topics: ["Resume optimization", "Technical interview prep", "Hands-on interview scenarios", "Job search strategies", "Networking tips"]
  }
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// CURRICULUM</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Complete <span className="text-primary">Course Curriculum</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            12 comprehensive modules designed to take you from beginner to job-ready professional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-left font-semibold font-sans">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2 pl-14">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;