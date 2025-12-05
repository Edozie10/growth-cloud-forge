import { CheckCircle2, Zap, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Invest in Your <span className="text-primary">Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One payment. Lifetime access. Career transformation.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="bg-card border-2 border-primary p-8 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                LIMITED SLOTS
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 font-sans">Complete Training Package</h3>
              <p className="text-muted-foreground">Everything you need to become job-ready</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground line-through">₦250,000</span>
                <span className="bg-primary/20 text-primary text-sm px-2 py-1 rounded">SAVE 20%</span>
              </div>
              <div className="text-5xl font-bold text-primary mb-2">₦200,000</div>
              <p className="text-muted-foreground">One-time payment</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "12 weeks of intensive training",
                "100+ hours of hands-on content",
                "10+ real-world projects",
                "Lifetime community access",
                "Weekly live mentorship sessions",
                "1-on-1 career coaching",
                "Certificate of completion",
                "Job interview preparation",
                "Lifetime course updates"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-6 text-lg shadow-glow"
            >
              <Zap className="mr-2 w-5 h-5" />
              Secure Your Slot Now
            </Button>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <AlertCircle className="w-4 h-4" />
              <span>Only 20 slots available this cohort</span>
            </div>
          </Card>
        </div>

        {/* Payment Options */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Flexible payment options available</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-sm bg-muted px-4 py-2 rounded-full">Bank Transfer</span>
            <span className="text-sm bg-muted px-4 py-2 rounded-full">Card Payment</span>
            <span className="text-sm bg-muted px-4 py-2 rounded-full">Installment Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;