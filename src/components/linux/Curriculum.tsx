import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, CheckCircle2 } from "lucide-react";

const modules = [
  {
    title: "Chapter 1: Registering Systems for Red Hat Support",
    topics: [
      "Register RHEL 10 systems with Red Hat Subscription Manager",
      "Attach subscriptions and enable repositories",
      "Verify entitlements under /etc/pki/consumer",
    ],
  },
  {
    title: "Chapter 2: Managing Files from the Command Line",
    topics: [
      "Manage files with command-line tools",
      "Create hard and symbolic links",
      "Match file names with shell expansions and globbing",
    ],
  },
  {
    title: "Chapter 3: Editing Text Files",
    topics: [
      "Edit text files from the command line with vim/nano",
      "Modes, navigation, search and replace",
      "Practical configuration file edits",
    ],
  },
  {
    title: "Chapter 4: Managing Local Users and Groups",
    topics: [
      "Linux users and groups concepts",
      "Gain superuser access with su and sudo",
      "Manage local user and group accounts",
      "Manage user passwords and aging policies",
    ],
  },
  {
    title: "Chapter 5: Controlling Access to Files",
    topics: [
      "Interpret Linux file permissions",
      "Manage file permissions from the command line",
      "Default permissions (umask) and special permissions (SUID, SGID, sticky)",
    ],
  },
  {
    title: "Chapter 6: Installing and Updating Software with RPM",
    topics: [
      "Investigate RPM software packages",
      "Install and update packages with DNF",
      "Enable and manage DNF software repositories",
    ],
  },
  {
    title: "Chapter 7: Installing and Updating Applications with Flatpak",
    topics: [
      "Configure Flatpak for application installation",
      "Manage applications from Flatpak remotes",
      "Update and remove Flatpak apps",
    ],
  },
  {
    title: "Chapter 8: Accessing Removable Media",
    topics: [
      "Identify file systems and block devices",
      "Mount and unmount file systems",
      "Locate files on a file system with find and locate",
    ],
  },
  {
    title: "Chapter 9: Monitoring and Managing Linux Processes",
    topics: [
      "Processes and the process lifecycle",
      "Manage processes with job control",
      "Send signals to processes",
      "Monitor process activity with top, ps, and uptime",
    ],
  },
  {
    title: "Chapter 10: Controlling Services and Daemons",
    topics: [
      "Identify system processes that start automatically",
      "Control system services with systemctl",
      "Enable, disable, mask and unmask units",
    ],
  },
  {
    title: "Chapter 11: Managing Network Configuration",
    topics: [
      "Configure networking from the command line with nmcli",
      "Edit network configuration files",
      "Configure hostnames and name resolution",
    ],
  },
  {
    title: "Chapter 12: Scheduling System Tasks",
    topics: [
      "Manage repeating jobs with systemd timer units",
      "Manage temporary files with systemd-tmpfiles",
      "Schedule recurring tasks with cron and at",
    ],
  },
  {
    title: "Chapter 13: Analyzing and Storing Logs",
    topics: [
      "The system log architecture (rsyslog and journald)",
      "Interpret and manage syslog events",
      "Find and interpret system journal log entries",
      "Configure a persistent system journal",
      "Maintain synchronized time with chrony",
    ],
  },
  {
    title: "Chapter 14: Managing Security with SELinux",
    topics: [
      "Operate SELinux modes and states",
      "Control SELinux file contexts",
      "Tune the SELinux policy by adjusting booleans",
      "Investigate and resolve SELinux issues",
    ],
  },
  {
    title: "Chapter 15: Managing Basic Storage",
    topics: [
      "Create and manage file systems on standard partitions",
      "Manage swap space",
      "Format, mount, and persist file systems via /etc/fstab",
    ],
  },
  {
    title: "Chapter 16: Managing Storage with Logical Volume Manager",
    topics: [
      "Create logical volumes (PVs, VGs, LVs)",
      "Extend a logical volume and grow file systems",
      "Replace physical volumes and manage LVM",
    ],
  },
  {
    title: "Chapter 17: Controlling and Troubleshooting the Boot Process",
    topics: [
      "Manage the boot loader and kernel command line (GRUB2)",
      "Explore the boot process and select a boot target",
      "Repair damaged file systems at boot time",
    ],
  },
  {
    title: "Chapter 18: Recovering Superuser Access",
    topics: [
      "Regain superuser access using rd.break",
      "Reset a forgotten root password",
      "Restore SELinux contexts after recovery",
    ],
  },
  {
    title: "Chapter 19: Managing Network Security",
    topics: [
      "Manage server firewalls with firewalld",
      "Add services, ports, and zones",
      "SELinux port labeling with semanage",
    ],
  },
  {
    title: "Chapter 20: Accessing Network-attached Storage",
    topics: [
      "Mount NFS file systems",
      "Automount storage devices with autofs",
      "Persist NFS mounts via /etc/fstab",
    ],
  },
  {
    title: "Chapter 21: Comprehensive Review & RHCSA Exam Prep",
    topics: [
      "Comprehensive review of all RHEL 10 RHCSA objectives",
      "Lab: Fix boot issues and maintain servers",
      "Lab: Configure and manage file systems and storage",
      "Lab: Configure and manage server security",
      "EX200 exam strategies and timed practice",
    ],
  },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// CURRICULUM</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            RHCSA Rapid Track <span className="text-primary">(RHEL 10.1)</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            21 chapters aligned with Red Hat's official RH199 RHCSA Rapid Track curriculum for
            Red Hat Enterprise Linux 10 — fully updated for the EX200 exam.
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
