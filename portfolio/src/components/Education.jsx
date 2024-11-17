import React from 'react'
import data from "../../src/data/index.json"
import { delay, easeIn, motion } from 'motion/react'

function Education() {
    return (
        <>
            <section id='education' className="bg-[#f2a44c] dark:bg-[#101820] py-[2rem] md:px-5 px-2 gap-40">
                <div className="md:flex">
                    <motion.div initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, easeIn, delay:0.2 }}
                      viewport={{ once: true}} className="md:w-[50%] px-4">
                        <h2 className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center">EDUCATION</h2>
                        <div className="pt-3">
                            <p className="text-[#101820] dark:text-[#f2a44c] font-lato font-bold md:text-[30px] text-[20px]">Computer Science Engineering | Govt. Model Engineering College | Kerala, India</p>
                            <ul className="text-[#101820] dark:text-[#f2a44c] font-lato italic md:text-[20px] list-inside list-disc">
                                <li>October ‘22 - present</li>
                                <li>Expected to graduate in August ‘26</li>
                                <li>CGPA: 9.47 / 10.00</li>
                            </ul>
                        </div>
                        <div className="pt-10">
                            <p className="text-[#101820] dark:text-[#f2a44c] font-lato font-bold md:text-[30px] text-[20px]">XII (CBSE) |Kendriya Vidyalaya Ernakulam | Kerala, India</p>
                            <ul className="text-[#101820] dark:text-[#f2a44c] font-lato italic md:text-[20px] list-disc list-inside">
                                <li>Passed out in the year 2022</li>
                                <li>Board Exam: 97%</li>
                            </ul>
                        </div>
                    </motion.div>
                    <div className="w-1 lg:h-[80vh] md:h-[90vh] dark:bg-[#f2a44c] bg-[#101820] hidden md:block my-auto"></div>
                    <div className="h-1 w-[90vw] dark:bg-[#f2a44c] bg-[#101820] md:hidden mx-auto my-5"></div>
                    <motion.div initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, easeIn, delay:0.2 }}
                      viewport={{ once: true}} className="md:w-[50%]">
                        <h2 className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center">SKILLS</h2>
                        <div className="flex flex-wrap justify-center items-center gap-y-8 py-3">
                            {data.skills && data.skills.map((item) => (
                                <div className="lg:basis-[22%] md:basis-[30%] basis-[22%] group flex items-center justify-center flex-col">
                                    <div className="lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center border-4 dark:border-[#f2a44c] border-[#101820]">
                                        <img src={item.src} alt="" className="lg:w-[80px] lg:h-[80px] md:w-[65px] md:h-[65px] w-[50px] h-[50px]" />
                                    </div>
                                    <div className="w-fit hidden group-hover:block overflow-visible">
                                        <p className="text-[#101820] dark:text-[#f2a44c] text-center font-mono font-bold p-2 sm:text-[15px] text-[11px]">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            <div className="bg-[#101820] dark:bg-[#f2a44c] md:h-3 h-2"></div>
        </>
    )
}

export default Education