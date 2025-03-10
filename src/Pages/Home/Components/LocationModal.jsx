import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocationData } from "../../../Redux/Slices/FormSlice";
import { toast } from "react-toastify";

const LocationModal = ({ setLocationFilled }) => {
  const dispatch = useDispatch();
  
  const locationData = useSelector((state) => state.form.location);

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if (locationData) {
      setAddress1(locationData.address1 || "");
      setAddress2(locationData.address2 || "");
      setStreet(locationData.street || "");
      setCity(locationData.city || "");
      setPrefecture(locationData.prefecture || "");
      setZipCode(locationData.zipCode || "");
    }
  }, [locationData]);

  const handleLocationSubmit = () => {
    if (address1 && street && city && prefecture && zipCode) {
      dispatch(
        setLocationData({
          address1,
          address2,
          street,
          city,
          prefecture,
          zipCode,
        })
      );
      setLocationFilled(true);
    } else {
      toast.info("すべての必須フィールドを入力してください。");
      setLocationFilled(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-[350px] flex flex-col gap-3">
        <label className="text-sm font-medium">住所 1:</label>
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          placeholder="住所 1を入力"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />

        <label className="text-sm font-medium">住所 2:</label>
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          placeholder="住所 2を入力（任意）"
          className="p-2 border border-gray-300 rounded-md w-full"
        />

        <label className="text-sm font-medium">通り:</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="通りの名前を入力"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />

        <label className="text-sm font-medium">市区町村:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="市区町村を入力"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />

        <label className="text-sm font-medium">都道府県:</label>
        <input
          type="text"
          value={prefecture}
          onChange={(e) => setPrefecture(e.target.value)}
          placeholder="都道府県を入力"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />

        <label className="text-sm font-medium">郵便番号:</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="郵便番号を入力"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />

        <button
          onClick={handleLocationSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          提出する
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
