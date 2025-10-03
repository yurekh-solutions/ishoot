import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does iShoot work?",
      answer: "iShoot connects you with professional content creators who use their iPhones to capture, edit, and deliver high-quality content. Simply browse creators, book a shoot, and receive your professionally edited content."
    },
    {
      question: "What equipment do creators use?",
      answer: "All our creators use iPhone 12 or newer models equipped with professional filming and editing apps. This ensures consistent, high-quality results while keeping the process mobile and flexible."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies based on the type of shoot, duration, and editing requirements. Most sessions start from $99. You'll see the exact price before booking."
    },
    {
      question: "Can I request a specific creator?",
      answer: "Yes! You can browse creator profiles, view their portfolios, and book your preferred creator directly. You can also let our system match you with the perfect creator based on your needs."
    },
    {
      question: "How long does it take to receive my content?",
      answer: "Most creators deliver edited content within 24-48 hours. Rush delivery options are available for an additional fee."
    },
    {
      question: "What if I'm not satisfied with the content?",
      answer: "We offer unlimited revisions within reason. If you're not satisfied, we'll work with you and the creator to make it right. Your satisfaction is our priority."
    },
    {
      question: "How do I become a creator?",
      answer: "Apply through our 'Apply Now' section. You'll need an iPhone 12 or newer, a portfolio of your work, and professional editing skills. We'll review your application and get back to you within 2-3 business days."
    },
    {
      question: "Is my content stored securely?",
      answer: "Yes! All content is stored securely in the cloud for up to 6 months. You can download, revisit, or share it anytime during this period."
    }
  ];

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about iShoot
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
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
