import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Skills from "../Pages/Home/Skills/Skills";
import Services from "../Pages/Home/Services/Services";
import Contact from "../Pages/Home/Contact/Contact";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"about",
            element:<About></About>
        },
        {
            path:"skills",
            element:<Skills></Skills>
        },
        {
            path:"services",
            element:<Services></Services>
        },
        {
            path:"contact",
            element:<Contact></Contact>
        }

      ]
    },
  ]);