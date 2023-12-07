import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the CUNY ToursVR Experience!</h1>
      <p>Explore our virtual campus tour of Queens College</p>
      <Link to="/vr">
        <button className="vr-button">Enter Tour</button>
      </Link>
    </div>
  );
}

export default Home;
