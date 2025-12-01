import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Fatima Khoury",
        handle: "dilatory_curtains_98",
        image: "https://i.pravatar.cc/150?u=fatima",
        text: (
            <>
                The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and <span className="text-primary font-bold">challenging</span> words.
            </>
        ),
    },
    {
        name: "Hassan Ali",
        handle: "turbulent_unicorn_29",
        image: "https://i.pravatar.cc/150?u=hassan",
        text: (
            <>
                The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and <span className="text-primary font-bold">challenging</span> words.
            </>
        ),
    },
    {
        name: "Jorge Martínez",
        handle: "nefarious_jellybeans_91",
        image: "https://i.pravatar.cc/150?u=jorge",
        text: (
            <>
                The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and <span className="text-primary font-bold">challenging</span> words.
            </>
        ),
    },
    {
        name: "Nicolás Sánchez",
        handle: "pervasive_inker_83",
        image: "https://i.pravatar.cc/150?u=nicolas",
        text: (
            <>
                The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and <span className="text-primary font-bold">challenging</span> words.
            </>
        ),
    },
    {
        name: "Noel Jensen",
        handle: "nefarious_shop_47",
        image: "https://i.pravatar.cc/150?u=noel",
        text: (
            <>
                The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and <span className="text-primary font-bold">challenging</span> words.
            </>
        ),
    },
    {
        name: "Ahmad Khan",
        handle: "antic_circus_76",
        image: "https://i.pravatar.cc/150?u=ahmad",
        text: (
            <>
                The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and <span className="text-primary font-bold">challenging</span> words.
            </>
        ),
    },
];

export default function Testimonial5() {
    return (
        <section className="w-full bg-slate-50/50 py-24 px-6 flex flex-col items-center">

            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20 px-3 py-1 text-xs uppercase tracking-wider bg-background">
                    Testimonials
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                    Our trusted clients
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-200"
                    >
                        {/* Top Content */}
                        <div>
                            <Quote className="h-8 w-8 text-primary/20 mb-6 fill-primary/10" />
                            <p className="text-slate-600 leading-relaxed text-[15px] mb-8">
                                {item.text}
                            </p>
                        </div>

                        {/* Separator Line */}
                        <div className="w-full h-px bg-slate-100 mb-6" />

                        {/* User Profile */}
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10 border border-slate-100">
                                <AvatarImage src={item.image} alt={item.name} />
                                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                    {item.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 leading-none mb-1">
                                    {item.name}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">
                                    {item.handle}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}