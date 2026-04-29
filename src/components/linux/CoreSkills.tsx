import { Terminal, Users, HardDrive, Shield, Network, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Terminal,
    title: "RHEL 10 Command Line & File Management",
    description:
      "Master the bash shell, file operations, links, shell expansions, and the vim editor on Red Hat Enterprise Linux 10.",
  },
  {
    icon: Users,
    title: "Users, Groups & File Permissions",
    description:
      "Manage local users and groups, sudo privileges, password policies, ACLs, and special permissions (SUID/SGID/sticky).",
  },
  {
    icon: HardDrive,
    title: "Storage, LVM & File Systems",
    description:
      "Partition disks, build XFS/ext4 file systems, manage swap, and provision logical volumes with LVM on RHEL 10.",
  },
  {
    icon: Shield,
    title: "SELinux, Firewalld & Server Hardening",
    description:
      "Operate SELinux contexts and booleans, label ports with semanage, and control firewalld zones to harden RHEL servers.",
  },
  {
    icon: Network,
    title: "Networking, NFS & Time Sync",
    description:
      "Configure networking with nmcli, name resolution, NFS mounts, autofs, and chrony time synchronization.",
  },
  {
    icon: Cog,
    title: "Systemd, DNF & Boot Recovery",
    description:
      "Control services with systemctl, schedule timers, install and update software via DNF, and recover GRUB2 and root access.",
  },
];

const CoreSkills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// CORE_SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Skills You Will <span className="text-primary">Master on RHEL 10</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six core competency areas mapped directly to the Red Hat RHCSA EX200 exam objectives for RHEL 10.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary/5 font-mono">
                {String(index + 1).padStart(2, "0")}
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
