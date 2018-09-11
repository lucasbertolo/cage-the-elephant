import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import SetMarker from "./SetMarker";

const Maps = withScriptjs(withGoogleMap((props) =>{
  const {sources, index} = props;
  const markers = props.sources.map( (source, index) => 
                  <SetMarker
                    key={index}
                    location={{lat: source.lat, lng: source.lon}}
                  />);
  
  return (
      
      <GoogleMap
        defaultZoom={6}
        center={ { lat:  sources[index].lat, lng: sources[index].lon } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default Maps;