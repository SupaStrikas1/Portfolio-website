import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { easeIn, motion } from "motion/react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#f2a44c] dark:bg-[#101820] py-[2rem] md:px-5 px-2 gap-40"
      >
        <div className="sm:flex items-center">
          <motion.h2 className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center w-[100%] sm:hidden">
            CONTACT ME
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easeIn, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:w-[50vw] flex gap-3 justify-center items-center py-8 sm:hidden flex-wrap"
          >
            <div>
              <div className="h-[120px] w-[120px] bg-[#f2a44c] rounded-full m-auto"></div>
            </div>
            <div>
              <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-2">
                <FaPhone />
                <p>+91 7558853411</p>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandappu2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-2">
                  <FaEnvelope />
                  <p>abhinandappu2005@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/abhinand-s" target="_blank">
                <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-2 cursor-pointer">
                  <FaLinkedin />
                  <p>https://www.linkedin.com/in/abhinand-s</p>
                </div>
              </a>
              <a href="https://github.com/SupaStrikas1" target="_blank">
                <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-2 cursor-pointer">
                  <FaGithub />
                  <p>https://github.com/SupaStrikas1</p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easeIn, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:w-[50vw]"
          >
            <h2 className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center w-[100%] hidden sm:block">
              CONTACT ME
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-end justify-center w-[90%]">
                <label className="text-[#101820] dark:text-[#f2a44c] md:text-[20px] font-lato font-bold self-start">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="self-start w-[100%] md:text-[20px] outline-none dark:border-[#f2a44c] border-[#101820] border-2 bg-[#101820] rounded-md px-2 caret-[#f2a44c] focus:border-4 text-[#f2a44c] italic"
                />
              </div>
              <br />
              <div className="flex flex-col items-end justify-center w-[90%]">
                <label className="text-[#101820] dark:text-[#f2a44c] md:text-[20px] font-lato font-bold self-start">
                  E-mail :
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your e-mail"
                  className="w-[100%] md:text-[20px] outline-none dark:border-[#f2a44c] border-[#101820] border-2 bg-[#101820] rounded-md px-2 caret-[#f2a44c] focus:border-4 text-[#f2a44c] italic self-start"
                />
              </div>
              <br />
              <div className="flex flex-col items-end justify-center w-[90%]">
                <label className="text-[#101820] dark:text-[#f2a44c] md:text-[20px] font-lato font-bold self-start">
                  Message :
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter your message"
                  className="w-[100%] md:h-[30vh] h-[25vh] md:text-[20px] outline-none dark:border-[#f2a44c] border-[#101820] border-2 bg-[#101820] rounded-md px-2 caret-[#f2a44c] focus:border-4 text-[#f2a44c] italic self-start"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto px-3 rounded-full lg:text-[20px] font-semibold lg:w-[9rem] w-[7rem] lg:h-[3rem] h-[2rem] hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2 overflow-hidden text-center align-middle mt-4"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easeIn, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:w-[50vw] hidden sm:block"
          >
            <div>
              <div className="h-[200px] w-[200px] bg-[#f2a44c] rounded-full m-auto"></div>
            </div>
            <div>
              <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-4">
                <FaPhone />
                <p>+91 7558853411</p>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinandappu2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-4">
                  <FaEnvelope />
                  <p>abhinandappu2005@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/abhinand-s" target="_blank">
                <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-4">
                  <FaLinkedin />
                  <p>https://www.linkedin.com/in/abhinand-s</p>
                </div>
              </a>
              <a href="https://github.com/SupaStrikas1" target="_blank">
                <div className="flex gap-3 justify-center items-center md:text-[20px] text-[15px] text-[#101820] dark:text-[#f2a44c] pt-4">
                  <FaGithub />
                  <p>https://github.com/SupaStrikas1</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
