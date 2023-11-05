const HotDeals = () => {
    return (
        <div>
            <div className="py-16 text-center max-w-6xl mx-auto">
            <h3 className="font-semibold text-4xl mb-5 text-center">Our Best Deal</h3>
            <p className="text-lg">"Experience unparalleled luxury at Grand Hotel with our Best Deal offer. Enjoy exclusive rates, complimentary upgrades, and a host of amenities that will make your stay truly grand. Book now and indulge in the finest hospitality Rangpur has to offer."</p>
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