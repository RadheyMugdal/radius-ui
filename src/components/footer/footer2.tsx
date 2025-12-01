import React from "react";
import { Twitter, Github, Linkedin, Layers } from "lucide-react";

export default function Footer2() {
    return (
        <footer className="w-full bg-background border-t max-w-screen-2xl mx-auto text-foreground py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* --- Main Grid Layout --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column (Spans 4 columns on large screens) */}
                    <div className="lg:col-span-4 flex flex-col items-start gap-6 pr-0 lg:pr-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-sm">
                                <Layers className="h-6 w-6  text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-bold  tracking-tight">shelf</span>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 text-foreground/60 leading-relaxed text-[15px]">
                            <p>
                                Shelf makes it easy to keep track of what you own. Our asset
                                management software lets you create, categorize, and search your
                                inventory quickly and easily. With powerful reporting features, you'll
                                have a clear picture of what you own and where it's located.
                            </p>
                            <p className="font-medium  text-foreground/50 ">
                                Asset Tagging and Tracking Infrastructure for Everyone ™
                            </p>
                        </div>

                        {/* Product Hunt Badge Mockup */}
                        <div className="inline-flex items-center gap-4 px-4 py-2 bg-card border border-orange-200 rounded-xl shadow-sm hover:border-orange-300 transition-colors cursor-pointer group w-fit">
                            <div className="flex flex-col items-center justify-center bg-orange-500 rounded-full h-8 w-8">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-orange-500 font-bold uppercase tracking-wide">Featured on</span>
                                <span className=" font-bold text-sm">Product Hunt</span>
                            </div>
                            <div className="flex flex-col items-center ml-2 pl-4 border-l border-gray-100">
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-gray-400 mb-0.5"></div>
                                <span className=" opacity-60 text-xs font-semibold">232</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Section (Spans 8 columns, internally a grid) */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">

                        {/* Column 1: Alternatives */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-primary">Alternatives</h3>
                            <ul className="flex flex-col gap-2.5 text-sm text-foreground/60">
                                {["Duck Track & Pack", "Kolekto", "Asset Panda", "Hardcat", "Bluefolder", "Hector", "Brite Check", "UpKeep", "EzOfficeInventory", "Zoho Inventory", "More Alternatives"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Blog */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-primary">Blog</h3>
                            <ul className="flex flex-col gap-2.5 text-sm text-foreground/60">
                                {[
                                    "Risk Management & Security",
                                    "Team Collaboration & Communication",
                                    "Asset Disposal & Retirement",
                                    "Maintenance & Repair Management",
                                    "Trends & Innovations",
                                    "QR Code Technology",
                                    "Asset Tracking & Management"
                                ].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Useful */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-primary">Useful</h3>
                            <ul className="flex flex-col gap-2.5 text-sm text-foreground/60">
                                {["Home", "Industries", "Alternatives", "Asset Tags", "Blog"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Follow us */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-primary">Follow us</h3>
                            <ul className="flex flex-col gap-3 text-sm text-foreground/60">
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <Twitter className="h-4 w-4 fill-current" />
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <Github className="h-4 w-4 fill-current" />
                                        <span>Github</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <Linkedin className="h-4 w-4 fill-current" />
                                        <span>Linkedin</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* --- Copyright --- */}
                <div className="pt-8 text-sm text-foreground/60">
                    <p>© 2023 Shelf. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}