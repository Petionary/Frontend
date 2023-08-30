import { createSlice } from '@reduxjs/toolkit';

const loginToggleSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    handleLoginToggle: state => (state = !state),
  },
});

export const { handleLoginToggle } = loginToggleSlice.actions;
export default loginToggleSlice.reducer;
