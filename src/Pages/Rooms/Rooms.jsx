import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../Home/Banner/HomeSlider/HomeSlider";
import demoPic from '../../assets/demoPic.jpg'
import RoomCard from './RoomCard'

const Rooms = () => {
    const rooms = useLoaderData();
    
    // console.log(rooms);

    return (
        <div>
            <div className="pb-28 pt-44 text-white bg-[#0f172b]">
                <div className="max-w-6xl mx-auto">

                    <h3 className='text-4xl font-semibold'>Our Rooms</h3>
                    <p className="text-xl font-medium">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
                </div>
            </div>
        
           <div>
                {
                    rooms.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;