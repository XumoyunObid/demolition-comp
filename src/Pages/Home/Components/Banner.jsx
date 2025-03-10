import React from 'react';
import banner from '/bannerdemo.png';

const Banner = () => {
  return (
    <div className="relative w-full h-lvh md:h-[700px]">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-10 md:px-20">
        <h1 className="text-2xl font-bold md:text-4xl">
        ようこそ！私たち「しっかり解体」は東京・埼玉を中心とした関東エリアで家屋解体工事・内装解体工事など幅広い施工内容を行っています。
        </h1>
      </div>
    </div>
  );
};

export default Banner;
