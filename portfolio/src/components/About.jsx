import React from 'react'

function About() {
  return (
    <>
    <section id='about' className="flex items-center justify-center bg-[#f2a44c] dark:bg-[#101820] py-[50px] px-5 gap-40">
        <div className="h-[39rem] w-[29rem] rounded-full bg-[#f2a44c] hidden xl:block">
        </div>
        <div>
            <div className="xl:w-[50vw]">
                <h2 className="font-lilita dark:text-[#f2a44c] text-[#101820] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center">ABOUT ME</h2>
                <p className="text-[#101820] text-justify dark:text-[#f2a44c] lg:text-[25px] md:text-[1.1rem] text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam incidunt molestiae dignissimos maxime voluptate? Natus soluta molestias facilis illo. Eos dolorum deleniti, accusamus non voluptas hic officia pariatur nesciunt tempore qui sit error fugiat aut fuga quaerat reprehenderit iste esse vitae molestiae autem laudantium! Exercitationem, cupiditate iure ea repellendus omnis reiciendis dolor voluptatibus a vitae quibusdam, accusantium esse voluptate itaque, repellat ab expedita quasi autem animi enim. Corporis aut perferendis fugiat, ipsa fuga possimus.</p>
            </div>
        </div>
    </section>
    <div className="bg-[#101820] dark:bg-[#f2a44c] md:h-3 h-2"></div>
    </>
  )
}

export default About