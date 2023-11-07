import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Home</NavLink></li>

        <li><NavLink to={"/allblog"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>All Blog</NavLink></li>

        <li><NavLink to={"/featuredblog"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Featured Blog</NavLink></li>

        {
            user &&
            <>
                <li><NavLink to={"/addblog"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Add Blog</NavLink></li>

                <li><NavLink to={"/wishlist"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Wishlist</NavLink></li>
            </>
        }
    </>

    return (
        <div>
            {/* Navbar for md and lg screen */}
            <div className="navbar hidden bg-neutral rounded-b-xl lg:flex">
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-start ml-4">
                    <ul className="menu-horizontal gap-5">
                        {navLinks}
                    </ul>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-center">
                    <Link to={'/'} className="text-primary text-3xl font-bold ">
                        <span>Write<span className="text-secondary">Wave</span></span></Link>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-end mr-4">
                    {
                        user ?
                            <div className="flex justify-center items-center">
                                <button onClick={handelLogOut} className="btn btn-ghost btn-xs text-secondary mr-2">Logout</button>
                                {
                                    user.photoURL ?
                                        <img title={user?.displayName} className="w-8 rounded-full" src={user?.photoURL} />
                                        :
                                        <img title={user?.displayName} className="w-8 rounded-full" src="https://i.ibb.co/r69Q4h6/user-icon-gray.png" />
                                }
                            </div>
                            :
                            <div className="flex justify-center items-center">
                                <Link to={'/login'}><button className="btn btn-primary btn-xs text-white mr-2">Login</button></Link>
                                <Link to={'/singup'}><button className="btn btn-secondary btn-xs text-white">Sing Up</button></Link>
                            </div>
                    }
                </div>
            </div>

            {/* Navbar for sm screen */}
            <div className="navbar lg:hidden bg-neutral rounded-b-xl">
                <div className="flex-1">
                    <Link to={'/'} className="text-primary text-xl font-bold ">
                        <span>Write<span className="text-red-600">Wave</span></span></Link>
                </div>

                <div className="flex justify-end flex-1">
                    <div className="flex items-center">
                        <div>
                            {
                                user ?
                                    <button onClick={handelLogOut} className="btn btn-secondary btn-xs text-white mr-2">Logout</button>
                                    :
                                    <Link to={'/login'}><button className="btn btn-primary btn-xs text-white mr-2">Login</button></Link>
                            }
                        </div>

                        <div className="dropdown text-gray-400 dropdown-end">
                            <label tabIndex={0} className="\">
                                {
                                    user ?
                                        <img className="w-8 rounded-full" src={user?.photoURL || "https://i.ibb.co/r69Q4h6/user-icon-gray.png"} />
                                        :
                                        <button className="btn btn-secondary btn-xs text-white"><FaGripLines></FaGripLines></button>
                                }

                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-2 text-center text-xs space-y-2 shadow bg-base-100 rounded-xl w-40 mt-3">
                                <li><p className="text-sm font-bold text-black">{user?.displayName}</p> </li>
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;