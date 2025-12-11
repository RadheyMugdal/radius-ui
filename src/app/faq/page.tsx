import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Feature1 from "@/components/feature/feature1";
import Feature2 from "@/components/feature/feature2";
import Feature3 from "@/components/feature/feature3";
import Feature4 from "@/components/feature/feature4";
import Feature5 from "@/components/feature/feature5";
import FAQ1 from "@/components/faq/faq1";
import FAQ2 from "@/components/faq/faq2";
import FAQ3 from "@/components/faq/faq3";
import FAQ4 from "@/components/faq/faq4";
import FAQ5 from "@/components/faq/faq5";
import FAQ6 from "@/components/faq/faq6";
import FAQ7 from "@/components/faq/faq7";

export default function FAQPage() {
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
            <section className="border-b bg-gradient-to-br from-emerald-50 to-teal-50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Feature Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Showcase your product features in style. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <FAQ1 />
                <FAQ2 />
                <FAQ3 />
                <FAQ4 />
                <FAQ5 />
                <FAQ6 />
                <FAQ7 />
            </div>
        </div>
    );
}
