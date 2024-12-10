import React, { useState } from "react";
import { Modal, Button, DatePicker, message, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setAppointmentDate,
  addBookedAppointment,
  selectBookedAppointments,
} from "../../../Redux/Slices/FormSlice";
import usePostdate from "../../Services/Mutation/usePostdate";
import useGetdates from "../../Services/Queries/useGetdates";

const DateTimePickerModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const dispatch = useDispatch();
  const bookedAppointments = useSelector(selectBookedAppointments);
  const { data: bookedDates } = useGetdates(); // Fetched booked appointments from the backend
  const { mutate: postMutate } = usePostdate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const onDateChange = (date, dateString) => {
    setSelectedDate(dateString);
    setSelectedTimeSlot(null); // Reset the selected time slot when a new date is selected
  };

  const onTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const onConfirmAppointment = () => {
    if (selectedDate && selectedTimeSlot) {
      const formattedDate = String(selectedDate);
      const formattedTimeSlot = String(selectedTimeSlot);
      const newAppointment = `${formattedDate} から ${formattedTimeSlot}`;

      // Check if the new time slot is already booked
      const isBooked = bookedAppointments.some((apt) => apt === newAppointment);
      if (isBooked) {
        message.error(
          "この予約枠はすでに予約されています。別の時間を選択してください。"
        );
      } else {
        // Dispatch the new appointment and save it in localStorage
        dispatch(setAppointmentDate(newAppointment));
        dispatch(addBookedAppointment(newAppointment));

        localStorage.setItem(
          "bookedAppointments",
          JSON.stringify([newAppointment]) // Save only the new appointment
        );

        // Send the new appointment to the backend
        postMutate(
          { date: formattedDate, time: formattedTimeSlot },
          {
            onSuccess: () => {
              message.success(
                `予約が以下の日程で確認されました: ${newAppointment}`
              );
              setIsModalVisible(false);
            },
            onError: (error) => {
              message.error(`エラーが発生しました: ${error.message}`);
            },
          }
        );
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

  const isTimeSlotBooked = (timeSlot) => {
    return bookedDates?.some(
      (appointment) => appointment.date === selectedDate && appointment.time === timeSlot
    );
  };

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
                disabled={isTimeSlotBooked(slot)} 
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
          <strong>選択した日時：</strong>{" "}
          {`${selectedDate} から ${selectedTimeSlot}`}
        </div>
      )}
    </div>
  );
};

export default DateTimePickerModal;
