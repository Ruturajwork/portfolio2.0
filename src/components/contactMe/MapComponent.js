import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import FavIcon from "../../assets/logo192.png";

const customIcon = new Icon({
  iconUrl: FavIcon,
  iconSize: [60, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ latitude, longitude, zoom }) => {
  const position = [latitude, longitude];

  return (
    <Container>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
    </Container>
  );
};

export default MapComponent;
