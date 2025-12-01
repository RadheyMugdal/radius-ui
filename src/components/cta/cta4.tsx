import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta4() {
    return (
        <section className="w-full bg-amber-50 max-w-screen-2xl mx-auto py-24 px-6 flex flex-col items-center justify-center text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">

                {/* Main Headline */}
                <h1 className="text-3xl md:text-4xl  font-bold tracking-tight text-foreground mb-5">
                    Sustainable Life Starts Here
                </h1>

                {/* Subtitle */}
                <p className=" md:text-lg text-foreground/70 mb-10 max-w-2xl font-medium">
                    Unlock the potential of solar energy for your home. Start saving on your energy bills!
                </p>

                {/* Call to Action Button */}
                <Button
                    className="group h-auto py-3 pl-8 pr-2 rounded-full  hover:bg-primary/90 shadow-xl shadow-primary/20  font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                    Get Your Quote Now!
                    <div className="ml-4 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        {/* The arrow takes the color of the primary theme to contrast with the white circle */}
                        <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                </Button>

            </div>
        </section>
    );
}