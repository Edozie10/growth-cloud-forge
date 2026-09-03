import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ENQUIRY_URL } from "@/components/linux/constants";

const FinalCTA = () => {
  return (
    <section id="enroll" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-sm text-primary mb-3">Investment and action</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Know the commitment <span className="gradient-text">before you enroll</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="text-xs font-mono text-muted-foreground uppercase">Total tuition</p>
              <p className="text-lg font-semibold mt-1">US$1,000</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="text-xs font-mono text-muted-foreground uppercase">Payment schedule</p>
              <p className="text-lg font-semibold mt-1">2 × US$500</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="text-xs font-mono text-muted-foreground uppercase">Lab access</p>
              <p className="text-lg font-semibold mt-1">45 days</p>
            </div>
          </div>

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

          <p className="text-sm text-muted-foreground mt-4">
            Receive the program outline, class schedule, tuition information, and next steps for
            joining cohort three.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
