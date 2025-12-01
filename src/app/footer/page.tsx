import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer1 from "@/components/footer/footer1";
import Footer2 from "@/components/footer/footer2";
import Footer3 from "@/components/footer/footer3";
import Footer4 from "@/components/footer/footer4";
import Footer5 from "@/components/footer/footer5";

export default function FooterPage() {
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
            <section className="border-b bg-gradient-to-br from-slate-100 to-gray-100">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Footer Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Complete your pages with professional footers. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <Footer1 />
                <Footer2 />
                <Footer3 />
                <Footer4 />
                <Footer5 />
            </div>
        </div>
    );
}
