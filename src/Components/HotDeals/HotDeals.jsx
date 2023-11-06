import { Link } from "react-router-dom";

const HotDeals = () => {
    return (
        <div>
            <div className="py-16 text-center max-w-6xl mx-auto">
                <h3 className="font-semibold text-4xl mb-5 text-center">Our Best Deal</h3>
                <p className="text-lg">"Experience unparalleled luxury at Grand Hotel with our Best Deal offer. Enjoy exclusive rates, complimentary upgrades, and a host of amenities that will make your stay truly grand. Book now and indulge in the finest hospitality Rangpur has to offer."</p>
            </div>
            <div>
                <div className="px-8 py-2 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                        <div className="">
                            <span>Get up to 50% off your first order + free shipping,&nbsp;</span>
                            <Link to='/login' rel="noopener noreferrer" className="underline ml-3">sign up</Link>today!
                        </div>
                        <a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
                            <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
                                <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
                            </svg>
                            <span className="hover:underline focus-visible:underline">Gift Cards</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative h-[500px] object-cover" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.eef7a82b95e6894e06e0afb908147736?rik=EhwReJ48HH7P3w&pid=ImgRaw&r=0)' }}>
                <div className="absolute rounded-lg w-full h-full bg-gradient-to-r from-black to-[#dbb878] opacity-30"></div>
                <div className="flex gap-64 justify-center items-center max-w-6xl mx-auto h-full">
                    <div className="flex flex-col justify-center text-white h-full">
                        <div className="p-10 max-w-lg ">
                            <h1 className="mb-5 text-xl font-bold">
                                BUS STATION NEAR</h1>
                            <h1 className="mb-5 text-5xl font-bold">
                                Best City Position</h1>
                            <p className="mb-5">Suspendisse commodo bibendum purus at hendrerit. Vivamus aliquam bibendum fringilla. Praesent cursus felis nunc, quis vulputate sapien posuere vitae. Aliquam erat volutpat. Cras egestas porta massa eget pulvinar. Cras non enim et dui pharetra hendrerit mattis.</p>
                            <p>PAYMENT OPTIONS :</p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[300px] h-[300px] relative bg-yellow-300 rounded-full mb-10">
                            <div className="text-center absolute top-14 left-4 font-semibold text-white space-y-1" data-aos="zoom-in" data-aos-duration="1000" >
                                <p className="text-xl">UP TO</p>
                                <h3 className="text-6xl">50%</h3>
                                <p className="text-xl">ON SELECTED ROOMS</p>
                                <div className="ml-10">
                                    <img src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hostel/wp-content/uploads/sites/8/2023/07/towels-768x628.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HotDeals;