import React, { useEffect, useMemo, useRef, useState } from "react";
import Particle from "../Particle";
import { motion } from "framer-motion";
import style from "./Projects.module.css";
import Todo from "../../assets/imgs/Todo.webp";
import Fokir from "../../assets/imgs/Fokir.webp";
import Kasber from "../../assets/imgs/Kasper.webp";
import Template3 from "../../assets/imgs/Template3.webp";
import XO from "../../assets/imgs/XO.webp";
import GameReviwes from "../../assets/imgs/GameReviews.webp";
import Weather from "../../assets/imgs/Weather.webp";
import Ecommerse from "../../assets/imgs/Ecommerse.webp";
import SolarCompany from "../../assets/imgs/SolarCompany.webp";
import VivaDecor from "../../assets/imgs/VivaDecor.webp";
import BookMarker from "../../assets/imgs/BookMarker.webp";
import FreshCartAngular from "../../assets/imgs/fresh-cart-angular.webp";
import FoodRecipes from "../../assets/imgs/food-recipes.webp";
import Acm from "../../assets/imgs/acm.webp";
import Shoppeto from "../../assets/imgs/Shopetto.webp";

let isFirstRender = true;

function Projects() {
  const projects = [
    {
      src: Shoppeto,
      link: "https://shopetto.vercel.app/",
      type: "react",
    },
    {
      src: Acm,
      link: "https://taskstream.alex.hosting.acm.org/",
      type: "react",
    },
    { src: XO, link: "https://omarsabry11.github.io/XO-Game/", type: "js" },
    {
      src: Todo,
      link: "https://todo-list-app-git-master-omarsabry11s-projects.vercel.app/",
      type: "react",
    },
    {
      src: FoodRecipes,
      link: "https://food-recipes-qbui22rlp-omarsabry11s-projects.vercel.app/",
      type: "angular",
    },
    {
      src: FreshCartAngular,
      link: "https://fresh-cart-angular-three.vercel.app/",
      type: "angular",
    },

    {
      src: GameReviwes,
      link: " https://omarsabry11.github.io/Game-Reviews/",
      type: "js",
    },
    {
      src: Weather,
      link: "https://omarsabry11.github.io/Weather/",
      type: "js",
    },
    {
      src: BookMarker,
      link: "https://omarsabry11.github.io/Bookmarker/",
      type: "js",
    },
    {
      src: SolarCompany,
      link: "https://omarsabry11.github.io/Solar-company/",
      type: "html",
    },
    {
      src: VivaDecor,
      link: "https://omarsabry11.github.io/Viva-Decor/",
      type: "html",
    },
    {
      src: Kasber,
      link: "https://omarsabry11.github.io/Kasber-web-site/",
      type: "html",
    },
    {
      src: Template3,
      link: "https://omarsabry11.github.io/Gallery/",
      type: "html",
    },
    { src: Fokir, link: "https://omarsabry11.github.io/Fokir/", type: "html" },
  ];

  const [selected, setSelected] = useState("all");

  const getProjects = useMemo(() => {
    if (selected == "all") {
      return projects;
    } else {
      const filteredProjects = projects.filter(
        (project) => project.type == selected
      );
      return filteredProjects;
    }
  }, [selected]);

  const getParticles = useMemo(
    () => (
      <div className="opacity-85">
        <Particle></Particle>
      </div>
    ),
    []
  );

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
    }
  }, []);

  const tabsName = ["All", "Html | Css", "Js", "React | Next Js", "Angular"];
  return (
    <>
      {getParticles}

      <section className="min-h-lvh bg-[#030714fb] overflow-auto">
        <div className="w-[80%] max-sm:w-[90%] mx-auto mt-32 text-white h-full">
          <ul className="flex justify-center items-center gap-10 flex-wrap max-md:gap-4 ">
            {["all", "html", "js", "react", "angular"].map((type, index) => (
              <motion.button whileTap={{ scale: 0.85 }} key={index}>
                <li
                  className={`text-lg font-semibold rounded-xl overflow-hidden`}
                >
                  <a
                    href={`#${type}`}
                    onClick={() => setSelected(`${type}`)}
                    className={`${
                      selected == `${type}` ? style.active : ""
                    } block projects-nav px-6 py-2 border-[2px] border-[#8C5EF6] duration-300 hover:bg-[#FFC400] hover:border-[#FFC400] `}
                  >
                    {tabsName[index]}
                  </a>
                </li>
              </motion.button>
            ))}
          </ul>

          <div className="z-30 relative py-10">
            <motion.div
              initial={isFirstRender ? { opacity: 0, scale: 0.9 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
            >
              {getProjects.map((project, index) => (
                <div key={index}>
                  <div className="rounded-lg hover:scale-105 duration-200 h-[200px]">
                    <a target="_blank" href={project.link}>
                      <img
                        className="rounded-lg  w-full h-full"
                        src={project.src}
                        alt="project"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Projects);
