// Map.js

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useCallback, useMemo, useRef } from "react";

const Map = ({posts}) => {
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 33.983841, lng: -118.451424 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,

  }), []);
  
  const onLoad = useCallback(map => (mapRef.current = map), []);

  const handleMarkerClick = (posts) => {
    console.log(posts)
  } 

  const myLatlng = { lat: 33.983841, lng: -118.451424 };

  console.log('postion: ', 'lat: ', posts.restaurant?.lat, 'lng: ', posts.restaurant?.lng)

  return (
    <>
      <h1>Map</h1>
      <div className="w-full h-[550px]">
        {/* <GoogleMap zoom={8} center={{ lat: -34.397, lng: 150.644 }} /> */}
        {/* <LoadScript > */}
        <GoogleMap className="w-full h-full" mapContainerClassName="w-full h-full" center={center} zoom={12} options={options} onLoad={onLoad}>
          You can add markers or other map components here
          {posts.map((post) => {
              const { restaurant } = post;
              if (restaurant && restaurant.lat && restaurant.lng) {
                const position = { lat: restaurant.lat, lng: restaurant.lng };
                return <Marker key={post._id} position={position} />;
              }
              return null;
            })}
          {/* <Marker position={myLatlng} /> */}
          {/* /* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */} */
          {/* {posts.map((post) => ( */}
            {/* <Marker
              // key={post._id}
              position={myLatlng}
              // onClick={() => handleMarkerClick(post)}
          /> */}
          {/* ))} */}
        </GoogleMap>
        {/* </LoadScript> */}
      </div>
    </>
  );
};

export default Map;
