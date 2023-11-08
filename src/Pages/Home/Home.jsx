import HotDeals from "../../Components/HotDeals/HotDeals";
import Map from "../../Components/Map/Map";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import WhyOurHotel from "./WhyOurHotel/WhyOurHotel";
// import HomeSlider from "./Banner/HomeSlider/HomeSlider";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <PageTitle title={"Home | Grand Hotel"}></PageTitle>
            {/* <HomeSlider></HomeSlider> */}
            <Banner></Banner>
            <WhyOurHotel></WhyOurHotel>
            <Gallery></Gallery>
            <Map></Map>
           <HotDeals></HotDeals>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;