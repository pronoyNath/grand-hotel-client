import { useContext, useEffect, useState } from 'react';
import axiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    // const [loading, setLoading] = useState(true);
    const { user, loading } = useContext(AuthContext);
    // const [userRole, setUserRole] = useState(null);

    // useEffect(() => {
    //     axiosSecure.get(`/users/${user?.email}`)
    //         .then(data =>
    //             {
    //                 setUserRole(data?.data[0]?.role)
    //                 setLoading(false)
    //             }

    // )}, [user])
    // return [userRole, loading]


    //using tanstack query
    const { data: userRole, isLoading } = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res?.data[0]?.role;
        },
        queryKey: ['userRole']
    })
    return [userRole, isLoading]
};

export default useUserRole;