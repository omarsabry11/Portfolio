import React from 'react'
import XO from "../../assets/imgs/XO.webp"
import GameReviwes from "../../assets/imgs/GameReviwes.webp"
import Weather from "../../assets/imgs/Weather.webp"
import { motion } from 'framer-motion'



export default function JsProjects() {

  const images = [
    
    {src:XO,
      link:"https://omarsabry11.github.io/XO-Game/"
    },
    {src:GameReviwes,
      link:" https://omarsabry11.github.io/Game-Reviews/"
    },
    {src:Weather,
      link:"https://omarsabry11.github.io/Weather/"
    },
  
  ];

  return (<>
    <div className='z-30 relative'>
    
      <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.3}} className='flex flex-wrap justify-start items-center'>
        {images.map((img, index) =>

          <div key={index} className='w-1/3 p-3 max-lg:w-1/2 max-md:w-full'>
            <div className='p-2 rounded-lg hover:scale-110 duration-300'>
              <a target='_blank' href={img.link}>
                <img className='rounded-lg ' src={img.src} alt="" />
              </a>

            </div>
          </div>

        )}


      </motion.div>

    </div>
  </>

  )
}
