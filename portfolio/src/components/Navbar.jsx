import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import React from 'react'

const Navbar = () => {

    const [toggle, setToggle]=useState(false);

    return (
        <>
            <nav className="bg-[#f2aa4c] dark:bg-[#f2aa4c] fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#101820]">Abhinand S</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-[#101820] border-2 border-[#101920] bg-[#f2aa4c] hover:bg-[#101820] hover:text-[#f2aa4c] focus:ring-2 focus:outline-none focus:bg-[#101820] focus:text-[#f2aa4c] font-medium rounded-lg text-sm px-4 py-2 text-center">CONTACT ME</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" onClick={()=>setToggle(!toggle)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#101820] rounded-lg md:hidden hover:bg-[#101820] hover:text-[#f2aa4c] focus:outline-none focus:ring-2 focus:ring-[#101820]" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${toggle ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-[#101820] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#f2aa4c] dark:border-gray-700">
                            <li>
                            <a href="#" className="block py-2 px-3 text-[#f2aa4c] md:text-[#101820] rounded hover:bg-[#f2aa4c] hover:text-[#101820] md:hover:bg-transparent md:hover:text-[#101820] md:p-0">Home</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 px-3 text-[#f2aa4c] md:text-[#101820] rounded hover:bg-[#f2aa4c] hover:text-[#101820] md:hover:bg-transparent md:hover:text-[#101820] md:p-0">About</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 px-3 text-[#f2aa4c] md:text-[#101820] rounded hover:bg-[#f2aa4c] hover:text-[#101820] md:hover:bg-transparent md:hover:text-[#101820] md:p-0">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#f2aa4c] md:text-[#101820] rounded hover:bg-[#f2aa4c] hover:text-[#101820] md:hover:bg-transparent md:hover:text-[#101820] md:p-0">Education</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar