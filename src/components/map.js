import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
      const markerAssam = L.marker([26.1445, 91.7362]).addTo(map);
      const markerUttarakhand = L.marker([30.3165, 78.0322]).addTo(map);

      markerAssam.on('click', function (e) {
        navigate('/assam');
      });

      markerUttarakhand.on('click', function (e) {
        navigate('/uttarakhand');
      });
      markerGujarat.on('click', function (e) {
        navigate('/bandhani');
      });
      markerRajasthan.on('click', function (e) {
        navigate('/rajasthan');
      });

      markerMaharashtra.on('click', function (e) {
        navigate('/maharashtra');
      });

      markerUttarPradesh.on('click', function (e) {
        navigate('/uttarpradesh');
      });

      markerWestBengal.on('click', function (e) {
        navigate('/westbengal');
      });

      markerAndhraPradesh.on('click', function (e) {
        navigate('/andhrapradesh');
      });
    }
  }, [navigate]);

  return <>
    <div className='background' style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <img src="img/bg.png" style={{ width: "100%", position: "absolute", top: "0", left: "0", opacity: "0.5", zIndex: "-1" }} alt="background" />
      <div style={{ position: "relative", zIndex: "2" }}>
        <p style={{ marginTop: "8%", marginLeft: "23%", fontSize: '40px', color: "brown", boxShadow: "inherit" }}>
          <b>Explore the ancient Indian fashion!</b>
        </p>
        <div id="map" ref={mapContainerRef} style={{ marginTop: "1%", marginLeft: "14%", height: '400px', width: '70%', border: "2px solid brown" }}></div>
      </div>
    </div>







  </>
};

export default MyMapComponent;

