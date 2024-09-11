import React, { useState } from "react";
import { Radio, Space } from "antd";

const YearModal = () => {
  const [value, setValue] = useState(6);

  const options = {
    1: "1～5年",
    2: "6～10年",
    3: "11～15年",
    4: "16～20年",
    5: "20年以上",
    6: "不明",
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
        1～5年
        </Radio>
        <Radio value={2} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
        6～10年
        </Radio>
        <Radio value={3} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
        11～15年
        </Radio>
        <Radio value={4} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
        16～20年
        </Radio>
        <Radio value={5} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
        20年以上
        </Radio>
        <Radio value={6} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
        不明
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default YearModal;
