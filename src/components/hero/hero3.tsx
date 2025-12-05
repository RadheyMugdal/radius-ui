import React from 'react'
import { ArrowRight, Hamburger, HamburgerIcon, Menu, Star } from 'lucide-react'
import { Button } from '../ui/button'

const Hero3 = () => {
    return (
        <section className=' max-w-screen-2xl bg-background text-foreground min-h-screen flex flex-col  mx-auto'>
            <header className="py-4 relative px-8 border-b  flex justify-between md:grid md:grid-cols-3 w-full items-center">
                <div className="flex-none">
                    <h1 className="text-2xl font-semibold">Logo</h1>
                </div>

                <nav className="flex-1 hidden lg:flex justify-center ">
                    <ul className="flex justify-center gap-6 text-sm opacity-75 font-medium">
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Solutions</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                    </ul>
                </nav>
                <div className="  justify-end  hidden lg:flex gap-4">
                    <button className="hover:bg-secondary py-3 px-4">
                        Book a demo
                    </button>
                    <button className="hover:bg-primary/90 py-3  bg-primary text-primary-foreground px-4">
                        Start 7-day trial
                    </button>
                </div>
                <div className='md:hidden'>
                    <input type="checkbox" id='menu-btn-hero2' className='    peer hidden' />
                    <label htmlFor="menu-btn-hero2" className=' block cursor-pointer'>

                        <Menu className="h-6 w-6" />

                    </label>
                    <div className='peer-checked:block hidden  space-y-8 inset-x-0 p-8  absolute top-full left-0   bg-background text-foreground border-b  z-20'>
                        <nav className=" flex  items-center justify-center ">
                            <ul className="flex  flex-col items-center justify-center gap-6 text-sm opacity-75 font-medium">
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">Solutions</a>
                                </li>
                                <li>
                                    <a href="#">Resources</a>
                                </li>
                                <li>
                                    <a href="#">Company</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="  flex flex-col  w-full justify-center gap-4">
                            <button className="hover:bg-primary/90 py-3  bg-primary text-primary-foreground px-4">
                                Start 7-day trial
                            </button>
                            <button className="hover:bg-secondary w-full py-3 px-4">
                                Book a demo
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28x py-12  flex-1  px-8 md:px-12 md:py-12 lg:px-24 items-center    ">
                <div className="flex flex-col h-full justify-center  gap-6 md:gap-8">
                    {/* Badge */}
                    <div className="inline-flex flex-col md:flex-row w-full md:w-fit items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-none text-sm border border-primary/20 transition-colors hover:bg-primary/20 cursor-pointer">
                        <span className="font-semibold bg-primary/20 px-2 py-0.5 rounded text-xs uppercase tracking-wide">Updates</span>
                        <span className="font-medium text-xs flex flex-row items-center ">Access your database anywhere with our iOS/Android App
                            <ArrowRight className="w-4 h-4 inline ml-1" />

                        </span>
                    </div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <div className="flex gap-0.5 text-yellow-500 mb-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="  text-xs md:text-sm font-medium text-muted-foreground ">
                                Finally, a modern and convenient asset database
                            </p>
                        </div>
                        <div>
                            <div className="flex gap-0.5 text-yellow-500 mb-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="  text-xs md:text-sm font-medium text-muted-foreground ">
                                Equipment reservations, no drama, no double bookings.
                            </p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-3xl md:text-4xl text-balance font-semibold text-foreground">
                        <span className="text-primary">Asset Management</span> for physical & digital equipment teams.
                    </h1>

                    {/* Subtext */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                        Designed for teams that need instant clarity: what you own, who's using it, and when it's available. Built for shared physical gear, digital equipment, and anything in between.
                    </p>

                    {/* Buttons */}
                    <div className="flex  gap-4 items-start">
                        <button className="hover:bg-primary/90  text-sm md:text-base py-3 bg-primary text-primary-foreground px-4">
                            Sign up for free
                        </button>
                        <button className="hover:bg-secondary text-sm md:text-base py-3  px-4 border  rounde">
                            Book a demo
                        </button>
                    </div>

                    {/* Footer Text */}
                    <div className=' flex flex-col md:flex-row gap-1'>
                        <p className="text-xs md:text-sm shrink-0 text-muted-foreground font-medium"> Get a free 7-day trial of premium features</p>
                        <span className="mx-2 text-border hidden md:block">|</span>
                        <p className=" text-xs shrink-0 md:text-sm text-muted-foreground font-medium">No credit card required</p>

                    </div>

                </div>

                {/* Right Column - Image Placeholder */}
                <div className="relative  w-full ">

                    <img src="https://cdn.prod.website-files.com/64186faca4f0a0ec048fb2dd/6733488720906c224ae3073d_assetindex2-p-2000.png" alt="Dashboard" className=" md:max-w-xl h-auto m-auto" />
                </div>

            </div>
        </section>
    )
}

export default Hero3