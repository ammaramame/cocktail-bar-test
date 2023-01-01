import { Box } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import Loader from "assets/gif/wine-glass-loader.gif";

interface LoadingTemplateProps {
  loading?: boolean;
  children?: ReactNode;
}

const LoadingTemplate: FunctionComponent<LoadingTemplateProps> = (props) => {
  const { loading, children } = props;
  return (
    <>
      {loading ? (
        <Box position="absolute" width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
          <img src={Loader} alt="loader" height={"50%"} />
        </Box>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingTemplate;
