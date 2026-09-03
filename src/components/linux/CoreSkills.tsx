import { Terminal, Users, Package, HardDrive, Shield, FileCode } from "lucide-react";

const skills = [
  { icon: Terminal, title: "Command line & files", text: "Command-line tools, files, directories, and permissions." },
  { icon: Users, title: "Users & access", text: "Managing users, groups, and access." },
  { icon: Package, title: "Software & services", text: "Installing software and managing services and processes." },
  { icon: HardDrive, title: "Storage", text: "Configuring storage and file systems." },
  { icon: Shield, title: "Networking & security", text: "Working with networking and system security settings." },
  { icon: FileCode, title: "Scripting & logs", text: "Creating simple shell scripts and using logs to investigate behavior." },
];

const CoreSkills = () => {
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-mono text-sm text-primary mb-3">Practical learning goals</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Develop skills you can <span className="gradient-text">demonstrate</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
              <s.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-10">
          Practice will help you explain what you changed, why you changed it, and how you checked
          the result.
        </p>
      </div>
    </section>
  );
};

export default CoreSkills;
