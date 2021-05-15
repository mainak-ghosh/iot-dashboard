import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 22.572645,
  lng: 88.363892,
};
const markerPosition = {
  lat: 22.544755,
  lng: 88.342516,
};

const LoadMap = ({ googleMapsApiKey }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
    libraries,
    // ...otherOptions
  });

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading...</div>;
};

const MapView = ({ googleMapsApiKey }) => {
  return (
    <div className="rounded-md bg-white text-dark-textLt shadow-lg max-h-bigBox overflow-hidden">
      <div className="pt-1 pb-1 pl-3 pr-3 flex flex-row justify-between items-center transition duration-200 hover:bg-blue-antarticBlue hover:text-white-textLt">
        <h1 className="text-sm font-medium">Iot Device Locations</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </div>

      <hr></hr>
      <LoadMap googleMapsApiKey={googleMapsApiKey} />
    </div>
  );
};

export default MapView;
