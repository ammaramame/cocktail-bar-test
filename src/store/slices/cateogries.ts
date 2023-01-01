import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "apis/categories/get-all";
import { HttpLoadingStatus } from "enums/http-loading-status";
import { ICategory } from "models/category";

// create the thunk
export const fetchCategories = createAsyncThunk("categories/get-all", async () => {
  const response = await getAllCategories();
  return response.data;
});

interface CategoriesState {
  entities: ICategory[];
  loading: HttpLoadingStatus;
}

const initialState: CategoriesState = {
  entities: [],
  loading: HttpLoadingStatus.idle,
};

// handle actions
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = HttpLoadingStatus.pending;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.entities = action.payload.drinks;
      state.loading = HttpLoadingStatus.idle;
    });
  },
});

export default categoriesSlice.reducer;
