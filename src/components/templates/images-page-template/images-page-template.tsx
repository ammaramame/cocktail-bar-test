import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FunctionComponent, ReactNode } from "react";

interface ImagesPageTemplateProps {
  items?: ReactNode[];
  header?: ReactNode;
  emptyPageComponent?: ReactNode;
}

const ImagesPageTemplate: FunctionComponent<ImagesPageTemplateProps> = (props) => {
  const { items, header, emptyPageComponent } = props;
  return (
    <Box p={3} height="100%" overflow={"auto"} position="relative">
      {header}
      {items?.length === 0 ? (
        emptyPageComponent
      ) : (
        <Grid container rowSpacing={3}>
          {items?.map((item, index) => (
            <Grid md={4} xl={3} xs={12} key={index}>
              {item}
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ImagesPageTemplate;
