
import { Outlet } from 'react-router-dom';
import Navber from '../NavBer/Navber';
import backgroundImage from '../../assets/site-bg.jpg'; 

const Root = () => {
    return (
        <div
            className="bg-cover bg-center min-h-screen lg:p-10"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Navber />
            <Outlet />
        </div>
    );
};

export default Root;
