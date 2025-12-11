import React from 'react';

// --- Logo Components ---

const MakeLessLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xl font-serif font-bold text-slate-700 tracking-tight">MakeLess</span>
    </div>
);

const CoworksLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600">
            <path d="M18 10V8C18 6.9 17.1 6 16 6C15.9 6 15.8 6 15.7 6C15.5 4.3 14 3 12.2 3C10.7 3 9.4 4 8.8 5.3C8.6 5.3 8.3 5.3 8.1 5.3C6.9 5.3 6 6.2 6 7.3V10H3V12H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V12H21V10H18Z" />
        </svg>
        <span className="text-lg font-bold text-slate-600 lowercase">coworks</span>
    </div>
);

const GreenerLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700">
            <path d="M2 12C2 12 2 4 10 4C14 4 18 8 22 22C22 22 14 22 10 18C6 14 2 12 2 12Z" />
            <path d="M22 22C16 22 10 16 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-lg font-medium text-slate-700">greener</span>
    </div>
);

const DorfusLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xl font-serif font-black text-slate-700 tracking-tight">Dorfus</span>
    </div>
);

const SaasTodayLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-700">
            <circle cx="12" cy="12" r="9" />
        </svg>
        <div className="flex flex-col leading-none">
            <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">SAAS</span>
            <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">TODAY</span>
        </div>
    </div>
);

const AskimatLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xl text-slate-700 font-medium italic" style={{ fontFamily: 'cursive' }}>askimat</span>
    </div>
);

const MartinoLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex gap-0.5 items-end">
            <div className="w-1 h-3 bg-slate-700"></div>
            <div className="w-1 h-5 bg-slate-700"></div>
            <div className="w-1 h-2 bg-slate-700"></div>
        </div>
        <div className="flex flex-col leading-none justify-center">
            <span className="text-lg font-bold text-slate-700 tracking-tight">Martino</span>
            <span className="text-[6px] text-slate-400 uppercase tracking-wider">Colors of your life</span>
        </div>
    </div>
);

const RockerLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex flex-col -space-y-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-400">
                <path d="M2 18L12 8L22 18" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-400">
                <path d="M2 18L12 8L22 18" />
            </svg>
        </div>
        <div className="flex flex-col leading-none">
            <span className="text-lg font-medium text-slate-700">Rocker</span>
            <span className="text-[6px] text-slate-400">Build your dream home</span>
        </div>
    </div>
);

const PaperzLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fillOpacity="0.5" />
            <path d="M14 2V8H20" fill="currentColor" />
        </svg>
        <div className="flex flex-col leading-none">
            <span className="text-lg font-black text-slate-700 uppercase">PAPERZ</span>
            <span className="text-[5px] text-slate-500 uppercase tracking-wide">Leading Paper Company</span>
        </div>
    </div>
);

const SquareLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-5 h-5 border-[3px] border-slate-700"></div>
        <div className="flex flex-col leading-none">
            <span className="text-lg font-medium text-slate-700">square</span>
            <span className="text-[6px] text-slate-400 uppercase">Real Estate Solution</span>
        </div>
    </div>
);

const GobonaLogo = () => (
    <div className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-600">
            <path d="M2 2L12 12M12 12L2 22M12 12L22 2" />
            <path d="M10 22L22 10" />
        </svg>
        <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-slate-700">Gobona</span>
            <span className="text-[6px] text-blue-400 font-bold">Your Trusted Carrier</span>
        </div>
    </div>
);

// --- Main Stats & Logos Component ---

const LogoCloud4 = () => {
    return (
        <section className="w-full  bg-muted text-foreground py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* Left Column: Stats & Text */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">1 team.</h2>
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">6+ years.</h2>
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">300+ projects.</h2>
                    </div>

                    <p className="text-base text-foreground/60 leading-relaxed max-w-sm pt-2">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>

                {/* Right Column: Logo Grid */}
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
                    {/* Row 1 */}
                    <MakeLessLogo />
                    <CoworksLogo />
                    <GreenerLogo />
                    <DorfusLogo />

                    {/* Row 2 */}
                    <SaasTodayLogo />
                    <AskimatLogo />
                    <MartinoLogo />
                    <RockerLogo />

                    {/* Row 3 */}
                    <PaperzLogo />
                    {/* The image shows Dorfus twice, repeating here for accuracy to reference */}
                    <DorfusLogo />
                    <SquareLogo />
                    <GobonaLogo />
                </div>

            </div>
        </section>
    );
};

export default LogoCloud4;