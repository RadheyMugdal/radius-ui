import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Hero1 from "@/components/hero/hero1";
import Hero2 from "@/components/hero/hero2";
import Hero3 from "@/components/hero/hero3";
import Hero4 from "@/components/hero/hero4";
import Hero5 from "@/components/hero/hero5";

export default function HeroPage() {
    return (
        <div className="min-h-screen  bg-background">
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
            <section className="border-b bg-gradient-to-br from-violet-50 to-purple-50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hero Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Eye-catching hero sections to make a strong first impression. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <Hero1 />
                <Hero2 />
                <Hero3 />
                <Hero4 />
                <Hero5 />
            </div>
        </div>
    );
}
