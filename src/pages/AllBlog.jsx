import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { PhotoView } from "react-photo-view";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllBlog = () => {
    const { user } = useContext(AuthContext);
    const [allBlogs, setAllBlogs]=useState();
    const [filteredBlogs, setFilteredBlogs]=useState();


    // const { isPending, isError, error, data: allBlogs } = useQuery({
    //     queryKey: ['allBlogs'],
    //     queryFn: async () => {
    //         const res = await axios.get('https://write-wave-server.vercel.app/blogs');
    //         return res.data;
    //     }
    // })
    // console.log(allBlogs);

    // if (isPending) {
    //     return <div className="h-screen flex justify-center items-center">
    //         <span className="loading loading-ring loading-lg"></span>
    //     </div>
    // }

    // if (isError) {
    //     return <div className="h-screen flex justify-center items-center">
    //         <span className="">{error.message}</span>
    //     </div>
    // }


    useEffect(() => {
        setFilteredBlogs(null);
        fetch("https://write-wave-server.vercel.app/blogs")
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data);
                setFilteredBlogs(data);
            })
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });
    }, [])


    const handelCategoryFilter = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        if (category === "Filter by Category") {
            setFilteredBlogs(allBlogs);
        } else {
            const filteredBlogs = allBlogs.filter((blog) => blog.category === category);
            setFilteredBlogs(filteredBlogs);
        }
    };


    const handelTitleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value.toLowerCase();
        if (title === "") {
            setFilteredBlogs(allBlogs);
        } else {
            const filteredBlogs = allBlogs.filter((blog) => blog.title.toLowerCase().includes(title));
            setFilteredBlogs(filteredBlogs);
        }
    };

    const addToWishlist = (blog) => {
        const userEmail = user.email;
        const { _id, photo, title, shortDec, category } = blog
        const newWishlist = { userEmail, photo, title, shortDec, category, blogId: _id };

        axios.post('https://write-wave-server.vercel.app/wishlist', newWishlist)
            .then((data) => {
                if (data.data.insertedId) {
                    toast.success('Adde in your wishlist')
                }
            })
    };

    return (
        <div className="max-w-6xl mx-auto my-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-around items-center bg-primary p-4 rounded-xl my-3">
                <div className="form-control">
                    <form onSubmit={handelTitleSearch}>
                        <div className="input-group">
                            <input type="text" name="title" placeholder="Search…" className="input input-bordered focus:outline-none" />
                            <button className="btn btn-square bg-secondary border-secondary text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="form-control">
                    <form onSubmit={handelCategoryFilter}>
                        <div className="input-group">
                            <select name="category" className="select select-bordered focus:outline-none">
                                <option disabled selected>Filter by Category</option>
                                <option>Tech</option>
                                <option>Travel</option>
                                <option>Health</option>
                                <option>Food</option>
                                <option>Lifestyle</option>
                                <option>Business</option>
                                <option>Culture</option>
                                <option>Science</option>
                                <option>Parenting</option>
                                <option>Environment</option>
                            </select>
                            <button type="submit" className="btn bg-secondary border-secondary text-white">Go</button>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                {
                    filteredBlogs && filteredBlogs.length > 0
                        ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-3 md:gap-5">
                            {
                                (filteredBlogs?.map(blog => <div key={blog._id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <div className="relative h-32">
                                            <PhotoView src={blog.photo}>
                                                <img src={blog.photo} alt="Blog Image" className="object-cover" />
                                            </PhotoView>
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
                        : (<div className="h-screen flex justify-center items-center">
                            <span className="font-bold text-error">No Data Found.</span>
                        </div>)
                }
            </div>
        </div >
    );
};

export default AllBlog;