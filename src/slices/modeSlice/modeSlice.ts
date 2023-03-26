import { createSlice } from '@reduxjs/toolkit';
import { IModeSliceType } from '@/slices/modeSlice/modeSliceType';

const initialState: IModeSliceType = {
  isRunTime: false,
};
export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.isRunTime = !state.isRunTime;
    },
  },
});
