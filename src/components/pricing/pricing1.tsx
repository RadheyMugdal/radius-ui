import React from 'react'
import { Card } from '../ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'

const plans = [
    {
        name: "Free",
        price: "$0",
        headerColor: "bg-[#FFD862]", // Custom yellow from image
        textColor: "text-gray-900",
        description: "$0/month, billed annually or $0/month, billed monthly",
        users: "3 Users Included - Additional Users Not Supported",
        features: [
            "SMS & Email Channel",
            "Broadcast and Scheduling",
            "250 Contacts",
            "Smart-link tracking",
            "Send Global SMS",
            "Email Marketing Custom Domain",
            "API Access & Mobile App"
        ]
    },
    {
        name: "Starter",
        price: "$39",
        headerColor: "bg-[#B4B9FF]", // Custom purple from image
        textColor: "text-gray-900",
        description: "$39/month, billed annually or $49/month, billed monthly",
        users: "3 Users Included - Additional Users @ 12$/user/month",
        features: [
            "WhatsApp Channel",
            "Inbox (send & receive)",
            "Unlimited Contacts",
            "Automation Flows",
            "WhatsApp Bot & Green Tick",
            "E-commerce Catalog",
            "Marketing CRM (people)"
        ]
    },
    {
        name: "Growth",
        price: "$74",
        headerColor: "bg-[#FF9B8C]", // Custom salmon/red from image
        textColor: "text-gray-900",
        description: "$74/month, billed annually or $89/month, billed monthly",
        users: "3 Users Included - Additional Users @ 24$/user/month",
        features: [
            "Cadence (Sequence)",
            "Teams",
            "Member-based Permissions",
            "Advanced Automation",
            "WhatsApp Flows",
            "Automated Chat Assignment",
            "Priority Support"
        ]
    },
    {
        name: "Enterprise",
        price: "$159",
        headerColor: "bg-[#71D68F]", // Custom green from image
        textColor: "text-gray-900",
        description: "$159/month, billed annually or $199/month, billed monthly",
        users: "3 Users Included - Additional Users @ 59$/user/month",
        features: [
            "Business Email two-way Sync",
            "1-1 Onboarding",
            "Volume Discounts",
            "Advanced Permissions",
            "Dedicated Database",
            "Custom Billing",
            "Dedicated Account Manager"
        ]
    }
];

const Pricing1 = () => {
    return (
        <div className="min-h-screen bg-background text-foreground max-w-screen-2xl mx-auto  p-4 md:p-8">

            {/* Header Section */}
            <div className="  text-center mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Affordable pricing <span className="bg-[#71D68F] px-2 rounded-md">plans</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                    Plans for one-person startups to Fortune 500 enterprises. No credit card required
                </p>
            </div>

            {/* Tab/Category Switcher */}
            <div className="max-w-7xl mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-muted/50 p-2 rounded-xl">
                    {/* Active Tab */}
                    <div className="bg-[#EBF1FF] border-2 border-primary/20 rounded-lg p-4 flex flex-col items-start cursor-pointer relative">
                        <div className="flex items-center gap-2 mb-1 text-primary font-bold">
                            <span className="text-lg">📢</span> Marketing
                        </div>
                        <div className="text-sm text-primary/80">WhatsApp, SMS & Email Automation</div>
                        {/* Active Indicator Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-b-lg"></div>
                    </div>

                    {/* Inactive Tab */}
                    <div className="bg-muted hover:bg-white transition-colors rounded-lg p-4 flex flex-col items-start cursor-pointer border border-transparent hover:border-border">
                        <div className="flex items-center gap-2 mb-1 font-semibold text-foreground">
                            <span className="text-lg">🗃️</span> XCRM
                        </div>
                        <div className="text-sm text-muted-foreground">Sales, Recruiting, Partnership & More</div>
                    </div>

                    {/* Inactive Tab */}
                    <div className="bg-muted hover:bg-white transition-colors rounded-lg p-4 flex flex-col items-start cursor-pointer border border-transparent hover:border-border">
                        <div className="flex items-center gap-2 mb-1 font-semibold text-foreground">
                            <span className="text-lg">✨</span> ONE
                        </div>
                        <div className="text-sm text-muted-foreground">Marketing + XCRM</div>
                    </div>
                </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <Card key={index} className="flex flex-col h-full overflow-hidden border-border/60 shadow-none hover:shadow-lg transition-shadow duration-200">
                        {/* Colored Header */}
                        <div className={`${plan.headerColor} p-8 rounded-xl m-4 mb-2 flex flex-col items-center justify-center text-center space-y-2 h-40`}>
                            <h3 className={`font-semibold text-lg ${plan.textColor}`}>{plan.name}</h3>
                            <div className={`text-4xl font-bold ${plan.textColor}`}>{plan.price}</div>
                            {/* Decorative dots in background could go here using pseudo-elements */}
                        </div>

                        <div className="flex-1 p-6 pt-2 flex flex-col">
                            <div className="mb-6 space-y-4">
                                <h4 className="font-bold text-lg">Plan includes</h4>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                    {plan.description}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {plan.users}
                                </p>
                            </div>

                            {/* Feature List */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <div className="mt-0.5">
                                            <CheckCircle2 className="h-5 w-5 text-foreground/60 stroke-[1.5]" />
                                        </div>
                                        <span className="text-foreground/90 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="w-full py-6 text-base border-input hover:border-primary/50 hover:bg-accent/50">
                                Try it free
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Pricing1