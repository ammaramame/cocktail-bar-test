import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubmittedDataState {
  values: {
    [key: string]: any;
  };
}

const initialState: SubmittedDataState = {
  values: {},
};

// handle actions
const submittedDataSlice = createSlice({
  name: "submitted-data",
  initialState,
  reducers: {
    setSubmittedData: (state, action: PayloadAction<{ [key: string]: any }>) => {
      state.values = { ...state.values, ...action.payload };
    },
  },
});

export const { setSubmittedData } = submittedDataSlice.actions;

export default submittedDataSlice.reducer;
