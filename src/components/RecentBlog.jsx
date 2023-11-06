import { FaArrowRight, FaRegBookmark } from "react-icons/fa"
import { Link } from "react-router-dom";
const RecentBlog = () => {
    return (
        <div className="max-w-6xl mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="card lg:card-side bg-base-100 shadow-xl md:h-60">
                    <figure><img className="w-44 h-full object-cover" src="https://i.ibb.co/qFCQbRw/00001.webp" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mastering the Art of Blogging</h2>
                        <p>Discover the secrets of successful blogging, from crafting compelling content to building a loyal readership. Unlock the potential of your blog with expert tips and insights</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost btn-sm bg-gray-300 rounded-full">Listen</button>
                            <button className="btn btn-primary btn-sm rounded-full"><FaRegBookmark></FaRegBookmark></button>
                            <Link to={'/blogdetail'}><button className="btn btn-primary btn-sm rounded-full"><FaArrowRight></FaArrowRight></button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl md:h-60">
                    <figure><img className="w-44 h-full object-cover" src="https://i.ibb.co/Y0tTNNg/Banner-2.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mastering </h2>
                        <p>Discover the secrets of successful blogging, from crafting compellin</p>
                        <div className="card-actions justify-end">
                            <button title="Category" className="btn btn-ghost btn-sm bg-gray-300 rounded-full">Listen</button>
                            <button title="Add Wishlist" className="btn btn-primary btn-sm rounded-full"><FaRegBookmark></FaRegBookmark></button>
                            <Link to={'/blogdetail'}><button title="Details" className="btn btn-primary btn-sm rounded-full"><FaArrowRight></FaArrowRight></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;