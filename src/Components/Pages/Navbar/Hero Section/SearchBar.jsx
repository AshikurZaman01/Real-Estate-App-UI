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
        <div className="my-5 b">

            <div className="type">
                {
                    btnType.map((btn, indx) => (
                        <button key={indx} onClick={() => setType(btn)} className={`${btn === type ? 'bg-black text-white ' : "border border-gray-300 "}`}>{btn}</button>
                    ))
                }
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-1 mt-2">
                <div className="col-span-4 sm:col-span-1">
                    <input
                        id="location"
                        type="text"
                        name="location"
                        placeholder="City Location"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <input
                        id="minPrice"
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        min={0}
                        max={100000}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <input
                        id="maxPrice"
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        min={0}
                        max={100000}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="col-span-4 sm:col-span-1 flex items-center justify-center">
                    <button
                        type="submit"
                        className="btn btn-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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