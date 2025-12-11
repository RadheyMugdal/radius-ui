import React from "react";

export default function Footer6() {
    return (
        <footer className="w-full bg-background text-foreground py-16 px-6 md:px-12 border-t ">
            <div className="max-w-6xl mx-auto">

                {/* Top Section: Branding & Links */}
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="flex flex-col items-start md:w-1/3">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="size-8 bg-black rounded-[0.6rem] flex items-center justify-center">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-0.5"
                                >
                                    <path d="M5 11c0 4 3 6 7 6s7-2 7-6" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight ">hellotime</span>
                        </div>

                        {/* Tagline */}
                        <h3 className="text-lg font-bold  leading-snug mb-3 max-w-[200px]">
                            The smarter way to schedule teams
                        </h3>

                        {/* Credit */}
                        <p className="text-sm  text-foreground/60 font-medium">
                            Built for you by <a href="#" className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600 transition-colors">Moze</a>.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 w-full md:w-auto">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-sm text-foreground">Why Hellotime?</h4>
                            <ul className="flex flex-col gap-3 text-sm text-foreground/60 font-medium">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Simple Planning</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Workload Management</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">For Agencies</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-sm text-foreground">Product</h4>
                            <ul className="flex flex-col gap-3 text-sm text-foreground/60 font-medium">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Docs</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-sm text-foreground">Resources</h4>
                            <ul className="flex flex-col gap-3 text-sm text-foreground/60 font-medium">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Guides</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 mb-8" />

                {/* Bottom Section: Copyright & Legal */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-400 font-medium">
                    <p>© Hellotime · Milan, Italy</p>

                    <div className="flex flex-wrap gap-x-1">
                        <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                        <span>·</span>
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <span>·</span>
                        <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}