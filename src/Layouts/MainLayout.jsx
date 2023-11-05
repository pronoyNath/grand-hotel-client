import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const MainLayout = () => {
    
AOS.init();
    return (
        <div className="overflow-x-hidden font-poppins">
            <div className="absolute top-0 w-full py-2">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;