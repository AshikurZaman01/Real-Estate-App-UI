import { useState } from "react";
import Filter from "./Filter/Filter";
import listContainer from "./ListContainer.scss";
import { useEffect } from "react";
import Card from "../../Card/Card";

const ListContainer = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('../../../../../public/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <div className="wrapper">

                <Filter></Filter>

                <div className="flex flex-col gap-10">
                    {
                        data.map((item, indx) => <Card key={indx} item={item}></Card>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ListContainer;