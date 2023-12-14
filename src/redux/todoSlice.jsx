import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.value.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
