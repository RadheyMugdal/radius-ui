import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
    {
        name: "Michael Cannon",
        role: "Founder",
        // Suit/Light background match
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Dianne Russell",
        role: "Sales Lead",
        // Professional woman/Office background match
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Devona Lane",
        role: "UI Designer",
        // Black blazer/Window background match
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Ronald Richards",
        role: "Product Designer",
        // Man/Jacket over shoulder match
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Team3() {
    return (
        <section className="w-full py-20 px-4 bg-background text-foreground">
            <div className="max-w-7xl mx-auto">

                {/* --- Header --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Meet our <span className="text-primary">special</span> team
                    </h2>
                </div>

                {/* --- Team Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Image Container */}
                            <div className="w-full aspect-square mb-6 overflow-hidden rounded-[2rem]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Info */}
                            <h3 className="text-xl font-bold text-foreground mb-1">
                                {member.name}
                            </h3>
                            <p className="text-foreground/60 font-medium">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- Navigation Buttons --- */}
                <div className="flex items-center justify-center gap-6">
                    <button
                        className="size-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="size-5" />
                    </button>

                    <button
                        className="size-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-[#5243C2] focus:ring-offset-2"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="size-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}