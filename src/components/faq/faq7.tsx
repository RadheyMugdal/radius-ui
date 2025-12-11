import React from "react";

export default function FAQ7() {
    return (
        <section className="w-full bg-background text-foreground py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">
                    FAQs
                </h2>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

                    {/* --- Left Column --- */}
                    <div className="space-y-12">

                        {/* Item 1 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                What's a Monthly Tracked User (MTU)?
                            </h3>
                            <p className="text-base  text-muted-foreground leading-relaxed">
                                An MTU is defined as the number of unique end-users seen by Bucket in a given month.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                Will I have MTU usage visibility?
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Yes. On the billing page, you can always see your MTU usage in real time.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                What happens if I use more MTUs on the Free plan?
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                There are no overage options available on the Free plan. Instead, you'll be prompted to upgrade to the Pro plan.
                            </p>
                        </div>

                    </div>

                    {/* --- Right Column --- */}
                    <div className="space-y-12">

                        {/* Item 4 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                What happens if I use more MTUs on the Pro plan?
                            </h3>
                            <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    The Pro plan comes with a base of 10K MTUs per month. Additional MTUs come in bundles of 25K MTUs.
                                </p>
                                <p>
                                    If you go over the base amount, we'll add the necessary MTU bundles needed to cover your usage for the month.
                                </p>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                Can I host my data only in the EU?
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Yes, please <a href="#" className="text-primary hover:text-indigo-800 underline underline-offset-4 decoration-indigo-600/30">contact us</a>. Our default data residency setting is Global but we do support an EU-only option.
                            </p>
                        </div>

                        {/* Item 6 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                Do you have a Startup plan?
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Yes! Startups can get 50% off the Pro plan for the first year. Please fill out <a href="#" className="text-primary hover:text-indigo-800 underline underline-offset-4 decoration-indigo-600/30">this form</a> to apply.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}