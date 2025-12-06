import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const ENROLLMENT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd2z3AIqHRgwpwNlii8U_eQpkdhPoD9l467jnFvOC_xEf6CMw/viewform?usp=header";

const FinalCTA = () => {

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Terminal Animation */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Ready to transform your career?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Start Your <span className="text-primary">Linux SysAdmin</span>
            <br />Journey Today
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of successful graduates who have launched their Linux careers. 
            Limited slots available for the next cohort.
          </p>

          {/* Terminal Command */}
          <div className="bg-card border border-border rounded-lg p-4 mb-8 max-w-md mx-auto">
            <div className="font-mono text-sm text-left">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> sudo start-career --now
              </p>
              <p className="text-primary mt-1">
                ✓ Executing career transformation...
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-12 py-8 text-xl shadow-glow hover:shadow-elevated transition-all animate-pulse-glow"
            asChild
          >
            <a href={ENROLLMENT_URL} target="_blank" rel="noopener noreferrer">
              Start Your Linux SysAdmin Journey Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            🔒 Secure payment • 💯 Satisfaction guaranteed • 🚀 Start immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;