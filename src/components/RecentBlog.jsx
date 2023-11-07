import { useEffect, useState } from "react";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa"

const RecentBlog = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });
    }, [])

    return (
        <div className="max-w-6xl mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-3 md:gap-5">
                {
                    blogs && blogs?.map(blog => <div key={blog._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-40 object-cover" src={blog.photo} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-base md:text-xl">{blog.title}
                                <div className="badge badge-secondary">{blog.category}</div>
                            </h2>
                            <p className="text-xs md:text-sm">{blog.shortDec}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-xs md:btn-sm rounded-full font-bold"><FaRegBookmark></FaRegBookmark> </button>
                                <button className="btn btn-primary btn-xs md:btn-sm rounded-full text-white"><FaArrowRight></FaArrowRight> </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;