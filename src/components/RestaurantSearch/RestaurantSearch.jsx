import { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const RestaurantSearch = ({onChange}) => {
  console.log('searchme')

  const [location, setLocation] = useState('');
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

  // const ref = () => {
  //   clearSuggestions();
  // }

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
            console.log("📍 Coordinates: ", { lat, lng });
            onChange({
              name: description,
              lat,
              lng,
              place_id: results[0].place_id,
            })
            // console.log("📍 Data: ", { results });
          });
        } catch (error) {
          console.log('error', error);
        }
      }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    })

  return (
    <div>
      <label htmlFor="restaurant-search">Restaurant</label>
      <input
        name='restaurant-search'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Where are you going?'
        className='mt-20' 
        autoComplete='off'
        />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  )

  // return (
  //   <>
  //     <h1 className="mt-20">Restaurant Search</h1>
  //     <input type="text" placeholder="Search Restaurant Name" />
  //   </>
  // );
}

export default RestaurantSearch;