import { PaletteOptions } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  mode: PaletteOptions["mode"];
  language: "en" | "tr";
}

const initialState: AppState = {
  mode: "light",
  language: "en",
};

// handle actions
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<AppState["mode"]>) => {
      state.mode = action.payload;
    },

    setLanguage: (state, action: PayloadAction<AppState["language"]>) => {
      state.language = action.payload;
    },
  },
});

export const { setMode, setLanguage } = appSlice.actions;

export default appSlice.reducer;
