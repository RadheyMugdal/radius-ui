import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus, ChevronRight } from "lucide-react";

export default function FAQ6() {
    const faqData = [
        {
            id: "item-1",
            question: "What should I expect during my demo call?",
            answer:
                "During your demo call, our team will walk you through the key features of Lattice, tailored to your organization's needs. We'll answer any questions you have and discuss how Lattice can help you achieve your HR goals.",
        },
        {
            id: "item-2",
            question: "What integrations do you offer?",
            answer:
                "We offer integrations with major HRIS platforms, Slack, Microsoft Teams, and various other productivity tools to streamline your workflow.",
        },
        {
            id: "item-3",
            question: "Does the contract include dedicated human support?",
            answer:
                "Yes, depending on your plan, you will have access to dedicated customer success managers and 24/7 priority support.",
        },
        {
            id: "item-4",
            question: "Can I purchase Performance or OKRs and Goals separately?",
            answer:
                "Yes, our products are modular. You can purchase specific modules that fit your current needs and scale up later.",
        },
        {
            id: "item-5",
            question: "Is there a minimum spend?",
            answer:
                "There is a minimum annual contract value for certain plans. Please contact our sales team for specific details regarding your company size.",
        },
        {
            id: "item-6",
            question: "In what currency will I be billed?",
            answer:
                "We primarily bill in USD, but we support other major currencies including GBP, EUR, and CAD depending on your region.",
        },
        {
            id: "item-7",
            question: "Is the contract billed monthly, quarterly, or annually?",
            answer:
                "Contracts are typically billed annually to provide the best value, though quarterly options may be available for enterprise plans.",
        },
        {
            id: "item-8",
            question: "Are there additional fees for implementation or change management?",
            answer:
                "Basic onboarding is included, but comprehensive implementation packages and change management consulting are available as add-ons.",
        },
    ];

    return (
        <section className="min-h-screen w-full bg-background text-foregrounds py-24 px-4 flex justify-center">
            <div className="w-full max-w-3xl flex flex-col items-center">

                {/* --- Header --- */}
                <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight  mb-4 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="flex items-center gap-1.5 text-lg mb-12">
                    <span>Have a question we didn't answer?</span>
                    <a href="#" className="text-primary hover:underline hover:text-primary/80 font-medium inline-flex items-center gap-0.5">
                        Contact us
                        <ChevronRight className="size-4 mt-0.5" />
                    </a>
                </div>

                {/* --- Accordion List --- */}
                <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            // We override the default border-b.
                            // We use data attributes to style the "Open" state (white bg, shadow) vs "Closed" (gray bg).
                            className="border-none px-6 py-2 rounded-xl transition-all duration-200 bg-muted data-[state=open]:bg-background data-[state=open]:shadow-sm"
                        >
                            {/* 
                  The [&[data-state=open]>div>svg]:rotate-180 logic is usually default in Shadcn.
                  We disable the default chevron rotation logic and hide the default chevron 
                  by using our own custom icon logic below.
              */}
                            <AccordionTrigger className="hover:no-underline py-4 text-left text-[1.05rem] font-medium text-foreground [&>svg]:hidden">
                                <span className="text-foreground">{item.question}</span>

                                {/* Custom Icon Logic: Plus shows when closed, Minus when open */}
                                <div className="shrink-0 text-gray-400 ml-4">
                                    <Plus className="size-5 block group-data-[state=open]:hidden" />
                                    <Minus className="size-5 hidden group-data-[state=open]:block" />
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}