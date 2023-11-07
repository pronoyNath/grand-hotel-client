// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../HomeSlider/HomeSlider.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider({ room }) {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-h-[500px]"
      >
       {room?.img?.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}


      </Swiper>
    </>
  );
}
