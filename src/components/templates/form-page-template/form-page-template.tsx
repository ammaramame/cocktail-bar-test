import { Box } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface FormPageTemplateProps {
  children?: ReactNode;
  containerMaxWidth?: number;
}

const FormPageTemplate: FunctionComponent<FormPageTemplateProps> = (props) => {
  const { children, containerMaxWidth } = props;
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box maxWidth={containerMaxWidth}>{children}</Box>
    </Box>
  );
};

export default FormPageTemplate;
