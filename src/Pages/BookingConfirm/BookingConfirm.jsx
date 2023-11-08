import axios from 'axios';
import moment from 'moment';
import { useContext, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import HomeSlider from '../Home/Banner/HomeSlider/HomeSlider';
import { FaBed, FaCloudSun, FaPeopleLine } from 'react-icons/fa6';
import { ImInsertTemplate } from 'react-icons/im';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const BookingConfirm = () => {
    const { fromdate, todate } = useParams();
    // console.log(fromdate, todate);

    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const room = useLoaderData();
    const { _id, img,
        price,
        bed,
        capacity,
        room_size,
        view,
        recommend,
        short_title,
        description,
        availability,
        amenities } = room;

    const fromDateTime = moment(fromdate, 'DD-MM-YYYY')
    const toDateTime = moment(todate, 'DD-MM-YYYY')
    // console.log(fromDateTime,toDateTime);

    const totalDays = moment.duration(toDateTime.diff(fromDateTime)).asDays() + 1;
    // // console.log(totalDays);

    const totalPrice = totalDays * price;
    // console.log(totalPrice);


    const bookConfirm = () => {
        const formattedFromDateTime = fromDateTime.format('DD-MM-YYYY');
        const formattedToDateTime = toDateTime.format('DD-MM-YYYY');
        // console.log(formattedFromDateTime,formattedToDateTime);


        axios.put(`https://grand-hotel-sand.vercel.app/rooms/${_id}`, {
            available: false
        })
            .then(res => console.log(res.data))



        // useEffect(() => {
        axios.post('https://grand-hotel-sand.vercel.app/bookingconfirm', {
            fromDateTime: formattedFromDateTime,
            toDateTime: formattedToDateTime,
            totalAmount: totalPrice,
            totalDays,
            userEmail: user?.email,
            roomId: _id,
            roomTitle: short_title,
            capacity,
            price,
            img
        })
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Wow",
                        text: "Room Booked Successfully",
                        icon: "success"
                    });
                }
            })
            .catch(err => console.log(err));
        // }, [fromDateTime, toDateTime, totalPrice, totalDays]);

    }




    return (
        <div className='min-h-[1000px] pt-32 bg-gray-900'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100" >
                <div className="flex flex-col max-w-full mx-auto overflow-hidden rounded" >


                    <HomeSlider room={room}></HomeSlider>
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md z-40 dark:bg-gray-900" >
                        <div className="space-y-2 max-w-xl mt-10" >
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{short_title}</a>

                        </div>
                        <div className="dark:text-gray-100 space-y-10  justify-center items-center" >
                            <p className='text-md -mb-10'>Form,</p>
                            <p className='text-6xl'>{price}$ <span className='text-base'>per night</span></p>

                            <div className='space-y-5'>
                                <p className='text-xl md:flex items-center gap-5'>
                                    <span className='text-5xl'><FaBed></FaBed></span>
                                    {bed}</p>
                                <p className='text-xl md:flex items-center gap-5'>
                                    <span className='text-5xl'><FaPeopleLine></FaPeopleLine></span>
                                    {capacity}</p>
                                <p className='text-xl md:flex items-center gap-5'>
                                    <span className='text-5xl'><ImInsertTemplate></ImInsertTemplate></span>
                                    {room_size}</p>
                                <p className='text-xl md:flex items-center gap-5'>
                                    <span className='text-5xl'><FaCloudSun></FaCloudSun></span>
                                    {view}</p>
                            </div>
                            <div>
                                <p className='text-md md:flex  leading-7 max-w-xl gap-5'>
                                    <span className='text-lg'> Amenities: </span>
                                    {room?.amenities.join(', ')}
                                </p>
                            </div>
                            <div className=''>
                                <div>
                                    <h3 className='text-xl mb-3 text-[#dbb878] font-semibold'>Check-in : {fromdate}</h3>
                                    <h3 className='text-xl mb-3 text-[#dbb878] font-semibold'>
                                        Check-out: {todate}</h3>
                                    <p className='text-xl md:flex items-center gap-5'>
                                        <span className=''>Total Days:</span>
                                        {totalDays} Days</p>
                                    <p className='text-xl md:flex items-center gap-5'>
                                        <span className=''>Total Price:</span>$
                                        {totalPrice} </p>
                                </div>
                            </div>
                            <button onClick={bookConfirm} className='btn w-full bg-[#dbb878] border-none rounded-none  -mt-5 mb-10'>Confirm Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <p>{fromdate}</p>
        //     <p>{todate}</p>
        //     <p>{totalDays}</p>
        // </div>

    );
};

export default BookingConfirm;