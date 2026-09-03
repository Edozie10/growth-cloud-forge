import { Compass, Wrench, LineChart } from "lucide-react";

const points = [
  {
    icon: Compass,
    title: "You have a direction",
    text: "Maybe you work in IT support and want more responsibility. Maybe Linux is becoming more relevant to the work you want to do.",
  },
  {
    icon: Wrench,
    title: "The next step is doing the task yourself",
    text: "Navigate the command line, manage access, configure a system, and investigate what went wrong.",
  },
  {
    icon: LineChart,
    title: "One learning plan",
    text: "Instruction, practice, and feedback together — so you have a clear focus for the work you put in each week.",
  },
];

const WhyLinux = () => {
  return (
    <section id="why-linux" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-mono text-sm text-primary mb-3">The professional need</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Now build the <span className="gradient-text">technical depth</span> to support it
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLinux;
