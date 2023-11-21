import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MyMapComponent = () => {
 const mapContainerRef = useRef(null);
 const navigate = useNavigate();

 useEffect(() => {
 if (mapContainerRef.current) {
    const map = L.map(mapContainerRef.current).setView([20.5937, 78.9629], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const markerGujarat = L.marker([22.309425, 72.136230]).addTo(map);
    const markerRajasthan = L.marker([27.023804, 74.217933]).addTo(map);
    const markerMaharashtra = L.marker([19.751480, 75.713888]).addTo(map);
    const markerUttarPradesh = L.marker([26.846709, 80.946159]).addTo(map);
    const markerWestBengal = L.marker([22.986757, 87.854975]).addTo(map);
    const markerAndhraPradesh = L.marker([15.912900, 79.740000]).addTo(map);
    markerGujarat.on('click', function(e) {
     navigate('/bandhani');
    });
    markerRajasthan.on('click', function(e) {
        navigate('/rajasthan');
    });

    markerMaharashtra.on('click', function(e) {
        navigate('/maharashtra');
    });

    markerUttarPradesh.on('click', function(e) {
        navigate('/uttarpradesh');
    });

    markerWestBengal.on('click', function(e) {
        navigate('/westbengal');
    });

    markerAndhraPradesh.on('click', function(e) {
        navigate('/andhrapradesh');
    });
 }
 }, [navigate]);

 return<>
<div>
<p style={{marginTop:"8%",marginLeft:"23%",fontSize:'40px',color:"brown"}}><b>Explore the ancient Indian fashion!</b></p>
 <div id="map" ref={mapContainerRef} style={{ marginTop:"1%",marginLeft:"14%",height: '400px', width: '70%' }}></div>;
 </div>
 </> 
};

export default MyMapComponent;

