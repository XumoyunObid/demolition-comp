import { createSlice } from '@reduxjs/toolkit';

// Initial state of your form data
const initialState = {
  year: '不明', // from first modal
  startDate: '未定', // from second modal
  workDetails: 'その他', // from third modal
  description: '', // from fourth modal
  location: '', // from fifth modal
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }, // from sixth modal (customer modal)
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
    setWorkDescription(state, action) {
      state.description = action.payload;
    },
    setLocationData(state, action) {
      state.location = action.payload;
    },
    setContact(state, action) {
      state.contact = {
        ...state.contact,
        ...action.payload, // expecting {firstName, lastName, email, phone}
      };
    },
  },
});

// Export the actions
export const {
  setYear,
  setStartDate,
  setWorkDescription,
  setLocationData,
  setContact,
} = formSlice.actions;

// Export the reducer
export default formSlice.reducer;
