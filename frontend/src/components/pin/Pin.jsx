import React from "react";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  const position = [item.latitude, item.longitude];

  return (
    <Marker position={position}>
      <Popup>
        <div className="popup-container">
            <img src={item.img} alt="img" />
            <div className="text-container">
                <Link to={`/${item.id}`} >{item.title}</Link>
                <span>{item.bedroom} bedroom</span>
                <b>$ {item.price}</b>
            </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
