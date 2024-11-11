import React, { useEffect, useRef, useState } from 'react'
import Particle from '../Particle'
import { motion} from "framer-motion";
import style from "./Projects.module.css"
import AllProjects from '../AllProjects/AllProjects'
import HtmlProjects from '../HtmlProjects/HtmlProjects'
import JsProjects from '../JsProjects/JsProjects'
import ReactProjects from '../ReactProjects/ReactProjects'




export default function Projects() {

  const [selected, setSelected] = useState("all");




  return (<>


    <div className='opacity-85'>

      <Particle></Particle>

    </div>



    <div className='min-h-lvh bg-[#030714fb] overflow-auto'>
      <div className='w-[80%] max-sm:w-[90%] mx-auto mt-32 text-white h-full'>


        <ul className='flex justify-center items-center gap-10 flex-wrap max-md:gap-4'>
          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={` text-lg font-semibold rounded-xl overflow-hidden`}>
              <a href='#all' onClick={()=>{setSelected('all')}}  className={`${selected=='all'?style.active:''} block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400]`}   >
                All
              </a>
            </li>
          </motion.button>
          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={`text-lg font-semibold rounded-xl overflow-hidden`}>
              <a href='#html&css' onClick={()=>setSelected('html')}   className={`${selected=='html'?style.active:''} block projects-nav  px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `}    >
                Html / Css
              </a>
            </li>
          </motion.button>

          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={` text-lg font-semibold  rounded-xl overflow-hidden`}>
              <a href='#js' onClick={()=>setSelected('js')} className={`${selected=='js'?style.active:''} block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `}    >
                Js
              </a>
            </li>
          </motion.button>
          <motion.button whileTap={{ scale: 0.85 }}>
            <li  className={` text-lg font-semibold rounded-xl overflow-hidden`}>
              <a href='#react' onClick={()=>setSelected('react')} className={`${selected=='react'?style.active:''} block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `}   >
                React Js
              </a>
            </li>
          </motion.button>
        </ul>


    

        


        {selected == "all" ? <AllProjects></AllProjects>:null}
        {selected == "html" ? <HtmlProjects></HtmlProjects>:null}
        {selected == "js" ? <JsProjects></JsProjects>:null}
        {selected == "react" ? <ReactProjects></ReactProjects>:null}









      </div>


    </div>

  </>

  )
}
