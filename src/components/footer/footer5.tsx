import React from "react";
import { Command } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`fill-current ${className}`}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export default function Footer5() {
    return (
        <footer className="w-full bg-background text-foreground max-w-screen-2xl mx-auto py-12 md:py-20 border-t  ">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

                    {/* --- Brand Column (Left) --- */}
                    {/* Spans 5 columns to give description room to breathe */}
                    <div className="md:col-span-5 flex flex-col justify-between min-h-[200px]">
                        <div className="space-y-6">
                            {/* Logo */}
                            <div className="flex items-center gap-2.5">
                                <div className="bg-black text-white p-1.5 rounded-lg">
                                    <Command className="h-5 w-5" strokeWidth={3} />
                                </div>
                                <span className="text-xl font-bold  tracking-tight">
                                    Logo
                                </span>
                            </div>

                            {/* Description */}
                            <p className=" text-foreground/60 leading-relaxed text-[15px] max-w-sm">
                                Your one-stop solution for creating stunning user interfaces,
                                whether you're a seasoned pro or just getting started.
                            </p>
                        </div>

                        {/* Copyright (Aligned to bottom of this column) */}
                        <div className="mt-8 md:mt-0">
                            <p className="text-sm text-foreground/60 font-medium">
                                © 2023 CopyUI.com. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* --- Links Column --- */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h3 className="font-bold text-foreground mb-6">Links</h3>
                        <ul className="flex flex-col gap-4 text-[15px] font-medium text-foreground/60">
                            <li><a href="#" className="hover:text-foreground transition-colors">Components</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Sign in</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Sign up</a></li>
                        </ul>
                    </div>

                    {/* --- Legal Column --- */}
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-foreground mb-6">Legal</h3>
                        <ul className="flex flex-col gap-4 text-[15px] font-medium text-foreground/60">
                            <li><a href="#" className="hover:text-foreground transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Terms of service</a></li>
                        </ul>
                    </div>

                    {/* --- Social Column (Far Right) --- */}
                    <div className="md:col-span-2 flex flex-col items-start md:items-end">
                        {/* X Icon */}
                        <a
                            href="#"
                            className="text-foreground hover:text-foreground transition-colors p-1"
                            aria-label="Follow us on X"
                        >
                            <XIcon className="h-5 w-5" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}