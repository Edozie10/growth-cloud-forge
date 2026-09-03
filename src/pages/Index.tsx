import Navigation from "@/components/linux/Navigation";
import Hero from "@/components/linux/Hero";
import Overview from "@/components/linux/Overview";
import WhyLinux from "@/components/linux/WhyLinux";
import CoreSkills from "@/components/linux/CoreSkills";
import WhatYouGet from "@/components/linux/WhatYouGet";
import AboutTraining from "@/components/linux/AboutTraining";
import Testimonials from "@/components/linux/Testimonials";
import FinalCTA from "@/components/linux/FinalCTA";
import FAQ from "@/components/linux/FAQ";
import Footer from "@/components/linux/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Overview />
      <WhyLinux />
      <CoreSkills />
      <WhatYouGet />
      <AboutTraining />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
