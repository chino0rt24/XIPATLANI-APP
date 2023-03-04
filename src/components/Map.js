import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Box } from '@mui/material';

const containerStyle = {
 width:800,
 height:800,
 flex: 1,
};

const center = {
 lat: 18.666901,
  lng: -96.998606
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAPOc6lcekAfNZlg8jzc1_LgrHwcO2rOnQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Box sx={ { width:"100%", height:"100%", display:'flex', backgroundColor:'white',  justifyContent:'center'}} >
          <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </Box>
    
  ) : <></>
}
export default Map