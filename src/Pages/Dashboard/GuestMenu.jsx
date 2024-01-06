import { Link } from 'react-router-dom';

const GuestMenu = () => {
    return (
        <>
            <Link to={"/dashboard/my-bookings"}>
                <li><a>My Bookings</a></li>
            </Link>
        </>
    );
};

export default GuestMenu;