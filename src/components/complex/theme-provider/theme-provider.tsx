import { FunctionComponent, ReactNode } from "react";
import { theme } from "themes/default";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useAppSelector } from "hooks/store-hooks";

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props) => {
  const { children } = props;
  const mode = useAppSelector((root) => root.app.mode);
  return (
    <MuiThemeProvider theme={theme(mode)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
