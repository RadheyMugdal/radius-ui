import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const componentCategories = [
  {
    name: "Hero",
    description: "Eye-catching hero sections to make a strong first impression",
    href: "/hero",
    gradient: "from-violet-500 to-purple-600",
    count: 5,
  },
  {
    name: "Pricing",
    description: "Beautiful pricing tables and cards for your products",
    href: "/pricing",
    gradient: "from-blue-500 to-cyan-600",
    count: 5,
  },
  {
    name: "Features",
    description: "Showcase your product features in style",
    href: "/feature",
    gradient: "from-emerald-500 to-teal-600",
    count: 5,
  },
  {
    name: "Testimonials",
    description: "Social proof components to build trust",
    href: "/testimonial",
    gradient: "from-pink-500 to-rose-600",
    count: 5,
  },
  {
    name: "CTA",
    description: "Call-to-action sections that drive conversions",
    href: "/cta",
    gradient: "from-orange-500 to-amber-600",
    count: 5,
  },
  {
    name: "Footer",
    description: "Complete your pages with professional footers",
    href: "/footer",
    gradient: "from-slate-600 to-gray-700",
    count: 5,
  },
  {
    name: "FAQ",
    description: "Faq that clarifies user doubts",
    href: "/faq",
    gradient: "from-amber-600 to-amber-700",
    count: 5,
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              UI Kit
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Beautiful Components
            <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Use
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of premium UI components built with modern web
            technologies. Copy, customize, and ship faster.
          </p>
        </div>
      </section>

      {/* Component Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {componentCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border bg-white p-8 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              {/* Content */}
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {category.count}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    View Components →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
