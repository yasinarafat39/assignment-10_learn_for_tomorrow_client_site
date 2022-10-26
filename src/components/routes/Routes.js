import Blog from "../Blog/Blog";
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
                path: "courses",
                element: <Courses></Courses>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            }
        ]
    }
])