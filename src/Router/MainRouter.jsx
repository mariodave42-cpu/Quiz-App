import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import SigninPage from "../pages/SigninPage";


const Mainrouter= createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<SigninPage/>
            }
        ]
    }
])
export default Mainrouter