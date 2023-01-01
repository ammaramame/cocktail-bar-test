import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllIngredients } from "apis/ingredients/get-all";
import { HttpLoadingStatus } from "enums/http-loading-status";
import { IIngredient } from "models/ingredient";

// create the thunk
export const fetchIngredients = createAsyncThunk("ingredients/get-all", async () => {
  const response = await getAllIngredients();
  return response.data;
});

interface IngredientsState {
  entities: IIngredient[];
  loading: HttpLoadingStatus;
}

const initialState: IngredientsState = {
  entities: [],
  loading: HttpLoadingStatus.idle,
};

// handle actions
const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.pending, (state, action) => {
      state.loading = HttpLoadingStatus.pending;
    });
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.entities = action.payload.drinks;
      state.loading = HttpLoadingStatus.idle;
    });
  },
});

export default ingredientsSlice.reducer;
