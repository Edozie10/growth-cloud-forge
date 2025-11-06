import { TrendingUp, Users, Zap, DollarSign } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "+300%",
      label: "Ad Reach Increase",
      description: "Average increase in qualified reach for tech clients"
    },
    {
      icon: Users,
      value: "2.5x",
      label: "Lead Quality",
      description: "Higher conversion rates from targeted campaigns"
    },
    {
      icon: Zap,
      value: "40%",
      label: "Cost Optimization",
      description: "Reduction in cloud infrastructure costs"
    },
    {
      icon: DollarSign,
      value: "150%",
      label: "ROI Growth",
      description: "Average return on ad spend for tech companies"
    }
  ];

  return (
    <section id="results" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results That Matter
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Data-driven outcomes from combining technical expertise with strategic marketing for tech companies.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elevated"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-white/20 rounded-xl">
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-white/70">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial placeholder */}
          <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-5xl text-white/30 mb-4">"</div>
              <p className="text-xl text-white leading-relaxed mb-6">
                James brings a unique combination of deep technical knowledge and marketing savvy. His Meta Ads campaigns helped us reach the right decision-makers and significantly increased our qualified lead pipeline while maintaining our technical credibility.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20"></div>
                <div>
                  <div className="font-semibold text-white">Tech Company CEO</div>
                  <div className="text-sm text-white/70">Cloud Infrastructure Startup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
