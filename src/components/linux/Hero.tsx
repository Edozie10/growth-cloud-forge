import { Terminal, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ENQUIRY_URL } from "@/components/linux/constants";

const Hero = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">COMPLXSIMPLE™ • THIRD COHORT</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans">
            Build the Linux skills to take on{" "}
            <span className="gradient-text">greater technical responsibility</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Red Hat Certified System Administrator (RHCSA) Preparation
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For technology professionals ready to deepen their skills — and career changers ready to
            make a planned investment in their next chapter. Build job-ready Linux administration
            skills through structured instruction, hands-on practice, and feedback that shows you
            what you can do independently and where you need more work.
          </p>

          {/* Key facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {[
              { label: "Tuition", value: "US$1,000" },
              { label: "Starts", value: "Nov 20, 2026" },
              { label: "Duration", value: "3 Months" },
              { label: "Format", value: "Live Zoom, hands-on" },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-4">
                <p className="text-xs font-mono text-muted-foreground uppercase">{item.label}</p>
                <p className="text-base font-semibold text-foreground mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-8 font-mono">
            All classes recorded, with LMS access • Payment option: 2 installments of US$500
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow"
              asChild
            >
              <a href={ENQUIRY_URL}>
                Request Enrollment Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection("#overview")}
            >
              <Mail className="mr-2 w-5 h-5" />
              Watch the Program Overview
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            For candidates prepared to commit the tuition and the time required for class and
            independent practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
