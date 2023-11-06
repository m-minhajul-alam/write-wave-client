import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import AllBlog from "../pages/AllBlog";
import BlogDetail from "../pages/BlogDetail";
import SingUp from "../pages/SingUp";
import Login from "../pages/Login";
import UpdateBlog from "../pages/UpdateBlog";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allblog',
                element: <AllBlog></AllBlog>
            },
            {
                path: '/addblog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/updateblog',
                element: <UpdateBlog></UpdateBlog>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/blogdetail',
                element: <BlogDetail></BlogDetail>
            },
        ]
    },
    {
        path: '/singup',
        element: <SingUp></SingUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
])

export default router;