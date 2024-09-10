import React, { useState } from "react";
import { Radio, Space } from "antd";

const WorkModal = () => {
  const [value, setValue] = useState(5);

  const options = {
    1: "Small indoor construction/removal of some installations and equipment (bathroom/toilet, etc.)",
    2: "Complete interior skeletonization (restored to original state)",
    3: "Exterior/signboard removal/outdoor construction",
    4: "Complete house and building vacant lot",
    5: "Others"
  };

  const onChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    // console.log(Selected option: ${options[selectedValue]});
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="w-full">
      <Space direction="vertical" className="w-full">
        <Radio
          value={1}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Small indoor construction/removal of some installations and equipment
          (bathroom/toilet, etc.)
        </Radio>
        <Radio
          value={2}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Complete interior skeletonization (restored to original state)
        </Radio>
        <Radio
          value={3}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Exterior/signboard removal/outdoor construction
        </Radio>
        <Radio
          value={4}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Complete house and building vacant lot
        </Radio>
        <Radio
          value={5}
          className="p-3 font-semibold text-base rounded-md border flex items-start w-full"
        >
          Others
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default WorkModal;