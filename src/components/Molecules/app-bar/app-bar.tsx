import { Box, Step, StepLabel, Stepper, StepperProps, SwitchProps, ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material";
import DarkModeSwitch from "components/atoms/dark-mode-switch/dark-mode-switch";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface AppBarProps {
  steperProps?: StepperProps;
  languageButtonsProps?: ToggleButtonGroupProps;
  darkModeSwitchProps?: SwitchProps;
}

const AppBar: FunctionComponent<AppBarProps> = (props) => {
  const steps = ["Fill Basic Info", "Fill Filter Preference", "Check Overview", "Check Result"];

  const { t } = useTranslation();

  const { steperProps, languageButtonsProps, darkModeSwitchProps } = props;

  return (
    <Box display="flex" justifyContent="space-between" p={2} alignItems="center">
      <Box>
        <ToggleButtonGroup color="primary" exclusive size="small" {...languageButtonsProps}>
          <ToggleButton value="en">{t("English")}</ToggleButton>
          <ToggleButton value="tr">{t("Turkish")}</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Stepper {...steperProps}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{t(label)}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        <DarkModeSwitch {...darkModeSwitchProps} />
      </Box>
    </Box>
  );
};

export default AppBar;
