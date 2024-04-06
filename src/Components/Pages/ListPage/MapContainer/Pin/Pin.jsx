import { Marker, Popup } from "leaflet";

const Pin = () => {
    return (
        <Marker position={position} >
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    );
};

export default Pin;