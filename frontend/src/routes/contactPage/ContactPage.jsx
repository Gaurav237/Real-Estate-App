import React from "react";
import "./contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="left">
        <h1>Contact Us</h1>
        <p>
          <b>Email:</b> info@realestatecompany.com
        </p>
        <p>
          <b>Phone:</b> +1 923 456 7890
        </p>
        <p>
          <b>Address:</b> 21 Jump Street, Vancouver, British Columbia
        </p>
        <p>
          <b>Office Hours:</b> Monday to Friday, 9:00 AM - 5:00 PM
        </p>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default ContactPage;
