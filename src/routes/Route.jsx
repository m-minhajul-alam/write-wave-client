import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import AllBlog from "../pages/AllBlog";

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
        ]
    }
])

export default router;