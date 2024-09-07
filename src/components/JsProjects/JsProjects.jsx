import React from 'react'
import { Link } from 'react-router-dom'
import XO from "../../assets/imgs/XO.png"
import GameReviwes from "../../assets/imgs/GameReviwes.png"
import Weather from "../../assets/imgs/Weather.png"
import { motion } from 'framer-motion'



export default function JsProjects() {

  const images = [XO, GameReviwes, Weather];

  return (<>
    <div className='z-30 relative'>
    
      <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.1}} className='flex flex-wrap justify-start items-center'>
        {images.map((img, index) =>

          <div key={index} className='w-1/3 p-3 max-lg:w-1/2 max-md:w-full'>
            <div className='p-2 rounded-lg hover:scale-110 duration-300'>
              <a target='_blank' href='https://todo-list-app-git-master-omarsabry11s-projects.vercel.app/'>
                <img className='rounded-lg ' src={img} alt="" />
              </a>

            </div>
          </div>

        )}


      </motion.div>

    </div>
  </>

  )
}
