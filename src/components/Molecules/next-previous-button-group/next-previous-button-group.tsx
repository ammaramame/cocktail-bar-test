import { Box, Button, ButtonProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

export interface NextPreviousButtonGroupProps {
  nextLabel?: string;
  previousLabel?: string;
  showPreviousButton?: boolean;
  showNextButton?: boolean;
  nextButtonProps?: ButtonProps;
  previousButtonProps?: ButtonProps;
}

const NextPreviousButtonGroup: FunctionComponent<NextPreviousButtonGroupProps> = (props) => {
  const { t } = useTranslation();
  const { nextLabel, previousLabel, showNextButton, showPreviousButton, nextButtonProps, previousButtonProps } = props;
  return (
    <Box display={"flex"} gap={2}>
      {showPreviousButton && (
        <Button fullWidth variant="outlined" color="inherit" size="large" {...previousButtonProps}>
          {previousLabel ?? t("Previous Step")}
        </Button>
      )}

      {showNextButton && (
        <Button fullWidth variant="contained" size="large" {...nextButtonProps}>
          {nextLabel ?? t("Next Step")}
        </Button>
      )}
    </Box>
  );
};

export default NextPreviousButtonGroup;
