import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyBookings = () => {
    const [bookingList, setBookingList] = useState();
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/mybookings?email=${user?.email}`;
    useEffect(() => {
      axios.get(url,{withCredentials: true})
      .then(res=>setBookingList(res.data))
      .catch(err=>console.log(err))
    }, [url]);
    console.log(bookingList);

    return (
        <div>
            my bookings
        </div>
    );
};

export default MyBookings;