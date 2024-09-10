import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '300px',
  height: '300px',
};

const LocationModal = () => {
  const [location, setLocation] = useState(''); // User input location
  const [coordinates, setCoordinates] = useState(null); // Store the coordinates
  const [mapVisible, setMapVisible] = useState(false); // Control map visibility

  // Google Maps API hook
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBgR1cwD4FPz094syf6m8Wy-uqMbFEXI7s', // Replace with your API key
  });

  // Function to handle location search
  const findLocation = async () => {
    try {
      const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`);
      if (res.data.length > 0) {
        const { lat, lon } = res.data[0];
        setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
        setMapVisible(true); // Show the map once location is found
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

      {/* Display Google Map if coordinates are found */}
      {mapVisible && isLoaded && coordinates && (
        <div className="mt-5">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={12}
          >
            {/* Marker at the found location */}
            <Marker position={coordinates} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default LocationModal;
