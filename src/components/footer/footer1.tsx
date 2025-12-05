import React from "react";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer1() {
    return (
        <footer className="mx-auto w-full max-w-screen-2xl border-t bg-background py-12 text-foreground">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
                {/* Top wrapper to align logo + grid on large screens  */}
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start gap-4 lg:max-w-xs">
                        <div className="flex items-center gap-2">
                            <div className="rounded-md bg-primary p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-5 w-5 text-white" aria-hidden="true">
                                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold">Logo</span>
                        </div>

                        <p className="max-w-xs text-sm leading-relaxed text-foreground/60">Create beautiful professional forms in minutes.</p>
                    </div>

                    {/* Main Links Grid */}
                    <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold">Product</h3>
                            <ul className="flex flex-col gap-3 text-sm opacity-60">
                                <li><a href="#" className="transition-colors hover:opacity-100">Pricing</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Features</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Integrations</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Embeds</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold">Updates</h3>
                            <ul className="flex flex-col gap-3 text-sm opacity-60">
                                <li><a href="#" className="transition-colors hover:opacity-100">Changelog</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Blog</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold">Embeds</h3>
                            <ul className="flex flex-col gap-3 text-sm opacity-60">
                                <li><a href="#" className="transition-colors hover:opacity-100">React Embed</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Vue Embed</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">HTML Embed</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold">Integrations</h3>
                            <ul className="flex flex-col gap-3 text-sm opacity-60">
                                <li><a href="#" className="transition-colors hover:opacity-100">Zapier Integration</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Slack Integration</a></li>
                                <li><a href="#" className="transition-colors hover:opacity-100">Webhooks Integration</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 h-[1px] w-full bg-border"></div>

                <div className="mt-8 flex flex-col items-start gap-4 text-sm opacity-60 md:flex-row md:items-center">
                    <p>© 2023 Useform</p>
                    <span className="hidden text-gray-300 md:inline">/</span>
                    <div className="flex gap-4">
                        <a href="#" className="transition-colors hover:opacity-100">Privacy</a>
                        <a href="#" className="transition-colors hover:opacity-100">Terms</a>
                    </div>
                </div>
            </div>
        </footer>

    );
}