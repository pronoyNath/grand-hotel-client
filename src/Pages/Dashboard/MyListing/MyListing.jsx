import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import axiosSecure from '../../../hooks/useAxiosSecure';
import ListCard from './ListCard';

const MyListing = () => {
    const { user } = useContext(AuthContext);
    const [rooms,setRooms] = useState([]);
   
    useEffect(()=>{

        axiosSecure.get(`/room/${user?.email}`)
        .then(data => setRooms(data.data))
    },[user])
        
    


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-white'>
                        <th>Name</th>
                        <th>Job</th>
                        <th>view</th>
                        <th></th>
                    </tr>
                </thead>
                {
                rooms?.map((room,idx)=><ListCard key={idx} room={room}></ListCard>)
            }
            </table>
            
            
        </div>
    );
};

export default MyListing;