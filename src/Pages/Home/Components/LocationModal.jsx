import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLocationData } from "../../../Redux/Slices/FormSlice"; 

const containerStyle = {
  width: "300px",
  height: "250px",
};

const LocationModal = ({ setLocationFilled }) => {
  const [location, setLocation] = useState(""); 
  const [coordinates, setCoordinates] = useState(null); 
  const [mapVisible, setMapVisible] = useState(false); 
  const dispatch = useDispatch(); 

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBgR1cwD4FPz094syf6m8Wy-uqMbFEXI7s', 
  });

  const findLocation = async () => {
    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBgR1cwD4FPz094syf6m8Wy-uqMbFEXI7s`
      );
      if (res.data.results.length > 0) {
        const { lat, lng } = res.data.results[0].geometry.location;
        const coordinates = { lat, lng };
        setCoordinates(coordinates);
        setMapVisible(true);
  
        dispatch(setLocationData({ location, coordinates }));
        setLocationFilled(true);
      } else {
        alert("Location not found!");
        setLocationFilled(false);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      alert("Network error: Please check your internet connection or try again later.");
      setLocationFilled(false);
    }
  };
  
  
  

  useEffect(() => {
    if (location === "") {
      setLocationFilled(false); 
    }
  }, [location, setLocationFilled]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-[300px] gap-3">
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

      {isLoaded && coordinates && (
        <div className="mt-5">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={12}
            onUnmount={() => setMapVisible(false)} 
          >
            <Marker position={coordinates} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default LocationModal;
