import React from 'react';
import { Star } from 'lucide-react';

// --- Custom Logo Components ---

const WaverioLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#7C3AED" />
            <path d="M8 22C12 22 14 18 18 18C22 18 24 22 28 22C32 22 34 18 38 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 28C12 28 14 24 18 24C22 24 24 28 28 28C32 28 34 24 38 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 16C12 16 14 12 18 12C22 12 24 16 28 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="text-xl font-bold text-slate-900 tracking-tight">Waverio</span>
    </div>
);

const LogoipsumLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
            <path d="M14 2V30M14 30L6 22M14 30L22 22" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="10" y="6" width="8" height="12" rx="4" stroke="#1E293B" strokeWidth="2" />
        </svg>
        <span className="text-lg font-light tracking-widest text-slate-800 uppercase">LOGOIPSUM</span>
    </div>
);

const AlterboneLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#111827" />
            <circle cx="10" cy="12" r="2" fill="#4ADE80" />
            <circle cx="22" cy="12" r="2" fill="#4ADE80" />
            <path d="M10 20C10 20 12 24 16 24C20 24 22 20 22 20" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-xl font-bold text-slate-700">Alterbone</span>
    </div>
);

const CarboniaLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path d="M20 20L5 10L5 30L20 40V20Z" fill="#2563EB" />
            <path d="M20 20L35 10L35 30L20 40V20Z" fill="#1E40AF" fillOpacity="0.8" />
            <path d="M20 20L5 10L20 0L35 10L20 20Z" fill="#F43F5E" />
        </svg>
        <span className="text-xl font-extrabold text-slate-900 lowercase tracking-tight">carbonia</span>
    </div>
);

const TinygoneLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="10" cy="10" r="8" fill="#F87171" fillOpacity="0.8" />
            <circle cx="22" cy="10" r="8" fill="#F87171" fillOpacity="0.4" />
            <circle cx="10" cy="22" r="8" fill="#F87171" fillOpacity="0.4" />
            <circle cx="22" cy="22" r="8" fill="#F87171" fillOpacity="0.8" />
        </svg>
        <span className="text-xl font-semibold text-slate-800">Tinygone</span>
    </div>
);

const PresoLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <defs>
                <linearGradient id="preso_grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#2DD4BF" />
                </linearGradient>
            </defs>
            <circle cx="16" cy="16" r="14" stroke="url(#preso_grad)" strokeWidth="6" />
            <path d="M16 2V16H30" stroke="white" strokeWidth="4" />
        </svg>
        <span className="text-xl font-bold text-slate-800 uppercase condensed tracking-tighter">PRESO</span>
    </div>
);

const RidoriaLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            {[...Array(8)].map((_, i) => (
                <rect
                    key={i}
                    x="14" y="0" width="4" height="12" rx="2"
                    fill="#1E3A8A"
                    transform={`rotate(${i * 45} 16 16)`}
                    opacity={0.6 + (i * 0.05)}
                />
            ))}
            <circle cx="16" cy="16" r="4" fill="white" />
        </svg>
        <span className="text-xl font-bold text-slate-900">Ridoria</span>
    </div>
);

const IncantoLogo = () => (
    <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 22L12 4H18L10 22H4Z" fill="#2563EB" />
            <path d="M14 28L22 10H28L20 28H14Z" fill="#2563EB" />
        </svg>
        <span className="text-xl font-bold text-slate-900">Incanto.</span>
    </div>
);

const CapterraLogo = () => (
    <div className="flex items-center gap-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4V20L12 12L4 4Z" fill="#EF4444" /> {/* Tail */}
            <path d="M4 4L20 4L12 12L4 4Z" fill="#1D4ED8" /> {/* Top */}
            <path d="M12 12L20 4V20L12 12Z" fill="#1D4ED8" opacity="0.8" />
        </svg>
        <span className="text-lg font-bold text-[#1D4ED8] tracking-tight ml-1">Capterra</span>
    </div>
);

// --- Main Component ---

const LogoCloud3 = () => {
    return (
        <section className="w-full  bg-background text-foreground py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold mb-16">
                    Trusted by companies of all sizes
                </h2>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20 place-items-center">
                    <WaverioLogo />
                    <LogoipsumLogo />
                    <AlterboneLogo />
                    <CarboniaLogo />
                    <TinygoneLogo />
                    <PresoLogo />
                    <RidoriaLogo />
                    <IncantoLogo />
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border mb-12"></div>

                {/* Footer Rating */}
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-4">
                        <CapterraLogo />
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-xs font-bold  text-foreground/75 tracking-wider uppercase ml-12">
                        4.4 on Capterra
                    </p>
                </div>

            </div>
        </section>
    );
};

export default LogoCloud3;