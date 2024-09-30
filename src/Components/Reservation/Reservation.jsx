import React, { useState } from "react";
import './Reservation.css';

const Reservation = () => {
  const countries = [
    "Morocco",
    "Usa",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Japan",
    "Australia",
    "Malaysia",
    "India"
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="reservation">
      <h1>Reserve your dream trip</h1>
      <div className="name-email">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="date">
        <input type="date" placeholder="From Date" />
        <input type="date" placeholder="To Date" />
      </div>
      <div className="country">
        <label htmlFor="countrySelect">Select your ultimate travel spot: </label> <br />
        <select className="countrySelect" value={selectedCountry} onChange={handleChange}>
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <button className="register">Register</button>
    </div>
  );
};

export default Reservation;
