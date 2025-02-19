import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxes: [],
};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    addBox: (state, action) => {
      state.boxes.push(action.payload);
    },
  },
});

export const { addBox } = boxSlice.actions;
export default boxSlice.reducer;
