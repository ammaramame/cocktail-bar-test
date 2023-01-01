import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./slices/cocktails";
import categoriesReducer from "./slices/cateogries";
import glassesReducer from "./slices/glasses";
import alcoholicTypesReducer from "./slices/alcoholic-types";
import ingredientsReducer from "./slices/ingredients";
import submittedDataReducer from "./slices/submitted-data";
import sliderReducer from "./slices/slider";
import appReducer from "./slices/app";

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
    categories: categoriesReducer,
    glasses: glassesReducer,
    alcoholicTypes: alcoholicTypesReducer,
    ingredients: ingredientsReducer,
    submittedData: submittedDataReducer,
    slider: sliderReducer,
    app: appReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
