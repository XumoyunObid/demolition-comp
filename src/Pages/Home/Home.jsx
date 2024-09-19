import React from "react";
import banner from "../../../public/banner.jpg";
import PostBanner from "./Components/PostBanner";
import AboutUs from "./Components/AboutUs";

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
          <PostBanner/>
        </div>
      </div>
      <AboutUs/>
    </div>
  );
};

export default Home;
