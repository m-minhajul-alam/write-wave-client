import { useContext } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Wishlist = () => {
    const { user } = useContext(AuthContext);

    const { isPending, isError, error, data: wishlist, refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axios.get('https://write-wave-server.vercel.app/wishlist');
            const userCart = res.data.filter((item) => item.userEmail === user.email);
            return userCart
        }
    })

    if (isPending) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (isError) {
        return <div className="h-screen flex justify-center items-center">
            <span className="">{error.message}</span>
        </div>
    }

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
                axios.delete(`https://write-wave-server.vercel.app/wishlist/${blogId}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch(true)
                            toast.success('wishlist item has been deleted.')
                        }
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                toast.error('Cancelled')
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
                        ?
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {
                                wishlist?.map((item) => (
                                    <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden m-2 flex h-40">
                                        <div className="w-1/3 relative">
                                            <PhotoView src={item.photo}>
                                                <img src={item.photo} alt="Blog Image" className="w-full h-full object-cover" />
                                            </PhotoView>
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
                                ))
                            }
                        </div>
                        : (<div className="h-screen flex justify-center items-center">
                            <span className="font-bold text-error">No Blog Added.</span>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Wishlist;
