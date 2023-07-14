import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { menuToggle: false },
  reducers: {
    handleMenuToggle: state => {
      state.menuToggle = !state.menuToggle;
    },
  },
});

export const { handleMenuToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
