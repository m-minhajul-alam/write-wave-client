import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const FeaturedBlog = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    console.log(featuredBlogs);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                const blogsWithWordCount = data.map((blog) => ({
                    ...blog,
                    wordCount: blog.longDec.split(/\s+/).length,
                }));

                const topPosts = blogsWithWordCount
                    .sort((a, b) => b.wordCount - a.wordCount)
                    .slice(0, 10);

                setFeaturedBlogs(topPosts);
            })
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });
    }, []);

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
