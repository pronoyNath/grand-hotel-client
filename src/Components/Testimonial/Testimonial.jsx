const Testimonial = () => {
    return (
        <section className="">
            <div className="container mx-auto flex flex-col items-center my-10 pb-6 mb-4 md:p-10 md:px-12" >
                <h1 className="text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2 bg-[#dbb878] p-10 " >
                <div className="flex flex-col items-center mx-12 lg:mx-0" >
                    <div className="relative text-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">My stay at Grand Hotel was nothing short of extraordinary. The moment I entered the elegant lobby, I knew I was in for a treat. The staff's warm welcome and attention to detail made me feel like a VIP. The room was a haven of comfort and luxury, and the dining experiences were exquisite. I can't wait to return to Grand Hotel for another unforgettable stay.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-black"></span>
                    <p>Guest Testimonial - Mr. David Richards</p>
                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0" >
                    <div className="relative text-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">Grand Hotel exceeded all my expectations. The stunning views from my room were breathtaking, and the impeccable service made me feel truly special. Every meal was a culinary delight, and the hotel's central location made exploring the city a breeze. I'll cherish the memories of my stay at Grand Hotel, and I highly recommend it to anyone seeking a grand and luxurious experience.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-black"></span>
                    <p>Guest Testimonial - Ms. Emily Anderson</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;