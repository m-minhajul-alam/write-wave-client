import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);
    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/wishlist?userEmail=${user.email}`)
            .then((res) => res.json())
            .then((data) => setWishlist(data))
            .catch((error) => {
                console.error("Error fetching wishlist:", error);
            });
    }, [user.email]);

    const removeFromWishlist = (blogId) => {
        fetch(`http://localhost:5000/wishlist/remove`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ blogId }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setWishlist((prevWishlist) =>
                    prevWishlist.filter((blog) => blog.blogId !== blogId)
                );
            })
            .catch((error) => {
                console.error("Error removing from wishlist:", error);
            });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-primary text-3xl text-center font-bold py-5">Your Wishlist</h2>
            <p className="text-sm text-center font-bold mb-3">
                Your personal collection of favorite blogs and articles.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {wishlist.map((item) => (
                    <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden m-2 flex h-40">
                        <div className="w-1/3 relative">
                            <img src={item.photo} alt="Blog Image" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 right-0 bg-secondary text-xs font-bold text-white p-2 rounded-tl-md">
                                {item.category}
                            </div>
                        </div>
                        <div className="w-2/3 p-4">
                            <div className="">
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 text-sm hidden md:flex">{item.shortDec}</p>
                            </div>
                            <div className="mt-4 flex justify-end gap-3 items-center">
                                <button
                                    className="btn btn-sm rounded-full btn-secondary"
                                    onClick={() => removeFromWishlist(item._id)}
                                >Delete<FaTimes></FaTimes>
                                </button>
                                <button className="btn btn-sm rounded-full btn-primary">
                                    <FaArrowRight></FaArrowRight>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
