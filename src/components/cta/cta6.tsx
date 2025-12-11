import React from "react";
import { Button } from "@/components/ui/button"; // Adjust path as needed
import { ChevronRight } from "lucide-react";

export default function Cta6() {
    return (
        <section className="w-full py-24 bg-background max-w-screen-2xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden">

            {/* --- Icon Grid Section --- */}
            {/* We use a relative container to create the dashed grid lines effect */}
            <div className="relative mb-8">
                {/* Horizontal Grid Lines (Top and Bottom) */}
                <div className="absolute inset-x-[-50vw] top-0 h-px border-t border-dashed border-border/60" />
                <div className="absolute inset-x-[-50vw] bottom-0 h-px border-b border-dashed border-border/60" />

                <div className="flex items-center">
                    {/* Vertical Grid Lines extend infinitely via pseudo-elements or long divs if needed, 
              but here we stick to the local grid for the main visual */}

                    {/* Icon 1: Pen (Black) */}
                    <div className="relative p-6 border-r border-dashed border-border/60">
                        {/* Left extended grid line */}
                        <div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-border/60" />

                        <div className="size-14 bg-foreground rounded-2xl flex items-center justify-center shadow-sm relative group overflow-hidden">
                            {/* Subtle sheen effect */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="size-7 text-background"
                            >
                                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                <path d="M2 2l7.586 7.586" />
                                <circle cx="11" cy="11" r="2" className="fill-green-400 stroke-none" />
                            </svg>
                        </div>
                    </div>

                    {/* Icon 2: Vectara V (Blue/Purple Gradient) */}
                    <div className="relative p-6 border-r border-dashed border-border/60">
                        <div className="size-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-sm text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 13.45 7.77 18 12 5l4.23 13z" />
                            </svg>
                        </div>
                    </div>

                    {/* Icon 3: Nodes (Light Gray) */}
                    <div className="relative p-6">
                        <div className="absolute inset-y-0 right-0 w-px border-r border-dashed border-border/60" />
                        <div className="size-14 bg-muted/80 rounded-2xl flex items-center justify-center shadow-sm relative overflow-hidden">
                            {/* Abstract lines pattern */}
                            <svg className="absolute inset-0 size-full text-muted-foreground/30" stroke="currentColor" strokeWidth="1">
                                <circle cx="10%" cy="90%" r="2" fill="currentColor" />
                                <circle cx="90%" cy="10%" r="2" fill="currentColor" />
                                <path d="M10 90 Q 50 50 90 10" fill="none" strokeDasharray="4 2" />
                                <circle cx="50%" cy="50%" r="1.5" className="text-orange-400 fill-orange-400" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Text Content --- */}
            <div className="max-w-3xl px-6 flex flex-col items-center gap-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Get started with Vectara
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Vectara is the shortest path between question and answer, delivering true business value in the shortest time.
                </p>

                {/* --- Buttons --- */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    {/* Primary CTA - Using a specific Blue to match image, standard shadcn "default" variant otherwise */}
                    <Button
                        size="lg"
                        className="rounded-full  px-8 h-12 text-base font-medium shadow-md "
                    >
                        Contact us
                    </Button>

                    {/* Secondary CTA */}
                    <Button
                        variant="ghost"
                        size="lg"
                        className="group text-base font-medium hover:bg-transparent hover:text-foreground"
                    >
                        Get started
                        <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
}