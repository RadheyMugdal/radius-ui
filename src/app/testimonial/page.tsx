import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Testimonial1 from "@/components/testimonial/testimonial1";
import Testimonial2 from "@/components/testimonial/testimonial2";
import Testimonial3 from "@/components/testimonial/testimonial3";
import Testimonial4 from "@/components/testimonial/testimonial4";
import Testimonial5 from "@/components/testimonial/testimonial5";

export default function TestimonialPage() {
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
            <section className="border-b bg-gradient-to-br from-pink-50 to-rose-50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonial Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Social proof components to build trust. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <Testimonial1 />
                <Testimonial2 />
                <Testimonial3 />
                <Testimonial4 />
                <Testimonial5 />
            </div>
        </div>
    );
}
