import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés

const Carte = () => {
  const [pleinEcran, setPleinEcran] = useState(false);
  const [geoLocation, setGeoLocation] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsInteret = [
    { id: 1, lat: 43.6045, lng: 1.44, nom: 'Point 1', image: './images/mookok2.png' },
    { id: 2, lat: 43.6053, lng: 1.43, nom: 'Point 2', image: './images/mookok4.png' },
    // Ajoutez d'autres points d'intérêt au besoin
  ];

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeoLocation({ latitude, longitude });
        },
        (error) => {
          setError(`Erreur de géolocalisation : ${error.message}`);
        }
      );
    };

    getLocation();
  }, []);


  const handleMapClick = () => {
    // Réinitialiser le point sélectionné lors d'un clic sur la carte
    setSelectedPoint(null);
  };

  const handlePointClick = (point) => {
    setSelectedPoint(point);
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
          center={selectedPoint ? [selectedPoint.lat, selectedPoint.lng] : (geoLocation ? [geoLocation.latitude, geoLocation.longitude] : [43.6047, 1.4442])}
          zoom={8}
          className={`carte ${pleinEcran ? 'plein-ecran' : ''}`}
          onClick={handleMapClick}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap contributors' />

          {pointsInteret.map((point) => (
            <Marker key={point.id} position={[point.lat, point.lng]} onClick={() => handlePointClick(point)}>
              <Popup>{point.nom}</Popup>
            </Marker>
          ))}

          {geoLocation && (
            <Marker position={[geoLocation.latitude, geoLocation.longitude]}>
              <Popup>Ma position</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      <div className="points-images">
        {pointsInteret.map((point) => (
          <img
            key={point.id}
            src={process.env.PUBLIC_URL + point.image}
            alt={point.nom}
            onClick={() => handlePointClick(point)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carte;
