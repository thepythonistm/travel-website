import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Destination from "./Components/Destination/Destination";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Reservation from "./Components/Reservation/Reservation";
import Ourguides from "./Components/Ourguides/Ourguides";
import Contact from "./Components/Contact/Contact";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/ourguides" element={<Ourguides />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
