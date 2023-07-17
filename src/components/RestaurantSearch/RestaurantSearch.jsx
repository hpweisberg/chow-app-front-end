import { useEffect, useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  // getDetails
} from 'use-places-autocomplete';

const RestaurantSearch = ({handleRestaurantData}) => {
  
  const [placeId, setPlaceId] = useState('');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [restaurantName, setRestaurantName] = useState('');
  // console.log('placeid: ', placeId, 'name: ', name, 'lat: ', lat, 'lng: ', lng)

  // selectedRestaurant({placeId, lat, lng, name})
  
  // useEffect(() => {
  //   setRestaurantData({placeId, restaurantName, lat, lng})
  // }, [placeId, restaurantName, lat, lng, setRestaurantData])


  useEffect(() => {
    handleRestaurantData({placeId, restaurantName, lat, lng})
  }, [placeId, restaurantName, lat, lng, handleRestaurantData])
  

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // define search scope here
      types: ['restaurant'],
    },
    debounce: 300,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
      () => {
        setValue(description, false);
        clearSuggestions();

        try {
          getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            // console.log("📍 Coordinates: ", { lat, lng });
            setLat(lat)
            setLng(lng)
            // console.log('place_id: ', results[0].place_id)
            setPlaceId(results[0].place_id)
            const nameSubstromg = description.split(',')[0]
            // console.log('asas', description.split(',')[0])
            setRestaurantName(nameSubstromg)
            // selectedRestaurant({placeId, lat, lng, name})
          });
        } catch (error) {
          console.log('error', error);
        }
      }
      // console.log('placeId: ', placeId)


  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      // setName(main_text);

      // console.log('main_text: ', main_text)
      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong className='color-red-500'>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    })
// console.log('value:' , value)

  return (
    <div>
      {/* <label htmlFor="restaurant-search">Restaurant</label> */}
      <input
        name='restaurant-search'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Where are you eating?'
        className='mt-4' 
        autoComplete='off'
        // onSelect={submit}
        />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}

export default RestaurantSearch;