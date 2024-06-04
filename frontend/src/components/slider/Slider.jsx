import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const prevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-slider">
          <div className="arrow">
            <img src="/arrow.png" onClick={prevImage} />
          </div>
          <div className="img-container">
            <img src={images[imageIndex]} />
          </div>
          <div className="arrow">
            <img src="/arrow.png" className="right" onClick={nextImage} />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="big-image">
        <img src={images[0]} onClick={() => setImageIndex(0)} />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
