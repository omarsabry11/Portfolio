import React, { useEffect, useRef, useState } from 'react'
import HomeImage3 from "../../assets/imgs/Group 2.webp"
import { Link } from 'react-router-dom'
import Particle from '../Particle'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {

  const typewriterRef = useRef(null);

  useEffect(() => {

    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ['<span class=""><span>Hello, I\'m <span>Omar</span>  </span>',
          , "<span class='dark:text-[#FFC400] text-[#6032CC]'>Frontend Developer</span>"],
        autoStart: true,
        loop: true,
        delay: 100
      });
    }
  }, []);

  return (<>


    <div className='opacity-85'>

      <Particle></Particle>

    </div>


    <div className='min-h-lvh dark:bg-[#030714fb] bg-gray-100 overflow-auto flex items-center max-lg:py-[100px] border-[3px] border-[#150c2d] overflow-x-hidden'>

      <motion.div className='w-[80%] max-md:w-[95%] mx-auto mt-20 text-white flex justify-between items-center max-lg:gap-4 max-lg:flex-col max-lg:justify-center z-30 max-lg:text-center '>
        <motion.div initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className='w-[55%] max-lg:order-1 max-lg:w-[90%]'>
          <div className='text-5xl max-lg:justify-center font-[800] tracking-wider py-6 flex items-center gap-2'>

            <h1 className=' dark:text-[#8C5EF6] text-[#6032cc]'ref={typewriterRef}></h1>

          </div>

          <p className='pb-4 text-lg leading-9 home-text dark:text-white text-black font-semibold dark:font-normal'>As a skilled web developer, I specialize in creating dynamic and responsive websites tailored to meet your unique needs. With expertise in front-end technology, I deliver solutions that enhance user experience and drive business results.</p>

          <div className='flex gap-4 text-nowrap max-lg:justify-center flex-wrap mt-2'>
            <motion.button whileTap={{ scale: 0.85 }}>
              <button className='text-[1.1rem] duration-[0.4s] dark:hover:bg-[#FFC400] hover:bg-[#8C5EF5] dark:bg-[#8C5EF6] bg-[#6032cc] px-7 py-2 rounded-full font-semibold'>
                <Link to="/contact">
                  Keep In Touch
                </Link>
              </button>
            </motion.button>


            <motion.button whileTap={{ scale: 0.85 }} className='text-[1.1rem] duration-[0.4s] dark:hover:bg-[#FFC400] dark:hover:border-[#FFC400] hover:bg-[#040814] hover:text-white dark:hover:text-white border-[3px] border-[#060A16] text-[#060A16] dark:border-[#FFC400] dark:text-[#FFC400] px-7 py-2 rounded-full font-semibold'>
              <a href="Omar-Sabry-CV.pdf" className='w-full h-full block' download="Omar-Sabry-CV.pdf">
                Download cv
              </a>
            </motion.button>

          </div>

        </motion.div>
        <motion.div initial={{ x: 250, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className='w-[35%] max-lg:w-[65%]'>
          <div className=''>
            <img src={HomeImage3} className='w-full h-full rounded-full shadow-xl ' alt="" />

          </div>
          <div className='flex items-center gap-10 pt-10 justify-center'>
            <a target='_blank' href="https://www.facebook.com/omar.sabry.9634/"><i className="fa-brands fa-facebook-f hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC]  rounded-full duration-300 dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"></i></a>
            <a target='_blank' href="https://github.com/omarsabry11"><i className="fa-brands fa-github hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center rounded-full duration-300 dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC] dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/omar-sabry-5205a130a/"><i className="fa-brands fa-linkedin hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center  rounded-full duration-300 dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC] dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"></i></a>
            <a target='_blank' href="https://www.instagram.com/omar_sabry11/"><i className="fa-brands fa-instagram hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center  rounded-full duration-300 dark:text-[#8C5EF6] text-[#6032CC] dark:border-[#493487] border-[#6032CC] dark:hover:text-[#FFC400]  dark:hover:border-[#FFC400]"></i></a>



          </div>


        </motion.div>



      </motion.div>

    </div>

  </>



  )
}
