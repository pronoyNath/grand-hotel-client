import {  Outlet } from "react-router-dom";
import {  useState } from "react";
import HostMenu from "./HostMenu";
import GuestMenu from "./GuestMenu";
import AdminMenu from "./AdminMenu";
import useUserRole from "../../hooks/useUserRole";

const Dashboard = () => {


    const [active, setActive] = useState(false)

    const [userRole] = useUserRole();
    //    console.log(userRole);

    const handleToggle = () => {
        setActive(!active);
        // console.log(active);
    }
    return (
        <div className='flex pt-44 text-white bg-[#0f172b]'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Navbar */}

                    <div className="navbar bg-[#dbb878]">

                        {
                            userRole === 'host' && <div className=" flex-1 px-2 mx-2">
                                <label className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                                    <input onClick={handleToggle} id="Toggle3" type="checkbox" className="hidden peer" />
                                    <span className="px-4 py-2 text-white rounded-l-md dark:bg-[#0f172b] peer-checked:dark:text-black peer-checked:dark:bg-gray-300">Guest</span>
                                    <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 text-black peer-checked:dark:bg-[#0f172b]  peer-checked:dark:text-white">Host</span>
                                </label>
                            </div>
                        }

                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="max-w-5xl mx-auto">

                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    {/* Navbar menu content here */}
                                    {userRole === 'guest' && <GuestMenu></GuestMenu>}
                                    {userRole === 'host' ? !active ? <GuestMenu></GuestMenu> : <HostMenu></HostMenu> : ""}
                                    {userRole === 'admin' && <AdminMenu></AdminMenu>}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <div className="min-h-screen max-w-6xl mx-auto">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#dbb878]">
                        {/* Sidebar content here */}
                        {userRole === 'guest' && <HostMenu></HostMenu>}
                        {userRole === 'host' && !active ? <GuestMenu></GuestMenu> : <HostMenu></HostMenu>}
                        {userRole === 'admin' && <AdminMenu></AdminMenu>}
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;