import { Link } from "react-router-dom";

const SingUp = () => {

    const hendelRegister = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = (from.get('name'));
        const photo = (from.get('photo'));
        const email = (from.get('email'));
        const password = (from.get('password'));
        console.log(name, photo, email, password);
    }

    const hendelGoogleReg = () => {
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto my-10">
            <h1 className="text-primary text-3xl text-center font-bold py-5">Please Register</h1>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-4xl mx-auto">
                <div className="hero">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelRegister}>
                            <div className="form-control my-2">
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <input type="url" name='photo' placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="relative form-control my-2">
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control my-2">
                                <button className="btn btn-primary text-white">Register</button>
                            </div>
                            <p className="text-xs text-center">Alredy have account? Please <Link
                                className="text-primary font-bold hover:underline" to={"/login"}>Login</Link>
                            </p>
                        </form>
                        <button onClick={hendelGoogleReg} type="submit" className='text-center w-full py-1 font-bold my-2'>Singin With Google</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/6wfD2H3/singup-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingUp;