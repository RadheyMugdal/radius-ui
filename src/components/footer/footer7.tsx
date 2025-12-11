import React from "react";
import { ChevronRight, Mail } from "lucide-react";

export default function Footer7() {
    return (
        <footer className="w-full bg-background text-foreground  border-t ">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* --- Top Section: Logo & Quote --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 text-sm">
                    <div className="flex items-center gap-4">
                        {/* Logo Placeholder */}
                        <div className="flex items-center gap-2">
                            <div className="size-8 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg flex items-center justify-center text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                                    <path d="M12 2l4 7h7l-5 5 2 7-8-5-8 5 2-7-5-5h7z" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl text-foreground">wiza</span>
                        </div>

                        {/* Vertical Separator */}
                        <div className="h-4 w-px bg-slate-200 hidden md:block" />

                        <p className="text-foreground/60 text-xs md:text-sm">
                            The future of prospecting © 2025 Wiza
                        </p>
                    </div>

                    <p className="font-medium text-foreground/60 italic">
                        "Wiza is a sales prospecting & engagement platform."
                    </p>
                </div>

                {/* --- Decorative Divider 1 --- */}
                <CelestialDivider />

                {/* --- Main Content Grid --- */}
                <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Contact & Socials (Span 3) */}
                    <div className="lg:col-span-3 flex flex-col items-start gap-8">
                        <button className="group flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all text-slate-800 text-sm font-medium shadow-sm">
                            <Mail className="size-4 text-slate-400 group-hover:text-purple-600" />
                            <span>hello@wiza.co</span>
                            <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </button>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6">
                            <SocialIcon platform="linkedin" />
                            <SocialIcon platform="youtube" />
                            <SocialIcon platform="instagram" />
                            <SocialIcon platform="x" />
                        </div>
                    </div>

                    {/* Right Columns: Links (Span 9) */}
                    <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold mb-2">Solutions</h4>
                            <FooterLink>Wiza for Sales</FooterLink>
                            <FooterLink>Wiza for Recruiting</FooterLink>
                            <FooterLink>API</FooterLink>
                            <FooterLink>Integrations</FooterLink>
                            <FooterLink>Pricing</FooterLink>
                            <FooterLink>Get a demo</FooterLink>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold mb-2">Resources</h4>
                            <FooterLink>Blog</FooterLink>
                            <FooterLink>Knowledge base</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Status</FooterLink>
                            <FooterLink>Free email finder</FooterLink>
                            <FooterLink>Free email verifier</FooterLink>
                            <FooterLink>Company directory</FooterLink>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold mb-2">Company</h4>
                            <FooterLink>Feature Requests</FooterLink>
                            <FooterLink>Changelog</FooterLink>
                            <FooterLink>Become an affiliate</FooterLink>
                            <FooterLink>Terms of service</FooterLink>
                            <FooterLink>Privacy policy</FooterLink>
                            <FooterLink>Vulnerability disclosure</FooterLink>
                            <FooterLink>Opt out</FooterLink>
                        </div>

                    </div>
                </div>

                {/* --- Decorative Divider 2 --- */}
                <CelestialDivider />

                {/* --- Bottom Disclaimer --- */}
                <div className="mt-10 text-[10px] leading-relaxed  text-foreground/60 max-w-4xl">
                    <p>
                        Disclaimer: Wiza, Inc is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Microsoft or LinkedIn, or any of their subsidiaries or affiliates. The name LinkedIn, as well as related names, marks, logos, emblems, and images are registered trademarks of their respective owners.
                    </p>
                </div>
            </div>
        </footer>
    );
}

// --- Helper Components ---

function FooterLink({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="#"
            className="text-foreground/60 hover:text-primary hover:underline hover:decoration-primary underline-offset-4 transition-colors w-fit"
        >
            {children}
        </a>
    );
}

function CelestialDivider() {
    return (
        <div className="relative w-full flex items-center justify-center opacity-30 my-4">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-full absolute inset-0" />
            <div className="relative z-10 bg-white px-4 flex items-center gap-3">
                {/* Moon Left */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-slate-400">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                {/* Star Center */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-3 text-slate-400">
                    <path d="M12 2l3 7h7l-5 5 2 7-8-5-8 5 2-7-5-5h7z" />
                </svg>
                {/* Moon Right (Rotated) */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-slate-400 rotate-180">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </div>
        </div>
    );
}


function SocialIcon({ platform }: { platform: "linkedin" | "youtube" | "instagram" | "x" }) {
    const icons = {
        linkedin: (
            <svg
                className="w-5 h-5"
                viewBox="0 0 382 382"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#0077B7"
                    d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889 C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0z M118.207 329.844c0 5.554-4.502 10.056-10.056 10.056 H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806 c5.554 0 10.056 4.502 10.056 10.056V329.844z M86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1 s40.666 18.207 40.666 40.666S109.208 123.432 86.748 123.432z M341.91 330.654c0 5.106-4.14 9.246-9.246 9.246H286.73 c-5.106 0-9.246-4.14-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021c-28.309 0-34.051 29.066-35.204 42.11v97.079 c0 5.106-4.139 9.246-9.246 9.246h-44.426c-5.106 0-9.246-4.14-9.246-9.246V149.593c0-5.106 4.14-9.246 9.246-9.246h44.426 c5.106 0 9.246 4.14 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912c73.552 0 73.131 68.716 73.131 106.472 L341.91 330.654L341.91 330.654z"
                />
            </svg>
        ),
        youtube: (
            <svg
                className="w-5 h-5"
                viewBox="0 0 461.001 461.001"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#F61C0D"
                    d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728 c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137 C461.001 110.259 418.135 67.393 365.257 67.393z M300.506 237.056l-126.06 60.123c-3.359 1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881C304.363 229.873 304.298 235.248 300.506 237.056z"
                />
            </svg>
        ),
        instagram: (
            <svg
                className="w-5 h-5"
                viewBox="0 0 551.034 551.034"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="grad1"
                        gradientUnits="userSpaceOnUse"
                        x1="275.517"
                        y1="4.5714"
                        x2="275.517"
                        y2="549.7202"
                        gradientTransform="matrix(1 0 0 -1 0 554)"
                    >
                        <stop offset="0" stopColor="#E09B3D" />
                        <stop offset="0.3" stopColor="#C74C4D" />
                        <stop offset="0.6" stopColor="#C21975" />
                        <stop offset="1" stopColor="#7024C4" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#grad1)"
                    d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722 c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156 C551.033 73.64 477.393 0 386.878 0z M495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156 c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722 c60.045 0 108.722 48.676 108.722 108.722L495.6 386.878L495.6 386.878z"
                />
                <path
                    fill="url(#grad1)"
                    d="M275.517 133C196.933 133 133 196.933 133 275.516 s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516S354.101 133 275.517 133z M275.517 362.6 c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 C362.6 323.611 323.611 362.6 275.517 362.6z"
                />
                <circle fill="url(#grad1)" cx="418.306" cy="134.072" r="34.149" />
            </svg>
        ),
        x: (
            <svg
                className="w-5 h-5"
                viewBox="0 0 410.155 410.155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#76A9EA"
                    d="M403.632 74.18c-9.113 4.041-18.573 7.229-28.28 9.537c10.696-10.164 18.738-22.877 23.275-37.067 l0 0c1.295-4.051-3.105-7.554-6.763-5.385l0 0c-13.504 8.01-28.05 14.019-43.235 17.862c-0.881 0.223-1.79 0.336-2.702 0.336 c-2.766 0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335 0-18.76 1.455-28.014 4.325 c-28.672 8.893-50.795 32.544-57.736 61.724c-2.604 10.945-3.309 21.9-2.097 32.56c0.139 1.225-0.44 2.08-0.797 2.481 c-0.627 0.703-1.516 1.106-2.439 1.106c-0.103 0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0 0 c-2.04-2.503-5.952-2.196-7.578 0.593l0 0C13.677 65.565 9.537 80.937 9.537 96.579c0 23.972 9.631 46.563 26.36 63.032 c-7.035-1.668-13.844-4.295-20.169-7.808l0 0c-3.06-1.7-6.825 0.485-6.868 3.985l0 0c-0.438 35.612 20.412 67.3 51.646 81.569 c-0.629 0.015-1.258 0.022-1.888 0.022c-4.951 0-9.964-0.478-14.898-1.421l0 0c-3.446-0.658-6.341 2.611-5.271 5.952l0 0 c10.138 31.651 37.39 54.981 70.002 60.278c-27.066 18.169-58.585 27.753-91.39 27.753l-10.227-0.006 c-3.151 0-5.816 2.054-6.619 5.106c-0.791 3.006 0.666 6.177 3.353 7.74c36.966 21.513 79.131 32.883 121.955 32.883 c37.485 0 72.549-7.439 104.219-22.109c29.033-13.449 54.689-32.674 76.255-57.141c20.09-22.792 35.8-49.103 46.692-78.201 c10.383-27.737 15.871-57.333 15.871-85.589v-1.346c-0.001-4.537 2.051-8.806 5.631-11.712c13.585-11.03 25.415-24.014 35.16-38.591 l0 0C411.924 77.126 407.866 72.302 403.632 74.18L403.632 74.18z"
                />
            </svg>
        ),
    };

    return (
        <a href="#" className="hover:opacity-80 transition-opacity">
            {icons[platform]}
        </a>
    );
}

