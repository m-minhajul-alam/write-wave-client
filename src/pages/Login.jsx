import { Link } from "react-router-dom";

const Login = () => {

    const hendelLogin = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email = (from.get('email'));
        const password = (from.get('password'));
        console.log(email, password);
    }

    const hendelGoogleReg = () => {
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto my-10">
            <h2 className="text-primary text-3xl text-center font-bold py-5">Please Login</h2>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-4xl mx-auto">
                <div className="hero h-full py-2">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelLogin} className="">
                            <div className="form-control">
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered my-2" required />
                            </div>
                            <div className="relative form-control">
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered my-2" required />

                            </div>
                            <div className="form-control my-2">
                                <button
                                    className="btn btn-primary text-white">
                                    Login</button>
                            </div>
                            <p className="text-xs text-center">
                                Do not have account? Please <Link
                                    className="text-primary font-bold hover:underline" to={"/register"}>
                                    Register</Link>
                            </p>
                            <button onClick={hendelGoogleReg} type='submit' className='text-center w-full py-1 font-bold my-2'>Login With Google</button>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/PFWssch/login.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;