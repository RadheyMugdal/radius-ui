import React from 'react';
import {
    CheckCircle2,
    ArrowRight,
    MoreHorizontal,
    CreditCard,
    Globe,
    Landmark
} from "lucide-react";


const CashFlowIllustration = () => (
    // Added overflow-hidden to prevent the floating card from causing horizontal scroll on mobile
    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[400px] flex items-center justify-center bg-blue-50/50 rounded-3xl overflow-hidden px-4">
        {/* Added scale transform to shrink the whole assembly on small screens */}
        <div className="relative w-full max-w-[320px] md:max-w-[350px] transform scale-[0.9] sm:scale-100 transition-transform origin-center">

            {/* Background Chart Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 mb-8 w-full">
                <h4 className="text-sm font-semibold text-slate-700 mb-6">Aging Balance</h4>
                <div className="flex items-end justify-between gap-2 h-32 px-2">
                    {/* Bars */}
                    <div className="w-8 bg-blue-500 h-[60%] rounded-t-sm relative group">
                        <div className="absolute -top-6 text-[10px] text-slate-400 hidden group-hover:block">$15k</div>
                    </div>
                    <div className="w-8 bg-red-500 h-[90%] rounded-t-sm relative group">
                        <div className="absolute -top-6 text-[10px] text-slate-400 hidden group-hover:block">$20k</div>
                    </div>
                    <div className="w-8 bg-yellow-400 h-[40%] rounded-t-sm"></div>
                    <div className="w-8 bg-orange-400 h-[30%] rounded-t-sm"></div>
                    <div className="w-8 bg-orange-300 h-[15%] rounded-t-sm"></div>
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-slate-400 font-medium">
                    <span>Due</span>
                    <span>Overdue</span>
                    <span>&lt;30d</span>
                    <span>30-60d</span>
                    <span>60+</span>
                </div>
            </div>

            {/* Floating Widget Card - Adjusted position for mobile */}
            <div className="absolute -right-4 md:-right-8 bottom-4 bg-white p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 w-48 z-10">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <div className="text-2xl font-bold text-slate-900">26 days</div>
                        <div className="text-[10px] text-slate-500">Days sales outstanding</div>
                    </div>
                </div>
                <div className="inline-block bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded font-bold mb-4">
                    ↘ -3 days
                </div>
                {/* Mini Chart */}
                <div className="flex items-end gap-2 h-12">
                    <div className="flex-1 bg-slate-100 h-full rounded-t-sm"></div>
                    <div className="flex-1 bg-slate-100 h-2/3 rounded-t-sm"></div>
                    <div className="flex-1 bg-slate-100 h-1/2 rounded-t-sm"></div>
                    <div className="flex-1 bg-slate-100 h-3/4 rounded-t-sm"></div>
                    <div className="flex-1 bg-green-500 h-1/3 rounded-t-sm"></div>
                </div>
            </div>
        </div>
    </div>
);

