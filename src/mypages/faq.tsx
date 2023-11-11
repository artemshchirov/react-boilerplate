import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@web/components/ui/accordion";

function FaqPage() {
  const faqData = [
    {
      question: "What is widegamut.co?",
      answer:
        "widegamut.co is the first of its kind social portfolio platform made for filmmakers. Users can showcase their work in stunning detail, Get inspired by top industry professionals, and Collaborate with other filmmakers - all in one place.",
    },
    {
      question: "Can I share my wg portfolio anywhere?",
      answer:
        'Certainly! Click the "Share" button located within your profile to get your own personalized short link, which directs users to your portfolio.',
    },
    {
      question: "Can I download my own stills?",
      answer:
        "Yes! Access any of your uploaded projects, find the top-left download button, and click it to download all stills from that project.",
    },
    {
      question: "How can I use images downloaded on the site?",
      answer:
        "All images on widegamut.co are intended solely for reference, research, and educational purposes. These images are strictly prohibited from any form of commercial use, resale, or publication. For more please read our Terms of Use.",
    },
    {
      question: "How many stills can I download per month?",
      answer: "Pro & Max users can download stills with no limits.",
    },
    {
      question: "What’s included in the Free Plan?",
      answer:
        "A Free Plan is limited to uploading up to 5 projects in total, and up to 10 stills per project. It’s also limited to creating up to 5 collections. Users are free to navigate the platform & get inspiration, but cannot download stills or create Shared Collections.",
    },
    {
      question: "Why should I upgrade to Pro or Max?",
      answer:
        "If you are a professional in the film industry or aiming to become one, the Pro/Max account is an excellent option. It simplifies the process of showcasing your work with exceptional detail, offering the freedom to share 5-10 projects per month. Additionally, you'll have the ability to download stills and create unlimited collections and shared collections.",
    },
    {
      question: "What subscription options are available?",
      answer:
        "Pro & Max plans are available. Check this page for more information.",
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "Yes! To cancel your subscription, go to your Account Settings page and click on the three-dots icon. You will still have access to the subscription until it expires.",
    },
    {
      question: "How do I contact support?",
      answer: "To contact support click here.",
    },
    {
      question: "Do you offer custom plans for teams?",
      answer:
        "Sure! please email: enterprise@widegamut.co for more information.",
    },
  ];

  return (
    <>
      <Accordion type="single" collapsible>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default FaqPage;
