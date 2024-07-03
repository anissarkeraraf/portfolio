import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral text-white rounded p-10 mt-5">
            <nav className="grid grid-flow-col gap-4">
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://www.facebook.com/profile.php?id=100055064865127&mibextid=ZbWKwL"><FaFacebook></FaFacebook></a>
                    <a href="https://www.instagram.com/anis_sarker_araf?igsh=MXQ4d3hhcXBscGo4MA=="><FaInstagram></FaInstagram></a>
                    <a href="https://github.com/anissarkeraraf"><FaGithub></FaGithub></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;