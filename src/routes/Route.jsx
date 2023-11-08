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
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                loader: () => fetch('https://write-wave-server.vercel.app/wishlist')
            },
            {
                path: '/updateblog/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://write-wave-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/blogdetail/:id',
                element: <BlogDetail></BlogDetail>,
                loader: ({ params }) => fetch(`https://write-wave-server.vercel.app/blogs/${params.id}`)
            },
        ]
    },
    {
        path: '/singup',
        element: <SingUp></SingUp>,
        errorElement: <Error></Error>,
    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <Error></Error>,
    },
])

export default router;