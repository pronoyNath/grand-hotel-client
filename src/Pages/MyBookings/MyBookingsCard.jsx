import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { FaMapPin, FaRegNewspaper } from "react-icons/fa6";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import UserReview from "../../SharedComponents/UserReview/UserReview";

const MyBookingsCard = ({ booking, handleDelete }) => {
    // console.log(Object.keys(booking).join(","));
    const { _id, img, fromDateTime, toDateTime, totalAmount, totalDays, capacity, roomTitle, price, roomId } = booking;


    //  comparing the date is 1 day before or not 
    function compareDates(fromDate) {
        const today = moment(); // Get today's date
        const formattedFromDate = moment(fromDate, 'DD-MM-YYYY'); // Parse the provided fromDate
        //   console.log(today);
        const daysDifference = formattedFromDate.diff(today, 'days'); // Calculate the difference in days
        if (daysDifference >= 1) {
            handleDelete(_id);
            //   console.log('2 days later'); // fromDate is more than 2 days later than today

            //availability true (open room)
            axios.put(`https://grand-hotel-sand.vercel.app/updateconfirm/${roomId}`, {
                available: true
            })
                .then(res => console.log(res.data))

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...sorry",
                text: "Can't delete before one day!",
            });
            //   console.log('No'); // fromDate is not more than 2 days later than today
        }
    }


    const [rating, setRating] = useState(0);
    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value, 10));
    };
    console.log(rating);

    const handleReview = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const username = form.get('username');
        const comment = form.get('comment');
        // console.log(username,comment,rating);
        const date = moment(); // Create a moment object for the current date and time

        const formattedDate = date.format('MMMM Do YYYY, h:mm:ss a');

        const reviews = { username, comment, rating, roomId, formattedDate }
        axios.post('https://grand-hotel-sand.vercel.app/reviews',
            reviews)
            .then(res => console.log(res.data))
    }

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4" >
                <img className="flex-shrink-0 object-cover w-32 h-32 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={img?.[0]} alt="" />
                <div className="flex flex-col justify-between w-full pb-4" >
                    <div className="flex justify-between w-full pb-2 space-x-2" >
                        <div className="space-y-1" >
                            <h3 className="text-lg font-semibold leadi sm:pr-8">{roomTitle}</h3>
                            <p className="text-base dark:text-gray-400">Capacity: {capacity}</p>
                            <p className="text-base dark:text-gray-400">Check-in: {fromDateTime}</p>
                            <p className="text-base dark:text-gray-400">Check-out: {toDateTime}</p>
                            <p className="text-base dark:text-gray-400">Total Days: {totalDays}</p>
                        </div>
                        <div className="text-right" >
                            <p className="text-lg font-semibold">Total Amount: {totalAmount}$</p>
                            <p className="text-sm dark:text-gray-600">Per Night: {price}$</p>

                        </div>
                    </div>
                    <div className="flex text-[#dbb878] divide-x text-xl" >
                        <Link to={`/roomdetails/${roomId}`}>
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <FaMapPin></FaMapPin>
                                <span>view details</span>
                            </button>
                        </Link>

                        <button onClick={() => compareDates(fromDateTime)} type="button" className="flex items-center px-2 py-1 pl-1 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Cancel Room</span>
                        </button>


                        <Link to={`/updatebookingdate/${_id}`}>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">


                                <GiAnticlockwiseRotation></GiAnticlockwiseRotation>
                                <span>Update Booking Date</span>
                            </button>
                        </Link>


                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button type="button" className="flex items-center px-2 py-1 space-x-1" onClick={() => document.getElementById('my_modal_2').showModal()}>
                            <span className="mr-1"><FaRegNewspaper></FaRegNewspaper></span> Give Review
                        </button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-gray-800">
                                <h3 className="text-2xl text-center">Feedback</h3>
                                <UserReview
                                    rating={rating}
                                    setRating={setRating}
                                    handleRatingChange={handleRatingChange}
                                    handleReview={handleReview}
                                ></UserReview>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>


                    </div>
                </div>
            </div>
        </li>
    );
};

export default MyBookingsCard;