import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
    const btnType = ["Buy", "Rent"];
    const [type, setType] = useState("Buy");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="my-8 sm:px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-wrap items-center justify-center sm:justify-start">
                {btnType.map((btn, indx) => (
                    <button
                        key={indx}
                        onClick={() => setType(btn)}
                        className={`btn ${btn === type ? "bg-black text-white hover:text-blue-600" : "text-black border border-gray-300"} mr-2 mb-2 sm:mb-0`}
                    >
                        {btn}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
                <div className="col-span-1 sm:col-span-2">
                    <input
                        id="location"
                        type="text"
                        name="location"
                        placeholder="City Location"
                        className="w-full border border-gray-300 outline-none rounded px-3 py-2"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1">
                    <input
                        id="minPrice"
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        min={0}
                        max={100000}
                        className="w-full border border-gray-300 outline-none rounded px-3 py-2"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1">
                    <input
                        id="maxPrice"
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        min={0}
                        max={100000}
                        className="w-full border border-gray-300 outline-none rounded px-3 py-2"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1 flex items-center justify-center">
                    <button
                        type="submit"
                        className="btn btn-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        <IoSearchOutline className="inline-block mr-2" />
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
