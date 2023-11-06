import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SingUp = () => {
    const { createUser, googleSingIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const hendelRegister = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = (from.get('name'));
        const photo = (from.get('photo'));
        const email = (from.get('email'));
        const password = (from.get('password'));

        if (!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            toast.error("password should be minimum 6 characters, at least 1 capitel letter, 1 number and 1 special characte.");
            return;
        }

        createUser(email, password)
            .then(result => {
                e.target.reset();
                toast.success('Sing Up Success')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                    }).catch((error) => {
                        console.log(error);
                    })
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
                toast.success('Sing Up Success')
            })
            .catch(error => toast.error(error.message))
        navigate(location?.state ? location.state : '/')
    }

    return (
        <div className="max-w-7xl w-[90%] mx-auto my-10">
            <div>
                <h1 className="text-primary text-3xl text-center font-bold py-5">Please Sing Up</h1>
                <p className="text-sm text-center font-bold mb-3">Join our community! Sign up today.</p>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-4xl mx-auto">
                <div className="hero">
                    <div className="flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={hendelRegister}>
                            <div className="form-control my-2">
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered focus:outline-none" required />
                            </div>

                            <div className="form-control my-2">
                                <input type="url" name='photo' placeholder="Your Photo URL" className="input input-bordered focus:outline-none" />
                            </div>

                            <div className="form-control my-2">
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered focus:outline-none" required />
                            </div>

                            <div className="relative form-control my-2">
                                <input type={showPass ? "text" : "password"} name='password' placeholder="Your Password" className="input input-bordered focus:outline-none" required />
                                <span onClick={() => setShowPass(!showPass)}
                                    className="absolute top-1/3 right-3 text-primary font-bold cursor-pointer">
                                    {
                                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>

                            <div className="form-control my-2">
                                <input className="btn btn-primary text-white focus:outline-none" type="submit" value="Sing Up" />
                            </div>

                            <p className="text-xs text-center">Alredy have account? Please <Link className="text-primary font-bold hover:underline" to={"/login"}>Login</Link></p>
                        </form>

                        <div className="text-center mt-2 space-y-3">
                            <p className="text-sm font-light">or</p>
                            <button onClick={hendelGoogleReg} type="submit" className=" text-center font-bold text-primary border-2 w-full rounded-lg py-3" >Sing Up With Google</button>
                        </div>
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