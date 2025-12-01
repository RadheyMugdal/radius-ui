import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What kind of photos do I need to upload?",
        answer: "Make variety a priority. Varied facial expressions and varied backgrounds, taken at various times of the day, are the keys to high quality input photos."
    },
    {
        question: "What do you do with my uploaded photos?",
        answer: "The photos you upload are used to train our AI model so it can create realistic AI headshots. These input photos are deleted within 7 days."
    },
    {
        question: "Who owns my AI photos?",
        answer: "You do. We grant you full commercial license and ownership over your photos."
    },
    {
        question: "What if I don't like my photos?",
        answer: "No problem. If you don't get a single profile-worthy headshot, we'll refund your entire purchase. It's our Profile-Worthy guarantee."
    },
    {
        question: "How long does an AI headshot take?",
        answer: "Our Executive package is delivered in 1 hour or less. We don't cut corners to ensure photorealistic results."
    },
    {
        question: "Is there a free AI headshot generator?",
        answer: "Yes, HeadshotPro has a 100% free AI headshot generator for simple photos. No email or credit card required."
    },
];

const FAQ4 = () => {
    return (
        <section className="py-24 max-w-screen-xl mx-auto bg-background text-foreground">
            <div className="container px-4 mx-auto">

                {/* Header Section */}
                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                    {/* Centered Icon with Soft Background */}
                    <div className="flex justify-center">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
                            <HelpCircle className="h-7 w-7 text-primary" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                        Frequently asked questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                {/* Centered Accordion List */}
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-muted py-2"
                            >
                                <AccordionTrigger className="text-left text-base md:text-lg font-medium py-5 hover:no-underline hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
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

export default FAQ4;