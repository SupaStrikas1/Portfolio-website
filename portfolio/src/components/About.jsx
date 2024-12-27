import React from 'react'
import { delay, easeIn, motion } from 'motion/react'

function About() {

  function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    console.log(moreText.classList.contains("hidden"));
    console.log(btnText);
  
    if (moreText.classList.contains("hidden")) {
      btnText.innerHTML = "Read less";
      moreText.classList.remove("hidden");
    } else {
      btnText.innerHTML = "Read More";
      moreText.classList.add("hidden");
    }
  }

  return (
    <>
    <section id='about' className="flex items-center justify-center bg-[#f2a44c] dark:bg-[#101820] py-[50px] px-5 gap-40">
        <motion.div initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, easeIn}}
                      viewport={{ once: true}} className="h-[29rem] w-[29rem] rounded-full bg-[#f2a44c] hidden xl:block">
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x:0 , rotate: [25,0,0]}}
                      transition={{ duration: 0.7, easeIn}}
                      viewport={{ once: true}}>
            <div className="xl:w-[50vw]">
                <h2 className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center">ABOUT ME</h2>
                <p className="text-[#101820] text-justify dark:text-[#f2a44c] lg:text-[20px] md:text-[1.1rem] text-[1rem] pb-5">Hello! I’m Abhinand S, a passionate and driven Computer Science student currently in my third year at Govt. Model Engineering College, Kerala. I specialize in frontend and full-stack development, leveraging tools and technologies like React, Node.js, Tailwind CSS, PostgreSQL, and more to craft digital solutions that are not only functional but also user-focused and accessible.</p>
                <span id='more' className='md:block hidden'>
                <p className="text-[#101820] text-justify dark:text-[#f2a44c] lg:text-[20px] md:text-[1.1rem] text-[1rem] pb-5">I’m passionate about creating simple and effective digital solutions that make life easier for users. Over the years, I’ve honed my skills in programming, design, and backend integration, allowing me to tackle projects from conception to deployment. I’m always looking to learn new skills, explore new ideas, and grow as a developer. I’m excited about opportunities to collaborate and work on projects that can make a positive impact.</p>

                <p className="text-[#101820] text-justify dark:text-[#f2a44c] lg:text-[20px] md:text-[1.1rem] text-[1rem] pb-5">Feel free to reach out if you’d like to collaborate, discuss ideas, or just say hi. Let’s connect and build something extraordinary together!</p>
                </span>
                <button onClick={myFunction} id="myBtn" className='bg-[#101820] dark:bg-[#f2a44c] hover:bg-[#f2a44c] dark:hover:bg-[#101820] text-[#f2a44c] dark:text-[#101820] hover:text-[#101820] dark:hover:text-[#f2a44c] font-roboto px-5 rounded-full font-semibold w-fit h-[3rem] hover:border-[#101820] dark:hover:border-[#f2a44c] hover:border-2 overflow-hidden md:hidden block'>Read more</button>
            </div>
        </motion.div>
    </section>
    <div className="bg-[#101820] dark:bg-[#f2a44c] md:h-3 h-2"></div>
    </>
  )
}

export default About