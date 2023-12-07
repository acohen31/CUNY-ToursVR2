import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';  // Import your Home component
import WebXR from './components/WebXR';  // Import your WebXR component


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/vr">Enter VR Experience</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vr" element={<WebXR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
