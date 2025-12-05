import { CheckCircle2, Users, Video, BookOpen, Award, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Lifetime Community Access",
    description: "Join our private community of Linux professionals for ongoing support, networking, and opportunities."
  },
  {
    icon: Video,
    title: "Weekly Mentorship Sessions",
    description: "Live sessions with experienced Linux admins to answer questions and provide guidance."
  },
  {
    icon: BookOpen,
    title: "Hands-on Labs & Projects",
    description: "Real-world projects that mirror production environments to build your portfolio."
  },
  {
    icon: Award,
    title: "Certificate of Completion",
    description: "Industry-recognized certificate to showcase your new Linux administration skills."
  },
  {
    icon: Briefcase,
    title: "Job Interview Coaching",
    description: "Mock interviews, resume reviews, and personalized career guidance."
  }
];

const WhatYouGet = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits List */}
          <div>
            <span className="text-primary font-mono text-sm mb-4 block">// WHAT_YOU_GET</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sans">
              Everything You Need to <span className="text-primary">Succeed</span>
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-sans">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Checklist Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <h3 className="text-xl font-bold mb-6 font-sans text-center">Your Training Package Includes:</h3>
            <div className="space-y-4">
              {[
                "12 comprehensive training modules",
                "100+ hours of hands-on practice",
                "10+ real-world projects",
                "Private Discord community access",
                "Weekly live Q&A sessions",
                "1-on-1 mentorship calls",
                "Career coaching & interview prep",
                "Certificate of completion",
                "Lifetime access to course materials"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;