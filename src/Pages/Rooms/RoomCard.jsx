import React from 'react';
import HomeSlider from '../Home/Banner/HomeSlider/HomeSlider';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { _id,img,
        price,
        bed,
        capacity,
        room_size,
        view,
        recommend,
        short_title,
        description,
        availability } = room;
    return (
        <Link to={`/roomdetails/${_id}`}>
            <div className="flex gap-10 bg-[#0f172b] border-2 border-[#dbb878]  p-20">
                <div className="flex-1 flex max-w-6xl mx-auto flex-col font-semibold text-white space-y-3 items-center justify-center">
                    <h3 className="text-2xl mb-3">{short_title}</h3>
                    <p className="text-xl">From,</p>
                    <p className="text-3xl">Price: {price}</p>
                    <p className="text-md">Bed:  {bed} </p>
                    <p className="text-lg">Capacity:  {capacity}</p>
                    <p className="text-lg">Room-size:   {room_size} </p>
                    <p className="text-2xl">View:   {view} </p>
                    <p className="text-md mt-3">Recommend: {recommend} </p>
                </div>
                <div className="flex-1 max-w-3xl">
                    <HomeSlider room={room}></HomeSlider>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;