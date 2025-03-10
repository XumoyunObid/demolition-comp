import React, { useState } from "react";
import { toast } from "react-toastify";

const LocationModal = ({ setLocationFilled }) => {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const fetchAddressFromZip = async (zip) => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`);
      const data = await response.json();
      
      if (data.status === 200 && data.results) {
        const { address1, address2, address3 } = data.results[0];
        setAddress(`${address1}, ${address2}, ${address3}`);
        setIsDetailVisible(true);
      } else {
        toast.error("この郵便番号に一致する住所が見つかりませんでした。");
        setIsDetailVisible(false);
      }
    } catch (error) {
      toast.error("住所の取得中にエラーが発生しました。");
    }
  };

  const handleZipChange = (e) => {
    const zip = e.target.value;
    setZipCode(zip);
    if (zip.length === 7) {
      fetchAddressFromZip(zip);
    }
  };

  const handleSubmit = () => {
    if (address && streetNumber && buildingName) {
      toast.success("住所が正常に保存されました。");
      setLocationFilled(true);
    } else {
      toast.info("すべてのフィールドを入力してください。");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
      <label className="text-sm font-medium">郵便番号:</label>
      <input
        type="text"
        value={zipCode}
        onChange={handleZipChange}
        placeholder="郵便番号を入力"
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      
      {address && (
        <div className="p-2 bg-gray-100 rounded-md cursor-pointer" onClick={() => setIsDetailVisible(!isDetailVisible)}>
          {address}
        </div>
      )}

      {isDetailVisible && (
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">番地:</label>
          <input
            type="text"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            placeholder="1-19"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          
          <label className="text-sm font-medium">建物名:</label>
          <input
            type="text"
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
            placeholder="キングハウス201"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
      >
        提出する
      </button>
    </div>
  );
};

export default LocationModal;