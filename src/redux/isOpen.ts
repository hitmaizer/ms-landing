import { createSlice } from '@reduxjs/toolkit';

export const isOpen = createSlice({
  name: 'isOpen',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = isOpen.actions;

export default isOpen.reducer;
