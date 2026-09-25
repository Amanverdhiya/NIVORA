import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Nivora?",
    answer: "Nivora is a platform designed to help students find the best PGs, messes, and flats near their college with AI-powered insights and user reviews."
  },
  {
    question: "How do I search for accommodations?",
    answer: "Simply enter your college name and the area's pincode on the homepage search form and click 'Search Stays' to see a list of available options."
  },
  {
    question: "Are the listings on Nivora verified?",
    answer: "We strive to provide accurate information based on user-submitted reviews. We recommend visiting the location before making any commitments."
  },
];

export default function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Help & Support</DialogTitle>
          <DialogDescription>
            Here are some frequently asked questions. If you need more help, feel free to contact us or use our chatbot.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Further Assistance</h3>
          <p className="text-sm text-muted-foreground">
            If your question is not answered above, please reach out to our support team.
          </p>
          <a href="mailto:contact.nivora@gmail.com" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mt-2">
            <Mail className="h-4 w-4" />
            contact.nivora@gmail.com
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
