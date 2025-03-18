
import "@fortawesome/fontawesome-free";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";


function App() {
  let routing = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        { index: true, element: <Home></Home>},
        { path: "", element: <Home></Home>},
        { path: "/about", element: <About></About>},
        { path: "/skills", element: <Skills></Skills>},
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
