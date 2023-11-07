import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyBookingsCard from './MyBookingsCard';

const MyBookings = () => {
    const [bookingList, setBookingList] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/mybookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setBookingList(res.data))
            .catch(err => console.log(err))
    }, [url]);



    return (
        <div className='dark:bg-gray-900  pt-32'>
            <div className="flex flex-col max-w-6xl mx-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100" >
                <h2 className="text-3xl font-semibold">My Rooms</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        bookingList?.map(booking => <MyBookingsCard key={booking._id} booking={booking}></MyBookingsCard>)
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