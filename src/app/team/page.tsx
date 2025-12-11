import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Pricing1 from "@/components/pricing/pricing1";
import Pricing2 from "@/components/pricing/pricing2";
import WorkablePricing from "@/components/pricing/pricing3";
import Pricing4 from "@/components/pricing/pricing4";
import Pricing5 from "@/components/pricing/pricing5";
import Pricing6 from "@/components/pricing/pricing6";
import Pricing7 from "@/components/pricing/pricing7";
import Team1 from "@/components/team/team1";
import Team2 from "@/components/team/team2";
import Team3 from "@/components/team/team3";
import Team4 from "@/components/team/team4";
import Team5 from "@/components/team/team5";

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Page Title */}
            <section className="border-b bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Beautiful team sections for your products. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <Team1 />
                <Team2 />
                <Team3 />
                <Team4 />
                <Team5 />
            </div>
        </div>
    );
}
