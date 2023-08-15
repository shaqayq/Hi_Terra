import React from "react";
import { MapContainer,  TileLayer , Popup, Marker} from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "leaflet.offline";
import "../../style/dashboard/map.css";
import SelectBox from "./SelectBox";

import { useGetFarmsQuery } from "../../features/apiSlice";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const { data, error, isLoading, isSuccess } = useGetFarmsQuery();

  const options = {
    farm: ["option1"],
    crop: ["option1"],
    task: ["option1"],
  };


  let markers;
  if(isSuccess){
    if(data.farmsResult?.length > 0){
        markers = data.farmsResult?.map((location , index) => (
         
            <span key={index}>
                {(location.latitude !== null || location.longitude !== null)? (
                    <Marker
                        key={index}
                        position={[location.latitude, location.longitude]}>
                        <Popup>
                            <div>
                                {location.farmName}
                            </div>
                        </Popup>
                    </Marker>
                ): null}
             </span>
        ))
    }
}
  return (
    <>
      <div className="map-container">
        <div className="filter-box">
          <div className="options">
          <SelectBox options={options.farm} msg="Farm" />
          <SelectBox options={options.crop} msg="crop" />
          <SelectBox options={options.task} msg="task" />
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
