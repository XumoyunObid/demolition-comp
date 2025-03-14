import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "不明",
  startDate: "未定",
  workDetails: "その他",
  description: "記述なし...",
  location: {
    address1: "",
    address2: "",
    street: "",
    city: "",
    prefecture: "",
    zipCode: "",
  },
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  buildingType: "",
  selectedDate: null,
  bookedAppointments: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setYear(state, action) {
      state.year = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setWorkDetails(state, action) {
      state.workDetails = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setLocationData(state, action) {
      state.location = { ...state.location, ...action.payload };
    },
    setContact(state, action) {
      state.contact = { ...state.contact, ...action.payload };
    },
    setSelectedButton(state, action) {
      state.buildingType = action.payload;
    },
    setAppointmentDate(state, action) {
      state.selectedDate = action.payload;
    },
    addBookedAppointment(state, action) {
      state.bookedAppointments.push(action.payload);
    },
    removeBookedAppointment(state, action) {
      state.bookedAppointments = state.bookedAppointments.filter(
        (appointment) => appointment !== action.payload
      );
    },
  },
});

export const {
  setYear,
  setStartDate,
  setWorkDetails,
  setDescription,
  setLocationData,
  setContact,
  setSelectedButton,
  setAppointmentDate,
  addBookedAppointment,
  removeBookedAppointment,
} = formSlice.actions;

export const selectAppointmentDate = (state) => state.form.selectedDate;
export const selectBookedAppointments = (state) => state.form.bookedAppointments;

export default formSlice.reducer;
