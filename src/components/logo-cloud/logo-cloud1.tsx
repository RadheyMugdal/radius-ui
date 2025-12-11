import React from 'react';
import { Zap } from 'lucide-react';

// --- Types & Interfaces ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'link' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
    children: React.ReactNode;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

interface SvgComponentProps {
    className?: string;
}

// --- Shadcn UI Mock Components ---

const Button: React.FC<ButtonProps> = ({
    className = "",
    variant = "default",
    size = "default",
    children,
    ...props
}) => {
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
        link: "text-blue-600 underline-offset-4 hover:underline",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 px-8 text-base",
    };

    return (
        <button
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const Card: React.FC<CardProps> = ({ className = "", children, ...props }) => (
    <div
        className={`rounded-xl border bg-card text-card-foreground shadow-sm ${className}`}
        {...props}
    >
        {children}
    </div>
);

// --- Custom Graphics (SVG) ---

const CubeOutline: React.FC<SvgComponentProps> = ({ className }) => (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M50 0L93.3013 25L50 50L6.69873 25L50 0Z" stroke="#3B82F6" strokeWidth="2" fill="white" />
        <path d="M6.69873 25L50 50V100L6.69873 75V25Z" stroke="#3B82F6" strokeWidth="2" fill="white" />
        <path d="M93.3013 25L50 50V100L93.3013 75V25Z" stroke="#3B82F6" strokeWidth="2" fill="#2563EB" />
    </svg>
);

const OrangeWave: React.FC = () => (
    <svg
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
    >
        <path
            d="M-50,0 Q100,300 400,250 T900,500"
            fill="none"
            stroke="#EA580C"
            strokeWidth="12"
            strokeLinecap="round"
            className="opacity-90"
        />
    </svg>
);

const Triangle: React.FC<SvgComponentProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="#93C5FD">
        <path d="M50 0L100 100H0L50 0Z" opacity="0.6" />
    </svg>
);

// --- Company Logos (Approximated as SVGs) ---

const SpocketLogo = () => (
    <div className="flex items-center gap-2 group cursor-default">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L28 8V24L16 30L4 24V8L16 2Z" fill="#7C3AED" />
            <circle cx="16" cy="12" r="3" fill="white" />
        </svg>
        <span className="text-xl font-bold text-slate-900 tracking-tight">spocket</span>
    </div>
);

const TechstarsLogo = () => (
    <div className="flex items-center gap-2 group cursor-default">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L36 34H4L20 4Z" fill="#94A3B8" />
            <path d="M20 12L22.5 18H28L23.5 21.5L25 27L20 23.5L15 27L16.5 21.5L12 18H17.5L20 12Z" fill="#10B981" />
        </svg>
        <span className="text-xl text-slate-500 tracking-tight">techstars</span>
    </div>
);

const Document360Logo = () => (
    <div className="flex items-center gap-1 group cursor-default">
        <span className="text-lg font-bold text-[#3F1E4E] uppercase tracking-wide">Document</span>
        <div className="flex items-center">
            <span className="text-lg font-light text-[#3F1E4E]">360</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3F1E4E" strokeWidth="3" className="ml-0.5">
                <path d="M21 12a9 9 0 1 1-9-9" />
            </svg>
        </div>
    </div>
);

const AstraLogo = () => (
    <div className="flex items-center group cursor-default">
        <span className="text-2xl font-bold text-blue-500 tracking-tighter">astra</span>
    </div>
);

const LibertypoolLogo = () => (
    <div className="flex items-center group cursor-default">
        <span className="text-xl font-medium text-blue-600 tracking-tight">libertypool</span>
    </div>
);

// --- Component: Trusted By Section ---

const TrustedBySection = () => {
    return (
        <section className="max-w-7xl bg-background text-foreground mx-auto px-6 py-12 ">
            <h2 className="text-center text-sm font-medium text-slate-500 mb-10 tracking-wide">
                Trusted by high growth companies
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-8 opacity-90 grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
                <SpocketLogo />
                <TechstarsLogo />
                <Document360Logo />
                <AstraLogo />
                <LibertypoolLogo />
            </div>
        </section>
    );
}

// --- Main Page Component ---

export default function LogoCloud1() {
    return (
        <div className=" max-w-screen-2xl mx-auto bg-background  text-foreground overflow-hidden relative">

            <TrustedBySection />

        </div>
    );
}