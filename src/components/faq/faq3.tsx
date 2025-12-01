import React from 'react';
import { Button } from "@/components/ui/button";
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

const FAQ3 = () => {
    return (
        // "primary/10" gives that light tint background based on your theme color
        <section className="min-h-[80vh] py-24 bg-primary/10 max-w-screen-2xl mx-auto  flex items-center justify-center">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">

                    {/* Left Column: Static Content */}
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                            Support
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            FAQs
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                            We won't leave you wondering; all your questions - answered below.
                        </p>
                        <div className="pt-2">
                            <Button size="lg" className="font-medium px-8">
                                Get in touch
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Accordion Cards */}
                    <div className="lg:col-span-7">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    // Styles to make each item look like a separate white card
                                    className="bg-background rounded-lg border-none px-6 py-1 shadow-sm data-[state=open]:pb-2"
                                >
                                    <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-5 text-foreground/90">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base md:leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ3;