// Map.js

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Map = () => {
  return (
    <>
      <h1>Map</h1>
      <div className="w-full h-[650px]">
        {/* <GoogleMap zoom={8} center={{ lat: -34.397, lng: 150.644 }} /> */}
      {/* <LoadScript > */}
        <GoogleMap className="w-full h-full" mapContainerClassName="w-full h-full" center={{ lat: 33.983841, lng: -118.451424 }} zoom={8}>
          You can add markers or other map components here
          {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
        </GoogleMap>
      {/* </LoadScript> */}
      </div>
    </>
  );
};

export default Map;
