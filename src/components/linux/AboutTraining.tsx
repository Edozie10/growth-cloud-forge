import { Check, AlertCircle } from "lucide-react";

const fit = [
  "Work in technology and want to build Linux administration capability, or are preparing for a deliberate transition into technology.",
  "Can attend the scheduled classes and make time for independent practice.",
  "Value instruction, feedback, and consistent effort.",
  "Have US$1,000 available for training, have employer funding approved before enrollment, or can meet the installment arrangement.",
];

const notYet = [
  "You are still exploring career options.",
  "You need foundational computer training first.",
  "You are waiting for funding approval.",
];

const AboutTraining = () => {
  return (
    <section id="fit" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-mono text-sm text-primary mb-3">Fit and readiness</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Designed for people ready to put a <span className="gradient-text">plan into practice</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-4">You may be a strong fit if you:</h3>
            <ul className="space-y-3">
              {fit.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-4">Resolve these first:</h3>
            <ul className="space-y-3">
              {notYet.map((n) => (
                <li key={n} className="flex gap-3 text-sm text-muted-foreground">
                  <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Resolve those next steps before committing to this cohort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;
