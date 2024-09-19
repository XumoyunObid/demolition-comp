import React from "react";

import banner2 from "../../../../public/excavator.webp";
import banner3 from "../../../../public/woods.jpg";

const AboutUs = () => {
  return (
    <div className="w-full h-lvh py-12 bg-gray-100">
      <h1 className="text-lg md:text-[50px] text-center text-black mb-8">
        私たちについて
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-6 md:pt-[80px]">
        <div
          className="w-full md:w-1/2 h-64 md:h-80 bg-cover bg-center p-8 text-white flex items-end rounded-lg shadow-lg"
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        >
          <div className="bg-black/60 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-center">私たちの使命</h2>
            <p>
              私たちは、安全で効率的な解体サービスを専門としており、各プロジェクトを正確かつ慎重に実施することを約束しています。
              私たちの品質と安全性への取り組みは、業界で他に類を見ません。
            </p>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 h-64 md:h-80 bg-cover bg-center p-8 text-white flex items-end rounded-lg shadow-lg"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
          id="about-us"
        >
          <div className="bg-black/60 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-center">私たちの価値観</h2>
            <p>
              私たちは誠実さ、透明性、そして環境への配慮を大切にしています。すべての解体作業において、環境保護と地域社会への貢献を
              最優先に考え、お客様の信頼に応えるサービスを提供します。
              持続可能な未来を目指し、常に高い倫理基準を守り続けています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
