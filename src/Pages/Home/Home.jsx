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
      <div className="relative w-full min-h-screen md:h-[700px] flex items-center justify-center px-4 md:px-10">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white"></div>

        <div className="relative flex flex-col items-center max-w-4xl text-center">
          <h1 className="text-base md:text-4xl text-black leading-relaxed whitespace-normal mb-10">
            「解体工事について分からない」「どこへ頼んで良いか分からない」と
            お困りの方はぜひお気軽に弊社にご相談ください。
            幅広い対応をしているからこそ、全体を通したご提案が可能です。
            <br />
            簡単な問い合わせフォームの質問にお答えください。
            <br />
            お問い合わせいただきますと、弊社担当者より折り返しご連絡を差し上げます。
          </h1>

          <meta
            name="Shikkari kaitai"
            content="ようこそ！私たちは安心で信頼できる解体サービスを提供しています。ぜひ下にスクロールして、フォームにご記入ください。"
          />
          <PostBanner />
        </div>
      </div>

      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;


