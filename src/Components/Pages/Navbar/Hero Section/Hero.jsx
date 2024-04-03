import bg from "../../../../assets/bg.png";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
        <div className="heroSection ">
            <div className="flex justify-center items-center h-full">

                {/* text container */}
                <div className="textContainer w-[60%]">

                    <div className="px-10">
                        <div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary my-4">Find Real Estate & Get Your Dream Place</h1>
                            <p className="text-base md:text-lg text-justify font-normal text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus, nostrum numquam vitae incidunt eum placeat. Veniam earum voluptas alias, consectetur fuga praesentium incidunt ad, magnam iste reiciendis accusantium nobis.</p>
                        </div>


                        <div>
                            <SearchBar></SearchBar>
                        </div>

                        <div className="flex flex-wrap justify-between items-center md:flex-row">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <h1 className="text-4xl font-extrabold">16+</h1>
                                <h2 className="text-2xl font-normal text-gray-600 ">Years Of Experience</h2>
                            </div>

                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <h1 className="text-4xl font-extrabold">200</h1>
                                <h2 className="text-2xl font-normal text-gray-600 ">Award Gained</h2>
                            </div>

                            <div className="w-full md:w-1/3">
                                <h1 className="text-4xl font-extrabold">1200+</h1>
                                <h2 className="text-2xl font-normal text-gray-600 ">Property Ready</h2>
                            </div>
                        </div>

                    </div>
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