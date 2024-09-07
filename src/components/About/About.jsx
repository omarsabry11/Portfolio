import React from 'react'
import aboutImage from "../../assets/imgs/aboutImage.png"
import Particle from '../Particle'
import HomeImage2 from "../../assets/imgs/Group 1.png"
import HomeImage3 from "../../assets/imgs/Group 2.png"
import { delay, motion, stagger } from 'framer-motion'






export default function About() {


  const items = [
    { icon: 'fa-cake-candles', label: 'Birth:', value: 'January 11, 2004' },
    { icon: 'fa-graduation-cap', label: 'College:', value: 'Faculty of engineering' },
    { icon: 'fa-building-columns', label: 'University:', value: 'Alexandria university' },
    { icon: 'fa-gear', label: 'Department:', value: 'Production engineering' },
    { icon: 'fa-envelope', label: 'Email:', value: 'omarsabry425@gmail.com' },
    { icon: 'fa-phone', label: 'Phone:', value: '01286183936' },
  ];

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2,delayChildren: 0.7}, 
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (<>
    <div>
      <Particle></Particle>
    </div>
    <div id='about' className='min-h-lvh bg-[#030714fb] flex items-center'>
      <div className='about w-[80%] max-md:w-[95%] mx-auto text-white overflow-hidden z-10 relative pb-1'>

        <h2 className='text-center text-5xl font-bold mt-20 max-xl:mt-36'>About <span className='text-[#FFC400] font-extrabold'>ME</span> </h2>

        <div className='flex mt-12 justify-between items-center max-xl:flex-col max-xl:gap-14 max-xl:items-center'>

          <motion.div initial={{x:-250, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}} className='w-[45%] max-xl:w-full flex flex-col gap-8 bg-[#8c5ef607] py-10 px-1 rounded-lg tracking-wider'>

            <div className='flex flex-col items-center gap-2'>
              <div className='w-[30%] mx-auto'>
                <img src={HomeImage2} alt="" />

              </div>
              <h3 className='text-lg font-semibold text-[#FFC400]'>Omar Sabry Khalil</h3>

            </div>

            {/* <li className='flex flex-wrap justify-center items-center gap-2'>
                <span className='font-semibold text-lg text-[#e8d8a2]'><i className=" fa-solid fa-cake-candles"></i> Birth: </span>
                <span className='text-[1.1rem] font-semibold'>January 11, 2004</span>
              </li>
              <li className='flex flex-wrap justify-center items-center gap-2'>
                <span className='font-semibold text-lg text-[#e8d8a2]'><i className=" fa-solid fa-graduation-cap"></i> College: </span>
                <span className='text-[1.1rem] font-semibold'>Faculty of engineering</span>
              </li>
              <li className='flex flex-wrap justify-center items-center gap-2'>
                <span className='font-semibold text-lg text-[#e8d8a2]'><i className=" fa-solid fa-building-columns"></i> University: </span>
                <span className='text-[1.1rem] font-semibold'>Alexandria university</span>
              </li>
              <li className='flex flex-wrap justify-center items-center gap-2'>
                <span className='font-semibold text-lg text-[#e8d8a2]'><i className=" fa-solid fa-gear"></i> Department: </span>
                <span className='text-[1.1rem] font-semibold'>Production engineering</span>
              </li>
              <li className='flex flex-wrap justify-center items-center gap-2'>
                <span className='font-semibold text-lg text-[#e8d8a2]'> <i className=" fa-regular fa-envelope"></i> Email: </span>
                <span className='text-[1.1rem] font-semibold'>omarsabry425@gmail.com</span>
              </li>
              <li className='flex flex-wrap justify-center items-center gap-2'>
                <span className='font-semibold text-lg text-[#e8d8a2]'><i className=" fa-solid fa-phone"></i> Phone: </span>
                <span className='text-[1.1rem] font-semibold'>01286183936</span>
              </li> */}



            <motion.ul
              className="flex flex-col items-center gap-3"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              
            >
            
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex flex-wrap justify-center items-center gap-2"
                  variants={itemVariants}
                  
                >
                  <span className="font-semibold text-lg text-[#e8d8a2]">
                    <i className={`fa-solid ${item.icon}`}></i> {item.label}
                  </span>
                  <span className="text-[1.1rem] font-semibold">{item.value}</span>
                </motion.li>
              ))}
            </motion.ul>


          </motion.div>


          <motion.div initial={{x:250, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}} className='w-[52%] max-xl:w-full  flex  justify-center'>

            <div className='flex flex-col gap-8 items-center relative py-12'>
              <div className='neon-bg w-2 h-full absolute start-1/2 -translate-x-[50%] bottom-0 rounded-full -ms-[0.5rem]'>


              </div>


              <div className='flex items-start -translate-x-[50%] -mt-2'>

                <div className='flex flex-col items-end -mt-1 me-3 gap-2  max-sm:max-w-[150px] max-w-[260px] text-center'>
                  <h3 className='font-bold text-[1.1rem]'>2022</h3>
                  <div className='border-[3px] border-[#FFC400] p-3 rounded-xl hover:scale-105 duration-300'>
                    <h4 className='font-semibold'>Joined the Faculty of Engineering</h4>
                  </div>
                </div>

                <div>
                  <div className='w-4 h-4 neon-bg rounded-full'></div>
                </div>

              </div>


              <div className='flex translate-x-[50%] -ms-[2rem] gap-3'>
                <div>
                  <div className='w-4 h-4 neon-bg rounded-full'></div>
                </div>
                <div className='-mt-1' >
                  <h3 className='font-bold text-[1.1rem]'>2024</h3>
                  <div className='border-[3px] border-[#FFC400] p-3 rounded-xl mt-2 hover:scale-105 duration-300 max-sm:max-w-[150px] max-w-[260px] text-center'>
                    <h4 className='font-semibold'>Completed The programming fundamentals diploma at Route IT Training Center</h4>
                  </div>
                </div>

              </div>


              <div className='flex -translate-x-[50%] '>

                <div className='flex flex-col items-end -mt-1 me-3 gap-2'>
                  <h3 className='font-bold text-[1.1rem]'>2024</h3>
                  <div className='border-[3px] border-[#FFC400] p-3 rounded-xl hover:scale-105 duration-300  max-sm:max-w-[150px] max-w-[260px] text-center'>
                    <h4 className='font-semibold'>Joined the Acm Academy</h4>
                  </div>
                </div>
                <div>
                  <div className='w-4 h-4 neon-bg rounded-full'></div>
                </div>

              </div>

            </div>





          </motion.div>



        </div>

      </div>

    </div>
  </>

  )
}
