import { Box, Paper } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: FunctionComponent<FormContainerProps> = (props) => {
  return (
    <Box component={Paper} p={2}>
      {props.children}
    </Box>
  );
};

export default FormContainer;
