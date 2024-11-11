import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@fortawesome/fontawesome-free";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Particle from "./components/Particle";
import { all, js } from "three/webgpu";
import HtmlProjects from "./components/HtmlProjects/HtmlProjects";
import ReactProjects from "./components/ReactProjects/ReactProjects";
import JsProjects from "./components/JsProjects/JsProjects";
import AllProjects from "./components/AllProjects/AllProjects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let routing = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/skills", element: <Skills></Skills> },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        { path: "/contact", element: <Contact></Contact> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}
export default App;
