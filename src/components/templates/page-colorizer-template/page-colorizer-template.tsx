import { Box } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import "./page-colorizer-template.css";

interface PageColorizerTemplateProps {
  children?: ReactNode;
  color?: string;
}

const PageColorizerTemplate: FunctionComponent<PageColorizerTemplateProps> = (props) => {
  const { children, color } = props;

  return (
    <Box sx={{ bgcolor: (theme) => (theme.palette.mode !== "dark" ? color : undefined) }} height="100%">
      <Box height="100%" zIndex={100} position="relative">
        {children}
      </Box>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Box>
  );
};

export default PageColorizerTemplate;
