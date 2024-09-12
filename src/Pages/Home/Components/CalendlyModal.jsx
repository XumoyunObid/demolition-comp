import React, { useState } from "react";
import { Modal, Button } from "antd";
import { InlineWidget } from "react-calendly";

const CalendlyModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Schedule Appointment
      </Button>
      <Modal
        title="Schedule an Appointment"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // Remove footer
        width={700} // Customize modal width
      >
        <InlineWidget url="https://calendly.com/obidjonov06122005" />
      </Modal>
    </div>
  );
};

export default CalendlyModal;
