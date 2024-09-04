import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Hero() {
    return (
        <>
            <section id='hero' className="md:flex items-center justify-center lg:gap-8 md:gap-6 lg:pt-[140px] md:pt-[100px] pt-[85px] bg-[#f2a44c] dark:bg-[#101820] lg:pb-[50px] md:pb-[35px] pb-[30px] px-5">
                <div className="md:hidden h-[200px] w-[200px] bg-[#f2a44c] rounded-full m-auto"></div>
                <div className="contentbox lg:w-[70vw] md:w-[50vw]">
                    <div className="content">
                        <h2 className="font-lilita lg:text-[5.9rem] md:text-[4rem] text-[3rem] text-[#101820] dark:text-[#f2a44c] text-center whitespace-nowrap">ABHINAND. S</h2>
                        <h3 className="font-lato lg:text-[2.5rem] md:text-[1.5rem] text-[1.3rem] text-[#101820] dark:text-[#f2a44c] lg:pb-6 pb-4 text-center">FRONTEND DEVELOPER</h3>
                        <div className="flex items-center justify-center lg:gap-20 md:gap-10 gap-8 lg:text-[40px] text-[30px] pb-5 text-[#101820] dark:text-[#f2a44c]">
                            <FaLinkedin className="cursor-pointer" />
                            <FaGithub className="cursor-pointer" />
                            <FaEnvelope className="cursor-pointer" />
                        </div>
                        <p className="font-roboto lg:text-[1.875rem] md:text-[1.2rem] text-[1rem] text-[#101820] dark:text-[#f2a44c] lg:pb-6 md:pb-5 pb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia ad blanditiis, neque eveniet dolores quae soluta natus ex veniam?</p>
                    </div>
                    <div className="flex items-center justify-center lg:gap-7 gap-5">
                        <button className="bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto lg:py-2 lg:px-3 rounded-full lg:text-[1.875rem] font-semibold lg:w-[18rem] w-[10rem] lg:h-[5.5rem] h-[3rem] lg:leading-8 leading-5 hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2">Download<br />Resume</button>
                        <button className="bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto lg:py-2 lg:px-3 rounded-full lg:text-[1.875rem] font-semibold lg:w-[18rem] w-[10rem] lg:h-[5.5rem] h-[3rem] lg:leading-8 leading-5 hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2">Get In Touch</button>
                    </div>
                </div>
                <div className="lg:h-[526px] md:h-[290px] lg:w-[526px] md:w-[290px] bg-[#f2a44c] rounded-full hidden md:block"></div>
            </section>
            <div className="bg-[#101820] dark:bg-[#f2a44c] md:h-3 h-2"></div>
        </>
    )
}

export default Hero