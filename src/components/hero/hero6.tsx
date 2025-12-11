import React from 'react';
import {
    Play,
    Chrome,
    Monitor,
    ChevronDown,
    Menu
} from 'lucide-react';

// --- Shadcn UI Button Mock ---
// import { Button } from "@/components/ui/button"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "default", size = "default", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            default: "bg-primary text-primary-foreground hover:bg-primary/80 shadow-md", // Monica Primary Purple
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-full px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

// --- Main Component ---

const MonicaLanding = () => {
    return (
        <div className="min-h-screen bg-background  text-foreground overflow-x-hidden relative">
            {/* Responsive Navbar */}
            < nav className="sticky top-0 z-50 w-full  backdrop-blur-md border-b ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">

                    {/* 1. Logo Section */}
                    <div className="flex items-center gap-12">
                        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight z-20">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                                <div className="w-2 h-2 bg-white rounded-full mx-[1px]" />
                                <div className="w-2 h-2 bg-white rounded-full mx-[1px]" />
                            </div>
                            <span>Monica</span>
                        </a>

                        {/* 2. Desktop Navigation (Hidden on Mobile) */}
                        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground/60">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#6366f1] transition-colors bg-gray-100/50 px-2 py-1 rounded-md">
                                English <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                            </div>
                            <a href="#" className="flex items-center gap-1 hover:text-[#6366f1] transition-colors">
                                Products <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                            </a>
                            <a href="#" className="hover:text-[#6366f1] transition-colors">Learning Center</a>
                            <a href="#" className="hover:text-[#6366f1] transition-colors">Desktop Apps</a>
                            <a href="#" className="hover:text-[#6366f1] transition-colors">Pricing</a>
                            <a href="#" className="hover:text-[#6366f1] transition-colors">For Developers</a>
                        </div>
                    </div>

                    {/* 3. Desktop Actions (Hidden on Mobile) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button variant="ghost" className="text-foreground/60">Log In</Button>
                        <Button className="font-semibold shadow-primary/20">
                            Add to Chrome
                        </Button>
                    </div>

                    {/* 4. Mobile Menu Trigger & Dropdown */}
                    <div className="lg:hidden">
                        {/* Checkbox Hack Input */}
                        <input type="checkbox" id="menu-toggle" className="peer hidden" />

                        {/* Trigger Icon */}
                        <label htmlFor="menu-toggle" className="block cursor-pointer p-2 text-foreground/60 hover:bg-muted rounded-md">
                            <Menu className="w-6 h-6" />
                        </label>

                        {/* The Dropdown Menu (Visible when peer is checked) */}
                        <div className="hidden peer-checked:block absolute top-full left-0 inset-x-0 bg-background border-b  shadow-lg animate-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col p-6 gap-6">
                                {/* Mobile Links */}
                                <ul className="flex flex-col gap-4 text-center text-sm font-medium text-foreground/60">
                                    <li className="cursor-pointer hover:text-[#6366f1]">English</li>
                                    <li className="cursor-pointer hover:text-[#6366f1]">Products</li>
                                    <li className="cursor-pointer hover:text-[#6366f1]">Learning Center</li>
                                    <li className="cursor-pointer hover:text-[#6366f1]">Desktop Apps</li>
                                    <li className="cursor-pointer hover:text-[#6366f1]">Pricing</li>
                                    <li className="cursor-pointer hover:text-[#6366f1]">For Developers</li>
                                </ul>

                                {/* Mobile Buttons */}
                                <div className="flex flex-col gap-3 w-full">
                                    <Button variant="ghost" className="w-full text-foreground/60 bg-background">Log In</Button>
                                    <Button className="w-full font-semibold">Add to Chrome</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            {/* Hero Section */}
            <main className="pt-16 pb-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                    {/* Video Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8 hover:bg-gray-200 transition-colors cursor-pointer group">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            <Play className="w-2.5 h-2.5 ml-0.5 fill-black text-black" />
                        </div>
                        Watch instruction video
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                        All-in-one AI assistant. <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/75 to-foreground">
                            Personalized, fast and free.
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-3xl mb-10 leading-relaxed">
                        Monica leverages cutting-edge AI models, including OpenAI o3-mini, DeepSeek R1, GPT-4o,
                        Claude 3.7, and Gemini 20, to enhance your chat, search, writing, and coding experiences.
                        Available as a browser extension for Chrome and Edge, as well as a mobile and desktop app.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                            <Chrome className="w-5 h-5 mr-2" />
                            Add to Chrome - It's free
                        </Button>

                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl bg-background border hover:bg-muted hover:border-muted text-muted-foreground">
                            <Monitor className="w-5 h-5 mr-2" />
                            Desktop & mobile app
                            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                        </Button>
                    </div>

                    {/* --- Image Showcase Section --- */}
                    <div className="relative w-full max-w-[1100px] mx-auto perspective-1000">

                        {/* 1. Main Desktop App Image (Background Layer) */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] border ">
                            <img
                                src="https://assets.monica.im/home-web/_next/static/media/monicaHomeV2.35698f29.webp"
                                alt="Monica Desktop Interface"
                                className="w-full h-auto object-cover block"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                        </div>

                        {/* 2. Floating Extension/Mobile Image (Foreground Layer) */}
                        <div className="hidden md:block absolute -right-6 top-8 z-20 w-[30%] lg:w-[28%] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-200/50 bg-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            <img
                                src="https://assets.monica.im/home-web/_next/static/media/monicaExtension.46dd73c7.webp"
                                alt="Monica Browser Extension"
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>

                    </div>

                </div>
            </main>
        </div >
    );
};

export default MonicaLanding;