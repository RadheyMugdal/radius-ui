import React from "react";
import { Github, ChevronDown, User, Star, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeatureGrid() {
    return (
        <section className="w-full bg-background max-w-screen-2xl mx-auto text-foreground py-12 md:py-24">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* --- Card 1: Community Data (Line Chart Mockup) --- */}
                    <Card className="overflow-hidden shadow-sm">
                        {/* Visual Area */}
                        <div className="h-64 bg-mute relative border-b p-6 flex items-center justify-center overflow-hidden">

                            {/* Background Chart Lines */}
                            <div className="absolute inset-0 top-12 px-6 opacity-30 pointer-events-none">
                                <div className="h-full w-full flex items-end justify-between gap-4">
                                    <svg className="w-full h-32 overflow-visible" preserveAspectRatio="none">
                                        {/* Green Line */}
                                        <path d="M0,80 C50,70 100,20 150,30 C200,40 250,60 300,50 C350,40 400,60 450,70" fill="none" stroke="#10b981" strokeWidth="2" />
                                        {/* Purple Line */}
                                        <path d="M0,60 C50,50 100,60 150,50 C200,40 250,10 300,40 C350,70 400,60 450,50" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating GitHub Stats Card */}
                            <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-64 z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Github className="h-4 w-4" />
                                    <span className="font-semibold text-sm">Github</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Pull requests</span>
                                        <span className="font-medium text-gray-900">91</span>
                                    </div>
                                    <div className="h-px bg-gray-100 w-full" />
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Issues</span>
                                        <span className="font-medium ">37</span>
                                    </div>
                                    <div className="h-px bg-gray-100 w-full" />
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Comments</span>
                                        <span className="font-medium text-gray-900">156</span>
                                    </div>
                                    <div className="h-px bg-gray-100 w-full" />
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Reactions</span>
                                        <span className="font-medium text-gray-900">614</span>
                                    </div>
                                </div>
                                {/* Tooltip Decoration */}
                                <div className="absolute -right-12 top-8 bg-white shadow-md border border-gray-100 rounded-lg px-2 py-1 flex flex-col items-center">
                                    <span className="text-[10px] text-gray-400">Jun 2023</span>
                                    <span className="text-xs font-bold text-gray-900">84 messages</span>
                                </div>
                            </div>
                        </div>

                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold  mb-2">View the right community data</h3>
                            <p className=" text-foreground/60 leading-relaxed text-sm">
                                Customize the view of your dashboards and vizualize the right community data.
                            </p>
                        </CardContent>
                    </Card>


                    {/* --- Card 2: Decisions (Bar Chart Mockup) --- */}
                    <Card className="overflow-hidden  shadow-sm">
                        <div className="h-64 bg-gray-50/50 relative border-b border-gray-100 p-8 flex flex-col justify-center">
                            <h4 className="text-sm font-semibold text-gray-700 mb-6">Event attendance conversion</h4>
                            <div className="flex items-end gap-8 h-32 w-full">

                                {/* Bar 1 */}
                                <div className="flex-1 flex flex-col justify-end h-full gap-2">
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>100%</span>
                                    </div>
                                    <div className="w-full bg-indigo-600 rounded-t-sm h-full relative group">
                                        {/* Hover Tooltip Mockup */}
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1">Event registration</span>
                                </div>

                                {/* Bar 2 */}
                                <div className="flex-1 flex flex-col justify-end h-full gap-2">
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span className="font-bold text-gray-900">56%</span>
                                    </div>
                                    <div className="w-full bg-indigo-100 rounded-t-sm h-[56%] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-indigo-600"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1">Attendees who joined the community</span>
                                </div>

                                {/* Bar 3 */}
                                <div className="flex-1 flex flex-col justify-end h-full gap-2 opacity-50">
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>36%</span>
                                    </div>
                                    <div className="w-full bg-indigo-50 rounded-t-sm h-[36%] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-indigo-300"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1">Conversion</span>
                                </div>

                            </div>
                        </div>

                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold mb-2">Make right community decisions</h3>
                            <p className="text-foreground/60 leading-relaxed text-sm">
                                Understand where you community makes real business impact and take action.
                            </p>
                        </CardContent>
                    </Card>


                    {/* --- Card 3: Segments (Dropdown Mockup) --- */}
                    <Card className="overflow-hidden  shadow-sm">
                        <div className="h-64 bg-gray-50/50 relative border-b border-gray-100 p-6 flex items-center justify-center">
                            {/* Faint Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

                            {/* Dropdown UI */}
                            <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 w-64 z-10 overflow-hidden">
                                <div className="flex items-center justify-between p-3 border-b border-gray-100 bg-gray-50/50">
                                    <span className="text-xs font-medium text-gray-600">Discord members with email</span>
                                    <ChevronDown className="h-3 w-3 text-gray-400" />
                                </div>
                                <div className="p-1">
                                    <div className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 cursor-pointer rounded-md">All Community</div>
                                    <div className="px-3 py-1.5 text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-1">Dynamic Lists</div>
                                    <div className="px-3 py-2 text-xs text-indigo-600 bg-indigo-50 font-medium cursor-pointer rounded-md flex justify-between items-center">
                                        Discord Members
                                    </div>
                                    <div className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 cursor-pointer rounded-md">Discord Members with Email</div>
                                    <div className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 cursor-pointer rounded-md">All Event Visitors</div>
                                </div>
                            </div>
                        </div>

                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold mb-2">View the right segments</h3>
                            <p className="text-foreground/60 leading-relaxed text-sm">
                                Create automated contact lists and view analytics within custom time frames.
                            </p>
                        </CardContent>
                    </Card>


                    {/* --- Card 4: Member Data (Table Mockup) --- */}
                    <Card className="overflow-hidden shadow-sm">
                        <div className="h-64 bg-gray-50/50 relative border-b border-gray-100 pt-8 pl-8 flex flex-col justify-start overflow-hidden">
                            <h4 className="text-sm font-semibold text-gray-700 mb-4">Top contributors</h4>

                            <div className="bg-white rounded-tl-lg border-l border-t border-gray-200 shadow-sm w-full h-full p-0">
                                {/* Table Header */}
                                <div className="grid grid-cols-12 gap-4 border-b border-gray-100 px-4 py-3 bg-gray-50/30">
                                    <div className="col-span-5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Member Name</div>
                                    <div className="col-span-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Activity Score</div>
                                    <div className="col-span-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Company Name</div>
                                </div>

                                {/* Rows */}
                                <div className="divide-y divide-gray-50">
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center">
                                        <div className="col-span-5 flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px]">LC</div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-900">Lando Calrissian</span>
                                                <span className="text-[10px] text-gray-400">Singer at Arctic Mangos</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 text-xs font-medium text-gray-700">839</div>
                                        <div className="col-span-4 text-xs text-gray-600">Arctic Mangos</div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center">
                                        <div className="col-span-5 flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-[10px]">PL</div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-900">Princess Leia</span>
                                                <span className="text-[10px] text-gray-400">Star Corp, Inc.</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 text-xs font-medium text-gray-700">405</div>
                                        <div className="col-span-4 text-xs text-gray-600">Star Corp, Inc.</div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center">
                                        <div className="col-span-5 flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px]">SW</div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-900">Sabine Wren</span>
                                                <span className="text-[10px] text-gray-400">Gamer at HXK</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 text-xs font-medium text-gray-700">384</div>
                                        <div className="col-span-4 text-xs text-gray-600">Nova Orion Industries</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold mb-2">Member-level data insights</h3>
                            <p className="text-foreground/60 leading-relaxed text-sm">
                                Discover the true impact of community initiatives by analyzing data at the individual level of each member.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}