import axios from 'axios';
import moment from 'moment';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookingConfirm = () => {
    const { fromdate, todate } = useParams();
    // console.log(fromdate, todate);

    const room = useLoaderData();
    const {price} = room;

    const fromDateTime = moment(fromdate,'DD-MM-YYYY')
    const toDateTime = moment(fromdate,'DD-MM-YYYY')
    // console.log(fromDateTime);

    const totalDays = moment.duration(toDateTime.diff(fromDateTime)).asDays()+1;
    // console.log(totalDays);

    const totalPrice = totalDays * price;
    // console.log(totalPrice);

    useEffect(()=>{
        axios.post('http://localhost:5000/bookingconfirm',
        {toDateTime,fromDateTime,totalPrice,totalDays}
        )
        .then(data=>console.log(data))
        .catch(err=>console.log(err))


    },[fromDateTime,toDateTime,totalPrice,totalDays])


    return (
        // <div className='min-h-[1000px] pt-32 bg-gray-900'>
        //     <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100" >
        //         <div className="flex flex-col max-w-full mx-auto overflow-hidden rounded" >


        //             <HomeSlider room={room}></HomeSlider>
        //             <div className="p-6 pb-12 md:flex gap-5 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md z-40 dark:bg-gray-900" >
        //                 <div className="space-y-2 max-w-xl mt-10" >
        //                     <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{short_title}</a>
        //                     <p className="text-xs dark:text-gray-400">By
        //                         <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{description}</a>
        //                     </p>
        //                 </div>
        //                 <div className="dark:text-gray-100 space-y-10  border-t-2 pb-5 md:border-l-2 md:border-t-0 p-5  justify-center items-center" >
        //                     <p className='text-md -mb-10'>Form</p>
        //                     <p className='text-6xl'>{price}</p>
        //                     <div className=' flex items-center justify-center gap-5'>
        //                         <div>
        //                             <h3 className='text-xl mb-3 text-[#dbb878] font-semibold'>Check in & Check out date:*</h3>
        //                             <DatePickerCalender filterByDate={filterByDate}></DatePickerCalender>
        //                         </div>
        //                     </div>
        //                     <button className='btn w-full bg-[#dbb878] border-none rounded-none  -mt-5 mb-10'>Book Now</button>
        //                     <div className='space-y-5'>
        //                         <p className='text-xl md:flex items-center gap-5'>
        //                             <span className='text-5xl'><FaBed></FaBed></span>
        //                             {bed}</p>
        //                         <p className='text-xl md:flex items-center gap-5'>
        //                             <span className='text-5xl'><FaPeopleLine></FaPeopleLine></span>
        //                             {capacity}</p>
        //                         <p className='text-xl md:flex items-center gap-5'>
        //                             <span className='text-5xl'><ImInsertTemplate></ImInsertTemplate></span>
        //                             {room_size}</p>
        //                         <p className='text-xl md:flex items-center gap-5'>
        //                             <span className='text-5xl'><FaCloudSun></FaCloudSun></span>
        //                             {view}</p>
        //                         <p className='text-xl md:flex items-center gap-5'>
        //                             Available: {availability ? "Yes" : "Sorry"}</p>
        //                     </div>
        //                     <div>
        //                         <p className='text-md md:flex  leading-7 max-w-xl gap-5'>
        //                             <span className='text-lg'> Amenities: </span>
        //                             {room?.amenities.join(', ')}
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>booking
                <div>
                    <p>{fromdate}</p>
                    <p>{todate}</p>
                </div>
            
        </>
    );
};

export default BookingConfirm;