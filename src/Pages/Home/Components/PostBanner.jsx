import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedButton } from "../../../Redux/Slices/FormSlice";
import MainModal from "./Modal";
import ApartmentModal from "./ApartmentModal";
import ThirdModal from "./ThirdModal";
import banner from "/banner.jpg";

const PostBanner = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName) => {
    dispatch(setSelectedButton(buttonName));
  };

  return (
    <div className="relative">
      <div
        className="p-8 flex flex-col items-center gap-10 rounded-lg bg-cover bg-center md:w-[1000px] md:h-[300px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute top-0 left-0 right-0 h-full bg-black/20 backdrop-blur-sm rounded-lg"></div>
        <h2 className="relative text-lg md:text-3xl text-white z-10">
          どちらで解体工事をご希望ですか？
        </h2>
        <div className="relative z-10 flex flex-col md:flex-row gap-4">
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
