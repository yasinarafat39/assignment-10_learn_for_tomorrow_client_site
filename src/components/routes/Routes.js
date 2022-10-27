import Blog from "../Blog/Blog";
import CheckOut from "../checkOut/CheckOut";
import CourseDetails from "../Courses/CourseDetails";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: ErrorPage } = require("../ErrorPage/ErrorPage");
const { default: Home } = require("../Home/Home");
const { default: Signin } = require("../Login/Signin");
const { default: Register } = require("../Register/Signup");



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/signup",
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: "/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }
])