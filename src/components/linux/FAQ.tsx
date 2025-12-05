import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior programming or IT experience?",
    answer: "No! This course is designed for complete beginners. We start from the very basics and progressively build your skills. All you need is a computer, internet connection, and the willingness to learn."
  },
  {
    question: "Is this course beginner friendly?",
    answer: "Absolutely! Our curriculum is structured to take you from zero to job-ready. We explain every concept clearly, provide hands-on practice, and offer support whenever you get stuck."
  },
  {
    question: "What do I need to start?",
    answer: "You'll need a computer (Windows, Mac, or Linux) with at least 8GB RAM, a stable internet connection, and 15-20 hours per week to dedicate to learning. We'll guide you through setting up your practice environment."
  },
  {
    question: "Can I get a job after completing this course?",
    answer: "Yes! Our training is specifically designed to make you job-ready. With a 95% placement rate, most of our students secure positions within 2-3 months of completion. We also provide career coaching and interview preparation."
  },
  {
    question: "What if I fall behind or can't keep up?",
    answer: "Don't worry! You get lifetime access to all course materials, so you can learn at your own pace. Our mentors and community are always available to help you catch up and overcome any challenges."
  },
  {
    question: "Is there a certificate upon completion?",
    answer: "Yes! Upon successfully completing the course and projects, you'll receive a certificate of completion that you can add to your resume and LinkedIn profile."
  },
  {
    question: "What kind of jobs can I apply for after this course?",
    answer: "You can apply for roles like Junior Linux Administrator, System Administrator, DevOps Engineer, Cloud Support Engineer, IT Support Specialist, and more. The skills you learn are highly transferable."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options including installment plans. Contact us to discuss a payment schedule that works for you."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-left font-semibold font-sans">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pl-9">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;