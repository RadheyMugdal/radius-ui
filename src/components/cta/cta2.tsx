import React from 'react';
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="w-full max-w-screen-2xl mx-auto py-12 px-4 md:px-6 flex justify-center items-center">
            {/* Main Card Container */}
            <div className="relative w-full max-w-6xl bg-[#012a30] rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col justify-center items-center text-center px-6 py-20">

                {/* --- Background Ripple Effect --- */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* We use an SVG to draw the concentric circles with precise opacity */}
                    <svg
                        className="w-[150%] h-[150%] md:w-full md:h-full text-white/5"
                        viewBox="0 0 800 800"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="400" cy="400" r="100" />
                            <circle cx="400" cy="400" r="160" />
                            <circle cx="400" cy="400" r="220" />
                            <circle cx="400" cy="400" r="280" />
                            <circle cx="400" cy="400" r="340" />
                            <circle cx="400" cy="400" r="400" />
                            <circle cx="400" cy="400" r="460" />
                            <circle cx="400" cy="400" r="520" />
                            <circle cx="400" cy="400" r="580" />
                        </g>
                    </svg>
                </div>

                {/* --- Content --- */}
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                        Start <span className="text-[#84e6de]">streamlining</span> <br />
                        your projects today
                    </h2>

                    {/* Subheadline */}
                    <p className="text-gray-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Try FuseBase free with up to 5 client projects and see how you can reclaim billable hours and reduce operational chaos
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            className="bg-[#84e6de] text-[#012a30] hover:bg-[#6bdcd3] font-semibold h-12 px-8 rounded-md text-base w-full sm:w-auto"
                        >
                            Get started for free
                        </Button>

                        <Button
                            variant="outline"
                            className="bg-transparent border-gray-600 text-white hover:bg-white/5 hover:text-white font-medium h-12 px-8 rounded-md text-base w-full sm:w-auto"
                        >
                            Get a custom portal
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}