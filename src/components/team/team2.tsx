import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, X } from "lucide-react"; // Note: 'X' is the Lucide icon for Twitter/X

const teamMembers = [
    {
        id: 1,
        name: "Finley Geidt",
        role: "Designer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        name: "Harsh Patel",
        role: "Developer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
        isFeatured: true, // Used to mimic the screenshot state
    },
    {
        id: 3,
        name: "Amara Okoro",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        name: "David Smith",
        role: "Marketing",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Team2() {
    return (
        <section className="w-full py-20 px-6 bg-background text-foreground flex items-center justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* --- Left Column: Text Content --- */}
                <div className="flex flex-col items-start space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                        Our brilliant team of <br />
                        <span className="text-primary">Pagedone</span>
                    </h2>

                    <p className="text-lg text-foreground/60 leading-relaxed">
                        These people work on making our product best.
                    </p>

                    <Button
                        size="lg"
                        className="rounded-full  px-8 h-12 text-base shadow-lg "
                    >
                        Join our team
                    </Button>
                </div>

                {/* --- Right Column: Image Grid --- */}
                <div className="grid grid-cols-2 gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* 
                Info Card Overlay 
                - By default opacity is 0 (invisible).
                - On hover (group-hover), opacity becomes 100.
                - If member.isFeatured is true (Harsh Patel), we force it visible to match screenshot.
              */}
                            <div
                                className={`
                  absolute bottom-4 left-4 right-4 bg-card p-4 rounded-2xl shadow-xl 
                  flex items-center justify-between transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100
                  ${member.isFeatured ? "opacity-100 translate-y-0" : "opacity-0"}
                `}
                            >
                                <div>
                                    <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                                    <p className="text-xs font-semibold text-primary mt-0.5">{member.role}</p>
                                </div>

                                <div className="flex items-center gap-3 text-foreground">
                                    <a href="#" className="hover:text-primary transition-colors">
                                        <X className="size-4" />
                                    </a>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        <Instagram className="size-4" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}