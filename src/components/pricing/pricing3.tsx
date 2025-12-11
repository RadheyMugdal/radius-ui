"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';

const EmployeeSelect = ({ type = "select" }: { type?: "select" | "static" }) => {
    if (type === "static") {
        return (
            <div className="w-full bg-muted border-transparent text-muted-foreground text-xs font-bold px-3 py-3 rounded mb-4 uppercase">
                Up to 50 employees
            </div>
        );
    }
    return (
        <div className="relative w-full mb-4 group cursor-pointer">
            <div className="w-full bg-card border border-border text-foreground text-xs font-bold px-3 py-3 rounded flex items-center justify-between uppercase hover:border-primary transition-colors">
                <span>1 - 20 Employees</span>
                <ChevronDown className="h-4 w-4 text-primary" />
            </div>
        </div>
    );
};

const Toggle = ({ enabled, setEnabled, label }: { enabled: boolean; setEnabled: (val: boolean) => void; label: string }) => {
    return (
        <div className="flex items-center gap-2">
            <Switch checked={enabled} onCheckedChange={setEnabled} />
            <span className="text-[10px] font-bold text-foreground uppercase">{label}</span>
        </div>
    );
};

// --- Main Page Component ---

export default function WorkablePricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    // Helper to render premium tools section
    const renderTools = (tools: any[], included = false) => (
        <div className="border border-border rounded-lg p-5 mt-auto bg-card">
            <h5 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Premium Tools</h5>
            <p className="text-xs text-muted-foreground mb-4">
                {included ? "Hiring tools included with this plan." : "Optional hiring tools for this plan."}
            </p>
            <ul className="space-y-3">
                {tools.map((tool, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2 font-bold text-primary cursor-pointer hover:underline">
                            {tool.name} <ChevronRight className="h-3 w-3" />
                        </div>
                        <span className="font-medium text-muted-foreground">
                            {included ? "Included" : tool.price}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto bg-background text-foreground  relative overflow-hidden pb-20">

            {/* Decorative Background Elements */}
            <div className="absolute top-40 left-0 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            {/* Geometric Decorations */}
            <div className="absolute top-64 left-4">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-orange-500 border-r-[10px] border-r-transparent rotate-12 opacity-80"></div>
            </div>
            <div className="absolute bottom-1/3 right-10 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400 translate-y-2"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            </div>

            <div className="max-w-6xl mx-auto pt-16 px-4 md:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center space-y-6 mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">
                        Feature-rich plans with upfront pricing
                    </h1>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                        Over 27,000 companies have hired 1.5 million candidates with Workable. Manage your entire process, from sourcing to employee onboarding and management with the world's most complete recruiting software.
                    </p>
                    <div className="pt-2">
                        <Button className="rounded-full">Start a free trial <ChevronRight className="ml-1 h-4 w-4" /></Button>
                    </div>
                </div>

                {/* Main Pricing Container */}
                <div className="bg-card rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">

                        {/* Starter Plan */}
                        <div className="flex flex-col h-full md:pr-6 pt-6 md:pt-0">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold text-foreground">Starter</h2>
                                <Badge variant="secondary">Monthly Only</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">Designed for occasional hiring</p>

                            <EmployeeSelect type="static" />

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-foreground">$149</span>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">USD<br />/month</span>
                                </div>
                            </div>

                            {/* Includes Box */}
                            <div className="bg-muted rounded-lg p-5 mb-6 flex-grow">
                                <div className="text-xs font-bold text-foreground mb-3">Includes:</div>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="underline cursor-pointer text-primary mb-3">Features available in all plans</li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Up to 2 active jobs
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> 200 AI sourcing <span className="underline decoration-dotted cursor-help">profile views</span> per month
                                    </li>
                                </ul>
                            </div>

                            {renderTools([
                                { name: "VIDEO INTERVIEWS", price: "+ $49/mo" },
                                { name: "TEXTING", price: "+ $39/mo" },
                                { name: "ASSESSMENTS", price: "+ $29/mo" },
                            ])}
                        </div>

                        {/* Standard Plan */}
                        <div className="flex flex-col h-full md:px-6 pt-8 md:pt-0">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold text-foreground">Standard</h2>
                                <div className="flex flex-col items-end">
                                    <Toggle enabled={isAnnual} setEnabled={setIsAnnual} label="ANNUALLY" />
                                    <span className="text-[10px] font-bold text-primary mt-1">SAVE $732</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">Designed for consistent hiring</p>

                            <EmployeeSelect />

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-foreground">$299</span>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">USD<br />/month</span>
                                </div>
                                <div className="text-[10px] font-bold text-muted-foreground mt-1">$3,588 USD/year</div>
                            </div>

                            {/* Includes Box */}
                            <div className="bg-muted rounded-lg p-5 mb-6 flex-grow">
                                <div className="text-xs font-bold text-foreground mb-3">Includes:</div>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="underline cursor-pointer text-primary mb-3">Features available in all plans</li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Unlimited active jobs
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> 1,000 AI sourcing <span className="underline decoration-dotted cursor-help">profile views</span> per month
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Assisted account onboarding
                                    </li>
                                </ul>
                            </div>

                            {renderTools([
                                { name: "VIDEO INTERVIEWS", price: "+ $99/mo" },
                                { name: "TEXTING", price: "+ $79/mo" },
                                { name: "ASSESSMENTS", price: "+ $59/mo" },
                            ])}
                        </div>

                        {/* Premier Plan */}
                        <div className="flex flex-col h-full md:pl-6 pt-8 md:pt-0">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold text-foreground">Premier</h2>
                                <Badge variant="secondary">Annually Only</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">Designed for strategic hiring</p>

                            <EmployeeSelect />

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-foreground">$599</span>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">USD<br />/month</span>
                                </div>
                                <div className="text-[10px] font-bold text-muted-foreground mt-1">$7,188 USD/year</div>
                            </div>

                            {/* Includes Box */}
                            <div className="bg-muted rounded-lg p-5 mb-6 flex-grow">
                                <div className="text-xs font-bold text-foreground mb-3">Includes:</div>
                                <ul className="space-y-2 text-xs text-muted-foreground">
                                    <li className="underline cursor-pointer text-primary mb-3">Features available in all plans</li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Unlimited active jobs
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> 20,000 AI sourcing <span className="underline decoration-dotted cursor-help">profile views</span> per year
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Hiring plan with requisition approvals
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Five native language options
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Dedicated account manager
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Single sign-on support
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1 h-1 rounded-full bg-muted-foreground shrink-0"></span> Custom account onboarding
                                    </li>
                                </ul>
                            </div>

                            {renderTools([
                                { name: "VIDEO INTERVIEWS", price: "Included" },
                                { name: "TEXTING", price: "Included" },
                                { name: "ASSESSMENTS", price: "Included" },
                            ], true)}
                        </div>

                    </div>

                    {/* Footer of Card */}
                    <div className="mt-12 text-center space-y-6 pt-8 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                            The 15-day trial includes the complete feature set of the Standard plan. No credit card required.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Button className="w-full md:w-auto h-12 px-8 text-base rounded-full">Start a 15-day trial <ChevronRight className="ml-1 h-4 w-4" /></Button>
                            <span className="text-sm text-muted-foreground">or <button className="text-primary font-bold underline hover:text-primary/80">Get a live demo</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}