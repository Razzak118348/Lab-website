import { Await, createBrowserRouter } from "react-router-dom";
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
import Mission from "../Pages/Mission&Vission/Mission";
import Courses from "../Pages/Courses/Courses";
import Projects from "../Pages/Projects/Projects";
import Jurnal from "../Pages/Jurnal/Jurnal";
import Conferance from "../Pages/Conferance/Conferance";
import Patents from "../Pages/Patents/Patents";
import Award from "../Pages/Award/Award";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/research',
                element: <Research></Research>
            },
            {
                path: '/publications',
                element: <Publications></Publications>
            },
            {
                path: '/teachers',
                element: <Teachers></Teachers>
            },
            {
                path: '/students',
                element: <Students></Students>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path:'/mission',
                element:<Mission></Mission>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/project',
                element:<Projects></Projects>
            },
            {
                path:'/jurnal',
                element:<Jurnal></Jurnal>
            },
            {
                path:'/conferance',
                element:<Conferance></Conferance>
            },
            {
                path:'/patents',
                element:<Patents></Patents>
            },
            {
                path:'/awards',
                element:<Award></Award>
            }


        ]
    }
])

export default Routes;