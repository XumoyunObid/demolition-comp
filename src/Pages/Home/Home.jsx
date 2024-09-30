import React from "react";
import banner from "../../../public/banner.jpg";
import PostBanner from "./Components/PostBanner";
import AboutUs from "./Components/AboutUs";
import Banner from "./Components/Banner";
import ContactUs from "./Components/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative w-full h-lvh md:h-[700px]">
        {/* <img src={banner} alt="Banner" className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl md:text-[50px] text-center text-black mb-8">フォームにご記入ください</h1>
            <PostBanner />
          </div>
        </div>
      </div>
      <AboutUs />
      <ContactUs/>
    </div>
  );
};

export default Home;
