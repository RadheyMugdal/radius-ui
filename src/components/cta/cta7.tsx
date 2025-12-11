import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    CreditCard,
    Linkedin,
    Sparkles,
    Coffee
} from "lucide-react";

export default function Cta7() {
    return (
        <div className="w-full max-w-screen-2xl mx-auto bg-background text-foreground px-4 py-12 flex justify-center">
            <div className="relative w-full max-w-[1200px] rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/40 to-primary/20 border  shadow-sm">

                {/* --- Background Decorations (Floating Squares) --- */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">

                    {/* Top Center Icon (Atom/Network) */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-20">
                        <svg className="size-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="12" cy="12" r="3" />
                            <ellipse cx="12" cy="12" rx="10" ry="4" className="rotate-45 origin-center" />
                            <ellipse cx="12" cy="12" rx="10" ry="4" className="-rotate-45 origin-center" />
                        </svg>
                    </div>

                    {/* Left Side Clusters */}
                    <div className="absolute left-10 top-1/3 flex flex-col gap-4 opacity-40">
                        <div className="size-12 border border-purple-200/60 rounded-xl rotate-12 translate-x-4" />
                        <div className="size-16 border border-purple-200/60 rounded-2xl -rotate-6 bg-white/20" />
                        <div className="size-10 border border-purple-200/60 rounded-lg rotate-45 -translate-x-8" />
                    </div>
                    <div className="absolute left-32 bottom-24 opacity-30">
                        <div className="size-14 bg-purple-100/40 rounded-2xl rotate-3" />
                    </div>

                    {/* Right Side Clusters */}
                    <div className="absolute right-12 top-1/3 flex flex-col gap-6 opacity-40">
                        <div className="size-14 border border-purple-200/60 rounded-2xl -rotate-12" />
                        <div className="size-10 border border-purple-200/60 rounded-xl rotate-6 translate-x-8" />
                    </div>
                    <div className="absolute right-24 bottom-32 opacity-30">
                        <div className="size-16 bg-purple-100/40 rounded-2xl -rotate-6 blur-[1px]" />
                    </div>

                    {/* Sparkles/Dots */}
                    <div className="absolute top-12 left-12 size-1 bg-purple-300 rounded-full opacity-50" />
                    <div className="absolute bottom-12 right-12 size-1 bg-purple-300 rounded-full opacity-50" />
                </div>

                {/* --- Main Content --- */}
                <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-card px-4 py-1.5 rounded-full shadow-sm border  mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Coffee className="size-4 " />
                        <span className="text-sm font-medium ">Empower your sales</span>
                    </div>

                    {/* Headlines */}
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight  mb-6">
                        Join for free today
                    </h2>
                    <p className="text-lg md:text-xl  text-muted-foreground max-w-2xl leading-relaxed mb-12">
                        Supercharge your team with the best sales acceleration and LinkedIn automation tools.
                    </p>

                    {/* Features Row */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-sm font-medium text-foreground mb-12">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4 fill-current " />
                            <span>20 free credits</span>
                        </div>
                        <span className="hidden md:block w-px h-4 bg-black/10 " />
                        <div className="flex items-center gap-2">
                            <CreditCard className="size-4" />
                            <span>No credit card required</span>
                        </div>
                        <span className="hidden md:block w-px h-4  bg-black/40" />
                        <div className="flex items-center gap-2">
                            <Linkedin className="size-4 fill-current" />
                            <span>Works with LinkedIn</span>
                        </div>
                    </div>

                    {/* Divider with Moon/Sun accents (Visual flourish from image) */}
                    <div className="w-full max-w-md flex items-center justify-center gap-4 mb-10 opacity-30">
                        <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-full" />
                        {/* Simple decorative SVGs for the center divider elements */}
                        <svg className="size-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        <svg className="size-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"></path></svg>
                        <svg className="size-4 text-purple-400 rotate-180" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-full" />
                    </div>

                    {/* Input Form */}
                    <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
                        <div className="relative w-full">
                            <Input
                                type="email"
                                placeholder="Work email"
                                className="h-12 rounded-lg border-purple-100 bg-white px-4 shadow-sm focus-visible:ring-purple-400 text-base"
                            />
                            {/* Visual mimic of the password manager icon in the image */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-0.5">
                                <div className="size-1 bg-red-400 rounded-full" />
                                <div className="size-1 bg-red-400 rounded-full" />
                                <div className="size-1 bg-red-400 rounded-full" />
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="h-12 w-full sm:w-auto px-8 rounded-lg  font-medium shadow-md "
                        >
                            Create account
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}