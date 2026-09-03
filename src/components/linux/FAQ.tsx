import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to work in technology already?",
    a: "We welcome IT professionals and career changers who meet the program's starting requirements. Reach out and we'll help you decide whether this is the right starting point for you.",
  },
  {
    q: "Does completing the training make me RHCSA certified?",
    a: "RHCSA certification is awarded after passing Red Hat's EX200 exam. This program prepares you to work toward that goal; course completion itself does not award the certification.",
  },
  {
    q: "Is the certification exam included?",
    a: "Exam voucher inclusion and booking responsibility are confirmed when you request enrollment details.",
  },
  {
    q: "Can my employer pay for my training?",
    a: "We can provide a program outline and tuition invoice for your employer's review. Employer approval and payment arrangements must be confirmed before enrollment.",
  },
  {
    q: "What if I miss a class or need to withdraw?",
    a: "All classes are recorded and available in our LMS. Attendance, makeup, cancellation, and refund terms are shared with the enrollment details.",
  },
  {
    q: "Will this guarantee a job or promotion?",
    a: "Training can help you develop skills and prepare for certification. Certification, employment, promotions, and salary increases are not guaranteed.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-sm text-primary mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Questions <span className="gradient-text">answered</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-5"
              >
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
