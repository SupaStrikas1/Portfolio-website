import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa"

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center md:px-10 px-5 md:py-5 py-3 bg-[#f2a44c] fixed top-0 left-0 right-0 z-10">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <ul className="md:flex items-start gap-10 text-[#101820] font-roboto text-[1.2rem] hidden">
                        <li>
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="hero" className="cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="about" className="cursor-pointer">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="projects" className="cursor-pointer">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="education" className="cursor-pointer">
                                Education
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="contact" className="border-2 border-[#101820] md:text-[1.2rem] text-[1rem] text-[#101820] md:p-3 p-1 rounded-lg hover:bg-[#101820] hover:text-[#f2a44c] cursor-pointer">
                        Contact Me
                    </Link>
                    <button className="text-[#101820] text-[1.4rem] md:hidden" onClick={()=>setNavActive(!navActive)}>
                        <FaBars/>
                    </button>
                </div>
            </nav>
            <div>
            <ul className={`bg-[#101820] w-[100vw] text-center text-[#f2a44c] border-4 border-[#f2a44c] font-roboto text-[1.2rem] fixed top-[60px] z-10 md:hidden ${navActive?"":"hidden"}`}>
                        <li className="p-3 hover:bg-[#f2a44c] hover:text-[#101820] rounded-lg">
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="hero" className="cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li className="p-3 hover:bg-[#f2a44c] hover:text-[#101820] rounded-lg">
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="about" className="cursor-pointer">
                                About
                            </Link>
                        </li>
                        <li className="p-3 hover:bg-[#f2a44c] hover:text-[#101820] rounded-lg">
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="projects" className="cursor-pointer">
                                Projects
                            </Link>
                        </li>
                        <li className="p-3 hover:bg-[#f2a44c] hover:text-[#101820] rounded-lg">
                            <Link activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="education" className="cursor-pointer">
                                Education
                            </Link>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default Navbar;