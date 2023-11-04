import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard/FeatureCard";

const WhyOurHotel = () => {

    const [features,setFeatures] = useState([]);

    useEffect(()=>{
        fetch('/why.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])

    console.log(features);
    return (
        <div className="my-20 max-w-6xl mx-auto">
            <h3 className="font-semibold text-4xl">Why choose our hotel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    features.map(feature=><FeatureCard
                        key={feature.id} 
                        feature={feature}
                        ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default WhyOurHotel;