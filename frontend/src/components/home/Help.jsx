import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Nivora?",
    answer: "Nivora is a platform designed to help students find the best PGs, messes, and flats near their college with AI-powered insights and user reviews."
  },
  {
    question: "How do I search for accommodations?",
    answer: "Simply enter your college name and area/pincode on the homepage search bar and click 'Search Stays' to see all available matching properties."
  },
  {
    question: "Are the listings on Nivora verified?",
    answer: "We strive to provide accurate information based on real student reviews and data. We recommend visiting the location or calling the property owner before making any advance payments."
  },
  {
    question: "Can I list my own property?",
    answer: "Currently, you can join as an owner through the sign up flow to express interest in listing your student accommodation."
  }
];

export default function Help() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-2">
          Have questions? We&apos;ve got answers.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full bg-card/40 rounded-xl p-4 border border-border/40">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-lg hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
