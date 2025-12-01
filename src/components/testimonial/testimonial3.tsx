import React from 'react';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, otherwise standard clsx works

const reviews = [
    {
        company: "hulu",
        logoColor: "text-[#1ce783]",
        rating: "4.9",
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of",
        name: "Kate Davis",
        handle: "friable_captain_8"
    },
    {
        company: "HBOmax",
        logoColor: "text-[#5e27ce]", // Purple tone
        rating: "3.2",
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of",
        name: "Martin Kazlauskas",
        handle: "sartorial_statue_59"
    },
    {
        company: "Disney+",
        logoColor: "text-[#001d8e]", // Disney Blue
        rating: "4.9",
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of",
        name: "Sanjay Sharma",
        handle: "voracious_rainbows_68"
    },
    {
        company: "STARZ",
        logoColor: "text-[#006474]", // Dark teal
        rating: "3.2",
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of",
        name: "Tawanna Afumba",
        handle: "intransigent_toejam_15"
    },
    {
        company: "ViX",
        logoColor: "text-[#ff6b00]", // Orange
        rating: "4.9",
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of",
        name: "Larry King",
        handle: "pendulous_unicorn_46"
    },
    {
        company: "prime video",
        logoColor: "text-[#00A8E1]", // Prime Blue
        rating: "3.2",
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of",
        name: "Fatima Mohamed",
        handle: "salubrious_artist_72"
    },
];

export default function Testimonial3() {
    return (
        <section className="w-full max-w-screen-2xl mx-auto bg-background text-foreground py-24 px-4 flex flex-col items-center">

            {/* Header */}
            <div className="text-center max-w-2xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3 flex-wrap">
                    Our trusted
                    <span className=" bg-primary text-primary-foreground px-3 py-1 rounded-lg ">
                        Clients
                    </span>
                </h2>
                <p className=" text-foreground/60 text-lg leading-relaxed">
                    Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
                {reviews.map((review, index) => {
                    // Logic for the specific tilted Hulu card


                    return (
                        <div
                            key={index}
                            className={cn(
                                "bg-card rounded-[2rem] p-8 border  shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1",
                            )}
                        >
                            {/* Card Header: Logo & Rating */}
                            <div className="flex justify-between items-center mb-6">

                                <div className="flex items-center justify-end w-full gap-1">
                                    <span className="font-bold ">{review.rating}</span>
                                    <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className=" text-foreground/60 mb-8 leading-relaxed">
                                "{review.text}"
                            </p>

                            {/* User Footer */}
                            <div>
                                <p className="font-bold  text-lg">{review.name}</p>
                                <p className=" text-foreground/40 text-sm">{review.handle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}