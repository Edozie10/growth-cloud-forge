import { CheckCircle2, Users, BookOpen, Award, Briefcase, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/15165477865";

const benefits = [
  {
    icon: Users,
    title: "Lifetime Community Access",
    description: "Join our private WhatsApp community of Linux professionals for ongoing support, networking, and opportunities.",
    hasWhatsApp: true
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
    icon: Award,
    title: "Official RedHat RHCSA Exam Certification Prep",
    description: "Comprehensive preparation for the Red Hat Certified System Administrator (RHCSA) exam."
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
                { text: "Private WhatsApp Group access", isWhatsApp: true },
                "Career Mentorship Call",
                "Official RedHat RHCSA Exam Certification Prep",
                "Career coaching & interview prep",
                "Certificate of completion",
                "Lifetime access to course materials"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {typeof item === 'string' ? (
                    <span className="text-foreground">{item}</span>
                  ) : (
                    <a 
                      href={WHATSAPP_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {item.text}
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </a>
                  )}
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