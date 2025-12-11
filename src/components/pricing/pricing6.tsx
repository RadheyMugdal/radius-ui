"use client"
import React, { useState } from "react";
import { Check, Star } from "lucide-react";

// --- Components ---

const CheckIcon = () => (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
    </div>
);

const FeatureItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
        <CheckIcon />
        <span className="leading-5">{text}</span>
    </li>
);

const Pricing6 = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
        "annual"
    );

    return (
        <div className="min-h-screen bg-background  text-foreground py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-3">Upgrade Plan</h1>
                    <p className="text-muted-foreground text-lg">
                        Fixoria pricing plan are designed to meet your needs as you grow
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="bg-muted p-1.5 rounded-xl inline-flex relative">
                        {/* Monthly Button */}
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${billingCycle === "monthly"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Monthly
                        </button>

                        {/* Annual Button */}
                        <button
                            onClick={() => setBillingCycle("annual")}
                            className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${billingCycle === "annual"
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Annual{" "}
                            <span className="opacity-90 font-normal">(Save 50%)</span>
                        </button>
                    </div>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 1. Creator Plan */}
                    <div className="border border-border rounded-3xl p-8 flex flex-col bg-card">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Creator</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed h-10">
                                Unlock powerful AI tools to create your content, wherever you work
                                online.
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">$19</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Per user & per month
                            </p>
                        </div>

                        <button className="w-full py-3.5 rounded-xl bg-muted text-muted-foreground font-bold hover:bg-secondary transition-colors mb-3">
                            Current Plan
                        </button>
                        <p className="text-xs text-center text-primary font-semibold mb-8">
                            Start <span className="font-bold">Free 7-Days</span> Trial
                        </p>

                        <div className="border-t border-border pt-8 mt-auto">
                            <h4 className="font-bold mb-5">Features</h4>
                            <p className="text-xs text-muted-foreground mb-5">
                                Everything in our free plan includes
                            </p>
                            <ul className="space-y-4">
                                <FeatureItem text="01 User Access" />
                                <FeatureItem text="Access to Fixoria AI Chatbot" />
                                <FeatureItem text="Access to SEO Mode" />
                                <FeatureItem text="AI Image Generation and editing Tool" />
                                <FeatureItem text="03 Brand Voice Access" />
                                <FeatureItem text="Use AI with Browser Extension" />
                            </ul>
                        </div>
                    </div>

                    {/* 2. Pro Plan (Highlighted) */}
                    <div className="border border-primary/40 bg-primary/10 rounded-3xl p-8 flex flex-col relative overflow-hidden">
                        {/* Popular Badge */}
                        <div className="absolute top-8 right-8 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3" /> Popular
                        </div>

                        <div className="mb-6 pr-16">
                            <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed h-10">
                                Leverage advanced AI to create content for multiple brands on
                                campaigns.
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">$99</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Per user, per month & billed annually
                            </p>
                        </div>

                        <button className="w-full py-3.5 rounded-xl border-2 border-primary text-primary font-bold bg-background hover:bg-primary/10 transition-colors mb-3">
                            Switch to this Plan
                        </button>
                        <p className="text-xs text-center text-primary font-semibold mb-8">
                            Start <span className="font-bold">Free 7-Days</span> Trial
                        </p>

                        <div className="border-t border-primary/40 pt-8 mt-auto">
                            <h4 className="font-bold mb-5">Features</h4>
                            <p className="text-xs text-muted-foreground mb-5">
                                Everything in Creator & Plus
                            </p>
                            <ul className="space-y-4">
                                <FeatureItem text="05 User Access" />
                                <FeatureItem text="10 Knowledge Assets" />
                                <FeatureItem text="Access to Pro SEO Mode" />
                                <FeatureItem text="Collaboration with our Management" />
                                <FeatureItem text="10 Brand Voice Access" />
                                <FeatureItem text="01 Data Custom training" />
                            </ul>
                        </div>
                    </div>

                    {/* 3. Business Plan */}
                    <div className="border border-border rounded-3xl p-8 flex flex-col bg-card">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Business Plan</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed h-10">
                                Personalized AI with enhanced control, security, team training, and
                                tech support.
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-sm font-bold text-muted-foreground mr-1">
                                    Start from
                                </span>
                                <span className="text-4xl font-bold">$199</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Custom Pricing, Custom Billing
                            </p>
                        </div>

                        <button className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg transition-all mb-3">
                            Contact Sales
                        </button>
                        <p className="text-xs text-center text-primary font-semibold mb-8">
                            Start <span className="font-bold">Free 15-Days</span> Trial
                        </p>

                        <div className="border-t border-border pt-8 mt-auto">
                            <h4 className="font-bold mb-5">Features</h4>
                            <p className="text-xs text-muted-foreground mb-5">
                                Everything in Creator, Plus & Business
                            </p>
                            <ul className="space-y-4">
                                <FeatureItem text="Unlimited Feature Usage" />
                                <FeatureItem text="Performance Analytics & Insights" />
                                <FeatureItem text="Custom Style Guides with New View" />
                                <FeatureItem text="Advanced Admin Panel Access" />
                                <FeatureItem text="Group Document Collaboration" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing6;
