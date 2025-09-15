import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import Searchpage from "../pages/Searchpage";

const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:':explore',
                Component:Explore
                
            },
            {
                path:':explore/:id',
                Component:Details
            },
                        {
                path:'search',
                Component:Searchpage
            },
        ]
    }
])
export default router
