import React from "react";
import { useSelector } from "react-redux";

const ConfirmModal = () => {
  const formData = useSelector((state) => state.form);

  console.log(formData);
  return (
    <div>
      <h1>Review Your Data</h1>
      <p>Building type: {formData.buildingType}</p>
      <p>Year: {formData.year}</p>
      <p>Start Date: {formData.startDate}</p>
      <p>Work Details: {formData.workDetails}</p>
      <p>Description: {formData.description}</p>
      <p>Location: {formData.location.location}</p>
      <p>
        Customer Name: {formData.contact.firstName} {formData.contact.lastName}
      </p>
      <p>Email: {formData.contact.email}</p>
      <p>Phone: {formData.contact.phone}</p>
      <p>Appointment date: {formData.selectedDate}</p>
    </div>
  );
};

export default ConfirmModal;
