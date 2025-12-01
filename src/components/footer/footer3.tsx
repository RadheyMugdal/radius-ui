import React from "react";
import {
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Footer3() {
    return (
        <footer className="w-full bg-amber-50 text-foreground pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* --- Top CTA Section --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight mb-3 text-foreground">
                            Dovetail, your insights hub
                        </h2>
                        <p className="text-lg text-foreground/60 leading-relaxed">
                            Translate your data into insights and bring your customer into every decision. Try for free.
                        </p>
                    </div>

                    <div className="w-full max-w-md flex gap-3">
                        <Input
                            type="email"
                            placeholder="Enter email address"
                            className="bg-white border-gray-200 h-12 text-base px-4 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-purple-900"
                        />
                        <Button className="h-12 px-6 bg-black hover:bg-white text-white font-medium text-base">
                            Try for free
                        </Button>
                    </div>
                </div>

                {/* --- Links Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">

                    {/* Column 1: Product */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-sm ">Product</h3>
                        <ul className="flex flex-col gap-3 text-[15px] text-foreground/60">
                            <li><a href="#" className="hover:text-primary transition-colors">Insights</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Analysis</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Scale</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Log in</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Resources & Help */}
                    <div className="flex flex-col gap-10">
                        {/* Resources Group */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-sm ">Resources</h3>
                            <ul className="flex flex-col gap-3 text-[15px] text-foreground/60">
                                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Tips and tricks</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Best practices</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Product updates</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Live demo</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
                            </ul>
                        </div>


                    </div>

                    {/* Column 3: Community & Topics */}
                    <div className="flex flex-col gap-10">
                        {/* Community Group */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-sm ">Community</h3>
                            <ul className="flex flex-col gap-3 text-[15px] text-foreground/60">
                                <li><a href="#" className="hover:text-primary transition-colors">Customers</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">User group</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                                        Outlier <ArrowUpRight className="h-3 w-3" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Column 4: Company & Socials */}
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-sm ">Company</h3>
                            <ul className="flex flex-col gap-3 text-[15px] text-foreground/60">
                                <li><a href="#" className="hover:text-primary transition-colors">About us</a></li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                                        Careers
                                        <span className=" bg-muted text-muted-foreground text-xs font-bold px-1.5 py-0.5 rounded-sm">4</span>
                                    </a>
                                </li>
                                <li><a href="#" className="hover:text-primary transition-colors">Security & privacy</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="flex justify-end w-full  my-4">
                    {/* Social Icons */}
                    <div className="flex gap-5 mt-8 md:mt-0 ">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* --- Bottom Bar --- */}
                <Separator className="bg-border mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#444] gap-4">
                    <p>© Dovetail Research Pty. Ltd.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}