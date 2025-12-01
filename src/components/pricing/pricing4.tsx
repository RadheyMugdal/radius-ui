import React from "react";
import { Check, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Pricing4() {
    return (
        <section className="relative max-w-screen-2xl mx-auto w-full py-12 md:py-24 bg-muted/50">
            <div className="container px-4 mx-auto max-w-6xl">

                {/* --- Header Section --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8 relative">

                    {/* Decorative Cursor: Doruk */}
                    <div className="absolute -top-6 left-[280px] hidden md:flex flex-col items-start z-10 animate-bounce duration-3000">
                        <MousePointer2 className="h-5 w-5 fill-destructive text-destructive rotate-[-15deg] translate-y-1 translate-x-1" />
                        <div className="bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm ml-3">
                            Doruk
                        </div>
                    </div>

                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" className="bg-card px-3 py-1 font-normal text-muted-foreground shadow-sm">
                                Pricing
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                            Budget-friendly pricing <br /> alternatives
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Affordability is a core value at AlignUI Design System.
                        </p>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-4 relative">
                        {/* Decorative Cursor: Enes */}
                        <div className="absolute  -top-12 -right-8 hidden md:flex flex-col items-start z-10">
                            <MousePointer2 className="h-5 w-5 fill-sky-500 text-sky-500 rotate-[-15deg] translate-y-1 translate-x-1" />
                            <div className="bg-sky-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm ml-3">
                                Enes
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Top-tier design quality</span>
                            <span className="text-emerald-500">✓</span>
                        </div>
                        <p className="text-sm text-muted-foreground text-left lg:text-right max-w-sm">
                            One-time payment grants you lifetime access and continuous updates, with unlimited projects.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Button variant="outline" className="rounded-full px-6">
                                Contact Us
                            </Button>
                            <span className="text-sm text-muted-foreground">• For enterprise-level purchases</span>
                        </div>
                    </div>
                </div>

                {/* --- Pricing Cards Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                    {/* Card 1: Standard (Green Theme) */}
                    <div className="relative group">
                        <div className="absolute -top-3 left-6 z-10">
                            <Badge className="border-none px-3 py-1 uppercase text-xs font-bold tracking-wider rounded-sm">
                                Most Popular
                            </Badge>
                        </div>
                        <Card className="h-full border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Left Column: Price */}
                                    <div className="p-8 md:w-[40%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
                                        <div>
                                            <Badge variant="secondary" className="mb-4 bg-muted text-muted-foreground hover:bg-muted uppercase tracking-wider text-[10px] px-2 rounded-sm border-none">
                                                Standard
                                            </Badge>
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span className="text-5xl font-bold tracking-tighter text-foreground">$119</span>
                                                <span className="text-3xl font-bold text-muted-foreground/40">.99</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-8">
                                                For individual designers.
                                            </p>
                                        </div>
                                        <Button className="w-full   font-medium rounded-full">
                                            Buy now
                                        </Button>
                                    </div>

                                    {/* Right Column: Features */}
                                    <div className="p-8 md:w-[60%] bg-card rounded-r-xl">
                                        <ul className="space-y-5">
                                            {[
                                                "One-user only license",
                                                "Sector-specific Products",
                                                "Unique Widgets & Dashboards",
                                                "5900+ Components",
                                                "1200+ Asset Collection"
                                            ].map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 rounded-full border border-emerald-500/30 p-0.5">
                                                        <Check className="h-3 w-3 text-emerald-500" strokeWidth={3} />
                                                    </div>
                                                    <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Card 2: Team (Dark Theme) */}
                    <Card className="h-full border-border shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left Column: Price */}
                                <div className="p-8 md:w-[40%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
                                    <div>
                                        <Badge variant="secondary" className="mb-4 bg-muted text-muted-foreground hover:bg-muted uppercase tracking-wider text-[10px] px-2 rounded-sm border-none">
                                            Team
                                        </Badge>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-5xl font-bold tracking-tighter text-foreground">$349</span>
                                            <span className="text-3xl font-bold text-muted-foreground/40">.99</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-8">
                                            For team of 5 designers.
                                        </p>
                                    </div>
                                    <Button className="w-full bg-foreground hover:bg-foreground/90 text-background font-medium rounded-full">
                                        Buy now
                                    </Button>
                                </div>

                                {/* Right Column: Features */}
                                <div className="p-8 md:w-[60%] bg-card rounded-r-xl">
                                    <ul className="space-y-5">
                                        {[
                                            "From 2 to 5 users license",
                                            "Sector-specific Products",
                                            "Unique Widgets & Dashboards",
                                            "5900+ Components",
                                            "1200+ Asset Collection"
                                        ].map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="flex-shrink-0 rounded-full border border-emerald-500/30 p-0.5">
                                                    <Check className="h-3 w-3 text-emerald-500" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>

                {/* --- Footer Text --- */}
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        We value Purchasing Power Parity (PPP) and offer discount codes. To prove your eligibility, please send your student ID, driver's license, or similar documentation. You can contact us on our Contact page.
                    </p>
                </div>

            </div>
        </section>
    );
}