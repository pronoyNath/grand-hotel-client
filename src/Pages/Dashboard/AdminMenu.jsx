import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <Link to={"/dashboard/manage-user"}>
                <li><a>Manage Users</a></li>
            </Link>
        </>
    );
};

export default AdminMenu;