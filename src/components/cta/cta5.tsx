import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export default function Cta5() {
    return (
        <section className="w-full bg-background pt-24 md:pt-32 flex flex-col items-center overflow-hidden">

            {/* Container for content */}
            <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">

                {/* Headline */}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-4xl mb-6">
                    Make customer experience your competitive edge
                </h1>

                {/* Subhead */}
                <p className=" md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                    Use Chatbase to deliver exceptional support experiences that set you apart from the competition.
                </p>

                {/* CTA Area */}
                <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
                    {/* Primary Button as requested */}
                    <Button className="h-12 px-8 font-medium shadow-lg">
                        Build your agent
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CreditCard className="w-4 h-4" />
                        <span>No credit card required</span>
                    </div>
                </div>

            </div>

            {/* Decorative Image from Public Folder */}
            <div className="w-full md:h-28 mt-auto relative z-0">
                <img
                    src="/cta/cta5.webp"
                    alt="Decorative background curves"
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                />
            </div>

        </section>
    );
}