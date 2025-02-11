import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "motion/react";

function Hero() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section
        id="hero"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="md:flex items-center justify-center lg:gap-8 md:gap-6 lg:pt-[140px] md:pt-[100px] pt-[85px] bg-[#f2a44c] dark:bg-[#101820] lg:pb-[50px] md:pb-[35px] pb-[30px] px-5"
      >
        <div className="md:hidden h-[200px] w-[200px] bg-[#f2a44c] rounded-full m-auto"></div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="contentbox lg:w-[70vw] md:w-[50vw]"
        >
          <div className="content">
            <h2 className="font-lilita lg:text-[5.9rem] md:text-[4rem] text-[3rem] text-[#101820] dark:text-[#f2a44c] text-center whitespace-nowrap">
              ABHINAND. S
            </h2>
            <h3 className="font-lato lg:text-[2.5rem] md:text-[1.5rem] text-[1.3rem] text-[#101820] dark:text-[#f2a44c] lg:pb-6 pb-4 text-center">
              FRONTEND DEVELOPER
            </h3>
            <div className="flex items-center justify-center lg:gap-20 md:gap-10 gap-8 lg:text-[40px] text-[30px] pb-5 text-[#101820] dark:text-[#f2a44c]">
              <a href="https://www.linkedin.com/in/abhinand-s" target="_blank">
                <FaLinkedin className="cursor-pointer" />
              </a>
              <a href="https://github.com/SupaStrikas1" target="_blank"><FaGithub className="cursor-pointer" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandappu2005@gmail.com" target="_blank" rel="noopener noreferrer">
  <FaEnvelope className="cursor-pointer" />
</a>

            </div>
            <p className="font-roboto lg:text-[1.875rem] md:text-[1.2rem] text-[1rem] text-[#101820] dark:text-[#f2a44c] lg:pb-6 md:pb-5 pb-4 text-center">
            Crafting User-Centric, Innovative, and Functional Digital Solutions with Expertise in Frontend Design and Full-Stack Development.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:h-[526px] md:h-[290px] lg:w-[526px] md:w-[290px] bg-[#f2a44c] rounded-full hidden md:block"
        ></motion.div>
      </section>
      <div className="bg-[#101820] dark:bg-[#f2a44c] md:h-3 h-2"></div>
    </>
  );
}

export default Hero;
