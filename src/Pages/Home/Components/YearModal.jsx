import React, { useState } from "react";
import { Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { setYear } from '../../../Redux/Slices/FormSlice';

const YearModal = () => {
  const [value, setValue] = useState(6);
  const dispatch = useDispatch();

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
    dispatch(setYear(options[selectedValue]));
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        {Object.entries(options).map(([key, label]) => (
          <Radio key={key} value={parseInt(key)} className="p-3 font-semibold text-base rounded-md border flex items-start w-full">
            {label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default YearModal;
