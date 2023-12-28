import { useEffect, useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  // getDetails
} from 'use-places-autocomplete';

const RestaurantSearch = ({ handleRestaurantData }) => {

  const [placeId, setPlaceId] = useState('');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [restaurantName, setRestaurantName] = useState('');

  // selectedRestaurant({placeId, lat, lng, name})

  // useEffect(() => {
  //   setRestaurantData({placeId, restaurantName, lat, lng})
  // }, [placeId, restaurantName, lat, lng, setRestaurantData])


  useEffect(() => {
    handleRestaurantData({ placeId, restaurantName, lat, lng })
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
    <div className='relative w-[100%]'>
      <input
        name='restaurant-search'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Restaurant'
        className='p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent
        dark:bg-dark-background-200/50'        autoComplete='off'
      // onSelect={submit}
      />
      <label htmlFor="restaurant-search" className=' absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:dark:gray-200
          peer-placeholder-shown:top-3
          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
          peer-focus:dark:text-dark-txt-100  transition-all
          '>Google search - Restaurant (COMING SOON)</label>
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}

export default RestaurantSearch;