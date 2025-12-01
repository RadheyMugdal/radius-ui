import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'

const Hero2 = () => {
    return (
        <section className='w-full  max-w-screen-2xl  bg-background text-foreground mx-auto'>
            <header className='flex items-center relative justify-between py-4 px-4 md:px-8'>
                <div className='flex items-center gap-12'>
                    <div>
                        <h1 className='text-xl md:text-2xl font-bold'>Logo</h1>
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='flex gap-4'>
                            <li className='cursor-pointer hover:text-primary transition-colors'>Home</li>
                            <li className='cursor-pointer hover:text-primary transition-colors'>Features</li>
                            <li className='cursor-pointer hover:text-primary transition-colors'>Testimonials</li>
                        </ul>
                    </nav>
                </div>

                {/* Desktop Actions */}
                <div className='hidden md:flex gap-4'>
                    <Button variant={"secondary"} className='rounded-full'>Login</Button>
                    <Button className='rounded-full'>Sign Up</Button>
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden'>
                    <input type="checkbox" id='menu-btn' className=' peer hidden' />
                    <label htmlFor="menu-btn" className=' block cursor-pointer'>

                        <Menu className="h-6 w-6" />

                    </label>
                    <div className='peer-checked:block hidden inset-x-0  absolute top-full left-0   bg-background text-foreground border-b  z-20'>
                        <div className='flex flex-col gap-8 items-center justify-center p-8'>
                            <ul className='flex gap-4 flex-col items-center'>
                                <li className='cursor-pointer hover:text-primary transition-colors'>Home</li>
                                <li className='cursor-pointer hover:text-primary transition-colors'>Features</li>
                                <li className='cursor-pointer hover:text-primary transition-colors'>Testimonials</li>
                            </ul>
                            <div className='flex flex-col w-full gap-4'>
                                <Button variant={"secondary"} className='rounded-full'>Login</Button>
                                <Button className='rounded-full'>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className='py-12 md:py-24 px-4 md:px-8 flex items-center gap-8 md:gap-12 flex-col'>
                <div className='max-w-3xl mx-auto flex items-center flex-col gap-6 md:gap-8'>
                    <Badge className='p-2 px-4 text-center whitespace-normal flex-col md:flex-row gap-1  h-auto' variant={"secondary"}>
                        <span className="inline">Join our community Collaboration Survey! We'll donate $20 for each response. </span>
                        <a href="" className='font-bold text-primary underline whitespace-nowrap'>Take Survey</a>
                    </Badge>
                    <h1 className='text-4xl md:text-6xl font-bold text-center leading-tight'>
                        We help measure why community matters
                    </h1>
                    <p className='text-sm md:text-base opacity-75 text-center max-w-2xl'>
                        With Talkbase, you can prove cross-functional value of your community to the business by showing the data your executive team needs
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                    <Button className="w-full sm:w-auto rounded-full">
                        Get started for free
                    </Button>
                    <Button variant={"outline"} className="w-full sm:w-auto rounded-full">
                        Book a Demo
                    </Button>
                </div>

                <div className='w-full max-w-4xl mt-16'>
                    <img
                        src="https://cdn.dribbble.com/userupload/11325352/file/original-e2870003446991717ec91a45410323db.png?resize=1504x1128&vertical=center"
                        alt="Dashboard Preview"
                        className='w-full h-auto rounded-xl border shadow-2xl'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero2