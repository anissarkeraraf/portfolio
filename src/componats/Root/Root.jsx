
import { Outlet } from 'react-router-dom';
import Navber from '../NavBer/Navber';
import backgroundImage from '../../assets/site-bg.jpg';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center min-h-screen"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <Navber />
                <div className=' lg:p-10'>
                <Outlet />
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;
