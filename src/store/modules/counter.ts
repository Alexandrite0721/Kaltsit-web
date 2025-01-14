import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: "counter",
   initialState: {
      count: 100,
      message: "I'm counter",
      height: 180
   },
   reducers: {
      increment: (state) => {
         state.count++;
      },
      decrement: (state) => {
         state.count--;
      }
   }
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
