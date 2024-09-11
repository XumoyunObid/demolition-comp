import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Slices/FormSlice';

const store = configureStore({
  reducer: {
    form: formReducer, // Add form slice to the store
  },
});

export default store;
