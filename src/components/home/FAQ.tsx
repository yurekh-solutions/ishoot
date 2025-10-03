import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much do I get paid per shoot?",
    answer: "Payment varies based on the type of shoot, duration, and your experience level. Creators typically earn ₹1,999 - ₹4,999 per shoot, with top performers earning even more from premium brand collaborations."
  },
  {
    question: "I don't have experience. Can I still apply?",
    answer: "Absolutely! We provide comprehensive training and certification at no cost. You'll learn everything from shooting techniques to editing workflows. As long as you have creativity and willingness to learn, we'll help you grow."
  },
  {
    question: "Can I work only on weekends or evenings?",
    answer: "Yes! iShoot is designed for maximum flexibility. You can choose your own schedule and work part-time, weekends, evenings, or go full-time based on your availability and goals."
  },
  {
    question: "Is there any investment or fee?",
    answer: "No! There are absolutely no fees to join iShoot. Training, certification, and the creator partner kit are all provided free of charge. You only need your iPhone 13 Pro or newer."
  },
  {
    question: "Will I get support after onboarding?",
    answer: "Yes, we provide continuous support through our creator community, dedicated support team, and regular skill enhancement workshops. You'll also have access to the iShoot app with all the resources you need."
  },
  {
    question: "Can I apply if I'm not in India?",
    answer: "Yes! We're expanding globally and currently operate in India, UAE, and USA. We're constantly growing to new regions. Apply now and we'll let you know when we launch in your area."
  }
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got Questions?
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Everything you need to know about becoming an iShoot Creator
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
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
