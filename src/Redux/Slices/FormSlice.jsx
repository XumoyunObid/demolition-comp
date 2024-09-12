import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: '不明',
  startDate: '未定',
  workDetails: 'その他',
  description: 'No description...',
  location: '',
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  buildingType: '',
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
} = formSlice.actions;

export default formSlice.reducer;
