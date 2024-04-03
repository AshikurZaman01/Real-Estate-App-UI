import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {

    const btnType = ["Buy", "Rent"];
    const [type, setType] = useState("Buy");



    return (
        <div className="my-5 b">

            <div className="type">
                {
                    btnType.map((btn, indx) => (
                        <button key={indx} onClick={() => setType(btn)} className={`${btn === type ? 'bg-black text-white ' : "border border-gray-300 "}`}>{btn}</button>
                    ))
                }
            </div>

            <form>
                <input type="text" name="location" placeholder="City Location" />
                <input type="number" name="minPrice" placeholder="Min Price" min={0} max={100000} />
                <input type="number" name="maxPrice" placeholder="Max Price" min={0} max={100000} />
                <button className="btn btn-md"><IoSearchOutline /></button>
            </form>

        </div>
    );
};

export default SearchBar;