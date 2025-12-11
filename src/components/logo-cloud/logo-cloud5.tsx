import React from 'react';

// --- Styles for specific fonts to match logos ---
const FontLoader = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Grand+Hotel&family=Oswald:wght@700&display=swap');
  `}</style>
);

// --- 1. AUTOSPEED LOGO (Fixed Bounds) ---
const AutospeedLogo = () => (
    <div className="group opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
        {/* Increased viewBox width from 240 to 300 to prevent cutting off text/car */}
        <svg viewBox="0 0 300 70" className="h-14 w-auto fill-slate-600 overflow-visible">
            {/* Main Text */}
            <text
                x="10"
                y="45"
                fontFamily="'Oswald', sans-serif"
                fontSize="38"
                fontWeight="bold"
                fontStyle="italic"
                transform="skewX(-10)"
                letterSpacing="-1"
            >
                AUTOSPEED
            </text>

            {/* Subtext */}
            <text
                x="15"
                y="62"
                fontFamily="sans-serif"
                fontSize="9"
                fontWeight="800"
                letterSpacing="0.5"
                className="fill-slate-400"
            >
                SAME DAY AUTO PARTS
            </text>

            {/* The Van Icon */}
            <g transform="translate(190, 15) scale(0.9)">
                <path
                    d="M0 25 L30 25 L40 10 L55 10 V35 H50 A5 5 0 0 1 40 35 H20 A5 5 0 0 1 10 35 H0 V25 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />
                <path d="M32 25 L38 14 H50 V25 H32 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="15" cy="35" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="45" cy="35" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M-10 30 H-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M-15 35 H-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </g>
        </svg>
    </div>
);

// --- 2. BEAUTYBOX LOGO (Fixed Bounds) ---
const BeautyBoxLogo = () => (
    <div className="group opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default relative">
        {/* Increased viewBox width to 260 to accommodate the wide script font */}
        <svg viewBox="-10 0 260 70" className="h-16 w-auto fill-slate-600 overflow-visible">
            {/* The Text */}
            <text
                x="20"
                y="50"
                fontFamily="'Grand Hotel', cursive"
                fontSize="52"
            >
                BeautyBox
            </text>

            {/* The Bow Tie Icon */}
            <g transform="translate(22, 8) rotate(-15)">
                <path d="M10 10 C 0 0, 0 20, 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 10 C 20 0, 20 20, 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                <path d="M10 12 Q 5 20 2 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 12 Q 15 20 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </g>
        </svg>
    </div>
);

// --- 3. Pete's Blinds (Fixed Visibility) ---
const PetesBlindsLogo = () => (
    <div className="group opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
        <svg viewBox="0 0 160 40" className="h-10 w-auto">
            <defs>
                {/* Mask: White area keeps content, Black area (text) removes content (creating a gap in lines) */}
                <mask id="textMask">
                    <rect x="0" y="0" width="160" height="40" fill="white" />
                    <text x="80" y="26" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="18" fontWeight="bold" fill="black" letterSpacing="1">PETE'S BLINDS</text>
                </mask>
            </defs>

            {/* Outer Frame */}
            <rect x="2" y="2" width="156" height="36" rx="1" fill="none" stroke="#475569" strokeWidth="4" />

            {/* The Horizontal Lines (Masked to leave a gap for text) */}
            <g mask="url(#textMask)" stroke="#475569" strokeWidth="3">
                <line x1="10" y1="10" x2="150" y2="10" />
                <line x1="10" y1="20" x2="150" y2="20" />
                <line x1="10" y1="30" x2="150" y2="30" />
            </g>

            {/* Side Brackets */}
            <rect x="0" y="6" width="6" height="28" fill="#475569" />
            <rect x="154" y="6" width="6" height="28" fill="#475569" />

            {/* The Text Itself (Painted on top) */}
            <text x="80" y="26" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="18" fontWeight="bold" fill="#475569" letterSpacing="1">PETE'S BLINDS</text>
        </svg>
    </div>
);

// --- 4. Croft's Accountants (Bounds Checked) ---
const CroftsAccountantsLogo = () => (
    <div className="group opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-10 w-10 overflow-visible">
            <circle cx="20" cy="20" r="20" fill="#94a3b8" />
            <path d="M25 10 L15 20 L25 30" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-slate-500 leading-none tracking-wider uppercase  whitespace-nowrap">CROFT'S</span>
            <span className="text-[10px] text-slate-400 leading-none tracking-widest uppercase mt-1  whitespace-nowrap">ACCOUNTANTS</span>
        </div>
    </div>
);

// --- Main Component ---

const LogoCloud5 = () => {
    return (
        <div className="w-full bg-background py-20 px-4 ">
            <FontLoader />

            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-sm font-semibold text-foreground/60 tracking-wide mb-16">
                    Trusted by world class creators
                </h2>

                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8 px-4">
                    <AutospeedLogo />
                    <BeautyBoxLogo />
                    <PetesBlindsLogo />
                    <CroftsAccountantsLogo />
                </div>
            </div>
        </div>
    );
};

export default LogoCloud5;