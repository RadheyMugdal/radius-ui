import React from "react";
import { HelpCircle } from "lucide-react";

const faqData = [
    {
        question: "What is a credit?",
        answer: (
            <>
                <p className="mb-4">
                    A credit is an action GMHQ associates completes for you for research purposes.
                </p>
                <p>
                    AI can find you emails, company descriptions, phone numbers and any publicly available information.
                </p>
            </>
        ),
    },
    {
        question: "Is there a free trial?",
        answer: (
            <p>
                Yes. You will be able to access GMHQ with 100 credits for free on signup with all the features included.
            </p>
        ),
    },
    {
        question: "Can GodmodeHQ run autonomously for manual research?",
        answer: (
            <p>
                All things you can run at GMHQ, can be run by "The Sales Associate". It is an agent customised for your product's data.
            </p>
        ),
    },
    {
        question: "What does the Enterprise package entail for outreach?",
        answer: (
            <p>
                It entails custom development with your enterprise data, data security compliance for SOC-2 type compliance and team level access permissions.
            </p>
        ),
    },
    {
        question: "Do you have an API for integration?",
        answer: (
            <p>
                We do custom integrations on a per request basis. Please reach out to team@troylabs.io to discuss
            </p>
        ),
    },
    {
        question: "What integrations with multiple sources do you have?",
        answer: (
            <p>
                Hubspot, Salesforce, Slack, Notion, Outlook, Gmail, Linkedin and Twitter. More integrations are underway.
            </p>
        ),
    },
];

export default function FAQ5() {
    return (
        <section className="w-full bg-background text-foreground py-20 ">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
                    Frequently Asked Questions
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                    {faqData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            {/* Question Row */}
                            <div className="flex items-start gap-3">
                                <HelpCircle className="size-5  text-muted-foreground mt-0.5 shrink-0" />
                                <h3 className="font-bold  text-base leading-snug">
                                    {item.question}
                                </h3>
                            </div>

                            {/* Answer Row */}
                            {/* pl-8 adds padding to align text with the question text, ignoring the icon width */}
                            <div className="pl-8 text-muted-foreground text-sm leading-relaxed">
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}