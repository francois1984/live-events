import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css';

const Carte = () => {
  const [pleinEcran, setPleinEcran] = useState(false);

  const pointsInteret = [
    { lat: 51.505, lng: -0.09, nom: 'Point 1' },
    { lat: 51.515, lng: -0.1, nom: 'Point 2' },
    // Ajoute d'autres points d'intérêt au besoin
  ];

  const togglePleinEcran = () => {
    setPleinEcran(!pleinEcran);
  };

  return (
    <div className={pleinEcran ? 'carte-plein-ecran' : ''}>
      <h2 className="mt-4 mb-3">Carte Interactive</h2>
      <p>
        Explorez notre carte interactive pour découvrir les différents lieux du
        festival. Trouvez les scènes, les stands de restauration et d'autres points
        d'intérêt.
      </p>
      <div className="carte-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className={`carte ${pleinEcran ? 'plein-ecran' : ''}`}
          onClick={togglePleinEcran}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap contributors' />
          {pointsInteret.map((point, index) => (
            <Marker key={index} position={[point.lat, point.lng]}>
              <Popup>{point.nom}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Carte;
