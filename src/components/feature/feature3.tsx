import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Slack,
    Trello,
    HardDrive,
    FileText,
    Table,
    LayoutGrid,
    User,
    ChevronDown,
    Lock,
    BarChart3,
    Smartphone,
    CheckCircle2,
    MoreHorizontal
} from "lucide-react";

// --- Illustration Sub-Components ---

const StairIllustration = () => (
    <div className="relative w-full h-64 md:h-80 flex items-end justify-center md:justify-end pr-0 md:pr-10">
        {/* Abstract Stairs */}
        <div className="relative">
            <svg width="300" height="300" viewBox="0 0 300 300" className="text-indigo-950">
                {/* Star */}
                <path d="M220 20 L230 50 L260 55 L235 75 L245 105 L220 85 L195 105 L205 75 L180 55 L210 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M220 85 L220 300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />

                {/* Stairs Block */}
                <rect x="50" y="250" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="100" y="200" width="50" height="50" fill="#1e1b4b" stroke="currentColor" strokeWidth="2" />
                <rect x="150" y="150" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="200" y="100" width="100" height="150" fill="#1e1b4b" stroke="currentColor" strokeWidth="2" />

                {/* Person Abstract */}
                <circle cx="125" cy="140" r="15" fill="#fff" stroke="currentColor" strokeWidth="2" />
                <path d="M125 155 L125 185 L110 215" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M125 185 L140 215" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M110 165 L140 165" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    </div>
);

const IntegrationIcons = () => {
    const icons = [
        { icon: <Slack className="w-6 h-6 text-white" />, bg: "bg-purple-600" },
        { icon: <HardDrive className="w-6 h-6 text-white" />, bg: "bg-green-500" },
        { icon: <LayoutGrid className="w-6 h-6 text-white" />, bg: "bg-yellow-500" },
        { icon: <FileText className="w-6 h-6 text-white" />, bg: "bg-blue-600" },
        { icon: <Trello className="w-6 h-6 text-white" />, bg: "bg-blue-400" },
        { icon: <Table className="w-6 h-6 text-white" />, bg: "bg-blue-500" },
        { icon: <Lock className="w-6 h-6 text-white" />, bg: "bg-orange-500" },
        { icon: <LayoutGrid className="w-6 h-6 text-white" />, bg: "bg-teal-500" },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 p-8 items-center justify-center">
            {icons.map((item, i) => (
                <div key={i} className={`${item.bg} w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110`}>
                    {item.icon}
                </div>
            ))}
        </div>
    );
};

const StakeholderUI = () => (
    <div className="bg-white rounded-lg shadow-md p-4 w-3/4 mx-auto mt-6 relative overflow-hidden border border-gray-100">
        <div className="flex gap-4">
            {/* Sidebar Mock */}
            <div className="w-12 flex flex-col gap-3 items-center border-r pr-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md text-white flex items-center justify-center font-bold">C</div>
                <div className="w-8 h-8 bg-green-500 rounded-md text-white flex items-center justify-center font-bold">K</div>
                <div className="w-8 h-8 bg-black rounded-md text-white flex items-center justify-center"><Smartphone size={16} /></div>
            </div>
            {/* Content Mock */}
            <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500"><div className="w-2 h-2 bg-orange-400 rounded-full"></div>Organise site visit</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div>Product feedback</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500"><div className="w-2 h-2 bg-green-400 rounded-full"></div>Customer support</div>
                </div>
            </div>
        </div>
    </div>
);

const SecurityPermissions = () => (
    <div className="flex items-center justify-center h-full pt-6">
        <div className="relative">
            {/* User Row */}
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3 w-64 z-10 relative">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white"><User size={16} /></div>
                <div className="flex-1 text-sm font-medium">Emer Nash</div>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center gap-1 cursor-pointer">
                    View and edit <ChevronDown size={12} />
                </div>
            </div>

            {/* Dropdown Mock */}
            <div className="absolute top-12 right-0 bg-white shadow-xl rounded-lg border border-gray-100 w-56 p-2 z-20 text-xs space-y-1">
                <div className="p-2 hover:bg-gray-50 rounded">
                    <div className="font-semibold text-gray-800">Full access</div>
                    <div className="text-gray-400 text-[10px]">Can view, edit, and manage access</div>
                </div>
                <div className="p-2 bg-indigo-50 rounded">
                    <div className="font-semibold text-indigo-700">View and edit</div>
                    <div className="text-indigo-400 text-[10px]">Can edit, but not manage access</div>
                </div>
                <div className="p-2 hover:bg-gray-50 rounded">
                    <div className="font-semibold text-gray-800">View only</div>
                    <div className="text-gray-400 text-[10px]">Can view, but not edit</div>
                </div>
                <div className="p-2 text-red-500 font-medium cursor-pointer hover:bg-red-50 rounded">Remove</div>
            </div>
        </div>
    </div>
);

