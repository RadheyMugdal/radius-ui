import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Pricing5() {
    return (
        <section className="w-full max-w-screen-2xl mx-auto py-16  bg-background text-foreground">
            <div className="container px-4 mx-auto max-w-5xl">

                {/* --- Header --- */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-semibold ">
                        Pricing
                    </h2>
                    <p className=" opacity-60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Choose the plan that works best for you and/or your team. We are always
                        available to help you find the plan that works best or help you develop a
                        custom plan for your needs.
                    </p>
                </div>

                {/* --- Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* Free Plan */}
                    <Card className="flex flex-col h-full shadow-sm rounded-lg">
                        <CardHeader className="pb-4 pt-8 px-8">
                            <CardTitle className="text-2xl font-bold mb-3">Free</CardTitle>
                            <CardDescription className="text-base leading-normal">
                                Everything you need to get started with Openlayer.
                                Ideal for hobbyists or students.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                            <Button className="w-full  font-medium mb-8 py-6 text-base">
                                Get started for free
                            </Button>

                            <ul className="space-y-4">
                                {[
                                    "1 user",
                                    "1 project",
                                    "Development & monitoring modes",
                                    "100,000 monthly monitoring predictions",
                                    "Community Discord support",
                                    "All supported AI task types"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-white" strokeWidth={3} />
                                            </div>
                                        </div>
                                        <span className=" opacity-60 text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Custom Plan */}
                    <Card className="flex flex-col h-full  shadow-sm rounded-lg">
                        <CardHeader className="pb-4 pt-8 px-8">
                            <CardTitle className="text-2xl font-bold mb-3">Custom</CardTitle>
                            <CardDescription className="text-base leading-normal">
                                Ideal for more advanced ML teams looking to take their
                                workflows to the next level.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                            <Button variant={"outline"} className="w-full   font-medium mb-8 py-6 text-base">
                                Contact us
                            </Button>

                            <div className="space-y-4">
                                <p className="font-medium text-[15px]">Everything in Free, plus</p>
                                <ul className="space-y-4">
                                    {[
                                        "5+ users",
                                        "Unlimited projects",
                                        "10M+ annual predictions",
                                        "SAML / SSO",
                                        "Dedicated support channel",
                                        "Custom metrics",
                                        "Explainability",
                                        "On-prem deployment"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                                                </div>
                                            </div>
                                            <span className=" opacity-60 text-[15px]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}