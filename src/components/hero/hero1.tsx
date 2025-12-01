import React from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const Hero1 = () => {
    return (
        <div className='w-full relative max-w-screen-2xl mx-auto bg-background text-foreground  overflow-hidden'>
            <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 z-0 w-full md:w-[1200px] lg:w-[1600px] max-w-screen">
                <img
                    src="https://www.letsjive.io/images/marketing/home-shapes-full.svg"
                    className="hidden lg:block w-full h-full object-cover"
                    alt="Shapes"
                />

                <img
                    src="https://www.letsjive.io/images/marketing/home-shapes-tablet.svg"
                    className="hidden md:block w-full h-full object-cover"
                    alt="Shapes"
                />

                <img
                    src="https://www.letsjive.io/images/marketing/home-shapes-mobile.svg"
                    className="md:hidden w-full h-full object-cover"
                    alt="Shapes"
                />
            </div>

            <div className="relative z-10  w-full h-full flex flex-col">
                <header className=' py-8 px-8 relative backdrop-blur-xl bg-background/20 w-full  items-center grid grid-cols-3 justify-between'>
                    <div></div>
                    <div className=' text-4xl font-bold flex items-center justify-center  italic'>
                        JIVE
                    </div>
                    <div className=' hidden md:flex justify-end gap-4'>
                        <Button variant={"outline"} className='rounded-full'>
                            Login
                        </Button>
                        <Button className='rounded-full'>
                            Sign Up
                        </Button>
                    </div>
                    <div className='md:hidden flex justify-end' >

                        <input type="checkbox" id='menu-btn' className=' peer hidden' />
                        <label htmlFor="menu-btn" className=' block cursor-pointer'>

                            <Menu className="h-6 w-6" />

                        </label>
                        <div className='peer-checked:block hidden inset-x-0 p-8   absolute top-full left-0    bg-background text-foreground   border-b  z-20'>
                            <div className=' flex flex-col gap-4'>
                                <Button variant={"outline"} className='rounded-full'>
                                    Login
                                </Button>
                                <Button className='rounded-full'>
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className=' py-24 px-4 md:px-8 flex flex-col gap-12 items-center'>
                    <div className='max-w-2xl space-y-8 '>
                        <h1 className=' text-4xl  md:text-5xl    lg:text-7xl font-bold    text-balance text-center'>Don’t make connecting awkward</h1>
                        <p className=' md:text-lg  text-center  opacity-75'>No more fumbling for business cards or searching for lost contacts after an event. Jive makes it easy to exchange info and keep the conversation going straight from your inbox.</p>
                    </div>
                    <Button size={"lg"} className='rounded-full'>
                        Sign up free
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero1