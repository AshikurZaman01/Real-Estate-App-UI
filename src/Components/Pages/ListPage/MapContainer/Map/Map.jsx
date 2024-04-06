import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import './map.scss'; // Assuming this is the correct import for your SCSS file

const Map = ({ data }) => {
    const [markers, setMarkers] = useState([]);

    // Convert the data into markers
    useEffect(() => {
        if (data && data.length > 0) {
            const newMarkers = data.map(item => ({
                position: [item.latitude, item.longitude],
                title: item.title,
                price: item.price,
                area: item.area
            }));
            setMarkers(newMarkers);
        }
    }, [data]);

    console.log(markers); // Logging markers for debugging

    const defaultPosition = [51.505, -0.09]; // Default position for the map

    return (
        <MapContainer center={defaultPosition} zoom={7} scrollWheelZoom={false} className='StyleMap'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Render Markers with Popups */}
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    {/* Customize Popup content */}
                    <Popup>
                        <div>
                            <h2>{marker.title}</h2>
                            <p>Price: {marker.price}</p>
                            <p>Area: {marker.area}</p>
                        </div>
                    </Popup>
                </Marker>

</MapContainer>
    ))
}
      
    );
};

export default Map;
