import { IoIosSearch } from "react-icons/io";
import filter from "./filter.scss";

const Filter = () => {
    return (
        <div className="filter">
            <div >
                <h1>Search result for <b>London</b></h1>
            </div>

            {/* top container */}
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" name="city" id="city" placeholder="City Location" />
                </div>
            </div>
            {/* top container */}

            {/* bottom container */}
            <div className="bottom">

                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="" disabled selected>Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="" disabled selected>Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="text" name="minPrice" id="minPrice" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="text" name="maxPrice" id="maxPrice" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" name="bedroom" id="bedroom" placeholder="any" />
                </div>

                <button className="button  flex justify-center items-center"><IoIosSearch className="icon" /></button>

            </div>
            {/* bottom container */}

        </div>
    );
};

export default Filter;