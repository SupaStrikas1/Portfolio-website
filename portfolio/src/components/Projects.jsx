import React from 'react'
import data from '../../src/data/index.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css"
import { FaArrowRight } from 'react-icons/fa';
import { delay, easeIn, motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

function Projects() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <>
      <section id='projects' className="bg-[#f2a44c] dark:bg-[#101820] py-[2rem] md:px-5 px-2 gap-40">
        <div>
          <motion.h2 initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, easeIn }}
                      viewport={{ once: true}} className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[64px] md:text-[48px] text-[32px] text-center">PROJECTS</motion.h2>
        </div>
        <AnimatePresence mode="wait">
        <div>
          <Slider {...settings}>
            {data.projects && data.projects.map((item) => (
              <div key={item.id} className="flex gap-5 md:px-20 md:pt-14 pt-8 justify-center items-center d2">
                <motion.div initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, easeIn}}
                      viewport={{ once: true}} className="border-8 rounded-lg border-[#f2a44c]">
                  <img className="w-[180vw]" src={item.src} alt="" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, easeIn}}
                      viewport={{once:true}}
                      >
                  <h3 className="font-bold dark:text-[#f2a44c] text-[#101820] lg:text-[30px] md:text-[25px] text-[22px] text-center pt-2">{item.title}</h3>
                  <p className="text-[#101820] dark:text-[#f2a44c] lg:text-[20px] md:text-[17.6px] text-[16px] md:p-5 text-justify">{item.description}</p>
                  <div className="flex items-center justify-center lg:gap-7 gap-5 pt-2">
                    <button className="bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto py-2 px-3 rounded-full lg:text-[20px] font-semibold w-fit lg:h-[3rem] h-[3rem] hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2 overflow-hidden">Live Demo</button>
                    <button className="bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto py-2 px-3 rounded-full lg:text-[20px] font-semibold w-fit lg:h-[3rem] h-[3rem] hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2 overflow-hidden">Source Code</button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        </AnimatePresence>
        <div className="flex justify-center md:py-5 pt-3">
          <button className="bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto px-3 rounded-full lg:text-[15px] font-semibold w-fit lg:h-[2rem] h-[2rem] hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2 overflow-hidden text-center align-middle">More Projects +</button>
        </div>
      </section>
      <div className="bg-[#101820] dark:bg-[#f2a44c] md:h-3 h-2"></div>
    </>
  )
}

export default Projects