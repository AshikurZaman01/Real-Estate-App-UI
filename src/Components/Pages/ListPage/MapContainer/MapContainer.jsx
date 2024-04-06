import { useEffect, useState } from "react";
import Map from "./Map/Map";

const MapContainer = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('../../../../../public/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div>
            <Map data={data}></Map>
        </div>
    );
};

export default MapContainer;