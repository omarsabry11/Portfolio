import React from 'react'
import { Link } from 'react-router-dom'
import Todo from "../../assets/imgs/Todo.png"
import { motion } from 'framer-motion'


export default function ReactProjects() {
  return (<>
    <div className='z-30 relative'>
      <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.1}} className='flex flex-wrap justify-start items-center'>

        <div className='w-1/3 max-lg:w-1/2 max-md:w-full p-3'>
          <div className='p-2 rounded-lg hover:scale-110 duration-300'>
            <a target='_blank' href='https://omarsabry11.github.io/Kasber-web-site/'>
              <img className='rounded-lg  ' src={Todo} alt="" loading='lazy' />
            </a>

          </div>

        </div>

   

        

      </motion.div>
    </div>
  </>

  )
}
