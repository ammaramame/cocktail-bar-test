import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/themes/default";
import "../src/components/app/app.css";
import "setups/language";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const configured = (Story) => (
  <ThemeProvider theme={theme("light")}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [configured];
