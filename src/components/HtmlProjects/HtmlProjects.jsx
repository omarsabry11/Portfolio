import React from "react";
import { Link } from "react-router-dom";
import Fokir from "../../assets/imgs/Fokir.webp";
import Kasber from "../../assets/imgs/Kasper.webp";
import Template3 from "../../assets/imgs/Template3.webp";
import { motion } from "framer-motion";
import SolarCompany from "../../assets/imgs/SolarCompany.webp";
import VivaDecor from "../../assets/imgs/VivaDecor.webp"; 


export default function HtmlProjects() {
  const images = [
    { src: SolarCompany, link: "https://omarsabry11.github.io/Solar-company/" },
    { src: VivaDecor, link: "https://omarsabry11.github.io/Viva-Decor/" },
    { src: Kasber, link: "https://omarsabry11.github.io/Kasber-web-site/" },
    { src: Template3, link: "https://omarsabry11.github.io/Gallery/" },
    { src: Fokir, link: "https://omarsabry11.github.io/Fokir/" },
  ];
  return (
    <>
      <div className="z-30 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-start items-center"
        >
          {images.map((img, index) => (
            <div key={index} className="w-1/3 p-3 max-lg:w-1/2 max-md:w-full">
              <div className="p-2 rounded-lg hover:scale-110 duration-300">
                <a target="_blank" href={img.link}>
                  <img className="rounded-lg " src={img.src} alt="" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
