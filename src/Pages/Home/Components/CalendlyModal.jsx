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
      setSelectedTimeSlot(null); 
    }
  };

  const onTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const onConfirmAppointment = () => {
    if (selectedDate && selectedTimeSlot) {
      const appointment = `${selectedDate} から ${selectedTimeSlot}`;
      const isBooked = bookedAppointments.some((apt) => apt === appointment);
      if (isBooked) {
        message.error("この予約枠はすでに予約されています。別の時間を選択してください。");
      } else {
        dispatch(setAppointmentDate(appointment));
        dispatch(addBookedAppointment(appointment)); 

        localStorage.setItem("bookedAppointments", JSON.stringify([...bookedAppointments, appointment]));
        
        message.success(`予約が以下の日程で確認されました: ${appointment}`);
        setIsModalVisible(false);
      }
    } else {
      message.error("日付と時間枠の両方を選択してください。");
    }
  };

  const timeSlots = [
    "09:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
  ];

  useEffect(() => {
    const savedAppointments = localStorage.getItem("bookedAppointments");
    if (savedAppointments) {
      const parsedAppointments = JSON.parse(savedAppointments);
      parsedAppointments.forEach((appointment) => {
        dispatch(addBookedAppointment(appointment)); 
      });
    }
  }, [dispatch]);

  return (
    <div>
      <Button type="primary" onClick={showModal}>
      予約
      </Button>
      <Modal
        title="予約"
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
          disabled={!selectedDate || !selectedTimeSlot} 
        >
          任命の確認
        </Button>
      </Modal>

      {selectedDate && selectedTimeSlot && (
        <div style={{ marginTop: 20 }}>
          <strong>選択した日時：</strong> {`${selectedDate} から ${selectedTimeSlot}`}
        </div>
      )}
    </div>
  );
};

export default DateTimePickerModal;
