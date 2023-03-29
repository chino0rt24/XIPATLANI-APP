import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker , InfoBox} from '@react-google-maps/api';

import { Box } from '@mui/material';
import { ApiWallet, ROUTES } from '../Api';

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

  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = useState([])



  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  const getData = async () => {
    (await ApiWallet())
    .post(ROUTES.GET_ALL_CUSTOMERS, {})
    .then(response => {
      setMarkers(response.data.data.map(item => {
        return {coordinates:{lat:item.geo[1], lng:item.geo[0]}, name:item.name}}))
    })
  }

  useEffect(() => {
   getData()
  },[])
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
        {markers?.length !== 0 &&
        markers.map(item => {
          return   (
              <Marker 
          key={Math.random()}
          position={{ lat: item.coordinates.lat, lng: item.coordinates.lng }}>
          </Marker>)
        })
        }
        
    
      </GoogleMap>
    </Box>
    
  ) : <></>
}
export default Map