const MetricsCard = () => (
    <div className="flex items-center justify-center h-full pt-4">
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-64 relative">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="text-sm font-bold text-gray-800">Reached audience</div>
                    <div className="text-[10px] text-gray-500 leading-tight mt-1">Number of unique users that<br />have seen this insight.</div>
                </div>
                <span className="text-lg font-bold text-gray-900">139</span>
            </div>

            <div className="h-px bg-gray-100 my-2"></div>

            <div className="flex gap-3">
                {/* Tiny Image mock */}
                <div className="w-16 h-16 bg-slate-200 rounded-md overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100"></div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-xs font-bold text-gray-800">Engagement ratio <MoreHorizontal size={12} /></div>
                        <span className="text-sm font-bold text-gray-900">85%</span>
                    </div>
                    <div className="text-[10px] text-gray-500 leading-tight mt-1">Percentage of unique users who have engaged.</div>
                </div>
            </div>
        </div>
    </div>
);


// --- Main Component ---

export default function Feature3() {
    return (
        <div className="bg-amber-50 min-h-screen max-w-screen-2xl mx-auto font-sans ">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1b4b] leading-[1.1] mb-6">
                            The platform <br />
                            that scales with <br />
                            your team
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Build your company's insights hub to scale knowledge across your organization with customization, integrations, security, privacy, and compliance features.
                        </p>
                    </div>

                    <div className="hidden lg:block">
                        <StairIllustration />
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

                    {/* Card 1: Integrations */}
                    <div className="flex flex-col items-start">
                        <div className="w-full aspect-[4/3] bg-[#FDF6E9] rounded-sm mb-6 flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDF6E9]/50"></div>
                            <IntegrationIcons />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a1b4b] mb-3">Connect to the tools you use</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-sm">
                            Surface research insights in the tools your stakeholders use with Slack, Atlassian, Notion, and Zapier integrations.
                        </p>
                        <Button className="bg-[#1a1b4b] hover:bg-[#2e3075] text-white rounded-md px-6 py-2 font-medium">
                            Explore integrations
                        </Button>
                    </div>

                    {/* Card 2: Customization */}
                    <div className="flex flex-col items-start">
                        <div className="w-full aspect-[4/3] bg-[#FDF6E9] rounded-sm mb-6 overflow-hidden relative pt-10">
                            <div className="absolute top-4 left-6 text-lg font-bold text-[#1a1b4b]">SafetyCulture's Home</div>
                            <StakeholderUI />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a1b4b] mb-3">Customize the stakeholder experience</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-sm">
                            Make your team feel at home by adding your organization's flair to your insights hub with custom branding, landing page, and more.
                        </p>
                        <Button className="bg-[#1a1b4b] hover:bg-[#2e3075] text-white rounded-md px-6 py-2 font-medium">
                            Explore insights
                        </Button>
                    </div>

                    {/* Card 3: Security */}
                    <div className="flex flex-col items-start">
                        <div className="w-full aspect-[4/3] bg-[#FDF6E9] rounded-sm mb-6 overflow-visible relative">
                            <SecurityPermissions />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a1b4b] mb-3">Security and privacy controls</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-sm">
                            Our platform is backed by industry-standard security, reliability, and privacy controls to ensure that your data is available and secure.
                        </p>
                        <Button className="bg-[#1a1b4b] hover:bg-[#2e3075] text-white rounded-md px-6 py-2 font-medium">
                            Explore security
                        </Button>
                    </div>

                    {/* Card 4: Scale */}
                    <div className="flex flex-col items-start">
                        <div className="w-full aspect-[4/3] bg-[#FDF6E9] rounded-sm mb-6 flex items-center justify-center">
                            <MetricsCard />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a1b4b] mb-3">Unlock the potential of research at scale</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-sm">
                            Scale and standardize research across your organization. Empower your entire organization to bring your customer into every decision.
                        </p>
                        <Button className="bg-[#1a1b4b] hover:bg-[#2e3075] text-white rounded-md px-6 py-2 font-medium">
                            Explore scale
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}