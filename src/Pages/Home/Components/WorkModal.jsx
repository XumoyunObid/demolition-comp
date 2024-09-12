import React, { useState } from "react";
import { Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { setWorkDetails } from "../../../Redux/Slices/FormSlice"; // Import the action to store the selected option

const WorkModal = () => {
  const [value, setValue] = useState(5);
  const dispatch = useDispatch(); // Initialize Redux dispatch

  const options = {
    1: "屋内小工事/設置物・設備一部撤去（浴室/トイレ等）",
    2: "内装一式スケルトン化(原状回復)",
    3: "外構/看板等除去・屋外工事",
    4: "家屋・建造物一式更地化",
    5: "その他",
  };

  const onChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    console.log(`Selected option: ${options[selectedValue]}`);

    // Dispatch the selected work description to Redux
    dispatch(setWorkDetails(options[selectedValue]));
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

export default WorkModal;
