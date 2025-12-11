import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LogoCloud1 from "@/components/logo-cloud/logo-cloud1";
import LogoCloud2 from "@/components/logo-cloud/logo-cloud2";
import LogoCloud3 from "@/components/logo-cloud/logo-cloud3";
import LogoCloud4 from "@/components/logo-cloud/logo-cloud4";
import LogoCloud5 from "@/components/logo-cloud/logo-cloud5";

export default function LogoCloudPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Logo Cloud Components</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Eye-catching logo-cloud sections to make a strong first impression. Choose from 5 different designs.
                    </p>
                </div>
            </section>

            {/* Components */}
            <div className="w-full">
                <LogoCloud1 />
                <LogoCloud2 />
                <LogoCloud3 />
                <LogoCloud4 />
                <LogoCloud5 />
            </div>
        </div>
    );
}
