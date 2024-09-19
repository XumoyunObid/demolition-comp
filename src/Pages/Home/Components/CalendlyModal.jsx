import React, { useState } from "react";
import { Modal, Button, DatePicker, TimePicker, message } from "antd";
import { useDispatch } from "react-redux";
import { setAppointmentDate } from "../../../Redux/Slices/FormSlice";

const DateTimePickerModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onDateChange = (date, dateString) => {
    if (date) {
      setSelectedDate(dateString);
      console.log("Selected Date:", dateString);
    } else {
      setSelectedDate(null);
    }
  };

  const onTimeChange = (time, timeString) => {
    if (time && time.length === 2) {
      const formattedTime = `from ${timeString[0]} to ${timeString[1]}`;
      setSelectedTimeRange(formattedTime);
      console.log("Selected Time Range:", formattedTime);
    } else {
      setSelectedTimeRange(null);
    }
  };

  const onConfirmAppointment = () => {
    if (selectedDate && selectedTimeRange) {
      const appointment = `${selectedDate} ${selectedTimeRange}`;
      console.log("Appointment:", appointment);
      dispatch(setAppointmentDate(appointment));
      message.success(`Appointment confirmed for ${appointment}`);
      setIsModalVisible(false);
    } else {
      message.error("Please select both a date and time.");
    }
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
        footer={null}
        width={600}
      >
        <DatePicker
          onChange={onDateChange}
          format="YYYY-MM-DD"
          style={{ width: "100%", marginBottom: 20 }}
        />
        <TimePicker.RangePicker
          onChange={onTimeChange}
          format="HH:mm"
          style={{ width: "100%", marginBottom: 20 }}
          use12Hours={false} 
        />
        <Button type="primary" onClick={onConfirmAppointment}>
          Confirm Appointment
        </Button>
      </Modal>

      {selectedDate && selectedTimeRange && (
        <div style={{ marginTop: 20 }}>
          <strong>Selected Date and Time:</strong> {`${selectedDate} ${selectedTimeRange}`}
        </div>
      )}
    </div>
  );
};

export default DateTimePickerModal;
