import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, TrendingUp } from "lucide-react";
import jamesHero from "@/assets/james-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <Cloud className="h-4 w-4 text-white" />
                <span className="text-sm text-white font-medium">Site Reliability Engineer</span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                James Edozie Nnadi
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Cloud DevOps & Site Reliability Engineer
              </p>

              <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Helping Tech Companies Scale Their Infrastructure and Clients — with Precision, Automation, and Meta Ads Strategy
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="group text-lg px-8 py-6 shadow-elevated hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Let's Grow Your Tech Brand
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/40 shadow-card transition-all duration-300"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View Services
                </Button>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/20 shadow-elevated bg-muted/10">
                  <img 
                    src={jamesHero} 
                    alt="James Edozie Nnadi - DevOps Engineer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-white/80">Professional Certifications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
