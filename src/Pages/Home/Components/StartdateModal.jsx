import React, { useState } from "react";
import { Radio, Space } from "antd";

const StartDateModal = () => {
  const [value, setValue] = useState(7);

  const options = {
    1: "可能な限り早く",
    2: "1週間以内",
    3: "1ヶ月以内",
    4: "2ヶ月以内",
    5: "半年以内",
    6: "1年以内",
    7: "未定",
  };

  const onChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    console.log(`Selected option: ${options[selectedValue]}`);
  };
  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        <Radio
          value={1}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          可能な限り早く
        </Radio>
        <Radio
          value={2}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          1週間以内
        </Radio>
        <Radio
          value={3}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          1ヶ月以内
        </Radio>
        <Radio
          value={4}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          2ヶ月以内
        </Radio>
        <Radio
          value={5}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          半年以内
        </Radio>
        <Radio
          value={6}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          1年以内
        </Radio>
        <Radio
          value={7}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          未定
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default StartDateModal;
