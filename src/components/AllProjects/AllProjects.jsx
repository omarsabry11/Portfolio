import React, { useEffect } from 'react'
import HtmlProjects from '../HtmlProjects/HtmlProjects'
import JsProjects from '../JsProjects/JsProjects'
import ReactProjects from '../ReactProjects/ReactProjects'
import Todo from "../../assets/imgs/Todo.png"
import Fokir from "../../assets/imgs/Fokir.png"
import Kasber from "../../assets/imgs/Kasber.png"
import Template3 from "../../assets/imgs/Template3.png"
import XO from "../../assets/imgs/XO.png"
import GameReviwes from "../../assets/imgs/GameReviwes.png"
import Weather from "../../assets/imgs/Weather.png"
import { motion } from 'framer-motion'




export default function AllProjects() {


  // const images = [Todo, XO, GameReviwes, Weather, Kasber, Template3, Fokir];
  const images = [
    {src:Todo,
      link:"https://todo-list-app-git-master-omarsabry11s-projects.vercel.app/"
    },
    {src:XO,
      link:"https://omarsabry11.github.io/XO-Game/"
    },
    {src:GameReviwes,
      link:" https://omarsabry11.github.io/Game-Reviews/"
    },
    {src:Weather,
      link:"https://omarsabry11.github.io/Weather/"
    },
    {src:Kasber,
      link:"https://omarsabry11.github.io/Kasber-web-site/"
    },
    {src:Template3,
      link:"https://omarsabry11.github.io/Gallery/"
    },
    {src:Fokir,
      link:"https://omarsabry11.github.io/Fokir/"
    },
  ];


  return (<>

    <div className='z-30 relative'>
  

      <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.1}} className='flex flex-wrap justify-start items-center'>
        {images.map((img, index) =>

          <div key={index} className='w-1/3 p-3 max-lg:w-1/2 max-md:w-full'>
            <div className='p-2 rounded-lg hover:scale-110 duration-300'>
              <a target='_blank' href={img.link}>
                <img className='rounded-lg ' src={img.src} alt=""  />
              </a>

            </div>
          </div>

        )}


      </motion.div>



    </div>



  </>
  )
}
