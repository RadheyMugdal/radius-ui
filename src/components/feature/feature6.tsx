import React from 'react';
import {
    Search,
    MessageSquare,
    FileText,
    Flag,
    AlertTriangle,
    Folder,
    CheckCircle2,
    XCircle
} from 'lucide-react';

// --- Types & Interfaces ---

interface FeatureCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
}

// --- Helper Components (Mocking Shadcn UI style) ---

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, children, className = "" }) => {
    return (
        <div className={`bg-card text-card-foreground rounded-3xl p-8 border  shadow-sm flex flex-col ${className}`}>
            {/* Visual / Graphic Area */}
            <div className="flex-1 w-full flex items-center justify-center mb-6 min-h-[160px] overflow-hidden relative">
                {children}
            </div>

            {/* Content Area */}
            <div className="mt-auto">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm  text-card-foreground/60 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm border ${className}`}>
        {children}
    </span>
);

// --- Main Feature Section ---

const Feature6 = () => {
    return (
        <section className="bg-muted py-24 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold  text-foreground/75 tracking-tight mb-4">
                        Smarter call summaries, <br />
                        <span className="text-primary">Powered by AI</span>
                    </h2>
                    <p className="text-foreground/60 text-lg mt-6">
                        Automatically turn every call into clear insights, transcripts, and compliance reports — all in one place.
                        No more forgotten details or manual note-taking. Just accurate summaries, action items, and faster follow-ups.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Generative AI Insights */}
                    <FeatureCard
                        title="Generative AI Insights"
                        description="Turn every call into clear, actionable insights with AI-generated summaries and topics."
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Mock Graph Visualization */}
                            <div className="relative w-48 h-32">
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="bg-white shadow-md border border-gray-200 rounded-lg px-4 py-2 font-bold text-gray-800 text-sm z-20">
                                        CMS
                                    </div>
                                </div>
                                {/* Floating Nodes */}
                                <Badge className="absolute top-0 left-0 bg-white border-gray-100 text-gray-500 rotate-[-12deg]">Summary</Badge>
                                <Badge className="absolute top-2 right-4 bg-white border-gray-100 text-gray-500 rotate-[12deg]">Topic</Badge>
                                <Badge className="absolute bottom-0 left-2 bg-white border-gray-100 text-gray-500 rotate-[6deg]">Product</Badge>
                                <Badge className="absolute bottom-2 right-0 bg-white border-gray-100 text-gray-500 rotate-[-6deg]">Resolve</Badge>

                                {/* Connector Lines (Simulated with simple SVG) */}
                                <svg className="absolute inset-0 w-full h-full text-gray-200 z-0 pointer-events-none">
                                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                </svg>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: Generative AI Query */}
                    <FeatureCard
                        title="Generative AI Query"
                        description="Ask any question about a call and get instant answers powered by AI."
                    >
                        <div className="w-full max-w-[280px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-200">
                                <div className="space-y-3">
                                    <div className="h-8 bg-white rounded border border-gray-100 px-3 flex items-center text-xs text-gray-400">
                                        Enter a question about the call...
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-lg shadow-sm hover:bg-primary/80 transition-colors">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Call Analytics Summary */}
                    <FeatureCard
                        title="Call Analytics Summary"
                        description="Quickly see key issues, actions, and outcomes from every call with automated summaries."
                    >
                        <div className="w-full text-xs space-y-3 p-2">
                            <div>
                                <span className="font-bold text-gray-700 block mb-1">Issue</span>
                                <p className="text-gray-400 line-clamp-2">
                                    I was at Fisherman's terminal uh trying to dock up my ship and my card fell into the water...
                                </p>
                            </div>
                            <div className="border-t border-gray-100 pt-2">
                                <span className="font-bold text-gray-700 block mb-1">Action items</span>
                                <div className="bg-gray-50 rounded p-1 text-gray-400">No action items detected</div>
                            </div>
                            <div className="border-t border-gray-100 pt-2">
                                <span className="font-bold text-gray-700 block mb-1">Outcomes</span>
                                <p className="text-gray-400 truncate">To review we've got that card canceled...</p>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 4: Transcript (Spans 2 columns on medium screens) */}
                    <div className="md:col-span-2">
                        <FeatureCard
                            title="Transcript"
                            description="Get accurate, AI-generated transcripts of every call—instantly and effortlessly."
                            className="h-full"
                        >
                            <div className="w-full bg-transparent space-y-4 text-sm max-w-lg mx-auto">
                                {/* Message 1 */}
                                <div className="flex flex-col space-y-1 opacity-60">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span>Agent John</span> <span>00:00</span>
                                    </div>
                                    <p className="text-gray-600">Hi, thanks for calling QuickAssist Support. How can I help you today?</p>
                                </div>

                                {/* Message 2 */}
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span className="font-semibold text-gray-600">(Profile Name)</span> <span>00:04</span>
                                        <span className="bg-gray-200 text-gray-500 px-1 rounded text-[10px]">Interruption</span>
                                    </div>
                                    <p className="text-gray-800">
                                        Yeah, <span className="bg-red-50 text-red-500 line-through decoration-red-300">hi—sorry to jump in.</span> I'm having trouble logging into my account. <span className="bg-yellow-100 text-yellow-800 px-1 rounded">I tried resetting my password</span>, but it still won't work.
                                    </p>
                                </div>

                                {/* Message 3 */}
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span className="font-semibold text-gray-600">(Profile Name)</span> <span>00:04</span>
                                    </div>
                                    <p className="text-gray-800">
                                        I keep getting an error that says <span className="bg-red-50 text-red-600 px-1 rounded border border-red-100">"invalid credentials,"</span> even though <span className="bg-yellow-50 text-yellow-700">I just changed the password</span> a few minutes ago.
                                    </p>
                                </div>

                                {/* Message 4 */}
                                <div className="flex flex-col space-y-1 opacity-40">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span>Agent John</span> <span>00:08</span>
                                    </div>
                                    <p className="text-gray-600">Got it. Let me take a quick look—can I get the email address linked to your account?</p>
                                </div>
                            </div>
                        </FeatureCard>
                    </div>

                    {/* Card 5: Compliance Report */}
                    <FeatureCard
                        title="Compliance Report"
                        description="Automatically flag risks and generate compliance reports from every call."
                    >
                        <div className="relative w-full h-40 flex items-center justify-center">
                            {/* Background Grid Lines for effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

                            {/* Central Folder */}
                            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                                <Folder className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute top-6 left-1/4 bg-white p-2 rounded-lg shadow-sm border border-gray-100 rotate-[-10deg]">
                                <XCircle className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="absolute bottom-8 left-1/3 bg-white p-2 rounded-lg shadow-sm border border-gray-100 rotate-[5deg]">
                                <AlertTriangle className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="absolute top-10 right-1/4 bg-white p-2 rounded-lg shadow-sm border border-gray-100 rotate-[12deg]">
                                <Flag className="w-4 h-4 text-red-500" fill="currentColor" fillOpacity={0.2} />
                            </div>

                            {/* Notification Badges */}
                            <div className="absolute top-8 right-[22%] w-2 h-2 bg-red-500 rounded-full border border-white z-20"></div>
                            <div className="absolute bottom-10 left-[30%] w-2 h-2 bg-red-500 rounded-full border border-white z-20"></div>
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
};

export default Feature6;