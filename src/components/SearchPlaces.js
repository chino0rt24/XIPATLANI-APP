import React,{useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const SearchPlaces = () => { 


//   const [value, inc, dec] = useCounter()
const [value, setValue] = useState(null);

  return (
    <div style={{flex:1, width:900}} >
    <GooglePlacesAutocomplete
      apiKey="AIzaSyAPOc6lcekAfNZlg8jzc1_LgrHwcO2rOnQ"
      selectProps={{
        value,
        onChange: (e) => console.log(e),
      }}
    />
  </div>
  );
  }

  export default SearchPlaces;