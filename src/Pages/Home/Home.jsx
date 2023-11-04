import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import WhyOurHotel from "./WhyOurHotel/WhyOurHotel";
// import HomeSlider from "./Banner/HomeSlider/HomeSlider";

const Home = () => {
    return (
        <div>
            {/* <HomeSlider></HomeSlider> */}
            <Banner></Banner>
            <WhyOurHotel></WhyOurHotel>
            <Gallery></Gallery>
            hello world
        </div>
    );
};

export default Home;