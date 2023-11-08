import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const loadedWishlist = useLoaderData();
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const userCart = loadedWishlist.filter((item) => item.userEmail === user.email);
        setWishlist(userCart);
    }, [loadedWishlist, user.email]);

    const removeFromWishlist = (blogId) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/wishlist/${blogId}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                `Cart has been deleted.`,
                                'success'
                            )
                        }
                        const remainingCart = wishlist.filter((item) => item._id !== blogId);
                        setWishlist(remainingCart);
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-primary text-3xl text-center font-bold py-5">Your Wishlist</h2>
            <p className="text-sm text-center font-bold mb-3">
                Your personal collection of favorite blogs and articles.
            </p>



            <div>
                {
                    wishlist && wishlist.length > 0
                        ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                                            ><span>Delete</span><FaTimes></FaTimes>
                                            </button>
                                            <Link to={`/blogdetail/${item.blogId}`}><button className="btn btn-sm rounded-full btn-primary">
                                                <FaArrowRight></FaArrowRight>
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : (<div>
                            <p className="text-center font-bold my-36">No Data Added.</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Wishlist;
