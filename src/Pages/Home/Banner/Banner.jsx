import demoPic from '../../../assets/demoPic.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[600px] " style={{ backgroundImage: `url(https://i.ibb.co/BrwQm1w/demoPic.jpg)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Grand Hotel</h1>
                    <p className="mb-5 text-2xl">Welcome to Grand Hotel, where luxury meets comfort. Your relaxation is our priority. Enjoy your stay with us!</p>
                    <button className="btn border-none font-semibold bg-[#dbb878] ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;