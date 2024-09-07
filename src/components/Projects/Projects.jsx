import React, { useEffect, useRef, useState } from 'react'
import Particle from '../Particle'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Card3D from '../Card3D/Card3D'
import "../Card3D/Card3D.css"
import XO from "../../assets/imgs/XO.png"
import Fokir from "../../assets/imgs/Fokir.png"
import { motion, useMotionValue, useTransform } from "framer-motion";
import { div } from 'three/webgpu'
import style from "./Projects.module.css"




export default function Projects() {

  const [selected, setSelected] = useState("all")


  return (<>


    <div className='opacity-85'>

      <Particle></Particle>

    </div>



    <div className='min-h-lvh bg-[#030714fb] overflow-auto'>
      <div className='w-[80%] max-sm:w-[90%] mx-auto mt-32 text-white'>


        <ul className='flex justify-center items-center gap-10 flex-wrap max-md:gap-4'>
          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={` text-lg font-semibold rounded-xl overflow-hidden`}>
              <Link onClick={()=>setSelected('all')}  className={`${selected=='all'?style.active:''} block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400]`}  to="" >
                All
              </Link>
            </li>
          </motion.button>
          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={`text-lg font-semibold rounded-xl overflow-hidden`}>
              <Link onClick={()=>setSelected('html')}   className={`${selected=='html'?style.active:''} block projects-nav  px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `}  to="html-css"  >
                Html / Css
              </Link>
            </li>
          </motion.button>

          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={` text-lg font-semibold  rounded-xl overflow-hidden`}>
              <Link onClick={()=>setSelected('js')} className={`${selected=='js'?style.active:''} block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `}  to="js"  >
                Js
              </Link>
            </li>
          </motion.button>
          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={` text-lg font-semibold rounded-xl overflow-hidden`}>
              <Link onClick={()=>setSelected('react')} className={`${selected=='react'?style.active:''} block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `} to="react js"  >
                React Js
              </Link>
            </li>
          </motion.button>
        </ul>


    

        <div className='mt-12'>
          
          <Outlet></Outlet>
          
        </div>








      </div>


    </div>

  </>

  )
}
