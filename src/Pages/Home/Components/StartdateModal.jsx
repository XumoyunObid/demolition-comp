import React, { useState } from "react";
import { Radio, Space } from "antd";

const StartDateModal = () => {
  const [value, setValue] = useState(7);

  const options = {
    1: "As soon as possible",
    2: "Within 1 week",
    3: "Within 1 month",
    4: "Within 2 months",
    5: "Within half a year",
    6: "Within 1 year",
    7: "To be decided",
  };

  const onChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    // console.log(Selected option: ${options[selectedValue]});
  } 
  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        <Radio
          value={1}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          As soon as possible
        </Radio>
        <Radio
          value={2}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Within 1 week
        </Radio>
        <Radio
          value={3}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Within 1 month
        </Radio>
        <Radio
          value={4}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Within 2 months
        </Radio>
        <Radio
          value={5}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Within half a year
        </Radio>
        <Radio
          value={6}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Within 1 year
        </Radio>
        <Radio
          value={7}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          To be decided
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default StartDateModal;