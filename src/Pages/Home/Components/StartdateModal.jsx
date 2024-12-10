import React, { useState } from "react";
import { Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { setStartDate } from "../../../Redux/Slices/FormSlice"; 

const StartDateModal = () => {
  const [value, setValue] = useState(7);
  const dispatch = useDispatch(); 

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
    dispatch(setStartDate(options[selectedValue]));
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        {Object.entries(options).map(([key, label]) => (
          <Radio
            key={key}
            value={parseInt(key)}
            className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
          >
            {label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default StartDateModal;
