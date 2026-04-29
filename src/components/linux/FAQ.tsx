import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Which version of Red Hat Enterprise Linux does the course use?",
    answer: "We train exclusively on Red Hat Enterprise Linux 10.1 using Red Hat's official RH199 RHCSA Rapid Track curriculum. All labs, exercises, and tooling reflect the latest RHEL 10 features."
  },
  {
    question: "Does this course prepare me for the RHCSA EX200 exam?",
    answer: "Yes. The curriculum is mapped chapter-by-chapter to the RHCSA EX200 objectives for RHEL 10, including a full comprehensive review and timed practice labs in the final chapter."
  },
  {
    question: "Do I need prior Linux or programming experience?",
    answer: "No prior experience is required. We start from the command line basics and build progressively to advanced topics like LVM, SELinux, systemd, and boot recovery."
  },
  {
    question: "What do I need to start?",
    answer: "A computer (Windows, Mac, or Linux) with at least 8GB RAM, a stable internet connection, and 15–20 hours per week. We'll help you set up RHEL 10.1 in a virtual machine for hands-on practice."
  },
  {
    question: "Can I get a job after completing this course?",
    answer: "Yes. RHCSA on RHEL 10 is one of the most in-demand Linux certifications. Graduates qualify for roles such as Linux System Administrator, DevOps Engineer, Cloud Engineer, and SRE."
  },
  {
    question: "What if I fall behind or can't keep up?",
    answer: "You get lifetime access to all course materials and labs, so you can learn at your own pace. Our mentors and community are always available to help."
  },
  {
    question: "Is there a certificate upon completion?",
    answer: "Yes. You'll receive a ComplxSimple completion certificate, plus full preparation to sit Red Hat's official RHCSA (EX200) exam on RHEL 10."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible installment plans. Reach out via WhatsApp to discuss a schedule that works for you."
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