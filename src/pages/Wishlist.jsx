import { FaArrowRight, FaTimes } from "react-icons/fa";

const Wishlist = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-primary text-3xl text-center font-bold py-5">Your Wishlist</h2>
                <p className="text-sm text-center font-bold mb-3">Your personal collection of favorite <br /> blogs and articles.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden m-2 flex h-40">
                    <div className="w-1/3 relative">
                        <img src="https://i.ibb.co/Y0tTNNg/Banner-2.png" alt="Blog Image" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 bg-secondary text-xs font-bold text-white p-2 rounded-br-lg">Tech</div>
                    </div>
                    <div className="w-2/3 p-4">
                        <div className="h-20">
                            <h3 className="text-xl font-semibold text-gray-800">Blog Title</h3>
                            <p className="text-gray-600 text-sm">Short Description of the Blog</p>
                        </div>
                        <div className="mt-4 flex justify-end gap-3 items-center">
                            <button className="btn btn-sm rounded-full btn-secondary"><FaTimes></FaTimes></button>
                            <button className="btn btn-sm rounded-full btn-primary"><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;