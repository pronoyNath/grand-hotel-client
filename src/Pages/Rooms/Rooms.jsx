import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../Home/Banner/HomeSlider/HomeSlider";
import demoPic from '../../assets/demoPic.jpg'
import RoomCard from './RoomCard'
import { FaFilterCircleDollar } from "react-icons/fa6";
import { useState } from "react";

const Rooms = () => {
    const rooms = useLoaderData();
  const [availableRoom,setAvailableRoom] = useState(rooms);
    
    // console.log(filteredProducts);

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
      
        if (selectedValue === 'upto') {
          const filterPrice = rooms.filter((room) => room.price >= 200);
          setAvailableRoom(filterPrice);
        } else if (selectedValue === 'all') {
          // Show all data
          setAvailableRoom(rooms);
        }
      };

    return (
        <div>
            <div className="pb-28 pt-44 text-white bg-[#0f172b]">
                <div className="flex items-center justify-center max-w-6xl mx-auto">
                    <div className="max-w-6xl mx-auto flex-1">

                        <h3 className='text-4xl font-semibold'>Our Rooms</h3>
                        <p className="text-xl font-medium">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
                    </div>
                    <div className="text-black mr-8 flex gap-5 items-center ">
                        <div className="text-3xl text-[#dbb878]"><FaFilterCircleDollar></FaFilterCircleDollar></div>

                        <select onChange={handleFilter} className="rounded p-2 bg-[#dbb878] text-xl" name="filter" id="filter">
                            <option  value="all">All</option>
                            <option  value="upto">up to 200$</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                {
                    availableRoom.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;