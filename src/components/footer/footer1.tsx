import React from "react";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer1() {
    return (
        <footer className="w-full border-t max-w-screen-2xl mx-auto  bg-background text-foreground py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                {/* --- Top Section: Grid Layout --- */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 mb-12">

                    {/* Brand Column (Spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 flex flex-col items-start gap-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-md">
                                <FileText className="h-5 w-5 text-white" fill="white" />
                            </div>
                            <span className="text-xl font-bold ">Logo</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            Create beautiful professional forms in minutes.
                        </p>
                    </div>

                    {/* Links Column 1: Product */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold  text-sm">Product</h3>
                        <ul className="flex flex-col gap-3 text-sm  opacity-60">
                            <li><a href="#" className="hover:opacity-100 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Embeds</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2: Updates */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold  text-sm">Updates</h3>
                        <ul className="flex flex-col gap-3 text-sm  opacity-60">
                            <li><a href="#" className="hover:opacity-100 transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Links Column 3: Embeds */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold  text-sm">Embeds</h3>
                        <ul className="flex flex-col gap-3 text-sm  opacity-60">
                            <li><a href="#" className="hover:opacity-100 transition-colors">React Embed</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Vue Embed</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">HTML Embed</a></li>
                        </ul>
                    </div>

                    {/* Links Column 4: Integrations */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold  text-sm">Integrations</h3>
                        <ul className="flex flex-col gap-3 text-sm  opacity-60">
                            <li><a href="#" className="hover:opacity-100 transition-colors">Zapier Integration</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Slack Integration</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-colors">Webhooks Integration</a></li>
                        </ul>
                    </div>

                </div>

                {/* --- Bottom Section --- */}
                <Separator className="bg-border" />

                <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 text-sm  opacity-60">
                    <p>© 2023 Useform</p>
                    <span className="hidden md:inline text-gray-300">/</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:opacity-100 transition-colors">Privacy</a>
                        <a href="#" className="hover:opacity-100 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}