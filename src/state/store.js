
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import dataReducer from "./data/dataSlice"; // Import reducer

const store = configureStore({
  reducer: {
    data: dataReducer, // Add the reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
