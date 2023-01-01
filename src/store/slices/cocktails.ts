import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCocktails } from "apis/cocktails/get-all";
import { HttpLoadingStatus } from "enums/http-loading-status";
import { ICocktail } from "models/coctail";

// create the thunk
export const fetchCocktails = createAsyncThunk("cocktails/get-all", async () => {
  const response = await getAllCocktails();
  return response.data;
});

interface CocktailsState {
  entities: ICocktail[];
  loading: HttpLoadingStatus;
}

const initialState: CocktailsState = {
  entities: [],
  loading: HttpLoadingStatus.idle,
};

// handle actions
const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state, action) => {
      state.loading = HttpLoadingStatus.pending;
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.entities = action.payload.drinks;
      state.loading = HttpLoadingStatus.idle;
    });
  },
});

export default cocktailsSlice.reducer;
