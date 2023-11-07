import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const BlogDetail = () => {
    const { user } = useContext(AuthContext);

    const loadedBlog = useLoaderData();
    const { title, shortDec, photo, ownerPhoto, ownerName, ownerEmail, longDec, category } = loadedBlog;

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
                    <img className="rounded-xl shadow-lg" src={photo} alt="" />

                    <div className="flex justify-start items-center">
                        <span title="category" className="btn btn-sm btn-neutral rounded-full text-white mr-3">{category}</span>

                        <div>
                            {
                                (user?.email == ownerEmail) ?
                                    <div>
                                        <Link to={'/updateblog'}><button className="btn btn-primary btn-sm rounded-full text-white mr-3">Update</button></Link>
                                        <Link><button className="btn btn-secondary btn-sm rounded-full text-white">Delete</button></Link>
                                    </div>
                                    :
                                    " "
                            }
                        </div>
                    </div>

                    <h1 className="text-3xl text-primary font-bold">{title}</h1>
                    <p className="text-justify">{shortDec}</p>
                    <p className="text-justify">{longDec}</p>

                    {/* Add comment */}
                    <form>
                        <div className="w-full flex flex-col justify-center">
                            <textarea name="" id="" cols="35" rows="3" placeholder="Type your comment..." className="p-4 rounded-xl rounded-b-none focus:outline-none"></textarea>
                            <input className="btn btn-secondary btn-sm rounded-t-none" type="submit" value="submit" />
                        </div>
                    </form>

                    {/* Show Comments */}
                    <div className="bg-white p-5 rounded-xl">
                        <div className="flex justify-start items-center gap-3 mb-2">
                            <img className="w-[40px] rounded-full" src="https://i.ibb.co/9qmtc5b/person-1.jpg" alt="" />
                            <p className="text-lg font-bold ">jonn</p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ab cum, est illo blanditiis dolorum nam laudantium expedita, hic incidunt amet delectus quidem quibusdam quo deserunt vel adipisci corrupti dolore.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetail;