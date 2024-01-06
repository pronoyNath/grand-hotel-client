import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li className="text-xl">
            <NavLink
                to="/"
                className={({ isActive }) =>
                     isActive ? "active px-2 py-1 rounded flex items-center border-b-4 border-[#dbb878] " : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li className="text-xl">
            <NavLink
                to="/rooms"
                className={({ isActive}) =>
                     isActive ? "active px-2 py-1 rounded flex items-center  border-b-4 border-[#dbb878] " : ""
                }
            >
                Rooms
            </NavLink>
        </li>

       {
        user &&  <li className="text-xl">
        <NavLink
            to="/mybookings"
            className={({ isActive }) =>
                 isActive ? "active px-2 py-1 rounded flex items-center border-b-4 border-[#dbb878] " : ""
            }
        >
            My Bookings
        </NavLink>
    </li>
       }
        {/* {
            user && <li className="text-xl">
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                     isActive ? "active px-2 py-1 rounded flex items-center border-b-4 border-[#dbb878] " : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
        } */}
    </>

    return (
        
            <div className="navbar max-w-6xl mx-auto text-white z-50">
                <div className="navbar-start">
                    <div className="dropdown z-40">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-[#33302e] dropdown-content mt-3 z-[1] px-2 py-5 rounded shadow-2xl border-2 border-[#dbb878] w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                    <img src="https://i.ibb.co/pKbGqKV/1.png" className="w-[150px] h-[100px] hidden md:block" alt="" />
                    </Link>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="flex gap-5 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-1 text-xs">
                        <p className="">{user?.displayName}</p>
                        <p className="hidden lg:block">{user?.email}</p>
                    </div>
                    <div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                            <div className="w-10 rounded-full">
                                <img src={user ?
                                    user?.photoURL ? user?.photoURL : "https://i.ibb.co/bghqWpR/user.png"
                                    : "https://i.ibb.co/bghqWpR/user.png"
                                } />
                               
                            </div>
                        </label>

                    </div>

                    {
                        user ? <Link onClick={handleLogOut} className="px-10 text-xl py-2 md:py-2 md:px-6 text-[#2e2210] font-semibold rounded-md bg-[#dbb878]">Logout</Link> :
                            <Link to={'/login'} className="py-2 px-10 text-xl text-[#2e2210]  rounded-md font-semibold bg-[#dbb878]">login</Link>
                    }

                </div>
            </div>
    );
};

export default Navbar;