
const UpdateBlog = () => {

    const hendelAddBlog = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = (from.get('name'));
        const photo = (from.get('photo'));
        const email = (from.get('email'));
        const password = (from.get('password'));
        console.log(name, photo, email, password);
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto mb-4">
            <h1 className="text-primary text-3xl text-center font-bold py-5">Update Your Blog</h1>
            <p className="text-sm text-center font-bold mb-3">Update your blog to stay current and <br /> relevant in just a few clicks..</p>

            <div className="flex flex-col-reverse md:flex-row justify-center max-w-4xl mx-auto">
                <div className="hero">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelAddBlog}>
                            <div className="form-control my-2">
                                <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <select required className="select select-bordered w-full max-w-sm focus:outline-none">
                                <option disabled selected>Select A Category</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <div className="form-control my-2">
                                <input type="text" name='title' placeholder="Blog Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <textarea name="shortDec" id="" cols="30" rows="3" placeholder="Add A Short Description" className="p-4 rounded-lg bg-base-100 border-2 focus:outline-none" required></textarea>
                            </div>
                            <div className="form-control my-2">
                                <textarea name="longDec" id="" cols="30" rows="10" placeholder="Write Full Blog" className="p-4 rounded-lg bg-base-100 border-2 focus:outline-none" required></textarea>
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