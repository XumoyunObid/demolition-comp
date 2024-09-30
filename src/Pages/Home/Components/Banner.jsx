import React from 'react';
import banner from '/bannerdemo.png';

const Banner = () => {
  return (
    <div className="relative w-full h-lvh md:h-[700px]">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-10 md:px-20">
        <h1 className="text-2xl font-bold md:text-4xl">
          ようこそ！私たちは安心で信頼できる解体サービスを提供しています。ぜひ下にスクロールして、フォームにご記入ください。
        </h1>
      </div>
    </div>
  );
};

export default Banner;
