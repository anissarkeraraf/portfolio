import { NavLink } from "react-router-dom";
import './navber.css'

const Navber = () => {
    const navLink = <>
        <li className="ml-4"><NavLink to='/'
            style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
            }}
        >Home</NavLink></li>

        <li className="ml-4"><NavLink to='/skill'
            style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
            }}
        > Skills</NavLink></li>
        <li className="ml-4"><NavLink to='/project'
            style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
            }}
        >Projects</NavLink></li>
        <li className="ml-4"><NavLink to='/about'
            style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
            }}
        >About</NavLink></li>
        <li className="ml-4"><NavLink to='/contact'
            style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
            }}
        >Contact</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar text-white mx-auto lg:mx-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navLink}
                        </ul>
                    </div>
                    <div className="pl-10 lg:pl-0">
                        <a className="btn btn-ghost text-xl border-none">Anis Sarkar</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex lg:pl-20">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="pl-28 lg:pl-0">
                    <button className="btn btn-sm border-none text-white">Work With Me</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;