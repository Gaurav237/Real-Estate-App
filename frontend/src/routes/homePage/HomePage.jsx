import React, { useContext } from "react";
import "./homepage.scss";
import SearchBar from "../../components/searchbar/SearchBar";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Discover Real Estate & Find Your Dream Home</h1>
          <p>
            Welcome to your ultimate destination for finding the perfect home!
            Our platform offers a wide range of real estate listings to suit
            every need, from cozy apartments to luxurious estates. With
            user-friendly search tools and detailed property information,
            discovering your dream place has never been easier. Start your
            journey today and find the home you've always envisioned!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <h3>Years of Real Estate Expertise</h3>
            </div>
            <div className="box">
              <h2>200</h2>
              <h3>Industry Awards Won</h3>
            </div>
            <div className="box">
              <h2>2000+</h2>
              <h3>Properties Available Now</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
};

export default HomePage;
