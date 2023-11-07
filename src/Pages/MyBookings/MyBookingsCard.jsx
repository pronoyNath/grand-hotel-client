import { useState } from "react";
import { FaMapPin } from "react-icons/fa6";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { Link } from "react-router-dom";

const MyBookingsCard = ({ booking, handleDelete }) => {
    // console.log(Object.keys(booking).join(","));
    const { _id, img, fromDateTime, toDateTime, totalAmount, totalDays, capacity, roomTitle, price, roomId } = booking;

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

                        <button onClick={() => handleDelete(_id)} type="button" className="flex items-center px-2 py-1 pl-1 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Cancel Room</span>
                        </button>
                        {/* <button onClick={()=>handleUpdate(_id)} type="button" className="flex items-center px-2 py-1 space-x-1"> */}
                        <Link to={`/updatebookingdate/${_id}`}>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">


                                <GiAnticlockwiseRotation></GiAnticlockwiseRotation>
                                <span>Update Booking</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MyBookingsCard;