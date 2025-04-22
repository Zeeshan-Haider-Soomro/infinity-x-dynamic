import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/portfolio",
                element: <Portfolio/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
])

export default router