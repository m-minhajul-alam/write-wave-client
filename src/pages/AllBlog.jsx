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
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-around items-center bg-primary p-4 rounded-xl my-3">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered focus:outline-none" />
                        <button className="btn btn-square bg-secondary border-secondary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="form-control">
                    <div className="input-group focus:outline-none">
                        <select className="select select-bordered">
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
                        <button className="btn bg-secondary border-secondary text-white">Go</button>
                    </div>
                </div>
            </div>

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
        </div >
    );
};

export default AllBlog;