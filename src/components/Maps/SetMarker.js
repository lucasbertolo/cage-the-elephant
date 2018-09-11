import React from "react";
import { Marker } from "react-google-maps";
import Guitar from "./guitar.jpg";

export default class SetMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={Guitar}
        >
        </Marker>
    );
  }
}