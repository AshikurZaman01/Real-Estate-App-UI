import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuBadgeDollarSign } from "react-icons/lu";
import card from "./card.scss";

const Card = ({ item }) => {

    const { id, title, description, image, price, bedrooms, bathrooms, area, location, latitude, longitude, amenities } = item || {};

    return (
        <div>
            <div className="flex gap-5 shadow shadow-gray-500 rounded">

                <div className="w-[50%] ">
                    <Link to={`/itemDetails/${id}`} className="imageContainer  ">
                        <img className="w-full h-full object-cover rounded" src={image} alt="" />
                    </Link>
                </div>

                <div className="textContainer w-[50%] space-y-6 px-2 py-5">

                    <h2 className="title text-2xl">
                        <Link to={`/itemDetails/${id}`}>{title}</Link>
                    </h2>

                    <p className="address flex items-center  gap-2 text-xl">
                        <CiLocationOn className="text-gray-500" />
                        <span>{location}</span>
                    </p>

                    <p className="price flex items-center gap-2 text-xl">
                        <LuBadgeDollarSign className="text-gray-500" />
                        <span>{price}</span>
                    </p>

                    <div className="bottom flex justify-between items-center">

                        <div className="features flex items-center gap-3 text-xl ">
                            <div className="feature flex items-center gap-1">
                                <IoBedOutline className="text-gray-500" />
                                <span>{bedrooms} bedroom</span>
                            </div>

                            <div className="feature flex items-center  gap-1 ">
                                <LiaBathSolid className="text-gray-500" />
                                <span>{bathrooms} bathroom</span>
                            </div>
                        </div>

                        <div className="icons flex items-center gap-2 text-gray-500 text-xl" >
                            <span className="cursor-pointer"><CiBookmarkCheck /></span>
                            <span className="cursor-pointer"><IoChatbubbleEllipsesOutline /></span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;