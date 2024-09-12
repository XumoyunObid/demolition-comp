import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLocationData } from "../../../Redux/Slices/FormSlice"; // Import the action to store location data

const containerStyle = {
  width: "350px",
  height: "250px",
};

const LocationModal = ({ setLocationFilled }) => {
  const [location, setLocation] = useState(""); // User input location
  const [coordinates, setCoordinates] = useState(null); // Store the coordinates
  const [mapVisible, setMapVisible] = useState(false); // Control map visibility
  const dispatch = useDispatch(); // Initialize Redux dispatch

  // Google Maps API hook
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBgR1cwD4FPz094syf6m8Wy-uqMbFEXI7s', // Store your API key in .env
  });

  // Function to handle location search
  const findLocation = async () => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`
      );
      if (res.data.length > 0) {
        const { lat, lon } = res.data[0];
        const coordinates = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setCoordinates(coordinates);
        setMapVisible(true); // Show the map once location is found

        // Dispatch the selected location and coordinates to Redux
        dispatch(setLocationData({ location, coordinates }));
        setLocationFilled(true); // Mark the location as filled, enabling the "Next" button
      } else {
        alert("Location not found!");
        setLocationFilled(false); // Disable the "Next" button
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      alert("Something went wrong. Please try again.");
      setLocationFilled(false); // Disable the "Next" button
    }
  };

  // Reset when location is empty
  useEffect(() => {
    if (location === "") {
      setLocationFilled(false); // Ensure button is disabled if location is empty
    }
  }, [location, setLocationFilled]);

  return (
    <div className="flex flex-col gap-5">
      {/* Input for typing location */}
      <div className="flex w-[350px] gap-3">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="郵便番号・駅名・地名"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
        <button
          onClick={findLocation}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* Display Google Map only if isLoaded and coordinates exist */}
      {isLoaded && coordinates && (
        <div className="mt-5">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={12}
            onUnmount={() => setMapVisible(false)} // Clean up when map is unmounted
          >
            <Marker position={coordinates} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default LocationModal;
