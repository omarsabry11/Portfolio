import React from 'react';
import Particle from '../Particle'
import tailwindLogo from "../../assets/imgs/TailwindLogo.png"
import JQueryLogo from "../../assets/imgs/JQueryLogo.png"
import TypescriptIcono from "../../assets/imgs/TypescriptIcon.svg"
import CPlusIcon from "../../assets/imgs/CPlus.png"
import { motion } from 'framer-motion';


export default function Skills() {
  return (<>


    <div className='opacity-85'>

      <Particle></Particle>

    </div>


    <div className='min-h-lvh bg-[#030714fb] overflow-hidden text-white'>
        <h2 className='text-center text-5xl font-bold tracking-wider moving-border mt-28'>Skills</h2>
      <motion.div initial={{scale:0.8, opacity:0}} animate={{opacity:1,scale:1}} transition={{duration:0.7}} className='w-[70%] mx-auto'>
        <div className='flex flex-wrap justify-start items-center text-center mt-14'>


          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3 '>
            <div className=' flex justify-center items-center border  bg-[#8c5ef608] rounded-2xl duration-300 hover:scale-110'>
              <img src={CPlusIcon} className='w-16 py-[2.9rem]' alt="" />
            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>C++</h3>


          </div>



          <div className='w-1/5 max-sm:w-full max-md:w-1/2 max-lg:w-1/3 px-5 py-3'>
            <div className=' border bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110'>
              <i className="fa-brands fa-html5 w-full text-6xl text-[#E44D25]"></i>
            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>HTML 5</h3>

          </div>
          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 px-5 py-3'>
            <div className=' border  bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110'>
              <i className="fa-brands fa-css3-alt w-full text-6xl text-[#379AD6]"></i>
            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>CSS 3</h3>

          </div>

          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3'>
            <div className=' border  bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110'>
              <i className="fa-brands fa-bootstrap w-full text-6xl text-[#7411F6]"></i>

            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>Bootstrap</h3>

          </div>

          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3 '>
            <div className=' flex justify-center items-center border  bg-[#8c5ef608] rounded-2xl duration-300 hover:scale-110'>
              <img src={tailwindLogo} className='w-16 py-[3.7rem]' alt="" />
            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>Tailwind Css</h3>


          </div>

          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3'>
            <div className=' border  bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110'>
              <i className="fa-brands fa-js text-6xl text-[#ECDA1C]"></i>

            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>Java script</h3>

          </div>
          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3'>
            <div className=' border  bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110 flex justify-center items-center'>
              <img src={JQueryLogo} className='w-28 py-[1.2rem]' alt="JQuery Logo" />
            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>JQuery</h3>


          </div>


          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3'>
            <div className=' flex justify-center items-center border  bg-[#8c5ef608] rounded-2xl duration-300 hover:scale-110'>
              <img src={TypescriptIcono} className='w-16 py-[3rem]' alt="Typescript Icon" />
            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>Type script</h3>


          </div>

          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3'>
            <div className=' border  bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110 text-6xl'>
              <i className="fa-brands fa-sass text-[#C76395]"></i>

            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>SASS</h3>


          </div>
          <div className='w-1/5 max-sm:w-full max-md:w-1/2  max-lg:w-1/3 max-xl:w-1/4 min-xxl:w-1/5 px-5 py-3'>
            <div className=' border  bg-[#8c5ef608] py-12 rounded-2xl duration-300 hover:scale-110 text-6xl'>
              <i className="fa-brands fa-react text-[#01D1F7]"></i>

            </div>
            <h3 className='pt-3 text-lg font-semibold tracking-wider'>React js</h3>


          </div>





        </div>




      </motion.div>


    </div>

    {/* <MovingBorder></MovingBorder> */}
    {/* <Button></Button> */}


  </>

  )
}
