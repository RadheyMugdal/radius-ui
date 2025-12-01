import React from 'react';
import {
    Move,
    Trash2,
    Plus,
    Settings,
    List,
    Table,
    Kanban,
    Calendar,
    Activity, // generic for zapier
    CreditCard,
    Mail,
    Globe,
    DollarSign,
    Clock,
    MoreHorizontal,
    MousePointer2,
    Moon,
    Sun,
    Check
} from "lucide-react";

// --- Reusable UI Elements for the Mockups ---

const MockToggle = ({ active = false, label }: { active?: boolean, label?: string }) => (
    <div className="flex items-center gap-2">
        <div className={`w-8 h-4 rounded-full relative transition-colors ${active ? 'bg-green-400' : 'bg-gray-300'}`}>
            <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${active ? 'left-4.5 translate-x-1' : 'left-0.5'}`}></div>
        </div>
        {label && <span className="text-[10px] font-medium text-slate-600">{label}</span>}
    </div>
);

const MockInput = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="bg-white border border-gray-100 rounded-md p-2 flex items-center gap-2 shadow-sm w-full">
        <div className="text-slate-400 scale-75">{icon}</div>
        <span className="text-[10px] text-slate-600 font-medium">{text}</span>
    </div>
);

// --- Visual Components (The Illustrations) ---

const VisualPersonalised = () => (
    <div className="flex flex-col items-center justify-center h-48 w-full gap-4">
        {/* Color Palette */}
        <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-indigo-700"></div>
            <div className="w-6 h-6 rounded-full bg-slate-800"></div>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white"><Check size={12} strokeWidth={4} /></div>
            <div className="w-6 h-6 rounded-full bg-orange-400"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <div className="text-slate-300"><span className="text-xs">💧</span></div>
        </div>

        {/* Toggle Row */}
        <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <MockToggle active={true} />
                <span className="text-[10px] font-semibold text-slate-600">Hide Plutio Branding</span>
            </div>
            <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="p-1 rounded-full bg-slate-100 text-slate-400"><Moon size={12} /></div>
                <div className="p-1 text-slate-400"><Sun size={12} /></div>
            </div>
        </div>
    </div>
);

const VisualBuilder = () => (
    <div className="flex flex-col items-center justify-center h-48 w-full relative">
        {/* Dashed Selection Box */}
        <div className="border-2 border-dashed border-indigo-400 bg-indigo-50/30 rounded-lg p-6 w-3/4 relative">
            {/* Handles */}
            <div className="absolute -left-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div className="absolute -right-1 -top-1 w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-indigo-500 rounded-full"></div>

            <div className="text-center">
                <span className="text-slate-400 text-xs">Move.</span> <span className="text-slate-900 font-bold text-xs">Resize.</span> <span className="text-indigo-600 font-medium text-xs">Style.</span>
            </div>
        </div>

        {/* Floating Toolbar */}
        <div className="absolute bottom-10 bg-indigo-600 text-white rounded-md shadow-lg flex items-center p-1 gap-1 scale-90">
            <div className="p-1 hover:bg-indigo-500 rounded"><Move size={12} /></div>
            <div className="h-3 w-px bg-indigo-400"></div>
            <div className="p-1 hover:bg-indigo-500 rounded text-[10px]">💧</div>
            <div className="p-1 hover:bg-indigo-500 rounded"><Plus size={12} /></div>
            <div className="p-1 hover:bg-indigo-500 rounded text-[10px]">{`{ }`}</div>
            <div className="p-1 hover:bg-indigo-500 rounded"><Plus size={12} /></div>
            <div className="h-3 w-px bg-indigo-400"></div>
            <div className="p-1 hover:bg-indigo-500 rounded"><Trash2 size={12} /></div>
        </div>
    </div>
);

const VisualCollaborate = () => (
    <div className="flex flex-col items-center justify-center h-48 w-full px-6 space-y-3">
        {/* Chat Bubble 1 */}
        <div className="w-full flex justify-end">
            <div className="bg-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm border border-gray-100 flex items-center gap-2 w-auto max-w-[80%]">
                <span className="text-[10px] text-slate-500">Edgar says <span className="text-indigo-500 font-medium">Hey Leo!</span></span>
                <div className="w-5 h-5 bg-orange-200 rounded-full overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Edgar" alt="" /></div>
            </div>
        </div>
        {/* Chat Bubble 2 */}
        <div className="w-full flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm border border-gray-100 flex items-center gap-2 w-auto max-w-[90%]">
                <div className="w-5 h-5 bg-yellow-200 rounded-full overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" alt="" /></div>
                <span className="text-[10px] text-slate-500">Leo commented on <span className="text-blue-500 font-medium cursor-pointer">Review draft</span></span>
            </div>
        </div>
        {/* Chat Bubble 3 */}
        <div className="w-full flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm border border-gray-100 flex items-center gap-2 w-auto max-w-[80%]">
                <div className="w-5 h-5 bg-pink-200 rounded-full overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Miss" alt="" /></div>
                <span className="text-[10px] text-slate-500"><span className="text-blue-500 font-medium">Mississippi</span> uploaded <span className="text-blue-400">files</span></span>
            </div>
        </div>
    </div>
);

const VisualAdapts = () => (
    <div className="h-full flex items-center justify-center px-10">
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full max-w-md">
            <MockToggle active={true} label="Projects" />
            <MockToggle active={true} label="Inbox" />
            <MockToggle active={false} label="Contracts" />
            <MockToggle active={false} label="Scheduling" />
            <MockToggle active={true} label="Forms" />
            <MockToggle active={true} label="Invoicing" />
            <MockToggle active={false} label="Files" />
            <MockToggle active={true} label="Proposals" />
        </div>
    </div>
);

const VisualViews = () => (
    <div className="flex items-center justify-center h-48 w-full relative overflow-hidden">
        <div className="bg-white w-4/5 h-32 rounded-lg shadow-sm border border-gray-100 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/3 bg-slate-50 border-r border-gray-100 p-2 space-y-2">
                <div className="text-[10px] font-bold text-slate-400 mb-2">My Tasks</div>
                <div className="h-2 w-full bg-slate-200 rounded"></div>
                <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-2 w-full bg-slate-200 rounded"></div>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-2 relative">
                <div className="absolute top-2 right-2 bg-white border border-gray-200 shadow-lg rounded p-1 z-10 w-24">
                    <div className="flex items-center gap-2 p-1 bg-slate-100 rounded text-[9px] text-slate-700 font-medium mb-1"><List size={10} /> List</div>
                    <div className="flex items-center gap-2 p-1 hover:bg-slate-50 rounded text-[9px] text-slate-500"><Table size={10} /> Table</div>
                    <div className="flex items-center gap-2 p-1 hover:bg-slate-50 rounded text-[9px] text-slate-500"><Kanban size={10} /> Kanban</div>
                    <div className="flex items-center gap-2 p-1 hover:bg-slate-50 rounded text-[9px] text-slate-500"><Calendar size={10} /> Calendar</div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded mb-2 mt-8"></div>
                <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
            </div>
        </div>
    </div>
);

const VisualLanguage = () => (
    <div className="flex flex-col items-center justify-center h-48 w-full px-8 space-y-2">
        <MockInput icon={<Globe size={12} />} text="Language English" />
        <MockInput icon={<DollarSign size={12} />} text="Currency $ USD" />
        <MockInput icon={<Clock size={12} />} text="Date format d/M/yyyy" />
    </div>
);

const VisualIntegrations = () => {
    const apps = [
        { bg: "bg-orange-500", icon: <Activity className="text-white" size={16} /> },
        { bg: "bg-blue-400", icon: <span className="text-white font-bold text-xs">P</span> }, // PayPalish
        { bg: "bg-red-500", icon: <span className="text-white font-bold text-xs">G</span> }, // Google
        { bg: "bg-indigo-600", icon: <span className="text-white font-bold text-xs">S</span> }, // Stripe
        { bg: "bg-cyan-600", icon: <span className="text-white font-bold text-xs">W</span> }, // WordPress
        { bg: "bg-yellow-400", icon: <span className="text-white font-bold text-xs">Analytics</span> },
        { bg: "bg-purple-700", icon: <span className="text-white font-bold text-xs">S</span> }, // Slack
        { bg: "bg-black", icon: <div className="w-3 h-3 bg-white rounded-full"></div> }, // Uber/Generic
    ];

    return (
        <div className="flex items-center justify-center h-48 w-full">
            <div className="grid grid-cols-4 gap-3">
                {apps.map((app, i) => (
                    <div key={i} className={`w-10 h-10 ${app.bg} rounded-md shadow-sm flex items-center justify-center overflow-hidden`}>
                        {app.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

const VisualCustomisable = () => (
    <div className="flex items-center justify-center h-48 w-full px-4">
        <div className="flex flex-wrap justify-center gap-2 max-w-[80%] relative">
            <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">High priority</span>
            <span className="bg-gray-100 text-slate-600 text-[10px] px-2 py-1 rounded font-medium flex items-center gap-1 shadow-sm"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lima" className="w-3 h-3 rounded-full" /> Lima</span>
            <span className="bg-blue-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">In progress</span>
            <span className="bg-yellow-400 text-slate-800 text-[10px] px-2 py-1 rounded font-medium shadow-sm">Pending</span>
            <span className="bg-green-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">Done</span>
            <span className="bg-white border border-gray-200 text-slate-600 text-[10px] px-2 py-1 rounded font-medium shadow-sm flex items-center gap-1">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" className="w-3 h-3 rounded-full" /> Leonard
            </span>
            <span className="bg-white border border-green-500 text-green-600 text-[10px] px-2 py-1 rounded font-medium shadow-sm flex items-center gap-1">
                <Check size={10} /> Published
            </span>

            {/* Floating Action Button & Cursor */}
            <div className="absolute -right-2 top-8 z-10">
                <div className="bg-indigo-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
                    Edit main menu
                </div>
                <MousePointer2 className="fill-black text-white absolute top-6 left-10 w-4 h-4" />
            </div>
        </div>
    </div>
);


// --- Main Component ---

export default function Feature4() {
    return (
        <section className="bg-background max-w-screen-2xl  mx-auto text-foreground py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold mb-4">The complete solution</h2>
                    <p className=" text-foreground/70 leading-relaxed">
                        We've spent a decade crafting Plutio to work your way. Effortlessly customise and personalise anything, and turn features on/off to create your very own setup and workflow.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className=" bg-primary/5  rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualPersonalised />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">Incredibly personalised</h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Add your branding, change the interface layout and colors, customise your menus and everything else you need to make Plutio truly yours.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className=" bg-primary/5 rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualBuilder />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">Easily build anything</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                Our intuitive drag and drop editor is packed with features and styling options that makes it incredibly easy to create stunning proposals, invoices, forms and even schedulers.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className=" bg-primary/5 rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualCollaborate />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">Collaborate in realtime</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                Communicate with anyone through comments, direct messaging, channels and project discussions. The best part is no one needs to be in-app to communicate back.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 (Wide) */}
                    <div className="bg-primary/5 rounded-2xl p-8 md:col-span-2 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow">
                        <div className="w-full md:w-1/2">
                            <VisualAdapts />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-bold mb-2">Adapts to the way you work</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                Turn features and tools on/off to create your very own setup and workflow. Plutio works your way, not the other way around.
                                <br /><br />
                                You can also create interactive pages for reporting, dashboards, client portals, notes and more.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-primary/5 rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualViews />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">View things your way</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                Swiftly switch between different views such as kanban, cards, list, table, timeline and calendar.
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-primary/5 rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualLanguage />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">Speaks your language</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                From language and currency to time and date formatting. Everything you need for the best possible localised experience.
                            </p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-primary/5 rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualIntegrations />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">Friendly with others</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                Integrate your Plutio workspace with the tools you already use. Create automation flows, sync data and more.
                            </p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className=" bg-primary/5 rounded-2xl p-8 hover:shadow-md transition-shadow">
                        <VisualCustomisable />
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">Super customisable</h3>
                            <p className="text-sm  text-foreground/70 leading-relaxed">
                                With custom fields, color tags, custom views and advanced permissions you can create any setup and workflow imaginable.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}