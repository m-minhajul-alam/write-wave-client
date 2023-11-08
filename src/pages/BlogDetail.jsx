import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const BlogDetail = () => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState();

    const loadedBlog = useLoaderData();
    const { _id, title, shortDec, photo, ownerPhoto, ownerName, ownerEmail, longDec, category } = loadedBlog;

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const commentText = form.comment.value;
        const newComment = {
            comment: commentText,
            blogId: _id,
            userName: user.displayName,
            userPhoto: user.photoURL,
        };

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    setComments([...comments, newComment]);
                    form.reset();
                    toast.success('New comment added')
                }
            });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch((error) => {
                console.log('Error in useEffect:', error);
            });

    }, []);



    return (
        <div className="max-w-6xl mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Side Panal */}
                <div className="h-fit bg-gray-300 py-10 rounded-xl md:flex flex-col">
                    <div className="w-full flex justify-center">
                        <img className="w-[150px] rounded-full mb-3" src={ownerPhoto} alt="" />
                    </div>
                    <h6 className="text-xl font-bold text-center">{ownerName}</h6>
                    <h6 className="text-xl text-center">{ownerEmail}</h6>
                </div>

                {/* Main Panal */}
                <div className="md:col-span-2 space-y-6">
                    <div className="relative">
                        <img src={photo} alt="Blog Image" className="rounded-xl shadow-lg" />
                        <div className="absolute top-0 left-0 bg-secondary text-sm font-bold text-white p-2 rounded-tl-md rounded-br-md">
                            {category}
                        </div>
                    </div>

                    <div className="flex justify-start items-center">

                        <div>
                            {
                                (user?.email == ownerEmail) ?
                                    <div>
                                        <Link to={`/updateblog/${_id}`}><button className="btn btn-primary btn-sm rounded-full text-white mr-3">Update</button></Link>
                                    </div>
                                    :
                                    " "
                            }
                        </div>
                    </div>

                    {/* <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">
                            (user?.email == ownerEmail) &&<div><Link to={`/updateblog/${_id}`}><button className="btn btn-primary btn-sm rounded-full text-white mr-3">Update</button></Link>
                                </div>
                        
                        </div>
                    </h2> */}

                    <h1 className="text-3xl text-primary font-bold">{title}</h1>
                    <p className="text-justify">{shortDec}</p>
                    <p className="text-justify">{longDec}</p>

                    {/* Add comment */}
                    <div>
                        {
                            (user?.email !== ownerEmail) ?
                                <form onSubmit={handleCommentSubmit}>
                                    <div className="w-full flex flex-col justify-center">
                                        <textarea name="comment" id="" cols="35" rows="3" placeholder="Type your comment..." className="p-4 rounded-xl rounded-b-none focus:outline-none" maxLength="300"></textarea>
                                        <input className="btn btn-secondary btn-sm text-white rounded-t-none" type="submit" value="submit" />
                                    </div>
                                </form>
                                :
                                <p className="text-2xl text-error font-bold text-center border-2 border-error py-3 w-full rounded-xl">Can not comment on Own Blog</p>
                        }
                    </div>

                    {/* Show Comments */}
                    <div className="bg-white p-5 rounded-xl space-y-5">
                        <div>
                            <h1 className="font-bold my-2">All Comments Here</h1>
                            {
                                comments?.map((comment) => (
                                    <div key={comment._id} className="my-3">
                                        <hr />
                                        <div className="flex justify-start items-center gap-3 my-2">
                                            <img className="w-[40px] rounded-full" src={comment.userPhoto} alt="" />
                                            <p className="text-lg font-bold">{comment.userName}</p>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BlogDetail;