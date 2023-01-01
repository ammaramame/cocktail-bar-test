import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllAlcoholicTypes } from "apis/alcoholic-types/get-all";
import { HttpLoadingStatus } from "enums/http-loading-status";
import { IAlcoholicType } from "models/alcoholic-type";

// create the thunk
export const fetchAlcoholicTypes = createAsyncThunk("alcoholic-types/get-all", async () => {
  const response = await getAllAlcoholicTypes();
  return response.data;
});

interface AlcoholicTypesState {
  entities: IAlcoholicType[];
  loading: HttpLoadingStatus;
}

const initialState: AlcoholicTypesState = {
  entities: [],
  loading: HttpLoadingStatus.idle,
};

// handle actions
const alcoholicTypesSlice = createSlice({
  name: "alcoholic-types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlcoholicTypes.pending, (state, action) => {
      state.loading = HttpLoadingStatus.pending;
    });
    builder.addCase(fetchAlcoholicTypes.fulfilled, (state, action) => {
      state.entities = action.payload.drinks;
      state.loading = HttpLoadingStatus.idle;
    });
  },
});

export default alcoholicTypesSlice.reducer;
