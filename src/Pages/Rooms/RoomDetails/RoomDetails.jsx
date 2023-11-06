import { useLoaderData } from 'react-router-dom';
import HomeSlider from '../../Home/Banner/HomeSlider/HomeSlider';
import { FaBed, FaCloudSun, FaPeopleLine } from 'react-icons/fa6';
import { ImInsertTemplate } from "react-icons/im";
import DatePickerCalender from '../../../SharedComponents/DatePicker/DatePickerCalender';

const RoomDetails = () => {
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
    return (
        <div className='min-h-[1000px] pt-32 bg-gray-900'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100" >
                <div className="flex flex-col max-w-full mx-auto overflow-hidden rounded" >


                    <HomeSlider room={room}></HomeSlider>
                    <div className="p-6 pb-12 md:flex gap-5 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md z-40 dark:bg-gray-900" >
                        <div className="space-y-2 max-w-xl mt-10" >
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{short_title}</a>
                            <p className="text-xs dark:text-gray-400">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{description}</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-100 space-y-10  border-t-2 pb-5 md:border-l-2 md:border-t-0 p-5  justify-center items-center" >
                            <p className='text-md -mb-10'>Form</p>
                            <p className='text-6xl'>{price}</p>
                            <div className='space-y-3'>
                                <h3 className='texl-md font-semibold -md-5'>Check in*</h3>
                                <DatePickerCalender></DatePickerCalender>
                                <h3 className='texl-md font-semibold -md-5'>Check out*</h3>
                                <DatePickerCalender></DatePickerCalender>
                            </div>
                            <button className='btn w-full bg-[#dbb878] border-none rounded-none  -mt-5 mb-10'>Book Now</button>
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
                                <p className='text-xl md:flex items-center gap-5'>
                                    Available: {availability ? "Yes" : "Sorry"}</p>
                            </div>
                            <div>
                                <p className='text-md md:flex  leading-7 max-w-xl gap-5'>
                                    <span className='text-lg'> Amenities: </span>
                                    {room?.amenities.join(', ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;