import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CTA1 from "@/components/cta/cta1";
import CTA2 from "@/components/cta/cta2";
import Cta3 from "@/components/cta/cta3";
import Cta4 from "@/components/cta/cta4";
import Cta5 from "@/components/cta/cta5";

export default function CTAPage() {
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
            <section className="border-b bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CTA Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Call-to-action sections that drive conversions. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <CTA1 />
                <CTA2 />
                <Cta3 />
                <Cta4 />
                <Cta5 />
            </div>
        </div>
    );
}
