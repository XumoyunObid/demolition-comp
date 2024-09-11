import React, { useState } from "react";
import { Radio, Space } from "antd";

const WorkModal = () => {
  const [value, setValue] = useState(5);

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
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        <Radio
          value={1}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          屋内小工事/設置物・設備一部撤去（浴室/トイレ等）
        </Radio>
        <Radio
          value={2}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          内装一式スケルトン化(原状回復)
        </Radio>
        <Radio
          value={3}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          外構/看板等除去・屋外工事
        </Radio>
        <Radio
          value={4}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          家屋・建造物一式更地化
        </Radio>
        <Radio
          value={5}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          その他
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default WorkModal;
