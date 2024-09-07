import React, { useEffect, useRef, useState } from 'react'
import HomeImage from "../../assets/imgs/Background.jpg"
import HomeImage2 from "../../assets/imgs/Group 1.png"
import HomeImage3 from "../../assets/imgs/Group 2.png"
import About from '../About/About'
import { Link } from 'react-router-dom'
import Particle from '../Particle'
import { delay, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';
import { Cursor, useTypewriter } from 'react-simple-typewriter'







export default function Home() {




  const typewriterRef = useRef(null);
  
  useEffect(() => {

    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ['<span class=""><span>Hello, I\'m <span>Omar</span>  </span>',
          , "<span class='front-text'>Frontend Developer</span>"],
        autoStart: true,
        loop: true,
        delay: 100


      });
    }
  }, []);




  // let [typeEffect] = useTypewriter({
  //   words:['I\'m Omar','Frontend Developer'],
  //   loop:{},
  //   typeSpeed:100,
  //   delaySpeed:40,

  // })


  return (<>


    <div className='opacity-85'>

      <Particle></Particle>

    </div>


    <div className='min-h-lvh bg-[#030714fb]  overflow-auto flex items-center max-lg:py-[100px] border-[3px] border-[#150c2d] overflow-x-hidden'>

      <motion.div  className='w-[80%] max-md:w-[95%] mx-auto mt-20 text-white flex justify-between items-center max-lg:gap-4 max-lg:flex-col max-lg:justify-center z-30 max-lg:text-center '>
        <motion.div initial={{x:-250, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}}  className='w-[55%] max-lg:order-1 max-lg:w-[90%]'>
          <div className='text-5xl max-lg:justify-center font-[800] tracking-wider py-6 flex items-center gap-2'>

            <h1 className='text-[#8C5EF5]' ref={typewriterRef}></h1>

          </div>




          <p className='pb-4 text-lg leading-9 home-text'>As a skilled web developer, I specialize in creating dynamic and responsive websites tailored to meet your unique needs. With expertise in front-end technology, I deliver solutions that enhance user experience and drive business results.</p>

          <div className='flex gap-4 text-nowrap max-lg:justify-center'>
            <motion.button whileTap={{ scale: 0.85 }}>
              <button className='text-[1.1rem] duration-[0.4s] hover:bg-[#FFC400] bg-[#8C5EF6] px-7 py-2 rounded-full font-semibold'>
                <Link to="/contact">
                  Keep In Touch
                </Link>
              </button>
            </motion.button>

            <motion.button whileTap={{ scale: 0.85 }}>
              <button className='text-[1.1rem] duration-[0.4s] hover:bg-[#FFC400] hover:border-[#FFC400] hover:text-white border-[3px] border-[#FFC400] text-[#FFC400] px-7 py-2 rounded-full font-semibold'>
                <Link>
                  Download cv
                </Link>
              </button>
            </motion.button>
          </div>


        </motion.div>
        <motion.div initial={{x:250, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}} className='w-[35%] max-lg:w-[65%]'>
          <div className=''>
            <img src={HomeImage3} className='w-full h-full rounded-full shadow-xl ' alt="" />

          </div>
          <div className='flex items-center gap-10 pt-10 justify-center'>
            <a target='_blank' href="https://www.facebook.com/omar.sabry.9634/"><i className="fa-brands fa-facebook-f hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center text-[#8C5EF6] border-[#493487]  rounded-full duration-300 hover:text-[#FFC400]  hover:border-[#FFC400]"></i></a>
            <a target='_blank' href="https://github.com/omarsabry11"><i className="fa-brands fa-github hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center rounded-full duration-300 text-[#8C5EF6] border-[#493487] hover:text-[#FFC400]  hover:border-[#FFC400]"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/omar-sabry-5205a130a/"><i className="fa-brands fa-linkedin hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center  rounded-full duration-300 text-[#8C5EF6] border-[#493487] hover:text-[#FFC400]  hover:border-[#FFC400]"></i></a>
            <a target='_blank' href="https://www.instagram.com/omar_sabry11/"><i className="fa-brands fa-instagram hover:scale-125 text-xl border-[3px] w-12 h-12 flex items-center justify-center  rounded-full duration-300 text-[#8C5EF6] border-[#493487] hover:text-[#FFC400]  hover:border-[#FFC400]"></i></a>



          </div>


        </motion.div>



      </motion.div>

    </div>

  </>



  )
}
