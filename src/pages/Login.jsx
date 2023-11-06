import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { logIn, googleSingIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const hendelLogin = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email = (from.get('email'));
        const password = (from.get('password'));

        logIn(email, password)
            .then(result => {
                e.target.reset();
                toast.success('Login Success')
                console.log(result);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const hendelGoogleReg = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user)
                toast.success('Login Success')
            })
            .catch(error => toast.error(error.message))
        navigate(location?.state ? location.state : '/')
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto my-10">
            <div>
                <h2 className="text-primary text-3xl text-center font-bold py-5">Please Login</h2>
                <p className="text-sm text-center font-bold mb-3">Welcome back! Log in to your <br /> account to access your profile.</p>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-4xl mx-auto">
                <div className="hero h-full py-2">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelLogin} className="">
                            <div className="form-control">
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered my-2 focus:outline-none" required />
                            </div>

                            <div className="relative form-control my-2">
                                <input type={showPass ? "text" : "password"} name='password' placeholder="Your Password" className="input input-bordered focus:outline-none" required />
                                <span onClick={() => setShowPass(!showPass)} className="absolute top-1/3 right-3 text-primary font-bold cursor-pointer">
                                    {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </span>
                            </div>

                            <div className="form-control my-2">
                                <input className="btn btn-primary text-white focus:outline-none" type="submit" value="Login" />
                            </div>

                            <p className="text-xs text-center"> Do not have account? Please <Link className="text-primary font-bold hover:underline" to={"/singup"}> Sing Up</Link></p>
                        </form>

                        <div className="text-center mt-2 space-y-3">
                            <p className="text-sm font-light">or</p>
                            <button onClick={hendelGoogleReg} type="submit" className=" text-center font-bold text-primary border-2 w-full rounded-lg py-3" >Login With Google</button>
                        </div>

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