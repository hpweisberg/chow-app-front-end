import { useState, useEffect } from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo, useRef } from "react";

import PostCardNew from "../PostCardNew";

const Map = ({ posts }) => {
  const mapRef = useRef();
  const [currentLocation, setCurrentLocation] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null);
  const [markers, setMarkers] = useState([]);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,

  }), []);


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
      <div className="w-full h-[550px] relative">
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
        <div className='absolute top-0 left-0 w-full z-10'>
          <PostCardNew
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            onCardClick={handleCardClick}
          />
        </div>
      )}
    </>
  );
};

export default Map;