const CollectionIllustration = () => (
    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[400px] flex items-center justify-center bg-green-50/50 rounded-3xl overflow-hidden px-4">
        {/* Added scale and max-width constraints */}
        <div className="relative w-full max-w-[300px] md:max-w-[380px] transform scale-[0.9] sm:scale-100 origin-center">

            {/* Background Card (Timeline) - Adjusted scaling and positioning */}
            <div className="absolute top-0 left-0 right-0 bg-white p-6 rounded-xl shadow-sm border border-slate-100 opacity-60 scale-95 origin-top-left -z-10 h-64 overflow-hidden w-full">
                <div className="flex justify-between mb-4">
                    <h4 className="text-xs font-bold text-slate-700">Timeline</h4>
                    <span className="text-xs text-slate-400">$32,946.00</span>
                </div>
                <div className="ml-2 border-l-2 border-slate-100 pl-4 space-y-6">
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                        <div className="text-[10px] font-bold text-slate-700">Formal notice</div>
                        <div className="text-[9px] text-slate-400">Sent to Andrew on 06/23/2020</div>
                    </div>
                    <div className="relative opacity-50">
                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-200 rounded-full border-2 border-white"></div>
                        <div className="text-[10px] font-bold text-slate-700">Contact initiated</div>
                        <div className="text-[9px] text-slate-400">June 26th</div>
                    </div>
                </div>
            </div>

            {/* Foreground Card (Email UI) - Reduced translate on mobile */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 mt-12 transform translate-x-2 md:translate-x-4 w-full">
                {/* Email Header */}
                <div className="border-b border-slate-50 p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">M</div>
                    <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-800 truncate">Milton Logistics</div>
                        <div className="text-[10px] text-slate-400 truncate">Dunning email</div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-700">$32k</span>
                </div>
                {/* Email Body */}
                <div className="p-4 md:p-5 space-y-3">
                    <div className="bg-slate-50 p-2 rounded text-[10px] text-slate-500 mb-2 truncate">
                        To: <span className="text-slate-800 font-medium">Andrew Spencer</span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                        Hi Andrew,<br /><br />
                        Your invoices <span className="text-blue-500 font-medium">#121</span> and <span className="text-blue-500 font-medium">#213</span> are past due.
                    </div>
                    <div className="pt-2 flex justify-end">
                        <button className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded font-medium shadow-md shadow-blue-200">Send</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

const PaymentsIllustration = () => (
    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[400px] flex items-center justify-center bg-[#FFF9EE] rounded-3xl overflow-hidden px-4">
        {/* Adjusted scaling */}
        <div className="relative w-full max-w-[320px] md:max-w-[350px] transform scale-[0.9] sm:scale-100 origin-center">

            {/* Background Card (Invoice List) */}
            <div className="bg-white rounded-t-xl shadow-md border border-slate-100 overflow-hidden w-64 absolute top-0 left-0 -translate-y-12 z-0 opacity-80">
                <div className="bg-[#0F172A] p-4 text-white">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold">Johnson Inc.</span>
                        <div className="text-right">
                            <div className="text-[9px] opacity-70">Outstanding</div>
                            <div className="text-xs font-bold">$6,937.00</div>
                        </div>
                    </div>
                </div>
                <div className="p-2 space-y-2">
                    <div className="flex justify-between items-center text-[10px] border-b border-slate-50 pb-2">
                        <span className="text-slate-500">#98729</span>
                        <span className="bg-red-50 text-red-500 px-1 rounded">OVERDUE</span>
                        <span className="font-medium">$4,810.00</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] border-b border-slate-50 pb-2">
                        <span className="text-slate-500">#98718</span>
                        <span className="bg-red-50 text-red-500 px-1 rounded">OVERDUE</span>
                    </div>
                    <div className="bg-blue-500 h-8 mt-2 rounded-sm w-full"></div>
                </div>
            </div>

            {/* Foreground Card (Payment Methods) - Reduced margins on mobile */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 relative z-10 w-full mt-10 ml-2 md:ml-8">
                <h4 className="text-sm font-bold text-slate-800 mb-4">Payment method</h4>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-100 shrink-0">
                            <CreditCard size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-700">Credit or debit card</div>
                            <div className="text-[10px] text-slate-400">Pay instantly</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-slate-200 shrink-0">
                            <Globe size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-700">Wire transfer</div>
                            <div className="text-[10px] text-slate-400">Pay when it's convenient</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-slate-200 shrink-0">
                            <Landmark size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-700">Direct debit</div>
                            <div className="text-[10px] text-slate-400">Pay automatically</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

// --- Main Component ---

export default function Feature5() {
    const features = [
        {
            title: "Understand your cash flow",
            description: "Make better business decisions through a deep, real-time view of your accounts receivable",
            points: ["Dashboards", "Financial projections", "Days sales outstanding"],
            linkText: "Learn about insights",
            illustration: <CashFlowIllustration />,
            align: "right" // Image on right
        },
        {
            title: "Systematic collection",
            description: "Never forget to follow up on an unpaid invoice by setting up systematic collection schedules",
            points: ["Keep clients happy using personalised reminders", "Send emails and registered letters", "Keep the right stakeholders in the loop"],
            linkText: "Apply industry best practices",
            illustration: <CollectionIllustration />,
            align: "left" // Image on left
        },
        {
            title: "Streamlined payments",
            description: "Offer new payment methods that better suit your customer's needs and reduce your time to get paid",
            points: ["Simplified payment experience for your customers", "Offer new payment methods", "Automatic reconciliation"],
            linkText: "Discover our payment platform",
            illustration: <PaymentsIllustration />,
            align: "right" // Image on right
        }
    ];

    return (
        <section className="bg-background text-foreground max-w-screen-2xl mx-auto py-24 px-6 lg:px-8 overflow-hidden  ">
            <div className="max-w-7xl mx-auto space-y-32">

                {features.map((feature, index) => (
                    <div key={index} className={`flex flex-col gap-12 lg:gap-24 items-center ${feature.align === "left" ? "lg:flex-row-reverse " : "lg:flex-row"}`}>

                        {/* Text Side */}
                        <div className={`flex-1 w-full    max-w-xl flex flex-col  justify-center ${feature.align === "left" ? "lg:pr-12" : "lg:pl-12"}`}>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">
                                {feature.title}
                            </h2>
                            <p className="text-lg  text-foreground/60 mb-8 leading-relaxed">
                                {feature.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[18px]">
                                            <CheckCircle2 size={18} className="text-primary" />
                                        </div>
                                        <span className=" text-foreground/60 text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                                {feature.linkText} <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Image Side */}
                        <div className=" max-w-xl w-full ">
                            {feature.illustration}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}