import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";

import { INITIAL_MAP_VALUE } from "../../constants/map";

import { MapContainer } from "./styled";

import "mapbox-gl/dist/mapbox-gl.css";

class MapboxMap extends Component {
  mapContainer = React.createRef();
  markers = [];

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      ...INITIAL_MAP_VALUE,
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.banksCoords !== this.props.banksCoords) {
      this.removeMarkers();
      this.addMarkers();
    }
  }

  addMarkers() {
    const { banksCoords } = this.props;

    banksCoords.forEach((bank) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([bank.longitude, bank.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h4>${bank.name}</h4>`))
        .addTo(this.map);

      this.markers.push(marker);
    });
  }

  removeMarkers() {
    this.markers.forEach((marker) => {
      marker.remove();
    });

    this.markers = [];
  }

  render() {
    return <MapContainer ref={this.mapContainer} />;
  }
}

MapboxMap.propTypes = {
  banksCoords: PropTypes.array,
};

export default MapboxMap;
