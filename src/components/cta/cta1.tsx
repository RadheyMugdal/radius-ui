import React from 'react';
import { Button } from "@/components/ui/button";

export default function CTA1() {
    return (
        <section className="relative w-full max-w-screen-2xl mx-auto bg-primary/80 pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden ">

            {/* --- Background "Ghost" Elements --- */}
            {/* These mimic the faint outlines seen behind the text in the screenshot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-10 scale-110 md:scale-100 translate-y-12">

                    {/* Ghost Card 1 */}
                    {/* <div className="w-80 h-64 border-2 border-white rounded-xl p-6 flex flex-col gap-4 transform -rotate-6 translate-y-4">
                        <div className="w-1/3 h-4 bg-white rounded-full"></div>
                        <div className="w-full h-2 bg-white rounded-full"></div>
                        <div className="w-3/4 h-2 bg-white rounded-full"></div>
                        <div className="mt-auto w-full h-24 bg-white/20 rounded-lg"></div>
                    </div> */}

                    {/* Ghost Card 2 (Center) */}
                    {/* <div className="w-96 h-80 border-2 border-white rounded-xl p-6 flex flex-col gap-4 z-0 bg-white/5">
                        <div className="w-1/2 h-6 bg-white rounded-full mb-2"></div>
                        <div className="grid grid-cols-2 gap-2 h-full">
                            <div className="bg-white/20 rounded-lg h-full"></div>
                            <div className="bg-white/20 rounded-lg h-full"></div>
                        </div>
                    </div> */}

                    {/* Ghost Card 3 */}
                    {/* <div className="w-80 h-64 border-2 border-white rounded-xl p-6 flex flex-col gap-4 transform rotate-6 translate-y-4">
                        <div className="flex gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-white"></div>
                            <div className="w-24 h-4 bg-white rounded-full mt-2"></div>
                        </div>
                        <div className="w-full flex-1 bg-white/20 rounded-lg"></div>
                    </div> */}
                </div>
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight mb-6">
                    We’ll help get you started.
                </h2>

                <p className="text-lg md:text-xl text-primary-foreground mb-10 max-w-2xl font-medium">
                    Schedule a demo with our team today!
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button
                        variant={"secondary"}
                        className=" font-bold text-base px-8 py-6 rounded-md shadow-lg transition-transform hover:-translate-y-0.5"
                    >
                        Get started for free
                    </Button>

                    <Button
                        variant="outline"
                        className="bg-transparent border border-indigo-300 text-white hover:bg-white/10 hover:text-white font-bold text-base px-8 py-6 rounded-md backdrop-blur-sm"
                    >
                        Book a Demo
                    </Button>
                </div>
            </div>

            {/* --- Bottom Curved Separator --- */}
            <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden z-20">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="#ffffff"
                        opacity=".0" // Hiding the top part of the wave path logic
                    ></path>
                    {/* Simple convex curve to match the image */}
                    <path
                        d="M0,120 L1200,120 L1200,60 C800,10 400,10 0,60 Z"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>
        </section>
    );
}