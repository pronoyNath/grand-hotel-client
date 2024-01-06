import { Navigate, } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";


const HostRoute = ({ children }) => {
    const [userRole,isLoading] = useUserRole();

    if (isLoading) {
        return <div className="flex min-h-screen justify-center my-24">
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96" >
                <div className="h-48 rounded-t dark:bg-gray-700" ></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900" >
                    <div className="w-full h-6 rounded dark:bg-gray-700" ></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700" ></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700" ></div>
                </div>
            </div>
        </div>
    }

    if (userRole === 'host') {
        return children;
    }


    return <Navigate to={'/dashboard'}></Navigate>
};

export default HostRoute;