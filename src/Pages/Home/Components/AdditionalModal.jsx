import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch } from "react-redux";
import { setDescription } from "../../../Redux/Slices/FormSlice";

const AdditionalModal = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch

  const handleChange = (e) => {
    const value = e.target.value;

    dispatch(setDescription(value));
  };
  return (
    <div>
      <TextArea
        className="w-[350px] md:w-[450px]"
        onChange={handleChange}
        rows={5}
        placeholder="例）空き家を壊して新築を建てたいと考えており、解体をお願いしたいです。まずは現地調査をお願い出来ますでしょうか？"
      />
    </div>
  );
};

export default AdditionalModal;
