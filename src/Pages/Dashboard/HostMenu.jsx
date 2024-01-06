import { Link } from 'react-router-dom';

const HostMenu = () => {
    return (
        <>
            <Link to={"/dashboard"}>
                <li><a>Dashboard</a></li>
            </Link>
            <Link to={"/dashboard/add-room"}>
                <li><a>Add Room</a></li>
            </Link>
            <Link to={"/dashboard/my-listing"}>
                <li><a>My Listing</a></li>
            </Link>
        </>
    );
};

export default HostMenu;