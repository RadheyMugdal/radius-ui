import React from "react";
import { Linkedin } from "lucide-react";

// Types for our team members
type TeamMember = {
    name: string;
    role: string;
    image: string;
    linkedinUrl: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Matt Bivons",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        linkedinUrl: "#",
    },
    {
        name: "Justin Potts",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        linkedinUrl: "#",
    },
    {
        name: "Dami Payne",
        role: "Head of Product",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
        linkedinUrl: "#",
    },
    {
        name: "Kirk Wells",
        role: "Chief Revenue Officer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        linkedinUrl: "#",
    },
    {
        name: "Jessica Wu",
        role: "VP of People",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        linkedinUrl: "#",
    },
    {
        name: "Scott Melman",
        role: "Head of Business Operations",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        linkedinUrl: "#",
    },

];

export default function Team1() {
    return (
        <section className="relative w-full min-h-screen bg-background text-foreground">
            {/* 
        Background Split Trick:
        The top is white (default bg). 
        The bottom gray area starts absolutely positioned 
        behind the grid to create the seamless 'card-to-background' blend.
      */}
            <div className="absolute top-[400px] left-0 right-0 bottom-0  -z-0" />

            <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">

                {/* --- Header --- */}
                <h2 className="text-4xl md:text-5xl font-semibold  mb-16 tracking-tight">
                    Meet our leadership team.
                </h2>

                {/* --- Grid --- */}
                <div className="grid grid-cols-1 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-0">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`
                group flex flex-col relative
                lg:border-r 
                lg:[&:nth-child(4n)]:border-r-0
                sm:max-lg:[&:nth-child(2n)]:border-r-0
                max-sm:border-r-0
              `}
                        >
                            {/* Image Container with "Arch" Mask */}
                            <div className="px-6 mb-0">
                                <div className="aspect-[4/5] w-full relative overflow-hidden rounded-t-[10rem]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            {/* bg-[#F5F5F7] matches the bottom page background to look transparent */}
                            <div className=" pt-6 pb-12 px-6 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-lg font-medium  mb-1.5">
                                        {member.name}
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-[0.15em]  text-foreground/60 font-medium leading-relaxed font-mono">
                                        {member.role}
                                    </p>
                                </div>

                                {/* LinkedIn Icon - Bottom Right */}
                                <div className="flex justify-end mt-4">
                                    <a
                                        href={member.linkedinUrl}
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
                                        aria-label={`${member.name} LinkedIn`}
                                    >
                                        <Linkedin className="size-4 fill-current" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}