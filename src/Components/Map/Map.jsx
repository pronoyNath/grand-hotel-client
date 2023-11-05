const Map = () => {
    return (
        <div className="flex flex-row-reverse py-20 ">
            <div className="inline-flex flex-col justify-center items-center p-10 bg-[#0f172b] text-white">
                <h3 className="font-semibold text-3xl mb-5">Location: Grand Hotel Rangpur</h3>
                <p className="text-lg">Situated at the heart of the vibrant city of Rangpur, our grand hotel stands tall on a sprawling campus with a panoramic view of the picturesque Rangpur River. The hotel occupies the top 10 floors of an iconic tower, making it a true symbol of luxury and prestige in the area.

                    Conveniently located in close proximity to the thriving textile industry, our guests enjoy the perfect blend of business and leisure. With lush green gardens and the enchanting Rangpur Botanical Park just a stone's throw away, our location is a gateway to tranquility in the midst of urban sophistication.

                </p>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20327.510715636578!2d89.22902345644405!3d25.756351358090406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1699139504751!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;