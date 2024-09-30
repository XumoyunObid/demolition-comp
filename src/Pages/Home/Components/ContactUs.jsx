import React from "react";

const ContactUs = () => {
  return (
    <div className="md:px-[80px] flex flex-col items-center py-10" id="contact-us">
      <h1 className="text-2xl md:text-[50px] text-center text-black mb-8">お問い合わせ</h1>
      <div className="flex flex-col md:flex-row gap-5 md:gap-[50px]">
      <div className="flex flex-col gap-2 my-8">
        <p className="text-gray-500 text-lg">住所：埼玉県草加市青柳町436-3</p>
        <p className="text-gray-500 text-lg">開館時間：10:00~19:00</p>
        <p className="text-gray-500 text-lg">
          言語対応レベル：日本語、英語
        </p>
        <p className="text-gray-500 text-lg">最寄り駅： 草加駅</p>
        <p className="text-gray-500 text-lg">
        アクセス：草加駅から徒歩15分
        </p>
        <p className="text-gray-500 text-lg">電話番号：048-915-0687</p>
      </div>
      <iframe
        className="w-[350px] h-[450px] md:w-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.6840712344157!2d139.8003544152585!3d35.83259648015639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6024104eeb%3A0xaec33c6db9f74548!2z44CSMzQ0LTAwNjEg5Z-8546J55yM6I2J6Zmi5biC5Lq65rSl55S677yS5LiB55uu77yR77yW!5e0!3m2!1sja!2sus!4v1696107627240!5m2!1sja!2sus"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </div>
  );
};

export default ContactUs;
