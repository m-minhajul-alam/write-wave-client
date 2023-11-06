import { FaArrowRight, FaTimes } from "react-icons/fa";

const Wishlist = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-primary text-3xl text-center font-bold py-5">Your Wishlist</h2>
                <p className="text-sm text-center font-bold mb-3">Your personal collection of favorite <br /> blogs and articles.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="card card-side bg-base-100 shadow-xl h-44">
                    <figure><img className="w-32 md:w-44 h-full object-cover" src="https://i.ibb.co/qFCQbRw/00001.webp" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p className="hidden md:flex">Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="card-actions flex flex-row justify-start md:justify-end">
                            <button className="btn btn-sm rounded-full btn-gost bg-gray-100">Watch</button>
                            <button className="btn btn-sm rounded-full btn-secondary"><FaTimes></FaTimes></button>
                            <button className="btn btn-sm rounded-full btn-primary"><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl h-44">
                    <figure><img className="w-32 md:w-44 h-full object-cover" src="https://i.ibb.co/Y0tTNNg/Banner-2.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p className="hidden md:flex">Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="card-actions flex flex-row justify-start md:justify-end">
                            <button className="btn btn-sm rounded-full btn-gost bg-gray-100">Watch</button>
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