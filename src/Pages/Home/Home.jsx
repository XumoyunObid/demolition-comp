import React from "react";
import banner from "../../../public/banner.jpg";
import MainModal from "./Components/Modal";
import ApartmentModal from "./Components/ApartmentModal";
import ThirdModal from "./Components/ThirdModal";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-lvh md:h-[700px]">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            東京都の <br />
            解体工事 <br />
          </h1>
          <div className="p-8 flex flex-col items-center gap-3 rounded-lg bg-white">
            <h2 className="text-lg text-black">
              どちらで解体工事をご希望ですか？
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <MainModal />
              <ApartmentModal />
              <ThirdModal/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
