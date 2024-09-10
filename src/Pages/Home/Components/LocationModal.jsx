import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

const LocationModal = () => {
  const [location, setLocation] = useState(''); // User input location
  const [coordinates, setCoordinates] = useState(null); // Store the coordinates
  const [mapVisible, setMapVisible] = useState(false); // Show map after button click

  // Custom marker icon (optional)
  const customMarker = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Function to handle location search
  const findLocation = async () => {
    try {
      const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`);
      if (res.data.length > 0) {
        const { lat, lon } = res.data[0];
        setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
        setMapVisible(true); // Show the map
      } else {
        alert('Location not found!');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Input for typing location */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Type a location..."
        className="p-2 border border-gray-300 rounded-md"
      />
      {/* Button to find location */}
      <button
        onClick={findLocation}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Show Location on Map
      </button>

      {/* Display map if location is found */}
      {mapVisible && coordinates && (
        <div className="h-[250px] w-[350px] mt-5">
          <MapContainer
            center={[coordinates.lat, coordinates.lng]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={[coordinates.lat, coordinates.lng]} icon={customMarker}>
              <Popup>{location}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default LocationModal;
