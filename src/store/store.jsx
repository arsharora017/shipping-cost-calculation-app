import { configureStore } from "@reduxjs/toolkit";
import boxReducer from "./boxSlice";

const store = configureStore({
  reducer: {
    boxes: boxReducer,
  },
});

export default store;
