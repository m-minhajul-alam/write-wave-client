import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
    const navigaet = useNavigate()
    const loadedBlog = useLoaderData();
    const { _id, title, shortDec, photo, ownerPhoto, ownerName, ownerEmail, longDec, category, uploadTime } = loadedBlog;

    const hendelUpdateBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const category = form.category.value;
        const title = form.title.value;
        const shortDec = form.shortDec.value;
        const longDec = form.longDec.value;
        const updateBlog = ({ photo, category, title, shortDec, longDec, ownerEmail: ownerEmail, ownerPhoto: ownerPhoto, ownerName: ownerName, uploadTime: uploadTime });

        fetch(`https://write-wave-server.vercel.app/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Blog Updated')
                }
                navigaet('/allblog')
            })
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto mb-4">
            <h1 className="text-primary text-3xl text-center font-bold py-5">Update Your Blog</h1>
            <p className="text-sm text-center font-bold mb-3">Update your blog to stay current and <br /> relevant in just a few clicks..</p>

            <div className="flex flex-col-reverse md:flex-row justify-center max-w-4xl mx-auto">
                <div className="hero">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelUpdateBlog}>
                            <div className="form-control my-2">
                                <input type="url" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <select required name="category" defaultValue={category} className="select select-bordered w-full max-w-sm focus:outline-none">
                                <option disabled selected>Select A Category</option>
                                <option>Tech</option>
                                <option>Travel</option>
                                <option>Health</option>
                                <option>Food</option>
                                <option>Lifestyle</option>
                                <option>Business</option>
                                <option>Culture</option>
                                <option>Science</option>
                                <option>Parenting</option>
                                <option>Environment</option>
                            </select>
                            <div className="form-control my-2">
                                <input type="text" name='title' defaultValue={title} placeholder="Add Blog Title (under 30 characters)" className="input input-bordered" maxLength="30" required />
                            </div>
                            <div className="form-control my-2">
                                <textarea name="shortDec" id="" cols="30" rows="3" defaultValue={shortDec} placeholder="Add Short Description (under 150 characters)" className="p-4 rounded-lg bg-base-100 border-2 focus:outline-none" maxLength="150" required></textarea>
                            </div>
                            <div className="form-control my-2">
                                <textarea name="longDec" id="" cols="30" rows="10" defaultValue={longDec} placeholder="Add Short Description (under 3000 characters)" className="p-4 rounded-lg bg-base-100 border-2 focus:outline-none" maxLength="3000" required></textarea>
                            </div>
                            <div className="form-control my-2">
                                <button className="btn btn-primary text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/0F35YR1/update-2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;