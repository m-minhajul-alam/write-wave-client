import { useState } from "react";
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
    });

    const [filteredBlogs, setFilteredBlogs] = useState(featuredBlogs);

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
            cell: (row) => (
                <img
                    src={row.ownerPhoto}
                    alt=""
                    className="w-12 h-12 rounded-full"
                />
            ),
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

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filtered = featuredBlogs.filter((blog) =>
            blog.title.toLowerCase().includes(searchQuery)
        );
        setFilteredBlogs(filtered);
    };

    return (
        <div className="max-w-6xl mx-auto my-4 rounded-xl p-5 bg-white shadow-md">
            <div>
                <h1 className="text-primary text-3xl text-center font-bold py-5">
                    Featured Blog
                </h1>
                <p className="text-sm text-center font-bold mb-3">
                    Discover outstanding content in our Featured Blog section.
                </p>
            </div>

            <input
                type="text"
                placeholder="Search by Title"
                className="input input-bordered mb-3"
                onChange={handleSearch}
            />

            <DataTable
                columns={columns}
                data={filteredBlogs}
                persistTableHead
                pagination
                highlightOnHover
                defaultSortField="SL"
                className="rounded-lg shadow-md"
            />
        </div>
    );
};

export default FeaturedBlog;
