import { FaArrowRight, FaRegBookmark } from "react-icons/fa";

const AllBlog = () => {
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
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            </div>
        </div>
    );
};

export default AllBlog;