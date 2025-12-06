import Navigation from "@/components/linux/Navigation";
import Hero from "@/components/linux/Hero";
import WhyLinux from "@/components/linux/WhyLinux";
import AboutTraining from "@/components/linux/AboutTraining";
import CoreSkills from "@/components/linux/CoreSkills";
import Curriculum from "@/components/linux/Curriculum";
import WhatYouGet from "@/components/linux/WhatYouGet";
import Testimonials from "@/components/linux/Testimonials";
import FAQ from "@/components/linux/FAQ";
import FinalCTA from "@/components/linux/FinalCTA";
import Footer from "@/components/linux/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhyLinux />
      <AboutTraining />
      <CoreSkills />
      <Curriculum />
      <WhatYouGet />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;