import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
    {
        name: "Dana N.",
        role: "Owner",
        initials: "DN",
        content: (
            <>
                We appreciate FuseBase's responsive support team and <strong>continuous improvements, including robust AI integration and enhanced search capabilities.</strong> FuseBase's commitment to improving user experience and maintaining high client satisfaction sets it apart in the crowded document, knowledge, and client management software market. Five stars!
            </>
        ),
    },
    {
        name: "Peter W.",
        role: "Director",
        initials: "PW",
        content: (
            <>
                Maintaining a lot of material together for a team is where Fusebase shines. No paper documents, no emails, no stuff going back and forth. <strong>It's all in one place, and everybody is working in the same environment.</strong>
            </>
        ),
    },
    {
        name: "Tom W.",
        role: "Founder",
        initials: "TW",
        content: (
            <>
                I wanted to consolidate everything so my team could collaborate and share information more easily. <strong>I wanted that one place where you could go and actually find it all, and that was what we bought Fusebase for.</strong> I'm pleased to say that our use has extended beyond that. I love how you can embed online tables and similar items here. This way, you can build all your content from elsewhere in one place.
            </>
        ),
    },
    {
        name: "Vincent",
        role: "Head of Creative Content and Design",
        initials: "V",
        content: (
            <>
                FuseBase has a backend that allows us to update and maintain the content internally and to reflect that content in a nice, easy-to-use user interface for the client. <strong>It's robust, integrated with multiple other applications and solutions, and very customizable.</strong> You can make it look and feel like your company and your brand.
            </>
        ),
    },
    {
        name: "Doug G.",
        role: "Pianist & DJ",
        initials: "DG",
        content: (
            <>
                Fusebase portals replaced my former program a few months ago. Feedback from my clients who experienced both portals voted Fusebase portals superior to the old ones. <strong>FuseBase allows me to create excellent presentations for my clients to plan their events months in advance.</strong>
            </>
        ),
    },
    {
        name: "Seb V.",
        role: "Marketing Manager",
        initials: "SV",
        content: (
            <>
                The results have been great! <strong>With FuseBase, we can really set ourselves apart from other agencies</strong> while making both employee's and clients' lives easier.
            </>
        ),
    },
    {
        name: "Andy H.",
        role: "Director",
        initials: "AH",
        content: (
            <>
                Using the platform has streamlined our workflow significantly. The ability to share live updates with clients is a game changer.
            </>
        ),
    },
    {
        name: "Subhan H.",
        role: "Business Professor",
        initials: "SH",
        content: (
            <>
                An essential tool for modern collaboration. It bridges the gap between complex data management and simple user interfaces.
            </>
        ),
    },
    {
        name: "Andy H.",
        role: "Director",
        initials: "AH",
        content: (
            <>
                Using the platform has streamlined our workflow significantly. The ability to share live updates with clients is a game changer.
            </>
        ),
    },

    {
        name: "Seb V.",
        role: "Marketing Manager",
        initials: "SV",
        content: (
            <>
                The results have been great! <strong>With FuseBase, we can really set ourselves apart from other agencies</strong> while making both employee's and clients' lives easier.
            </>
        ),
    },
];

export default function Testimonial1() {
    return (
        <section className="relative w-full max-w-screen-2xl mx-auto pt-24 pb-12 px-6 bg-background text-foreground flex flex-col items-center overflow-hidden">

            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16 max-w-3xl z-10">
                <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full border-muted-foreground/20 bg-background">
                    Reviews
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                    Client success stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                    Discover how FuseBase helped its users transform the way they manage projects and collaborate with teams
                </p>
            </div>

            {/* Masonry Grid Layout */}
            {/* Removed large bottom padding so cards go deeper into the fade area */}
            <div className="relative w-full max-w-7xl h-screen overflow-hidden columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-6 rounded-xl hover:shadow-sm transition-shadow duration-200"
                    >
                        {/* User Header */}
                        <div className="flex items-center gap-4 mb-4">
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${item.name}`} />
                                <AvatarFallback>{item.initials}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm text-foreground">{item.name}</span>
                                <span className="text-xs text-muted-foreground">{item.role}</span>
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>

            {/* Fade Out Gradient at Bottom */}
            {/* Added z-10 to sit ON TOP of cards, increased height to h-64, and tweaked stops */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none" />

        </section>
    );
}