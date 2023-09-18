import { createSlice } from '@reduxjs/toolkit';
import { debounce } from 'lodash';

const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

const viewportSlice = createSlice({
  name: 'viewport',
  initialState: { width: initialWidth, height: initialHeight },
  reducers: {
    handleViewport: state => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    },
  },
});

export const { handleViewport } = viewportSlice.actions;
export default viewportSlice.reducer;
