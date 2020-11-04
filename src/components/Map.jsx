import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default class CovidMap extends Component {
  state = {
    lat: 60,
    lng: -95,
    zoom: 3,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} style={{ height: "400px" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={[60, -95]} radius={100}>
          <Popup>Canada</Popup>
        </CircleMarker>
        <CircleMarker center={[40, -100]} radius={10}>
          <Popup>test</Popup>
        </CircleMarker>

        <CircleMarker center={[-3.5595, 22.9375]} radius={10}>
          <Popup>South Africa</Popup>
        </CircleMarker>
      </Map>
    );
  }
}
