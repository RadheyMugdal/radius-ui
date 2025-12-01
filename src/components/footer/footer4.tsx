import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer4() {
    return (
        <footer className="w-full bg-background text-foreground max-w-screen-2xl mx-auto py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* --- Logo Section --- */}
                <div className="flex justify-center mb-16 md:mb-24">
                    <div className="flex items-center gap-3">
                        {/* Custom Ring Logo */}
                        <div className="h-6 w-6 rounded-full border-[3px] border-sky-200" />
                        <span className="text-lg font-bold tracking-widest  uppercase">
                            Logo
                        </span>
                    </div>
                </div>

                {/* --- Links Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12 mb-20">

                    {/* Column 1: Platform */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold tracking-widest  uppercase">
                            Platform
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {["Features", "Integrations", "Trust and Security", "Pricing"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm  opacity-60 hover:opacity-75 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Customers */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold tracking-widest  uppercase">
                            Customers
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {["Customer Stories", "Causal for Finance", "Causal for Startups"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm  opacity-60 hover:opacity-75 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Integrations */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold tracking-widest  uppercase">
                            Integrations
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {["Quickbooks", "Xero", "NetSuite", "Salesforce", "Snowflake"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm opacity-60 hover:opacity-75 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold tracking-widest  uppercase">
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {["Blog", "Documentation", "Product Updates", "Startup Finance Jobs", "Careers"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm opacity-60 hover:opacity-75 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* --- Footer Bottom --- */}
                <Separator className="bg-border" />

                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-8 pt-2">
                    <p className="text-sm  opacity-60">
                        © 2023 Causal, Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-foreground/60 hover:text-foreground/75 transition-colors">
                            <Twitter className="h-5 w-5 fill-current" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-foreground/75 transition-colors">
                            <Github className="h-5 w-5 fill-current" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-foreground/75 transition-colors">
                            <Linkedin className="h-5 w-5 fill-current" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}