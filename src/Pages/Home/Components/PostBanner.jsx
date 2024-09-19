import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedButton } from "../../../Redux/Slices/FormSlice";
import MainModal from "./Modal";
import ApartmentModal from "./ApartmentModal";
import ThirdModal from "./ThirdModal";

const PostBanner = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName) => {
    dispatch(setSelectedButton(buttonName));
  };

  return (
    <div>
      <div
        className="p-8 flex flex-col items-center gap-3 rounded-lg backdrop-blur-md bg-white/30"
      >
        <h2 className="text-lg md:text-2xl text-white">どちらで解体工事をご希望ですか？</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div onClick={() => handleButtonClick("戸建住宅")}>
            <MainModal />
          </div>
          <div onClick={() => handleButtonClick("集合住宅")}>
            <ApartmentModal />
          </div>
          <div onClick={() => handleButtonClick("その他")}>
            <ThirdModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
