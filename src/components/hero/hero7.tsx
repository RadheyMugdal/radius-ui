import React from 'react';
import {
    ChevronRight,
    ChevronLeft,
    Sparkles,
    MoreHorizontal,
    User,
    Plus,
    Search,
    ChevronDown,
    MousePointer2,
    Menu
} from 'lucide-react';
import { Button } from '../ui/button';

// --- Shared Components (Mocking Shadcn/UI styles) ---

// const Button = ({
//     children,
//     variant = 'primary',
//     className = '',
//     ...props
// }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' | 'black' }) => {
//     const baseStyles = "px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2";
//     const variants = {
//         primary: "bg-blue-600 text-white hover:bg-blue-700",
//         black: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl",
//         outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white",
//         ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
//     };

//     return (
//         <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
//             {children}
//         </button>
//     );
// };

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${className}`}>
        {children}
    </span>
);

const Avatar = ({ src, fallback }: { src?: string, fallback: string }) => (
    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border border-gray-100 text-xs text-gray-500 font-medium">
        {src ? <img src={src} alt="avatar" className="w-full h-full object-cover" /> : fallback}
    </div>
);

// --- Sub-components for the Scheduler UI Mockup ---

const TimelineHeader = () => (
    <div className="flex border-b border-gray-200 bg-white h-12 items-center px-4 justify-between sticky top-0 z-20 rounded-t-xl">
        <div className="flex items-center gap-4">
            <div className="font-bold text-lg tracking-tight flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-900 rounded-md flex items-center justify-center">
                    <div className="w-3 h-1.5 border-b-2 border-white rounded-[1px]"></div>
                </div>
                hellotime
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center text-sm font-medium text-gray-600 gap-2">
                <ChevronLeft className="w-4 h-4" />
                <span>Today</span>
                <ChevronRight className="w-4 h-4" />
            </div>
        </div>
        <div className="flex items-center gap-3">
            <Button variant="outline" className="h-8 text-xs">Insights</Button>
            <Avatar fallback="SP" src="https://i.pravatar.cc/150?u=sergio" />
        </div>
    </div>
);

const TimelineGrid = () => (
    <div className="absolute inset-0 flex pointer-events-none">
        {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-gray-100 h-full first:bg-gray-50/30">
                <div className="h-8 border-b border-gray-100 text-[10px] text-gray-400 font-medium uppercase p-2 text-center bg-white">
                    {['Jan 8', '15 Jan', '22 Jan', '29 Jan', '5 Feb', '12 Feb', '19 Feb', '26 Feb'][i]}
                </div>
            </div>
        ))}
    </div>
);

const ProjectBar = ({
    name,
    color,
    width,
    offset,
    duration
}: {
    name: string,
    color: string,
    width: string,
    offset: string,
    duration?: string
}) => {
    const colorClasses: Record<string, string> = {
        orange: 'bg-amber-500 border-amber-600 text-white',
        blue: 'bg-blue-500 border-blue-600 text-white',
        green: 'bg-emerald-500 border-emerald-600 text-white',
        pink: 'bg-rose-500 border-rose-600 text-white',
        dark: 'bg-gray-700 border-gray-800 text-white'
    };

    return (
        <div
            className={`absolute h-7 rounded px-2 text-[10px] font-medium flex items-center shadow-sm border-l-4 ${colorClasses[color]} bg-opacity-90`}
            style={{ left: offset, width: width, top: '50%', transform: 'translateY(-50%)' }}
        >
            <span className="truncate">{name}</span>
            {duration && <span className="opacity-70 ml-1">· {duration}</span>}
        </div>
    );
};

// --- Main Page Component ---

const Hero7 = () => {
    return (
        <div className="min-h-screen bg-background text-foreground  ">

            <nav className="w-full backdrop-blur-md border-b relative z-50">
                <header className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 relative">

                    {/* LEFT */}
                    <div className="flex items-center gap-8">
                        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                            <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-2 border-b-2 border-white rounded-[1px] mb-0.5"></div>
                            </div>
                            hellotime
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm font-medium text-foreground/60">
                                <li className="hover:text-foreground transition-colors">Features</li>
                                <li className="hover:text-foreground transition-colors">Pricing</li>
                                <li className="hover:text-foreground transition-colors">Blog</li>
                                <li className="hover:text-foreground transition-colors">About</li>
                            </ul>
                        </nav>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="#"
                            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                        >
                            Log in
                        </a>
                        <Button className="bg-black hover:bg-black/80 text-white px-4 rounded-xl">
                            Get started for free
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden ">

                        {/* peer MUST be on same wrapper */}
                        <input type="checkbox" id="menu-toggle-hero7" className="peer hidden" />

                        {/* Button */}
                        <label htmlFor="menu-toggle-hero7" className="cursor-pointer text-foreground/60">
                            <Menu className="w-6 h-6" />
                        </label>

                        {/* Dropdown */}
                        <div className="peer-checked:block hidden absolute top-full z-20  inset-x-0 w-screen bg-background border-b shadow-md">
                            <div className="flex flex-col gap-6 items-center p-6">

                                {/* Links */}
                                <ul className="flex flex-col gap-4 items-center text-sm font-medium">
                                    <li className="hover:text-primary transition-colors">Features</li>
                                    <li className="hover:text-primary transition-colors">Pricing</li>
                                    <li className="hover:text-primary transition-colors">Blog</li>
                                    <li className="hover:text-primary transition-colors">About</li>
                                </ul>

                                {/* Buttons */}
                                <div className="flex flex-col w-full gap-4">
                                    <a
                                        href="#"
                                        className="w-full text-center py-2 rounded-xl border text-sm font-medium"
                                    >
                                        Log in
                                    </a>
                                    <Button className="w-full rounded-xl bg-black hover:bg-black/80 text-white">
                                        Get started for free
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>

                </header>
            </nav>



            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col  items-center text-center">

                    {/* Hero Badge */}
                    <Badge className=" border text-muted-foreground my-8  cursor-pointer transition-colors shadow-sm">
                        A different kind of pricing <ChevronRight className="w-3 h-3 ml-1" />
                    </Badge>

                    {/* Hero Headline */}
                    <h1 className="text-2xl sm:text-3xl  md:text-5xl font-bold tracking-tight  mb-8 leading-[1.1]">
                        The smarter way to
                        <br />
                        <span className="relative inline-block mt-2">
                            {/* The Blue Rotated Box */}
                            <div className="absolute inset-0 bg-primary -rotate-2 rounded-xl shadow-primary/20 shadow-xl sm:scale-110 scale-105 z-0"></div>
                            <span className="relative z-10 text-white px-6 py-2 block -rotate-2 flex items-center gap-2">
                                <Sparkles className="md:size-16  size-12 text-yellow-300 fill-yellow-300" />
                                schedule teams
                            </span>
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-md sm:text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed">
                        Say goodbye to broken spreadsheets and unfit tools — Use Hellotime to
                        schedule people and projects on a simple and easy to use timeline.
                    </p>

                    {/* CTA */}
                    <Button className="h-12 bg-black hover:bg-black/80 text-white px-8 text-base rounded-2xl mb-20">
                        Get started for free
                    </Button>
                    <div className=' max-w-4xl border aspect-video  p-2 bg-muted rounded-xl'>
                        <img className=' rounded-xl' src="https://uishksqfiydsbfhycdah.supabase.co/storage/v1/object/public/dump/imgs/hero7-radius-ui-img.png" alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Hero7;