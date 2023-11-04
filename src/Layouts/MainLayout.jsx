import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="absolute top-0 w-full py-2">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;