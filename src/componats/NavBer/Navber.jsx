import { Link } from "react-scroll";
import './navber.css'

const Navber = () => {
    const navLink = (
        <>
            <li className="ml-4">
                <Link 
                    activeClass="text-orange-400"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    Home
                </Link>
            </li>
            <li className="ml-4">
                <Link 
                    activeClass="text-orange-400"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    Skills
                </Link>
            </li>
            <li className="ml-4">
                <Link 
                    activeClass="text-orange-400"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    Projects
                </Link>
            </li>
            <li className="ml-4">
                <Link 
                    activeClass="text-orange-400"
                    to="education"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    Education
                </Link>
            </li>
            <li className="ml-4">
                <Link 
                    activeClass="text-orange-400"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    About
                </Link>
            </li>
            <li className="ml-4">
                <Link 
                    activeClass="text-orange-400"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar text-white mx-auto lg:mx-0  bg-black z-50 fixed pr-20">
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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black text-white">
                            {navLink}
                        </ul>
                    </div>
                    <div className="pl-10 lg:pl-16">
                        <a className="btn btn-ghost md:text-xl border-none">Anis Sarkar</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex lg:pl-28">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="pl-28 lg:pl-5">
                    <button className="btn btn-sm border-none text-white">Work With Me</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;
