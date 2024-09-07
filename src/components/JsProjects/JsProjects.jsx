import React from 'react'
import { Link } from 'react-router-dom'
import XO from "../../assets/imgs/XO.png"
import GameReviwes from "../../assets/imgs/GameReviwes.png"
import Weather from "../../assets/imgs/Weather.png"
import { motion } from 'framer-motion'



export default function JsProjects() {
  return (<>
    <div className='z-30 relative'>
      <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.1}} className='flex flex-wrap justify-start items-center'>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Kasber-web-site/'>
              <img className='rounded-lg  ' src={XO} alt="" loading='lazy' />
            </a>

          </div>

        </div>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>

          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Gallery/'>
              <img className='rounded-lg  ' src={GameReviwes} alt="" loading='lazy' />
            </a>

          </div>

        </div>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Fokir/'>
              <img className='rounded-lg ' src={Weather} alt="" loading='lazy' />
            </a>

          </div>


        </div>

      </motion.div>
    </div>
  </>

  )
}
