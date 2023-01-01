import React, { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";

class FormTemplateProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const FormTemplate: FunctionComponent<FormTemplateProps> = (props) => {
  const { header, body, footer } = props;
  return (
    <Grid container>
      <Grid xs={12}>{header}</Grid>
      <Grid xs={12}>{body}</Grid>
      <Grid xs={12}>{footer}</Grid>
    </Grid>
  );
};

export default FormTemplate;
