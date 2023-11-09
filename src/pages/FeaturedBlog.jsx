import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "react-data-table-component";

const FeaturedBlog = () => {
    const { isPending, isError, error, data: featuredBlogs } = useQuery({
        queryKey: ['featuredBlogs'],
        queryFn: async () => {
            const res = await axios.get('https://write-wave-server.vercel.app/blogs');
            const blogsWithWordCount = res.data.map((blog) => ({
                ...blog,
                wordCount: blog.longDec.split(/\s+/).length,
            }));

            const topPosts = blogsWithWordCount
                .sort((a, b) => b.wordCount - a.wordCount)
                .slice(0, 10);

            return topPosts;
        }
    })

    if (isPending) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (isError) {
        return <div className="h-screen flex justify-center items-center">
            <span className="">{error.message}</span>
        </div>
    }

    const columns = [
        {
            name: "SL",
            cell: (row) => featuredBlogs.indexOf(row) + 1,
        },
        {
            name: "Photo",
            cell: (row) => <img src={row.ownerPhoto} alt="" className="w-12 rounded-full" />,
        },
        {
            name: "Name",
            selector: "ownerName",
        },
        {
            name: "Title",
            selector: "title",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto my-4 rounded-xl">
            <div>
                <h1 className="text-primary text-3xl text-center font-bold py-5">Featured Blog</h1>
                <p className="text-sm text-center font-bold mb-3">Discover outstanding content in our Featured Blog section.</p>
            </div>

            <DataTable
                columns={columns}
                data={featuredBlogs}
                persistTableHead
                pagination
            />
        </div>
    );
}

export default FeaturedBlog;
