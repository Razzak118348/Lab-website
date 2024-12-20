import { Await, createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Research from "../Pages/Research/Research";
import Teachers from "../Pages/Teachers/Teachers";
import Students from "../Pages/Students/Students";
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
import TeacherDetails from "../Pages/TeacherDetails/TeacherDetails";
import Alumni from "../Pages/Alumni/Alumni";
import Graduate from "../Pages/Graduate/Graduate";
import Admin from "../Pages/Admin/Admin";
import AddJournal from "../Pages/Admin/AddJournal";
import AddConference from "../Pages/Admin/AddConference";
import AddStudent from "../Pages/Admin/AddStudent";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('/professor.json')
            },
            {
                path:'/admin',
                element:<Admin></Admin>
            },
            {
path:'/addJournal',
element:<AddJournal></AddJournal>
            },
            {
                path:'/addConference',
                element:<AddConference></AddConference>
            },
            {
                path:'/addStudent',
                element:<AddStudent></AddStudent>
            },
            {
                path: '/research',
                element: <Research></Research>,
                loader: async () => fetch('/research.json')
            },
            {
                path: '/teachers',
                element: <Teachers></Teachers>,
                loader: () => fetch('/professor.json')
            },
            {
                path: '/teachers/:id',
                element: <TeacherDetails></TeacherDetails>,
                loader: async () => fetch('/professor.json')
            },

            {
                path: '/students',
                element: <Students></Students>,
                loader: async () => fetch('/students.json')
            },
            {
                path: '/graduate',
                element: <Graduate></Graduate>,
                loader: async () => fetch('/students.json')
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
                path: '/mission',
                element: <Mission></Mission>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async () => fetch('/course.json')
            },
            {
                path: '/project',
                element: <Projects></Projects>,
                loader: async () => fetch('/projects.json')
            },
            {
                path: '/journal',
                element: <Jurnal></Jurnal>,
                loader: async () => fetch('/journal.json')
            },
            {
                path: '/conferance',
                element: <Conferance></Conferance>,
                loader: async () => fetch('/conference.json')
            },
            {
                path: '/patents',
                element: <Patents></Patents>,
                loader: async () => fetch('/patents.json')
            },
            {
                path: '/awards',
                element: <Award></Award>,
                loader: async () => fetch('/award.json')
            },
            {
                path: '/alumni',
                element: <Alumni></Alumni>,
                loader: async () => fetch('/alumni.json')
            }


        ]
    }
])

export default Routes;