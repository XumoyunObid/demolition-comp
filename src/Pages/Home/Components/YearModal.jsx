import React, { useState } from "react";
import { Radio, Space } from "antd";

const YearModal = () => {
  const [value, setValue] = useState(6);

  const options = {
    1: "1 to 5 years",
    2: "6 to 10 years",
    3: "11 to 15 years",
    4: "16 to 20 years",
    5: "More than 20 years",
    6: "Not clear",
  };

  const onChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    console.log(`Selected option: ${options[selectedValue]}`); // Log the selected text
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        <Radio value={1} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
          1 to 5 years
        </Radio>
        <Radio value={2} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
          6 to 10 years
        </Radio>
        <Radio value={3} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
          11 to 15 years
        </Radio>
        <Radio value={4} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
          16 to 20 years
        </Radio>
        <Radio value={5} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
          More than 20 years
        </Radio>
        <Radio value={6} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
          Not clear
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default YearModal;
