
const Card = ({ item }) => {

    const { title, description, image, price, bedrooms, bathrooms, area, location, latitude, longitude, amenities } = item || {};

    return (
        <div>
            <div>
                <img className="w-[200px] h-[200px]" src={image} alt="" />
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Card;