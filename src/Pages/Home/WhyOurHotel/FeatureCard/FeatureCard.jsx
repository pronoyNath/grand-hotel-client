
const FeatureCard = ({feature}) => {
    const {img,title,description} = feature;
    return (
        <div className="flex gap-5 p-5">
            <div className=""><img src={img} alt="" /></div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
            <div className="">{description}</div>
            </div>
        </div>
    );
};

export default FeatureCard;