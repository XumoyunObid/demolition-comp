import React, { useState } from "react";
import { Modal, Button, DatePicker, TimePicker, message } from "antd";
import { useDispatch } from "react-redux";
import { setAppointmentDate } from "../../../Redux/Slices/FormSlice";


const DateTimePickerModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onDateChange = (date, dateString) => {
    if (date) {
      setSelectedDate(dateString);
      console.log('Selected Date:', dateString); 
    } else {
      setSelectedDate(null);
    }
  };

  const onTimeChange = (time, timeString) => {
    if (time) {
      setSelectedTime(timeString);
      console.log("Selected Time:", timeString); 
    } else {
      setSelectedTime(null);
    }
  };

  const onConfirmAppointment = () => {
    if (selectedDate && selectedTime) {
      const appointment = `${selectedDate} ${selectedTime}`;
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
        <TimePicker
          onChange={onTimeChange}
          format="HH:mm"
          style={{ width: "100%", marginBottom: 20 }}
          use12Hours={false} // Set to true if you prefer 12-hour format
        />
        <Button type="primary" onClick={onConfirmAppointment}>
          Confirm Appointment
        </Button>
      </Modal>

      {selectedDate && selectedTime && (
        <div style={{ marginTop: 20 }}>
          <strong>Selected Date and Time:</strong> {`${selectedDate} ${selectedTime}`}
        </div>
      )}
    </div>
  );
};

export default DateTimePickerModal;
