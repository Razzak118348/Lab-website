import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Research from "../Pages/Research/Research";
import Publications from "../Pages/Publications/Publications";
import Teachers from "../Pages/Teachers/Teachers";
import Students from "../Pages/Students/Students";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const Routes =createBrowserRouter([
    {
path:'/',
element:<Root></Root>,
errorElement:<Error></Error>,
children: [
    {
path:'/',
element:<Home></Home>
    },
    {
        path:'/research',
        element:<Research></Research>
    },
    {
        path:'/publications',
        element:<Publications></Publications>
    },
    {
        path:'/teachers',
        element:<Teachers></Teachers>
    },
    {
        path:'/students',
        element:<Students></Students>
    },
    {
        path:'/about',
        element:<About></About>
    },
    {
        path:'/contact',
        element: <Contact></Contact>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
path:'/signup',
element:<Signup></Signup>
    }
]
    }
])

export default Routes;