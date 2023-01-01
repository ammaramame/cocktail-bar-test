import { createTheme, PaletteOptions } from "@mui/material";

export const theme = (mode: PaletteOptions["mode"]) =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          variant: "filled",
        },
      },
      MuiSelect: {
        defaultProps: {
          fullWidth: true,
          variant: "filled",
        },
      },
      MuiGrid2: {
        defaultProps: {
          spacing: 2,
        },
      },
    },
  });
