import React from "react";
import { CheckCircle2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Feature1() {
    return (
        <div className="w-full bg-background text-foreground max-w-screen-2xl mx-auto py-24 space-y-32">

            {/* --- Feature 1: Form Builder --- */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-6">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs">
                            Say goodbye to painful forms
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold  leading-tight">
                            Your first form in minutes
                        </h2>
                        <p className="text-lg  text-foreground/60 leading-relaxed">
                            Useform makes it easy for you to create professional forms in minutes
                            with an intuitive drag-and-drop editor. No more wasting time on tedious form creation.
                        </p>
                        <ul className="space-y-4 pt-2">
                            {[
                                "Your first form in 5 minutes",
                                "Easy and intuitive to use",
                                "Generous free-tier"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/60 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-primary fill-blue-50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <img
                        src="/feature/feature1.jpg"
                        alt="Feature 1"
                        className="order-2 md:order-1 w-full h-[300px] md:h-[400px] rounded-xl flex items-center justify-center "
                    />

                </div>
            </section>

            {/* --- Feature 2: Integrations --- */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <img
                        src="/feature/feature2.jpg"
                        alt="Feature 1"

                        className="order-2 md:order-1 w-full h-[300px] md:h-[400px] rounded-xl flex items-center justify-center "
                    />

                    {/* Text Content */}
                    <div className="order-1 md:order-2 space-y-6">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs">
                            Integrations for all your needs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold  leading-tight">
                            Integrate & connect with your favorite tools
                        </h2>
                        <p className="text-lg text-foreground/60 leading-relaxed">
                            Useform make it easy to connect your forms submissions to your favorite tools.
                            We support integrations with Zapier, Airtable, Google Sheets, Slack, and more.
                        </p>
                        <ul className="space-y-4 pt-2">
                            {[
                                "Connect with Zapier & webhooks",
                                "More than 5,000 Zapier integrations available",
                                "Need a custom integration? Let us know!"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/60 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-primary fill-blue-50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* --- Feature 3: Templates --- */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-6">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs">
                            Build forms faster
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold  leading-tight">
                            Pick from our library of pre-built templates
                        </h2>
                        <p className="text-lg text-foreground/60 leading-relaxed">
                            To make it even easier for you to create your forms, we have created a library
                            of pre-built templates. You can easily customize them to fit your needs.
                        </p>
                        <ul className="space-y-4 pt-2">
                            {[
                                "Templates for every use-case",
                                "Easily customize your templates",
                                "Need help on a custom template? Let us know!"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/60 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-primary fill-blue-50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <img
                        src="/feature/feature3.jpg"
                        alt="Feature 1"

                        className="order-2 md:order-1 w-full h-[300px] md:h-[400px] rounded-xl flex items-center justify-center "
                    />

                </div>
            </section>

        </div>
    );
}