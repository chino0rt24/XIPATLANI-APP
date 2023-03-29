import React,{useEffect, useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const SearchPlaces = ({setLocationForm=Function}) => { 
//   const [value, inc, dec] = useCounter()
  const [location, setLocation] = useState({
    place:'',
    geo:{}
  });

  // useEffect(() => {
  //   console.log(location.place);
  // },[location]);
  
const obtainCoordinates = (place) => {
  geocodeByAddress(place.label)
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) =>
   {
    const data = {
      place:place,
      geo: {
        type:'Point', 
        coordinates:[lng, lat]
      }
    }
    setLocation(data);
    setLocationForm({...data, place:place.label})
  }
  );
}

  return (
    <div style={{flex:1}} >
    <GooglePlacesAutocomplete
      apiKey="AIzaSyAPOc6lcekAfNZlg8jzc1_LgrHwcO2rOnQ"
      selectProps={{
        value:location.place,
        onChange: obtainCoordinates,
      }}
    />
  </div>
  );
  }

  export default SearchPlaces;