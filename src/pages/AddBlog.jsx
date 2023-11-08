import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";

const AddBlog = () => {
    const { user } = useContext(AuthContext);

    const hendelAddBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const category = form.category.value;
        const title = form.title.value;
        const shortDec = form.shortDec.value;
        const longDec = form.longDec.value;
        const currentDate = new Date().toISOString();
        const newBlog = ({ photo, category, title, shortDec, longDec, ownerEmail: user.email, ownerPhoto: user.photoURL, ownerName: user.displayName, uploadTime: currentDate });

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('New blog added')
                }
                e.target.reset();
            })
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto mb-4">
            <h1 className="text-primary text-3xl text-center font-bold py-5">Add A Nwe Blog</h1>
            <p className="text-sm text-center font-bold mb-3">Ready to share your thoughts <br /> and ideas with the world?  <br /> Adding a new blog.</p>

            <div className="flex flex-col-reverse md:flex-row justify-center max-w-4xl mx-auto">
                <div className="hero">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelAddBlog}>
                            <div className="form-control my-2">
                                <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered focus:outline-none" required />
                            </div>
                            <select required name="category" className="select select-bordered w-full max-w-sm focus:outline-none">
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
                                <input type="text" name='title' placeholder="Add Blog Title (under 30 characters)" className="input input-bordered focus:outline-none" maxLength="30" required />
                            </div>
                            <div className="form-control my-2">
                                <textarea name="shortDec" id="" cols="30" rows="4" placeholder="Add Short Description (under 150 characters)" maxLength="150" className="p-4 rounded-lg bg-base-100 border-2 focus:outline-none" required></textarea>
                            </div>
                            <div className="form-control my-2">
                                <textarea name="longDec" id="" cols="30" rows="10" placeholder="Add Short Description (under 3000 characters)" maxLength="3000" className="p-4 rounded-lg bg-base-100 border-2 focus:outline-none" required></textarea>
                            </div>
                            <div className="form-control my-2">
                                <button className="btn btn-primary text-white">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/yXm9gMJ/add-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddBlog;