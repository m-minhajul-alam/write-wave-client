import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa"
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RecentBlog = () => {
    const { user } = useContext(AuthContext);
    const [recentBlogs, setRecentBlogs] = useState();

    useEffect(() => {
        setRecentBlogs(null);
        const fiveDaysAgo = new Date();
        fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                const recentBlogs = data.filter((blog) => new Date(blog.uploadTime) >= fiveDaysAgo);
                recentBlogs.sort((a, b) => new Date(b.uploadTime) - new Date(a.uploadTime));
                const recentBlogsToShow = recentBlogs.slice(0, 6);
                setRecentBlogs(recentBlogsToShow);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const addToWishlist = (blog) => {
        const userEmail = user.email;
        const { photo, title, shortDec, category } = blog
        const newWishlist = { userEmail, photo, title, shortDec, category };
        console.log(newWishlist);

        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWishlist),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success('Adde in your wishlist')
            })
            .catch((error) => {
                console.log(error);
                toast.error("An error. can't add in wishlist")
            });
    };

    return (
        <div className="max-w-6xl mx-auto my-4">
            <div>
                <h2 className="text-primary text-3xl text-center font-bold py-5">All Recent Blogs Here</h2>
                <p className="text-sm text-center font-bold mb-3">Stay updated with the freshest content from our vibrant community of writers and creators</p>
            </div>
            <div>
                {
                    recentBlogs && recentBlogs.length > 0
                        ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-3 md:gap-5">
                            {
                                (recentBlogs?.map(blog => <div key={blog._id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <div className="relative h-32">
                                            <img src={blog.photo} alt="Blog Image" className="w-full object-cover" />
                                            <div className="absolute top-0 left-0 bg-secondary text-white text-xs font-bold p-2 rounded-br-lg">{blog.category}</div>
                                        </div>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-base md:text-xl">{blog.title}</h2>
                                        <p className="text-xs md:text-sm">{blog.shortDec}</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => addToWishlist(blog)} className="btn btn-secondary btn-xs md:btn-sm rounded-full font-bold"><span>Wishlist</span><FaRegBookmark></FaRegBookmark> </button>
                                            <Link to={`/blogdetail/${blog._id}`}><button className="btn btn-primary btn-xs md:btn-sm rounded-full text-white"><FaArrowRight></FaArrowRight> </button></Link>
                                        </div>
                                    </div>
                                </div>))
                            }
                        </div>
                        : (<div>
                            <p className="text-center font-bold my-36">No Data Found.</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;