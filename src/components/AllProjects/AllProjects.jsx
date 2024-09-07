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
 

  return (<>

    <div className='z-30 relative lg:overflow-y-hidden'>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className='flex flex-wrap justify-start items-center'>

        <div className='w-1/3 p-3 max-lg:w-1/2 max-md:w-full'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://todo-list-app-git-master-omarsabry11s-projects.vercel.app/'>
              <img className='rounded-lg ' src={Todo} alt="" />
            </a>

          </div>
        </div>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/XO-Game/'>
              <img className='rounded-lg  ' src={XO} alt="" loading='lazy' />
            </a>

          </div>

        </div>
        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' className='' href='https://omarsabry11.github.io/Game-Reviews/'>
              <img className='rounded-lg' src={GameReviwes} alt="" loading='lazy' />
            </a>

          </div>

        </div>



        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Weather/'>
              <img className='rounded-lg  ' src={Weather} alt="" loading='lazy' />
            </a>

          </div>

        </div>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Kasber-web-site/'>
              <img className='rounded-lg  ' src={Kasber} alt="" loading='lazy' />
            </a>

          </div>

        </div>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>

          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Gallery/'>
              <img className='rounded-lg  ' src={Template3} alt="" loading='lazy' />
            </a>

          </div>

        </div>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Fokir/'>
              <img className='rounded-lg ' src={Fokir} alt="" loading='lazy' />
            </a>

          </div>


        </div>










      </motion.div>

    </div>



  </>
  )
}
