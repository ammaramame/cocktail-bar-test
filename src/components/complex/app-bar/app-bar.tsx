import { FunctionComponent } from "react";
import CustomAppBar from "components/Molecules/app-bar/app-bar";
import { useLogic } from "./app-bar.logic";

interface AppBarProps {}

const AppBar: FunctionComponent<AppBarProps> = () => {
  const { activeSlideIndex, changeColorMode, mode, language, changeLanguage } = useLogic();

  return <CustomAppBar steperProps={{ activeStep: activeSlideIndex }} darkModeSwitchProps={{ value: mode === "dark", onChange: () => changeColorMode(mode === "dark" ? "light" : "dark") }} languageButtonsProps={{ onChange: (e, value) => changeLanguage(value), value: language }} />;
};

export default AppBar;
