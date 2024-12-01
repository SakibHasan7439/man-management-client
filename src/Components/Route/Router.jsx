import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddUser from "../Pages/AddUser";
import UpdateUser from "../Pages/UpdateUser";
import Signin from "../Pages/Signin";
import Register from "../Pages/Register";
import AuthUsers from "../Pages/AuthUsers";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // error page must
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:3050/addUsers')
            },

            {
                path: "/addUsers",
                element: <AddUser></AddUser>
            },

            {
                path: "/addUsers/:id",
                element: <UpdateUser></UpdateUser>,
                loader:({params})=>fetch(`http://localhost:3050/addUsers/${params.id}`)
            },

            {
                path: "/signin",
                element: <Signin></Signin>
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/authUsers",
                element: <AuthUsers></AuthUsers>,
                loader: ()=>fetch('http://localhost:3050/authUsers')
            }
        ]
    }
]);

export default Router;