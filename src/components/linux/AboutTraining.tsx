import { BookOpen, Users, Briefcase, Code, Server, HeartHandshake } from "lucide-react";

const features = [
  { icon: BookOpen, label: "Daily Practice Sessions" },
  { icon: Server, label: "Real Server Setup" },
  { icon: Code, label: "Shell Scripting Basics" },
  { icon: Users, label: "Community Support" },
  { icon: Briefcase, label: "Career Guidance" },
  { icon: HeartHandshake, label: "1-on-1 Mentorship" }
];

const AboutTraining = () => {
  return (
    <section id="about" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-mono text-sm mb-4 block">// ABOUT_TRAINING</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans">
              A Fully Practical <span className="text-primary">12-Week</span> Linux Training
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Designed to take complete beginners from zero to job-ready Linux System Administrators. 
              No prior experience required—just your dedication and willingness to learn.
            </p>
            <p className="text-muted-foreground mb-8">
              Our curriculum covers everything from basic commands to advanced server management, 
              cloud fundamentals, containerization, and automation. You'll work on real-world projects 
              that mirror actual production environments.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Terminal Visual */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card">
            <div className="flex items-center gap-2 p-4 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">training-overview.sh</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <p><span className="text-primary">#!/bin/bash</span></p>
              <p className="text-muted-foreground"># Your Linux Journey</p>
              <p></p>
              <p><span className="text-yellow-500">WEEKS</span>=<span className="text-primary">"12"</span></p>
              <p><span className="text-yellow-500">HOURS_PER_WEEK</span>=<span className="text-primary">"15-20"</span></p>
              <p><span className="text-yellow-500">PROJECTS</span>=<span className="text-primary">"10+"</span></p>
              <p><span className="text-yellow-500">SUPPORT</span>=<span className="text-primary">"Lifetime"</span></p>
              <p></p>
              <p className="text-muted-foreground"># Start your transformation</p>
              <p><span className="text-primary">echo</span> <span className="text-green-400">"Ready to become a Linux Pro!"</span></p>
              <p></p>
              <p><span className="text-primary">$</span> <span className="cursor-blink"></span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;