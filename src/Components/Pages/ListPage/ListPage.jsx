import ListContainer from "./ListContainer/ListContainer";
import MapContainer from "./MapContainer/MapContainer";

const ListPage = () => {
    return (
        <div className="my-5">

            <div className="flex items-start h-[100vh]">

                {/* list container */}
                <div className="listContainer  w-[60%]">
                    <ListContainer></ListContainer>
                </div>
                {/* list container */}

                {/* map container */}
                <div className="mapContainer  w-[40%]">
                    <MapContainer></MapContainer>
                </div>
                {/* map container */}

            </div>

        </div>
    );
};

export default ListPage;