import React from 'react';
import { Button } from "@/components/ui/button";

export default function Cta3() {
    return (
        <div className="w-full flex max-w-screen-2xl mx-auto items-center justify-center p-6">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 md:px-16 md:py-20 shadow-xl">

                {/* Decorative Background Circles (Ripple Effect) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                        {/* Outermost to Innermost circles with increasing opacity */}
                        <div className="absolute w-[800px] h-[800px] rounded-full bg-white/5" />
                        <div className="absolute w-[650px] h-[650px] rounded-full bg-white/10" />
                        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/15" />
                        <div className="absolute w-[350px] h-[350px] rounded-full bg-white/20" />
                        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/25" />
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col justify-center h-full">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
                        Let's Get In Touch.
                    </h2>

                    <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg mb-10 leading-relaxed">
                        Your laboratory instruments should serve you, not the
                        other way around. We're happy to help you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Button 1: Discovery Call */}
                        <Button

                            className="group relative h-14 rounded-full bg-black text-white hover:bg-black/80 px-2 pl-8 pr-2 flex justify-between items-center min-w-[260px]"
                        >
                            <span className="font-medium ">Book a discovery call</span>
                            <div className="h-5 mr-3 w-5 rounded-full bg-gradient-to-br from-gray-100 to-gray-400 shadow-inner flex items-center justify-center ml-4">
                                {/* Shiny sphere effect */}
                                <div className="w-full h-full rounded-full bg-white opacity-20 blur-[2px]" />
                            </div>
                        </Button>

                        {/* Button 2: Test Samples */}
                        <Button

                            className="group relative h-14 rounded-full bg-black text-white hover:bg-black/80 px-2 pl-8 pr-2 flex justify-between items-center min-w-[260px]"
                        >
                            <span className="font-medium ">Test Your Samples</span>
                            <div className="h-5 mr-3 w-5 rounded-full bg-gradient-to-br from-gray-100 to-gray-400 shadow-inner flex items-center justify-center ml-4">
                                <div className="w-full h-full rounded-full bg-white opacity-20 blur-[2px]" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}