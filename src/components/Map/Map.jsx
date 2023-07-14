import { useState } from 'react';
// Map.js

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useCallback, useMemo, useRef } from "react";

import PostCardNew from "../PostCardNew";

const Map = ({posts}) => {
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 33.983841, lng: -118.451424 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,

  }), []);

  const [selectedPost, setSelectedPost] = useState(null);
  
  const onLoad = useCallback(map => (mapRef.current = map), []);

  const handleMarkerClick = (post) => {
    setSelectedPost(post)
    console.log(post)
  } 

  const handleCardClick = (post) => {
    console.log('navigate to post: ', post._id)
  }

  const handleCardClose = () => {
    setSelectedPost(null)
  }

  const myLatlng = { lat: 33.983841, lng: -118.451424 };

  console.log('postion: ', 'lat: ', posts.restaurant?.lat, 'lng: ', posts.restaurant?.lng)

  return (
    <>
      <h1>Map</h1>
      <div className="w-full h-[550px]">
        {/* <GoogleMap zoom={8} center={{ lat: -34.397, lng: 150.644 }} /> */}
        {/* <LoadScript > */}
        <GoogleMap 
        className="w-full h-full" 
        mapContainerClassName="w-full h-full" 
        center={center} 
        zoom={12} 
        options={options} 
        onLoad={onLoad}
        onClick={handleCardClose}
        >
          You can add markers or other map components here
          {posts.map((post) => {
              const { restaurant } = post;
              if (restaurant && restaurant.lat && restaurant.lng) {
                const position = { lat: restaurant.lat, lng: restaurant.lng };
                console.log('position: ', post)
                return (
                <Marker 
                key={post._id} 
                position={position} 
                onClick={() => handleMarkerClick(post)}
                />);
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
      {selectedPost && (
        <PostCardNew
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onCardClick={handleCardClick}
        />
      )}
    </>
  );
};

export default Map;
