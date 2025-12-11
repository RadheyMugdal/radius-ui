"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Package } from "lucide-react";

export default function Pricing7() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

    const plans = [
        {
            name: "Creator",
            price: "39",
            period: "month/seat",
            description: "Powerful AI features to create & improve your content everywhere you work online.",
            buttonText: "Start Free 7-Day Trial",
            buttonVariant: "outline",
            features: [
                "1 user seat",
                "1 Brand Voice",
                "Access to Jasper Chat",
                "Access to SEO mode",
                "Use AI everywhere with browser extension",
            ],
        },
        {
            name: "Pro",
            price: "59",
            period: "month/seat",
            description: "Advanced AI features to create content for multiple brands & collaborate on campaigns.",
            buttonText: "Start Free 7-Day Trial",
            buttonVariant: "outline",
            features: [
                "Everything in Creator, plus:",
                "Includes 1 seat, add up to 5",
                "3 Brand Voices",
                "10 Knowledge assets",
                "3 Instant Campaigns",
                "Collaboration & user management",
                "AI Image generation & editing tools",
            ],
        },
        {
            name: "Business",
            isCustom: true, // Special flag for the Business card layout
            description: "Personalized AI features with additional control, security, team training & tech support.",
            buttonText: "Contact Sales",
            buttonVariant: "default", // We will style this specifically
            features: [
                "Everything in Pro, plus:",
                "Unlimited feature usage",
                "Custom Workflows and Apps*",
                "Groups & document collaboration",
                "Custom Style Guides with X-ray view",
                "Enterprise-grade security & governance",
                "Advanced admin panel with permissions",
                "API access*",
                "Dedicated account management team with premium support",
            ],
        },
    ];

    return (
        <section className="w-full bg-primary  text-primary-foreground min-h-screen py-16 px-6 ">
            <div className="max-w-7xl mx-auto">

                {/* --- Header Section --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium  tracking-tight leading-[1.1] max-w-2xl">
                        Get the AI built for <br />
                        better marketing results
                    </h1>

                    {/* Toggle Controls */}
                    <div className="flex flex-col items-end gap-3">
                        <p className=" text-primary-foreground/80 text-sm font-medium">
                            Jasper's plans & pricing are designed <br className="hidden md:block" />
                            to meet your needs as you grow
                        </p>

                        {/* Custom Pill Toggle */}
                        <div className="bg-primary/20 p-1 rounded-full flex items-center border ">
                            <button
                                onClick={() => setBillingCycle("monthly")}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "monthly"
                                    ? "bg-background text-primary shadow-sm"
                                    : "text-primary-foreground hover:text-primary-foreground/80"
                                    }`}
                            >
                                Monthly billing
                            </button>
                            <button
                                onClick={() => setBillingCycle("yearly")}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${billingCycle === "yearly"
                                    ? "bg-background text-primary shadow-sm"
                                    : "text-primary-foreground hover:text-primary-foreground/80"
                                    }`}
                            >
                                Yearly billing
                                <span className="text-xs ml-1 font-normal opacity-80">Save ~20%</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- Pricing Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-card text-card-foreground rounded-[4px] p-8 flex flex-col h-full "
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-medium  tracking-tight">
                                    {plan.name}
                                </h3>

                                {plan.isCustom ? (
                                    <div className="text-right">
                                        <Package className="size-8 ml-auto mb-1 stroke-1" />
                                        <div className="text-xs font-medium text-muted-foreground">Custom<br />pricing</div>
                                    </div>
                                ) : (
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-medium text-muted-foreground align-top">$</span>
                                        <span className="text-4xl font-medium text-muted-foreground">{plan.price}</span>
                                        <span className="text-xs font-medium text-muted-foreground w-12 leading-tight">
                                            {plan.period}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm leading-relaxed mb-8 h-16">
                                {plan.description}
                            </p>

                            {/* CTA Button */}
                            <Button
                                variant={plan.buttonVariant === "outline" ? "outline" : "default"}
                                className={`w-full h-12 rounded-md font-semibold text-base mb-8  ${plan.buttonVariant === "default"
                                    ? " border-transparent shadow-md"
                                    : ""
                                    }`}
                            >
                                {plan.buttonText}
                            </Button>

                            {/* Features List */}
                            <div className="mt-auto">
                                <div className="text-sm font-medium  mb-4">
                                    {plan.name === "Creator" ? "Plan includes:" : `Everything in ${plans[index - 1]?.name || 'previous'}, plus:`}
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <Check className="size-4  mt-0.5 shrink-0 stroke-[3]" />
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}