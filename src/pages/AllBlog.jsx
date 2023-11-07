import { useEffect, useState } from "react";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa";

const AllBlog = () => {
    const [blogs, setBlogs] = useState();
    console.log(blogs);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="max-w-6xl mx-auto my-4">

            <div className="flex justify-around items-center bg-primary p-4 rounded-xl my-3">
                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item focus:outline-none" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item focus:outline-none">
                        <option disabled selected>Filter</option>
                        <option value="tech">Tech</option>
                        <option value="travel">Travel</option>
                        <option value="health">Health</option>
                        <option value="food">Food</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="business">Business</option>
                        <option value="culture">Culture</option>
                        <option value="science">Science</option>
                        <option value="parenting">Parenting</option>
                        <option value="environment">Environment</option>
                    </select>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    blogs && blogs?.map(blog => <div key={blog._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={blog.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}
                                <div className="badge badge-secondary">{blog.category}</div>
                            </h2>
                            <p>{blog.shortDec}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary rounded-full"><FaRegBookmark></FaRegBookmark> </button>
                                <button className="btn btn-primary rounded-full"><FaArrowRight></FaArrowRight> </button>
                            </div>
                        </div>
                    </div>)
                }


            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="card lg:card-side bg-base-100 shadow-xl md:h-60">
                    <figure><img className="h-full object-cover" src="https://i.ibb.co/qFCQbRw/00001.webp" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mastering the Art of Blogging</h2>
                        <p>Discover the secrets of successful blogging, from crafting compelling content to building a loyal readership. Unlock the potential of your blog with expert tips and insights</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost bg-gray-300 rounded-full">Listen</button>
                            <button className="btn btn-primary rounded-full"><FaRegBookmark></FaRegBookmark> </button>
                            <button className="btn btn-primary rounded-full"><FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl md:h-60">
                    <figure><img className="h-full object-cover" src="https://i.ibb.co/Y0tTNNg/Banner-2.png" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mastering </h2>
                        <p>Discover the secrets of successful blogging, from crafting compellin</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost bg-gray-300 rounded-full">Listen</button>
                            <button className="btn btn-primary rounded-full"><FaRegBookmark></FaRegBookmark> </button>
                            <button className="btn btn-primary rounded-full"><FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AllBlog;