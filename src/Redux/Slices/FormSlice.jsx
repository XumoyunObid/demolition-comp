import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: '不明',
  startDate: '未定',
  workDetails: 'その他',
  description: '記述なし...',
  location: '',
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  buildingType: '',
  selectedDate: null,
  bookedAppointments: [], 
};

const formSlice = createSlice({
  name: 'form',
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
      state.location = action.payload;
    },
    setContact(state, action) {
      state.contact = {
        ...state.contact,
        ...action.payload,
      };
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
} = formSlice.actions;

export const selectAppointmentDate = (state) => state.form.selectedDate;
export const selectBookedAppointments = (state) => state.form.bookedAppointments; 

export default formSlice.reducer;
