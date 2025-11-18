import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Homepage from "../pages/Homepage";
import Landingpage from "../pages/Landingpage";


const Mainrouter= createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Landingpage/>
            },{
                path:"/homepage",
                element:<Homepage/>
            }
        ]
    }
])
export default Mainrouter