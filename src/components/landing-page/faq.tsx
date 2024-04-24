import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { config } from '@/config';

const faqData = [
  {
    question: 'What is Isabell SaaS Starter?',
    answer:
      'Isabell SaaS Starter is a comprehensive template designed to accelerate the development of your next SaaS project, offering pre-configured features like authentication, payments, and more.',
  },
  {
    question: 'How does Isabell SaaS Starter simplify project setup?',
    answer:
      'By providing a pre-configured stack, Isabell SaaS Starter eliminates the need to spend days on setup, integrates essential services seamlessly, and incorporates built-in security best practices.',
  },
  {
    question: 'Is customization possible with Isabell SaaS Starter?',
    answer:
      'Yes, Isabell SaaS Starter is highly customizable, allowing you to adjust features and integrations to perfectly match your project’s needs.',
  },
  {
    question:
      'What support options are available for Isabell SaaS Starter users?',
    answer:
      'Users can access a wide range of support options, including detailed documentation, a vibrant community forum, and direct support from our team for any specific inquiries or issues.',
  },
  {
    question: 'How do I begin using Isabell SaaS Starter for my project?',
    answer:
      'Starting is straightforward: visit our website, download the Isabell SaaS Starter pack, and follow the provided setup instructions. You’ll have your project up and running in no time.',
  },
  {
    question: 'Can Isabell SaaS Starter help with UI/UX design consistency?',
    answer:
      'Absolutely. Isabell SaaS Starter comes with a consistent and modern UI/UX design framework, ensuring your project not only works great but also looks modern and engaging.',
  },
  {
    question:
      'What makes Isabell SaaS Starter different from other SaaS templates?',
    answer:
      'Isabell SaaS Starter stands out due to its comprehensive feature set, ease of customization, built-in security measures, and the strong support ecosystem designed to ensure your project’s success.',
  },
];

export const FAQSection = () => {
  return (
    <section className="container mx-auto my-12 p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="w-full md:w-3/4 text-left">
        <Accordion type="single" collapsible>
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-md ">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-6">
        <span className="text-sm">
          Any other questions?{' '}
          <a
            href={`mailto:${config.supportEmail}`}
            className="text-primary underline"
          >
            Contact us
          </a>
        </span>
      </div>
    </section>
  );
};
