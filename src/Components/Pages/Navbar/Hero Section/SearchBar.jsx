import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {

    const types = ['Buy', "Rent"];

    const [type, setType] = useState('Buy')
    const [location, setLocation] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    const switchType = (val) => {

        setType(val)

    }

    return (
        <div className="my-5 b">

            <div className="type ">
                {types.map((typeOption, indx) => (
                    <button
                        key={indx}
                        className={` ${type === typeOption ? 'bg-black text-white' : ' border border-gray-400'}`}
                        onClick={() => switchType(typeOption)}
                    >
                        {typeOption}
                    </button>
                ))}
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