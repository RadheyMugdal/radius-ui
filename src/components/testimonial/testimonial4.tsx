import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data Structure ---
const testimonials = [
    {
        quote: "The most important thing in a wiki (in my opinion) is how tight the edit / collaboration loop is. Most wikis are pretty bad there. But Slite is an example of a wiki that allows simultaneous editing.",
        highlight: "how tight the edit / collaboration loop is.",
        name: "Jade Rubick",
        role: "CTO, Gremlin",
        teammates: "80+ Teammates",
        image: "https://i.pravatar.cc/150?u=jade",
    },
    {
        quote: "Communication is key to scale a business. Slite is the best to keep things in writing. Easy to use for everyone. Templates to adopt the best practices. Summary to stay up to date on all topics.",
        highlight: "Communication is key to scale a business. Easy to use for everyone. Templates to adopt the best practices.",
        name: "Lee Liu",
        role: "CTO, LogDNA",
        teammates: "150+ Teammates",
        image: "https://i.pravatar.cc/150?u=lee",
    },
    {
        quote: "Slite is easier to use on daily basis. We chose to avoid a distracting tool to offer a place of focus and clarity.",
        highlight: "a place of focus and clarity.",
        name: "Thibault Morlot",
        role: "VP Operations, Shippeo",
        teammates: "240+ Teammates",
        image: "https://i.pravatar.cc/150?u=thibault",
    },
    {
        quote: "Slite lets us bring the two most important communication tools in the same place: documentation & decision-making. This connection makes decision-making efficient, transparent & contextualized.",
        highlight: "makes decision-making efficient, transparent & contextualized.",
        name: "Sebastien Gendreau",
        role: "Head of Product, Agorapulse",
        teammates: "175+ Teammates",
        image: "https://i.pravatar.cc/150?u=sebastien",
    },
    {
        quote: "The reasons why certain decisions were made can be found in one place and not scattered across different Slack channels.",
        highlight: "The reasons why certain decisions were made can be found in one place",
        name: "Jurgita Paulauskaite",
        role: "Customer Success, Tymeshift",
        teammates: "75+ Teammates",
        image: "https://i.pravatar.cc/150?u=jurgita",
    },
    {
        quote: "As we're growing fast, the ease of adoption is a crucial element when choosing a new solution. You can see Slite is more user friendly, and its similarities with Slack make it easier to adopt.",
        highlight: "Slite is more user friendly, and its similarities with Slack make it easier to adopt.",
        name: "Martijn Hazelaar",
        role: "Head of Digital, Vanmoof",
        teammates: "500+ Teammates",
        image: "https://i.pravatar.cc/150?u=martijn",
    },
    {
        quote: "We switched from Confluence to Slite because Slite is easy to use for the entire company, not just the product team. Now, our entire company writes and organizes content in Slite.",
        highlight: "Slite is easy to use for the entire company, not just the product team.",
        name: "Donald Sipe",
        role: "Solutions Architect, JobTarget",
        teammates: "300+ Teammates",
        image: "https://i.pravatar.cc/150?u=donald",
    },
    {
        quote: "Perfect example of a product that delivers the 80/20 rule. No fluff and simple. You give me the top 20% of what I need that gets 80% done. Great for managing internal teams.",
        highlight: "delivers the 80/20 rule. No fluff and simple. You give me the top 20% of what I need that gets 80% done.",
        name: "Eric Fettner",
        role: "Cofounder & COO, The Job Sauce",
        teammates: "20+ Teammates",
        image: "https://i.pravatar.cc/150?u=eric",
    },
];

// --- Helper to render text with highlights ---
const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
    if (!highlight) return <>{text}</>;

    // Split text by the highlight phrase to insert styled spans
    const parts = text.split(highlight);

    return (
        <p className="text-lg leading-relaxed text-slate-700">
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i < parts.length - 1 && (
                        <span className="bg-primary text-primary-foreground px-1 py-0.5 rounded-sm box-decoration-clone leading-relaxed">
                            {highlight}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </p>
    );
};

export default function Testimonial4() {
    return (
        <section className="w-full max-w-screen-2xl mx-auto bg-amber-50 text-foreground py-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-center  mb-16 tracking-tight">
                    What happy teams have to say
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-8 shadow-sm border border-amber-100 flex flex-col justify-between h-full transition-shadow hover:shadow-md"
                        >
                            <div className="mb-8">
                                <HighlightedText text={item.quote} highlight={item.highlight} />
                            </div>

                            <div className="flex items-end justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold uppercase tracking-wider ">
                                        {item.name}
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase tracking-wide text-foreground/75">
                                        {item.role}
                                    </span>
                                    <span className="text-[10px] font-medium uppercase tracking-wide text-foreground/60">
                                        {item.teammates}
                                    </span>
                                </div>
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={item.image} alt={item.name} className="object-cover" />
                                    <AvatarFallback className="bg-slate-200 text-slate-600">
                                        {item.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    ))}

                    {/* "Read More" Last Card */}
                    <div className="bg-card rounded-xl p-8 shadow-sm border border-amber-100 flex flex-col items-center justify-center h-full min-h-[300px] cursor-pointer group hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 text-foreground/60 font-medium group-hover:text-primary transition-colors">
                            <span>Read more reviews</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}