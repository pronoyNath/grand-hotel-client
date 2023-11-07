import axios from 'axios';
import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyBookingsCard from './MyBookingsCard';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const MyBookings = () => {
    const [bookingList, setBookingList] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/mybookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setBookingList(res.data))
            .catch(err => console.log(err))
    }, [url]);


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookingconfirm/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Cancelled!',
                            'Room has been cancelled.',
                            'success'
                        )
                        const remaining = bookingList.filter(product => product._id !== id)
                        setBookingList(remaining)
                    }
                })
            }
        });
    }
 

    return (
        <div className='dark:bg-gray-900  pt-32'>
            <div className="flex flex-col max-w-6xl mx-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100" >
                <h2 className="text-3xl font-semibold">My Rooms</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        bookingList?.map(booking => <MyBookingsCard
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></MyBookingsCard>)
                    }
                </ul>
                <div className="space-y-1 text-right" >

                    <p className="text-sm dark:text-gray-400"> Including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4" >
                    <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Back to Book</span>
                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Happy</span>Stay
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MyBookings;