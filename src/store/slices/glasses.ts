import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllGlasses } from "apis/glasses/get-all";
import { HttpLoadingStatus } from "enums/http-loading-status";
import { IGlass } from "models/glass";

// create the thunk
export const fetchGlasses = createAsyncThunk("glasses/get-all", async () => {
  const response = await getAllGlasses();
  return response.data;
});

interface GlassesState {
  entities: IGlass[];
  loading: HttpLoadingStatus;
}

const initialState: GlassesState = {
  entities: [],
  loading: HttpLoadingStatus.idle,
};

// handle actions
const glassesSlice = createSlice({
  name: "glasses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGlasses.pending, (state, action) => {
      state.loading = HttpLoadingStatus.pending;
    });
    builder.addCase(fetchGlasses.fulfilled, (state, action) => {
      state.entities = action.payload.drinks;
      state.loading = HttpLoadingStatus.idle;
    });
  },
});

export default glassesSlice.reducer;
