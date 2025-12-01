"use client"
import React, { useState } from 'react'
import { Switch } from '../ui/switch';

import { Check } from 'lucide-react';
import { Button } from '../ui/button';


const Pricing2 = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    return (
        <div className="min-h-screen bg-background text-foreground max-w-screen-2xl mx-auto font-sans py-16 px-4 md:px-8 flex justify-center">

            <div className="w-full max-w-6xl space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Pay only for <span className="text-primary">what you need</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Join dozens of high-growth startups.
                    </p>

                    <div className="flex items-center justify-center gap-3 pt-4">
                        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                        <span className="text-sm font-medium text-foreground">Annual billing</span>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1: Free Plan */}
                    <div className="space-y-8">
                        {/* Card */}
                        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 h-[320px] flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-foreground">Free plan</h3>
                                <div className="text-4xl font-bold text-foreground">$0</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For early-stage startups looking to get started with data.
                                </p>
                            </div>
                            <Button variant="default" className="w-full rounded-full">Get started for free</Button>
                        </div>

                        {/* Features below card */}
                        <div className="space-y-6 px-2">
                            <div className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-foreground mt-1 shrink-0" strokeWidth={3} />
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">100,000 monthly active rows.</span> Enough to get you started.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-foreground mt-1 shrink-0" strokeWidth={3} />
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">3 connectors.</span> We support over 150 data sources.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Startup */}
                    <div className="space-y-8">
                        {/* Card */}
                        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 h-[320px] flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-primary">Startup</h3>
                                <div className="flex items-baseline gap-1">
                                    <div className="text-4xl font-bold text-primary">$200</div>
                                    <div className="text-xs text-muted-foreground flex flex-col">
                                        <span>per month,</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For scaling startups looking to centralize all their data.
                                </p>
                            </div>
                            <Button variant="outline" className="w-full rounded-full">Try for free</Button>
                        </div>

                        {/* Features below card */}
                        <div className="space-y-6 px-2">
                            <div className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-primary mt-1 shrink-0" strokeWidth={3} />
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">Unlimited rows.</span> Each connector includes 1M rows, then $100 per month for each 1M.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-primary mt-1 shrink-0" strokeWidth={3} />
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">Unlimited connectors.</span> Connect all of your applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Enterprise */}
                    <div className="space-y-8">
                        {/* Card - Gradient Background */}
                        <div className="rounded-3xl p-8 shadow-lg h-[320px] flex flex-col justify-between text-primary-foreground bg-gradient-to-br from-primary to-primary/80">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-primary-foreground/90">Enterprise</h3>
                                <div className="text-4xl font-bold">Custom</div>
                                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                                    For organizations with growing complexity.
                                </p>
                            </div>
                            <Button variant="outline" className="w-full rounded-full text-foreground">Talk to sales</Button>
                        </div>

                        {/* Features below card */}
                        <div className="space-y-6 px-2">
                            <div className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-foreground mt-1 shrink-0" strokeWidth={3} />
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">Bring your own data stack.</span> We support all popular data warehouses and databases.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-foreground mt-1 shrink-0" strokeWidth={3} />
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">SSO/SAML.</span> Enterprise security built-in.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing2