import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.js'; // Create this reducer file as per your application needs

const store = configureStore({
  reducer: {
    user: userReducer, // Add more reducers as needed
  },
});

export default store;
