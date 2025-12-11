import React from 'react';
import {
    Zap,
    Briefcase,
    Search,
    Lock,
    Globe,
    Lightbulb,
    Box
} from 'lucide-react';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ElementType;
}

const features: FeatureItem[] = [
    {
        title: "Increased Efficiency",
        description: "Automate data extraction from contracts, reducing manual effort and speeding up the review process.",
        icon: Zap,
    },
    {
        title: "Reduced Costs",
        description: "Reduce legal costs and uncover other missed opportunities through proactive contract management.",
        icon: Briefcase,
    },
    {
        title: "Improved Accuracy",
        description: "Minimize human errors by precisely identifying and extracting key contract terms and conditions.",
        icon: Search,
    },
    {
        title: "Reinforced Compliance",
        description: "Identify potential risks and compliance issues, facilitating timely management of contractual obligations and deadlines.",
        icon: Lock,
    },
    {
        title: "Enhanced Accessibility",
        description: "Centralize all your contracts, simplifying search and access, and improving organizational transparency.",
        icon: Globe,
    },
    {
        title: "Actionable Insights",
        description: "Easily interpret aggregated contract data to augment decision-making process, optimize vendors relationships & contract terms.",
        icon: Lightbulb,
    },
];

const Feature7 = () => {
    return (
        <section className="relative w-full py-24 bg-background text-foreground overflow-hidden ">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border  shadow-sm mb-8">
                        <Box className="w-3.5 h-3.5  text-muted-foreground" />
                        <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase sm:normal-case sm:tracking-normal">
                            Instant Value
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold  leading-[1.15] tracking-tight max-w-3xl">
                        Exante delivers tangible value <br className="hidden md:block" />
                        from the first contract
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-card text-card-foreground rounded-2xl p-8 border  shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold  mb-3">
                                {feature.title}
                            </h3>
                            <p className=" text-foreground/60 text-[15px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Feature7;