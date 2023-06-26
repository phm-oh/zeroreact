import { createBrowserRouter } from "react-router-dom";
import Hero from "../pages/hero";
import Enroll from "../pages/Enroll";
import Letmein from "../pages/Letmein";
import routeShop from "./routeShop";



const route = createBrowserRouter([
    {
        path:'/',
        element:<Hero/>
    },
    {
        path:'/enroll',
        element:<Enroll/>
    },
    {
        path:'/letmein',
        element:<Letmein/>
    },
    ...routeShop,
])

export default route;