import React, { useState, useEffect } from "react";
import { Modal, Button, DatePicker, message, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setAppointmentDate,
  addBookedAppointment,
  selectBookedAppointments,
} from "../../../Redux/Slices/FormSlice";

const DateTimePickerModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const dispatch = useDispatch();
  const bookedAppointments = useSelector(selectBookedAppointments);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const onDateChange = (date, dateString) => {
    if (date) {
      setSelectedDate(dateString);
    } else {
      setSelectedDate(null);
      setSelectedTimeSlot(null); // Reset time slot if date is cleared
    }
  };

  const onTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const onConfirmAppointment = () => {
    if (selectedDate && selectedTimeSlot) {
      const appointment = `${selectedDate} from ${selectedTimeSlot}`;
      // Check if the appointment is already booked
      const isBooked = bookedAppointments.some((apt) => apt === appointment);
      if (isBooked) {
        message.error("This appointment slot is already booked. Please choose another.");
      } else {
        dispatch(setAppointmentDate(appointment));
        dispatch(addBookedAppointment(appointment)); // Add appointment to booked list

        // Save to local storage
        localStorage.setItem("bookedAppointments", JSON.stringify([...bookedAppointments, appointment]));
        
        message.success(`Appointment confirmed for ${appointment}`);
        setIsModalVisible(false);
      }
    } else {
      message.error("Please select both a date and time slot.");
    }
  };

  const timeSlots = [
    "09:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
  ];

  // Load booked appointments from local storage when component mounts
  useEffect(() => {
    const savedAppointments = localStorage.getItem("bookedAppointments");
    if (savedAppointments) {
      const parsedAppointments = JSON.parse(savedAppointments);
      parsedAppointments.forEach((appointment) => {
        dispatch(addBookedAppointment(appointment)); // Add to Redux state
      });
    }
  }, [dispatch]);

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
        
        {/* Render time slots only if a date is selected */}
        {selectedDate && (
          <Radio.Group
            onChange={onTimeSlotChange}
            value={selectedTimeSlot}
            style={{ width: "100%", marginBottom: 20 }}
          >
            {timeSlots.map((slot) => (
              <Radio.Button
                key={slot}
                value={slot}
                style={{
                  display: "block",
                  marginBottom: 10,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {slot}
              </Radio.Button>
            ))}
          </Radio.Group>
        )}
        
        <Button
          type="primary"
          onClick={onConfirmAppointment}
          disabled={!selectedDate || !selectedTimeSlot} // Disable button if date or time slot is not selected
        >
          Confirm Appointment
        </Button>
      </Modal>

      {selectedDate && selectedTimeSlot && (
        <div style={{ marginTop: 20 }}>
          <strong>Selected Date and Time Slot:</strong> {`${selectedDate} from ${selectedTimeSlot}`}
        </div>
      )}
    </div>
  );
};

export default DateTimePickerModal;
