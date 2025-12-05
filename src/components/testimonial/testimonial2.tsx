import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Dummy Data ---
const reviews = [
    {
        name: "Isabella Rodriguez",
        role: "CEO, ABC Company",
        image: "https://i.pravatar.cc/150?u=isabella",
        content: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    },
    {
        name: "Gabrielle Williams",
        role: "Head of Marketing",
        image: "https://i.pravatar.cc/150?u=gabrielle",
        content: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    },
    {
        name: "Samantha Johnson",
        role: "Product Manager",
        image: "https://i.pravatar.cc/150?u=samantha",
        content: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    },
    {
        name: "Victoria Thompson",
        role: "Director of Ops",
        image: "https://i.pravatar.cc/150?u=victoria",
        content: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    },
    {
        name: "John Peter",
        role: "Senior Designer",
        image: "https://i.pravatar.cc/150?u=john",
        content: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    },
    {
        name: "Natalie Martinez",
        role: "Brand Director",
        image: "https://i.pravatar.cc/150?u=natalie",
        content: "From concept to execution, their creativity knows no bounds - a game changer for our brand's success.",
    },
];

// --- Components ---

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
    return (
        // Removed 'mx-4' so the gap is controlled strictly by the parent container
        <div className="relative w-[350px] shrink-0 rounded-2xl bg-card  text-card-foreground p-6 shadow-sm border ">
            <Quote className="h-8 w-8 text-indigo-500 mb-4 fill-indigo-500/20" />

            <p className="text-base  font-medium leading-relaxed mb-6">
                {review.content}
            </p>

            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <AvatarImage src={review.image} alt={review.name} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-sm font-bold ">{review.name}</span>
                    <span className="text-xs  text-card-foreground/60">{review.role}</span>
                </div>
            </div>
        </div>
    );
};

// Helper for the infinite loop
const Marquee = ({
    items,
    direction = "left",
    speed = "normal"
}: {
    items: typeof reviews,
    direction?: "left" | "right",
    speed?: "fast" | "normal" | "slow"
}) => {

    const durationClass = {
        fast: "duration-[20s]",
        normal: "duration-[40s]",
        slow: "duration-[60s]",
    }[speed];

    return (
        // Reduced gap variable from 2rem to 1rem (16px) here
        <div className="group flex overflow-hidden p-2 select-none [--gap:1rem] [gap:var(--gap)]">
            <div
                className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
                    direction === "left" ? "animate-scroll-left" : "animate-scroll-right",
                    durationClass,
                    "group-hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <ReviewCard key={idx} review={item} />
                ))}
            </div>
            <div
                aria-hidden="true"
                className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
                    direction === "left" ? "animate-scroll-left" : "animate-scroll-right",
                    durationClass,
                    "group-hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <ReviewCard key={`dup-${idx}`} review={item} />
                ))}
            </div>
        </div>
    );
};

export default function InfiniteReviews() {
    return (
        <section className="w-full max-w-screen-2xl mx-auto  bg-background text-foreground py-24 flex flex-col items-center overflow-hidden">

            {/* Header */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mb-16">
                {/* Floating Badge */}
                <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl mb-8 transition-transform hover:scale-105 cursor-default">
                    <div className="bg-indigo-600 rounded-full p-0.5">
                        <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                    <span>Rated 4/5 by over 1 Lakh users</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight  max-w-2xl">
                    Words of praise from others about our presence.
                </h2>
            </div>

            {/* Marquee Rows */}
            <div className="w-full relative space-y-4">

                {/* Fade Gradients to hide edges smoothly */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Row 1: Moves Left */}
                <Marquee items={reviews} direction="left" speed="normal" />

                {/* Row 2: Moves Right */}
                <Marquee items={[...reviews].reverse()} direction="right" speed="normal" />

            </div>

        </section>
    );
}