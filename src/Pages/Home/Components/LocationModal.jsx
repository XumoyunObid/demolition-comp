import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocationData } from "../../../Redux/Slices/FormSlice";

const LocationModal = ({ setLocationFilled }) => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleLocationSubmit = () => {
    if (location.trim() !== "") {
      dispatch(setLocationData({ location }));
      setLocationFilled(true);
    } else {
      alert("有効な場所を入力してください。");
      setLocationFilled(false);
    }
  };

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
          onClick={handleLocationSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md whitespace-nowrap"
        >
          提出する
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
