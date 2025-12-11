import React from "react";
import { Button } from "@/components/ui/button";

export default function Team5() {
    return (
        <section className="w-full py-24 bg-background text-foreground px-6 md:px-12 flex justify-center items-center overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* --- Left Content Section --- */}
                <div className="w-full lg:w-5/12 flex flex-col items-start space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold  tracking-tight leading-[1.15]">
                        Our leading, strong & <br /> creative team
                    </h2>

                    <p className="text-lg text-foreground/60 font-medium max-w-md">
                        These people work on making our product best.
                    </p>

                    <Button
                        className="mt-4 rounded-full px-10 h-12 text-base font-medium shadow-lg "
                    >
                        Join our team
                    </Button>
                </div>

                {/* --- Right Image Grid Section --- */}
                {/* We use a 3-column grid. We shift the 1st and 3rd columns down using 'pt-16' (padding-top) */}
                <div className="w-full lg:w-7/12 grid grid-cols-3 gap-4 md:gap-6">

                    {/* Column 1: Shifted Down */}
                    <div className="flex flex-col gap-4 md:gap-6 pt-12 md:pt-20">
                        <TeamCard
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600"
                            alt="Team member 1"
                        />
                        <TeamCard
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                            alt="Team member 2"
                        />
                    </div>

                    {/* Column 2: Aligned Top */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        <TeamCard
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                            alt="Team member 3"
                        />
                        <TeamCard
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                            alt="Team member 4"
                        />
                    </div>

                    {/* Column 3: Shifted Down */}
                    <div className="flex flex-col gap-4 md:gap-6 pt-12 md:pt-20">
                        <TeamCard
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=600"
                            alt="Team member 5"
                        />
                        <TeamCard
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
                            alt="Team member 6"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

// Helper component for consistent image styling
function TeamCard({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-card  group">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>
    );
}