import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Home</NavLink></li>
        <li><NavLink to={"/addBlog"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Add Blog</NavLink></li>
        <li><NavLink to={"/allBlog"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>All Blog</NavLink></li>
        <li><NavLink to={"/featuredBlog"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Featured Blog</NavLink></li>
        <li><NavLink to={"/wishlist"} className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"}>Wishlist</NavLink></li>
    </>

    return (
        <div>
            {/* Navbar for md and lg screen */}
            <div className="navbar hidden lg:flex">
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-start">
                    <Link to={'/'} className="text-primary text-xl font-bold ">
                        <span>Write<span className="text-secondary">Wave</span></span></Link>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-center flex">
                    <ul className="menu-horizontal gap-5">
                        {navLinks}
                    </ul>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-end">
                    <div className="flex justify-center items-center">
                        <Link><button className="btn btn-primary btn-sm text-white mr-2">Login</button></Link>
                        <Link><button className="btn btn-secondary btn-sm text-white">Sing Up</button></Link>
                    </div>
                </div>
            </div>

            {/* Navbar for sm screen */}
            <div className="navbar lg:hidden">
                <div className="flex-1">
                    <Link to={'/'} className="text-primary text-xl font-bold ">
                        <span>Write<span className="text-red-600">Wave</span></span></Link>
                </div>

                <div className="flex justify-end flex-1">
                    <div className="flex items-stretch">
                        <Link><button className="btn btn-primary btn-xs text-white mr-2">Login</button></Link>

                        <div className="dropdown text-gray-400 dropdown-end">
                            <label tabIndex={0} className="\">
                                <Link><button className="btn btn-secondary btn-xs text-white">Menu</button></Link>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-2 text-center text-gray-400 shadow bg-base-100 w-40 mt-3">
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