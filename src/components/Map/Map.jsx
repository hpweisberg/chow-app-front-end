import { useState, useEffect } from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo, useRef } from "react";

import PostCardNew from "../PostCardNew";

const Map = ({ posts }) => {
  const mapRef = useRef();
  // const center = useMemo(() => ({ lat: 33.983841, lng: -118.451424 }), []);
  const [currentLocation, setCurrentLocation] = useState(null)
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,

  }), []);

  const [selectedPost, setSelectedPost] = useState(null);
  const [markers, setMarkers] = useState([]);

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

  //! Fetch user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  }, []);

  // ! Needed to add markers on load
  useEffect(() => {
    if (posts.length > 0) {
      const newMarkers = posts.reduce((markerElements, post) => {
        const { restaurant } = post;
        if (restaurant && restaurant.lat && restaurant.lng) {
          const position = { lat: restaurant.lat, lng: restaurant.lng };
          markerElements.push(
            <Marker
              key={post._id}
              position={position}
              onClick={() => handleMarkerClick(post)}
            />
          );
        }
        return markerElements;
      }, []);
      setMarkers(newMarkers);
    }
  }, [posts]);

  return (
    <>
      <h1>Map</h1>
      <div className="w-full h-[550px]">
      {currentLocation && (
          <GoogleMap
            className="w-full h-full"
            mapContainerClassName="w-full h-full"
            center={currentLocation}
            zoom={12}
            options={options}
            onLoad={onLoad}
            onClick={handleCardClose}
          >
            {markers}
          </GoogleMap>
        )}
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
