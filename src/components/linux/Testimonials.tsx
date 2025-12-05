import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Adebayo Ogunlade",
    role: "Junior DevOps Engineer",
    company: "Tech Startup",
    content: "This training completely changed my career trajectory. I went from knowing nothing about Linux to landing my first DevOps role within 2 months of completing the course.",
    rating: 5
  },
  {
    name: "Chioma Nwankwo",
    role: "System Administrator",
    company: "Fintech Company",
    content: "The hands-on projects were invaluable. The instructors really care about your success and the community support is amazing. Best investment I've made in my career.",
    rating: 5
  },
  {
    name: "Emmanuel Okafor",
    role: "Cloud Engineer",
    company: "Consulting Firm",
    content: "As someone who was completely new to tech, this program gave me the confidence and skills I needed. The mentorship sessions helped me navigate challenges effectively.",
    rating: 5
  },
  {
    name: "Fatima Abdullahi",
    role: "IT Support Specialist",
    company: "Healthcare",
    content: "The curriculum is well-structured and practical. I especially loved the automation and containerization modules. Now I use these skills daily at work.",
    rating: 5
  },
  {
    name: "David Mensah",
    role: "Linux Administrator",
    company: "E-commerce Platform",
    content: "The career coaching was a game-changer. From resume optimization to interview prep, they prepared me for every aspect of the job search. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful graduates who have transformed their careers with our training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm font-sans">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional testimonials in a simpler format */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm font-sans">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;