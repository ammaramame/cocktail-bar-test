import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubmittedDataState {
  activeSlideIndex: number;
}

const initialState: SubmittedDataState = {
  activeSlideIndex: 0,
};

// handle actions
const submittedDataSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setActiveSlide: (state, action: PayloadAction<number>) => {
      state.activeSlideIndex = action.payload;
    },
  },
});

export const { setActiveSlide } = submittedDataSlice.actions;

export default submittedDataSlice.reducer;
