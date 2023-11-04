// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../HomeSlider/HomeSlider.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <>
      <Swiper
       loop={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-h-[600px]"
      >
        <SwiperSlide>
            <img src="https://hotellerv1.b-cdn.net/apartment/wp-content/uploads/sites/5/2018/06/a-black-and-white-bachelor-pad-in-brooklyn-home-tour-lonny-for-brownstone-apartment-designer-dan-mazzarini-melded-historic-architecture-modern-masculine_hotel-interior-black-and-white_hotel_hotel-desi-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://hotellerv1.b-cdn.net/apartment/wp-content/uploads/sites/5/2018/06/a-black-and-white-bachelor-pad-in-brooklyn-home-tour-lonny-for-brownstone-apartment-designer-dan-mazzarini-melded-historic-architecture-modern-masculine_hotel-interior-black-and-white_hotel_hotel-desi-1024x683.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://hotellerv1.b-cdn.net/apartment/wp-content/uploads/sites/5/2018/06/a-black-and-white-bachelor-pad-in-brooklyn-home-tour-lonny-for-brownstone-apartment-designer-dan-mazzarini-melded-historic-architecture-modern-masculine_hotel-interior-black-and-white_hotel_hotel-desi-1024x683.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
