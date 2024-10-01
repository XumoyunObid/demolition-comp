import React from "react";
import { useSelector } from "react-redux";

const ConfirmModal = () => {
  const formData = useSelector((state) => state.form);

  console.log(formData);
  return (
    <div>
      <h1 className="text-2xl text-center">レビュー</h1>
      <p className="text-lg">建物の種類: {formData.buildingType}</p>
      <p className="text-lg">年: {formData.year}</p>
      <p className="text-lg">開始日: {formData.startDate}</p>
      <p className="text-lg">作業内容: {formData.workDetails}</p>
      <p className="text-lg">説明: {formData.description}</p>
      <p className="text-lg">場所: {formData.location.location}</p>
      <p className="text-lg">
        顧客名: {formData.contact.firstName} {formData.contact.lastName}
      </p>
      <p className="text-lg">メール: {formData.contact.email}</p>
      <p className="text-lg">電話番号: {formData.contact.phone}</p>
      <p className="text-lg">予約日: {formData.selectedDate}</p>
    </div>
  );
};

export default ConfirmModal;
