import React from "react";
import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="left">
        <div className="content">
          <h1>About RealEstate</h1>
          <p>
            RealEstate is your trusted partner in finding the perfect property.
            With years of experience and a dedication to excellence, we help you
            navigate the real estate market with confidence.
          </p>
          <p>
            Our mission is to connect buyers and sellers, renters and landlords,
            with the resources and information they need to make informed
            decisions about real estate. Whether you're looking for your dream
            home, a profitable investment property, or a reliable tenant, we're
            here to support you every step of the way.
          </p>
          <p>
            At RealEstate, we believe in transparency, integrity, and
            personalized service. Our team of experts is committed to
            understanding your unique needs and providing tailored solutions
            that exceed your expectations.
          </p>
          <p>
            Thank you for choosing RealEstate as your partner in real estate
            success. Let's find your perfect property together!
          </p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default AboutPage;
