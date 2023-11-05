import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import AllBlog from "../pages/AllBlog";
import BlogDetail from "../pages/BlogDetail";

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
                path: '/blogdetail',
                element: <BlogDetail></BlogDetail>
            },
        ]
    }
])

export default router;