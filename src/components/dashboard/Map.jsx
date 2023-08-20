import React,{useState} from "react";
import { MapContainer,  TileLayer , Popup, Marker} from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
 import "leaflet.offline";
import "../../style/dashboard/map.css";
import SelectBox from "./SelectBox";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGetFarmsQuery , useGetTasksQuery} from "../../features/apiSlice";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { data: totalFarm, error, isLoading: farmLoading, isSuccess: farmSuccess } = useGetFarmsQuery();

  const [selectedFarms, setSelectedFarms] = useState([]);

  const handleSelectBoxChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };

  if (!farmSuccess) {
    return <p>Loading data...</p>;
  }

  const farmOptionResult = totalFarm.farmsResult;
 

  const farmsLocation = selectedOptions.length > 0 ? selectedOptions : farmOptionResult;
  const markers = farmsLocation.map((location, index) => (
    <span key={index}>
      {(location.latitude !== null || location.longitude !== null) &&
      (selectedFarms.length === 0 || selectedFarms.includes(location.id)) && (
        <Marker
          key={index}
          position={[location.latitude, location.longitude]}
        >
          <Popup>
            <div>{location.farmName}</div>
          </Popup>
        </Marker>
      )}
    </span>
  ));

  return (
    <>
      <div className="map-container">
        <div className="filter-box">
          <div className="options">
            <SelectBox
              onChange={handleSelectBoxChange}
            />
            {/* Other dropdowns */}
          </div>
        </div>
        <div className="map">
          <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers}
          </MapContainer>
        </div>
      </div>
    </>
  );
}
