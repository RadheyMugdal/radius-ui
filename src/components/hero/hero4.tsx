import { Menu } from 'lucide-react'
import React from 'react'

const Hero4 = () => {
    return (
        <section className=' max-w-screen-2xl min-h-screen bg-background text-foreground mx-auto flex flex-col'>
            <header className=' relative py-4 px-8 flex  justify-between md:grid md:grid-cols-3 items-center'>
                <div>
                    <h1 className=' text-xl font-bold'>LOGO</h1>
                </div>
                <nav className=' hidden md:block'>
                    <ul className=' flex gap-4 items-center justify-center'>
                        <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                            <a href="#">HOME</a>
                        </li>
                        <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                            <a href="#">SERVICES</a>
                        </li>
                        <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                            <a href="#">WHO WE ARE</a>
                        </li>
                        <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <div className='hidden md:flex items-center  justify-end'>
                    <button className='  bg-primary py-3 px-4 text-sm lg:text-base text-primary-foreground hover:bg-primary/90'>
                        CONTACT US
                    </button>
                </div>
                <div className=' md:hidden'>
                    <input type="checkbox" id='menu-btn-hero4' className='    peer hidden' />
                    <label htmlFor="menu-btn-hero4" className=' block cursor-pointer'>
                        <Menu className="h-6 w-6" />
                    </label>
                    <div className='peer-checked:block hidden  space-y-8 inset-x-0 p-8  absolute top-full left-0   bg-background text-foreground border-b  z-20'>
                        <nav className=" flex  items-center justify-center ">
                            <ul className=' flex flex-col gap-4 items-center justify-center'>
                                <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                                    <a href="#">HOME</a>
                                </li>
                                <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                                    <a href="#">SERVICES</a>
                                </li>
                                <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                                    <a href="#">WHO WE ARE</a>
                                </li>
                                <li className=' font-semibold text-sm shrink-0 lg:text-base opacity-75 hover:opacity-100'>
                                    <a href="#">CONTACT</a>
                                </li>
                            </ul>
                        </nav>

                        <button className=' w-full  bg-primary py-3 px-4 text-sm lg:text-base text-primary-foreground hover:bg-primary/90'>
                            CONTACT US
                        </button>

                    </div>
                </div>
            </header>
            <div className=' flex-1 px-4 md:px-8 flex items-center justify-center bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]
 '>
                <div className=' max-w-2xl md:max-w-4xl  flex flex-col items-center justify-center space-y-8 md:space-y-12'>

                    <h1 className='  text-3xl text-balance sm:text-4xl md:text-5xl  lg:text-6xl text-center font-bold'>
                        Delivering Apache Kafka professional services to your business
                    </h1>
                    <p className=' text-sm md:text-lg opacity-75 font-semibold text-center'>
                        We are a team of experts with years of experience in delivering Apache Kafka professional services to our clients.
                    </p>
                    <button className=' bg-primary text-sm md:text-base py-3 px-4 text-primary-foreground hover:bg-primary/90'>
                        EXPLORE OUR SERVICES
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero4