import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What kind of photos do I need to upload?",
        answer: "Make variety a priority. Varied facial expressions and varied backgrounds, taken at various times of the day, are the keys to high quality input photos. Oh, and minimal makeup and accessories, please!"
    },
    {
        question: "What do you do with my uploaded photos?",
        answer: "The photos you upload are used to train our AI model so it can create realistic AI headshots. These input photos are deleted within 7 days, but you can instantly delete them at any time with our 'Delete' button."
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
        answer: "We don't cut corners when it comes to generating photorealistic AI headshots. We're not the fastest, but you'll always get same-day results with HeadshotPro. Our Executive package is delivered in 1 hour or less."
    },
    {
        question: "What do people misunderstand about AI headshots?",
        answer: "Not every photo is perfect. Due to the nature of AI, you might see some strange photos. HeadshotPro tries to make this clear from the start: not every photo is perfect, but we promise you'll find a profile-worthy headshot in every order to make it all worth it."
    },
    {
        question: "How many good photos can I expect?",
        answer: "The amount of keeper headshots you get back will largely depend on the photos you provide us with. Customers who make an effort to follow the instructions closely often walk away with 8-10+ incredible photos."
    },
    {
        question: "Is there a free AI headshot generator?",
        answer: "Yes, HeadshotPro has a 100% free AI headshot generator for simple photos. No email is required and no credit card is required. It is completely free."
    },
];

const FAQSection = () => {
    return (
        <section className="py-20 max-w-screen-2xl mx-auto bg-background text-foreground">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    {/* Left Column: Header */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-10 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
                                Frequently Asked <br className="hidden lg:block" /> Questions
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Everything you need to know about the product and billing.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Shadcn Accordion */}
                    <div className="lg:col-span-8">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    // Custom styling to match the reference image's "bubble" look
                                    className="border-none rounded-xl px-6 data-[state=open]:pb-4"
                                >
                                    <AccordionTrigger className="text-left md:text-lg font-semibold hover:no-underline py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base md:leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-8 text-right">
                            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Have more questions? Contact us
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;