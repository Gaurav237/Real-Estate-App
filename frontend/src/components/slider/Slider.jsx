import React from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  return (
    <div className="slider">
      <div className="big-image">
        <img src={images[0]} />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
