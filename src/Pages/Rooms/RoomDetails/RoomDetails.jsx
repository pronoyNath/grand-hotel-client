import { useLoaderData } from 'react-router-dom';
import HomeSlider from '../../Home/Banner/HomeSlider/HomeSlider';

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
        availability } = room;
    return (
        <div className='min-h-[1000px] pt-32 bg-gray-900'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100" >
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded" >


                    <HomeSlider room={room}></HomeSlider>
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md z-40 dark:bg-gray-900" >
                        <div className="space-y-2" >
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                            <p className="text-xs dark:text-gray-400">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-100" >
                            <p>Insert the actual text content here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;