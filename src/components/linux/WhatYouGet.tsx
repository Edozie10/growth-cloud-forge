import { Check, CalendarClock, Clock, Server } from "lucide-react";

const includes = [
  { title: "Instructor-led learning", text: "Scheduled instruction and opportunities to ask questions." },
  { title: "Hands-on labs", text: "Practice applying the concepts you are learning." },
  { title: "Milestone skill checks", text: "Feedback on progress and areas that need more attention." },
  { title: "Readiness and setup support", text: "Establish your starting point and prepare your lab environment." },
  { title: "Two exam-readiness workshops", text: "Bring skills together and identify what to review next." },
  { title: "Your Linux skills record", text: "Document the lab work and troubleshooting you complete." },
];

const logistics = [
  { icon: CalendarClock, label: "Class schedule", value: "Mon, Tue & Wed — 6:00 PM EST" },
  { icon: Clock, label: "Independent practice", value: "Plan additional practice hours each week" },
  { icon: Server, label: "Lab access", value: "45 days official Red Hat lab access" },
];

const WhatYouGet = () => {
  return (
    <section id="includes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-mono text-sm text-primary mb-3">What tuition includes</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            A clear learning plan. Dedicated practice. <span className="gradient-text">Useful feedback.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {includes.map((i) => (
            <div key={i.title} className="flex gap-3 bg-card border border-border rounded-lg p-5">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">{i.title}</h3>
                <p className="text-sm text-muted-foreground">{i.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
          {logistics.map((l) => (
            <div key={l.label} className="bg-card/50 border border-border rounded-lg p-5 text-center">
              <l.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-xs font-mono text-muted-foreground uppercase">{l.label}</p>
              <p className="text-sm font-medium mt-1">{l.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
