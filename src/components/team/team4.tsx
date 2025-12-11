import React from "react";
import { Badge } from "@/components/ui/badge";

const founders = [
    {
        name: "Victor Riparbelli",
        role: "CEO & Co-founder",
        // Placeholder image resembling the subject
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    },
    {
        name: "Steffen Tjerrild",
        role: "COO/CFO & Co-Founder",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    },
    {
        name: "Prof. Matt Niessner",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    },
    {
        name: "Prof. Lourdes Agapito",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    },
];

export default function Team4() {
    return (
        <section className="relative w-full py-24 bg-background text-foreground overflow-hidden">

            {/* --- Background Glow Effect --- */}
            {/* A subtle blue gradient blob centered behind the text to mimic the screenshot's lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/60 blur-[120px] rounded-full pointer-events-none -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- Header Section --- */}
                <div className="flex flex-col items-start mb-16">
                    <Badge
                        variant="secondary"
                        className="mb-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-sm px-3 py-1 text-[11px] font-bold tracking-wider uppercase border-none"
                    >
                        Founding Team
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-bold  tracking-tight">
                        Meet the founders
                    </h2>
                </div>

                {/* --- Founders Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {founders.map((founder, index) => (
                        <div key={index} className="flex flex-col group">

                            {/* Image Container */}
                            <div className="w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-5">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Info */}
                            <h3 className="text-lg font-bold  mb-1">
                                {founder.name}
                            </h3>
                            <p className="text-sm font-medium  text-foreground/60">
                                {founder.role}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}