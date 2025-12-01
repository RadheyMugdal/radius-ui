import React from 'react';

const faqs = [
    {
        question: "What kind of photos do I need to upload?",
        answer: "Make variety a priority. Varied facial expressions and varied backgrounds, taken at various times of the day, are the keys to high quality input photos. Oh, and minimal makeup and accessories, please!"
    },
    {
        question: "What do you do with my uploaded photos?",
        answer: "The photos you upload are used to train our AI model so it can create realistic AI headshots. These input photos are deleted within 7 days, but you can instantly delete them at any time with our 'Delete' button."
    },
    {
        question: "Who owns my AI photos?",
        answer: "You do. We grant you full commercial license and ownership over your photos."
    },
    {
        question: "What if I don't like my photos?",
        answer: "No problem. If you don't get a single profile-worthy headshot, we'll refund your entire purchase. It's our Profile-Worthy guarantee."
    },
    {
        question: "How long does an AI headshot take?",
        answer: "We don't cut corners when it comes to generating photorealistic AI headshots. We're not the fastest, but you'll always get same-day results with HeadshotPro. Our Executive package is delivered in 1 hour or less."
    },
    {
        question: "What do people misunderstand about AI headshots?",
        answer: "Not every photo is perfect. Due to the nature of AI, you might see some strange photos. HeadshotPro tries to make this clear from the start: not every photo is perfect, but we promise you'll find a profile-worthy headshot in every order to make it all worth it."
    },
    {
        question: "How many good photos can I expect?",
        answer: "The amount of keeper headshots you get back will largely depend on the photos you provide us with. Customers who make an effort to follow the instructions closely often walk away with 8-10+ incredible photos. At the very least, we guarantee you'll get a Profile-Worthy headshot back."
    },
    {
        question: "Is there a free AI headshot generator?",
        answer: "Yes, HeadshotPro has a 100% free AI headshot generator for simple photos. No email is required and no credit card is required. It is completely free."
    },
    {
        question: "What is the most realistic headshot AI?",
        answer: "HeadshotPro is the most realistic headshot AI with the most reviews. It's the only major AI headshot generator using Flux to generate realistic AI headshots. HeadshotPro is regularly used by Fortune 500 companies."
    },
    {
        question: "Can I use AI headshots on LinkedIn?",
        answer: "25% of HeadshotPro customers use their AI headshots on LinkedIn. It's totally okay to use AI headshots on LinkedIn."
    },
    {
        question: "Can ChatGPT generate headshots?",
        answer: "Yes, ChatGPT can generate very basic headshots. These headshots aren't realistic enough to use professionally, but they can be fun to play around with. Use HeadshotPro for AI headshots you can use professionally."
    },
    {
        question: "What AI should I use for headshots?",
        answer: "The best AI headshot generators are using Flux to maximize realism. Right now, HeadshotPro is the only major headshot AI powered by Flux. You can get up to 200 professional AI headshots within 2 hours for just $29."
    }
];

const FAQ1 = () => {
    return (
        <section className="bg-background text-foreground max-w-screen-2xl mx-auto py-16 px-4 md:px-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-xs md:text-sm font-medium  text-foreground/s75 flex items-center justify-center gap-2">
                        <span>🔥</span> You have full commercial rights and ownership of your photos
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Frequently Asked Questions
                    </h2>

                    <p className=" text-foreground/60 md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Answers to common questions about our professional AI generated
                        headshot service for individuals and remote teams.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-3">
                            <h3 className="md:text-lg text-base font-semibold text-foreground leading-tight">
                                {faq.question}
                            </h3>
                            <p className="text-foreground/60   ">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ1;