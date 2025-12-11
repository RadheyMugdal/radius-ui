import React from 'react';

// --- Logo Sub-Components ---

const IntelLogo = () => (
    <svg viewBox="0 0 110 70" className="h-14 w-auto fill-slate-500 hover:fill-[#0071C5] transition-colors duration-300">
        <path
            d="M55 5 C15 5 2 25 2 35 C2 55 25 65 55 65 C95 65 108 45 108 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path d="M55 8 C20 8 5 25 5 35 C5 52 28 62 55 62 C88 62 105 45 105 35" fill="none" stroke="white" strokeWidth="4" />
        <text x="55" y="44" fontFamily="sans-serif" fontSize="26" fontWeight="bold" textAnchor="middle" letterSpacing="-1.5" fill="currentColor">intel</text>
    </svg>
);

const HarvardLogo = () => (
    <div className="flex flex-col items-center justify-center text-slate-500 hover:text-[#A51C30] transition-colors duration-300 font-serif cursor-default">
        <span className="text-2xl tracking-widest leading-none font-medium">HARVARD</span>
        <span className="text-[10px] tracking-[0.2em] uppercase mt-1">University</span>
    </div>
);

const DigitasLBiLogo = () => (
    <div className="text-2xl font-serif text-slate-500 hover:text-slate-800 transition-colors duration-300 tracking-tight cursor-default">
        Digitas<span className="font-light">LBi</span>
    </div>
);

const AusGovLogo = () => (
    <div className="flex flex-col items-center gap-1 group cursor-default">
        {/* Simplified Coat of Arms SVG */}
        <svg viewBox="0 0 100 60" className="h-12 w-auto fill-slate-400 group-hover:fill-slate-700 transition-colors duration-300">
            {/* Shield */}
            <path d="M40 15 H60 V35 C60 45 50 55 50 55 C50 55 40 45 40 35 Z" opacity="0.8" />
            {/* Kangaroo (Left) */}
            <path d="M30 20 C25 15 15 25 20 45 C25 50 35 45 38 40" />
            {/* Emu (Right) */}
            <path d="M70 20 C75 15 85 25 80 45 C75 50 65 45 62 40" />
            {/* Star */}
            <path d="M50 2 L53 10 L60 10 L55 15 L57 22 L50 18 L43 22 L45 15 L40 10 L47 10 Z" />
        </svg>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 font-serif font-medium transition-colors">
            Australian Government
        </span>
    </div>
);

const NHSLogo = () => (
    <div className="h-10 w-24 bg-slate-300 hover:bg-[#005EB8] transition-colors duration-300 flex items-center justify-center cursor-default">
        <span className="text-white font-bold text-2xl italic  tracking-tight">NHS</span>
    </div>
);

const VMLLogo = () => (
    <div className="flex items-center gap-3 group cursor-default">
        {/* Geometric Icon */}
        <svg viewBox="0 0 40 40" className="h-10 w-10 stroke-slate-400 group-hover:stroke-slate-900 transition-colors duration-300" fill="none" strokeWidth="1.5">
            <path d="M5 5 L20 20 L35 5" />
            <path d="M5 20 L20 35 L35 20" />
            <path d="M5 35 L20 20" />
            <path d="M35 35 L20 20" />
        </svg>
        <span className="text-xl font-light text-slate-500 group-hover:text-slate-900 tracking-[0.2em] transition-colors">VML</span>
    </div>
);

// --- Main Component ---

const LogoCloud2 = () => {
    return (
        <section className=" w-full max-w-screen-2xl mx-auto bg-background py-16 px-6 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-lg  text-foreground/60 mb-14 font-normal tracking-wide">
                    Over 2,000 teams manage their content operations with GatherContent
                </h2>

                {/* Logos Container */}
                <div className="flex flex-wrap justify-center xl:justify-between items-center gap-x-16 gap-y-12">
                    {/* We wrap logos in divs to ensure consistent centering/alignment */}
                    <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <IntelLogo />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <HarvardLogo />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <DigitasLBiLogo />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <AusGovLogo />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <NHSLogo />
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <VMLLogo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud2;