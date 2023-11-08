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
import FeaturedBlog from "../pages/FeaturedBlog";
import PrivateRoute from "./PiveteRoute";

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
                element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
            },
            {
                path: '/featuredblog',
                element: <FeaturedBlog></FeaturedBlog>
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/wishlist')
            },
            {
                path: '/updateblog/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: '/blogdetail/:id',
                element: <BlogDetail></BlogDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
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