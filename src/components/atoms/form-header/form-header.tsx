import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface FormHeaderProps {
  label: string;
}

const FormHeader: FunctionComponent<FormHeaderProps> = (props) => {
  const { label } = props;
  return (
    <Typography textAlign="center" variant="h6">
      {label}
    </Typography>
  );
};

export default FormHeader;
