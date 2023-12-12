
import 'leaflet/dist/leaflet.css';
import Bandhani from './components/bandhani'
import Maharashtra from './components/maharashtra'
import Rajasthan from './components/rajasthan'
import WestBengal from './components/westbengal'
import UttarPradesh from './components/uttarpradesh'
import AndhraPradesh from './components/andhrapradesh'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyMapComponent from './components/map';
import Pichhwai from './components/pichhwai';
import Assam from './components/assam';



function App() {
  return (
  <Router>
    <Routes>
      <Route path="/bandhani" element={<Bandhani />} />
      <Route path="/rajasthan" element={<Rajasthan />} />
      <Route path="/maharashtra" element={<Maharashtra/>} />
      <Route path="/uttarpradesh" element={<UttarPradesh/>} />
      <Route path="/westbengal" element={<WestBengal/>} />
      <Route path="/uttarakhand" element={<Pichhwai/>} />
      <Route path="/assam" element={<Assam/>} />
      <Route path="/andhrapradesh" element={<AndhraPradesh/>} />
      <Route path="/" element={<MyMapComponent />} />
    </Routes>
  </Router>
  );
 }


export default App;
