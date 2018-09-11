import React from "react";
import Maps from "./Maps.js";

export default class MapContainer extends React.Component {

	render() {
		return (
			<Maps
				sources={this.props.concerts}
				index={this.props.counter}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC-s4Z24kA1wdZcRXWerjjSnZg_R0ef5jA&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}