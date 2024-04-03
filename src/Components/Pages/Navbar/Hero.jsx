import bg from "../../../assets/bg.png";

const Hero = () => {
    return (
        <div className="heroSection ">
            <div className="flex justify-center items-center h-full">

                {/* text container */}
                <div className="textContainer bg-red-800 w-[60%]">
                    t
                </div>
                {/* text container */}

                {/* image container */}
                <div className="imageContainer h-[90vh]  w-[40%]">
                    <img className="w-full h-full object-cover" src={bg} alt="" />
                </div>
                {/* image container */}

            </div>
        </div>
    );
};

export default Hero;